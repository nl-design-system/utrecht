/**
 * Leest de storybestanden van alle Storybooks met de TypeScript-parser, zonder ze uit te voeren.
 * Zo kun je alleen gewone waarden lezen: een titel, id of parameter die pas tijdens het
 * uitvoeren berekend wordt, wordt overgeslagen.
 */
import fs from 'node:fs';
import path from 'node:path';
import ts from 'typescript';
import { type Storybook, type StorybookKey, STORYBOOKS } from '../../src/utils/storybook/frameworks.ts';
import { sanitize } from '../../src/utils/storybook/sanitize.ts';

export interface StoryFile {
  file: string;
  framework: StorybookKey;
  title: string;
  /** Laatste deel van de titel, bijvoorbeeld `Accordion` */
  name: string;
  /** Storybook-id van de component, bijvoorbeeld `css-accordion` */
  id: string;
  tags: string[];
  parameters: Partial<Record<'figma' | 'communityFigma', string>>;
  /** `parameters.status.type`, bijvoorbeeld `WORK IN PROGRESS` */
  status?: string;
  /** Module specifiers van alle imports */
  imports: string[];
  /** Het CSS-pakket waar `parameters.tokensDefinition` vandaan komt, bijvoorbeeld `@utrecht/accordion-css` */
  tokensPackage?: string;
  /** De story `Default`, of de eerste story als die er niet is */
  defaultStory?: string;
  /** Code die Storybook toont voor de standaard-story, als die uit de broncode te lezen is */
  staticCode?: string;
  /** Vue: het template met de args van de standaard-story, voor `templateSourceCode` uit storybook-vue */
  vueTemplate?: { source: string; args: Record<string, unknown> };
}

/** Vanaf dit bestand, zodat het niet uitmaakt vanuit welke map het script start */
export const findRepoRoot = (dir = import.meta.dirname): string => {
  for (let current = dir; ; current = path.dirname(current)) {
    if (fs.existsSync(path.join(current, 'pnpm-workspace.yaml'))) return current;
    if (path.dirname(current) === current) throw new Error(`No pnpm-workspace.yaml found above ${dir}`);
  }
};

/** Voor `fs.globSync`: sla `node_modules` over, net als pnpm */
export const excludeNodeModules = (file: unknown) => path.basename(String(file)) === 'node_modules';

/** De naam van een CSS-pakket aan het begin van een module specifier, bijvoorbeeld `@utrecht/accordion-css` */
export const CSS_PACKAGE = /^@utrecht\/[a-z\d-]+-css(?=\/|$)/;

const findStoryFiles = (dir: string): string[] =>
  fs.globSync('**/*.stories.{ts,tsx}', { cwd: dir, exclude: excludeNodeModules }).map((file) => path.join(dir, file));

/**
 * Deel van de story-id uit een exportnaam, bijvoorbeeld `ToggleButton` wordt `toggle-button` en `HTMLElement` wordt
 * `html-element`. Voor de laatste hoofdletter van een reeks hoofdletters gevolgd door een kleine letter komt een spatie.
 */
export const storyIdFromExport = (exportName: string) =>
  sanitize(exportName.replace(/([a-z\d])([A-Z])/g, '$1 $2').replace(/([A-Z])([A-Z][a-z])/g, '$1 $2'));

const unwrap = (node: ts.Expression): ts.Expression => {
  let current = node;
  while (
    ts.isSatisfiesExpression(current) ||
    ts.isAsExpression(current) ||
    ts.isParenthesizedExpression(current) ||
    ts.isTypeAssertionExpression(current)
  ) {
    current = current.expression;
  }
  return current;
};

const propertyName = (name: ts.PropertyName) =>
  ts.isIdentifier(name) || ts.isStringLiteralLike(name) ? name.text : undefined;

const dedent = (text: string) => {
  const lines = text
    .replace(/^\s*\n/, '')
    .trimEnd()
    .split('\n');
  const indent = Math.min(...lines.filter((line) => line.trim()).map((line) => line.length - line.trimStart().length));
  return lines.map((line) => line.slice(indent)).join('\n');
};

const NOT_LITERAL = Symbol('not a literal');

interface Statements {
  /** Alle `const x = ...` op het hoogste niveau */
  constants: Map<string, ts.Expression>;
  /** De geëxporteerde stories, in de volgorde van het bestand */
  stories: { name: string; init: ts.Expression }[];
  imports: string[];
  /** De module van elke geïmporteerde naam */
  importedFrom: Map<string, string>;
  /** `export default ...` */
  meta?: ts.Expression;
}

const readImport = (statement: ts.ImportDeclaration, statements: Statements) => {
  if (!ts.isStringLiteral(statement.moduleSpecifier)) return;
  const specifier = statement.moduleSpecifier.text;
  statements.imports.push(specifier);
  const clause = statement.importClause;
  if (clause?.name) statements.importedFrom.set(clause.name.text, specifier);
  if (clause?.namedBindings && ts.isNamedImports(clause.namedBindings)) {
    for (const element of clause.namedBindings.elements) statements.importedFrom.set(element.name.text, specifier);
  }
};

const readVariables = (statement: ts.VariableStatement, statements: Statements) => {
  const exported = statement.modifiers?.some((modifier) => modifier.kind === ts.SyntaxKind.ExportKeyword);
  for (const declaration of statement.declarationList.declarations) {
    if (!ts.isIdentifier(declaration.name) || !declaration.initializer) continue;
    statements.constants.set(declaration.name.text, declaration.initializer);
    if (exported) statements.stories.push({ name: declaration.name.text, init: declaration.initializer });
  }
};

const readStatements = (source: ts.SourceFile): Statements => {
  const statements: Statements = { constants: new Map(), stories: [], imports: [], importedFrom: new Map() };
  for (const statement of source.statements) {
    if (ts.isImportDeclaration(statement)) readImport(statement, statements);
    else if (ts.isVariableStatement(statement)) readVariables(statement, statements);
    else if (ts.isExportAssignment(statement) && !statement.isExportEquals) statements.meta = statement.expression;
  }
  return statements;
};

/** Leest waarden uit de syntaxboom, en volgt daarbij `const x = ...` in hetzelfde bestand */
class Reader {
  readonly constants: Map<string, ts.Expression>;

  constructor(constants: Map<string, ts.Expression>) {
    this.constants = constants;
  }

  resolve(node: ts.Expression | undefined): ts.Expression | undefined {
    let current = node;
    for (let depth = 0; current && depth < 10; depth++) {
      current = unwrap(current);
      if (!ts.isIdentifier(current) || !this.constants.has(current.text)) return current;
      current = this.constants.get(current.text);
    }
    return current;
  }

  /** Een property van een object, ook in diepere objecten: `get(meta, 'parameters', 'status')` */
  get(node: ts.Expression | undefined, ...keys: string[]): ts.Expression | undefined {
    return keys.reduce<ts.Expression | undefined>((current, key) => {
      const object = this.resolve(current);
      if (!object || !ts.isObjectLiteralExpression(object)) return undefined;
      const property = object.properties.find(
        (p): p is ts.PropertyAssignment | ts.ShorthandPropertyAssignment =>
          (ts.isPropertyAssignment(p) && propertyName(p.name) === key) ||
          (ts.isShorthandPropertyAssignment(p) && p.name.text === key),
      );
      if (!property) return undefined;
      return this.resolve(ts.isPropertyAssignment(property) ? property.initializer : property.name);
    }, node);
  }

  text(node: ts.Expression | undefined) {
    return node && ts.isStringLiteralLike(node) ? node.text : undefined;
  }

  /** De waarde van een letterlijke expressie, of NOT_LITERAL als die pas bij het uitvoeren bekend is */
  literal(expression: ts.Expression | undefined): unknown {
    const node = this.resolve(expression);
    if (!node) return NOT_LITERAL;
    if (ts.isStringLiteralLike(node)) return node.text;
    if (ts.isNumericLiteral(node)) return Number(node.text);
    if (node.kind === ts.SyntaxKind.TrueKeyword) return true;
    if (node.kind === ts.SyntaxKind.FalseKeyword) return false;
    if (node.kind === ts.SyntaxKind.NullKeyword) return null;
    if (ts.isArrayLiteralExpression(node)) return this.arrayLiteral(node);
    if (ts.isObjectLiteralExpression(node)) return this.objectLiteral(node);
    return NOT_LITERAL;
  }

  private arrayLiteral(node: ts.ArrayLiteralExpression) {
    const values = node.elements.map((element) => this.literal(element));
    return values.includes(NOT_LITERAL) ? NOT_LITERAL : values;
  }

  private objectLiteral(node: ts.ObjectLiteralExpression) {
    const entries: [string, unknown][] = [];
    for (const property of node.properties) {
      const name = ts.isPropertyAssignment(property) ? propertyName(property.name) : undefined;
      if (!name) return NOT_LITERAL;
      const value = this.literal((property as ts.PropertyAssignment).initializer);
      if (value === NOT_LITERAL) return NOT_LITERAL;
      entries.push([name, value]);
    }
    return Object.fromEntries(entries);
  }

  /** Het template uit een Angular `render: (args) => ({ props: args, template: '...' })` */
  renderTemplate(render: ts.Expression | undefined) {
    if (!render || !(ts.isArrowFunction(render) || ts.isFunctionExpression(render))) return undefined;
    const result = ts.isBlock(render.body)
      ? render.body.statements.find(ts.isReturnStatement)?.expression
      : render.body;
    const template = this.text(this.get(result, 'template'));
    return template === undefined ? undefined : dedent(template);
  }
}

const readParameters = (reader: Reader, meta: ts.Expression) => {
  const parameters: StoryFile['parameters'] = {};
  for (const key of ['figma', 'communityFigma'] as const) {
    const value = reader.text(reader.get(meta, 'parameters', key));
    if (value) parameters[key] = value;
  }
  return parameters;
};

const readTokensPackage = (reader: Reader, meta: ts.Expression, importedFrom: Map<string, string>) => {
  const tokensDefinition = reader.get(meta, 'parameters', 'tokensDefinition');
  if (!tokensDefinition || !ts.isIdentifier(tokensDefinition)) return undefined;
  const specifier = importedFrom.get(tokensDefinition.text);
  return specifier ? CSS_PACKAGE.exec(specifier)?.[0] : undefined;
};

/** De code van de standaard-story, als die uit de broncode te lezen is */
const readCode = (
  reader: Reader,
  meta: ts.Expression,
  defaultStory: Statements['stories'][number] | undefined,
  framework: Storybook,
): Pick<StoryFile, 'staticCode' | 'vueTemplate'> => {
  if (!defaultStory) return {};
  let story = reader.resolve(defaultStory.init);
  let viaCreateStory = false;
  // Vue: `createStory(meta, { args })`
  if (story && ts.isCallExpression(story)) {
    viaCreateStory = ts.isIdentifier(story.expression) && story.expression.text === 'createStory';
    story = reader.resolve(story.arguments.at(-1));
  }
  const sourceCode = reader.text(reader.get(story, 'parameters', 'docs', 'source', 'code'));
  const metaSourceCode = reader.text(reader.get(meta, 'parameters', 'docs', 'source', 'code'));

  if (sourceCode) return { staticCode: sourceCode };
  if (framework.key === 'vue' && viaCreateStory && metaSourceCode) {
    const args = reader.literal(reader.get(story, 'args'));
    if (args === NOT_LITERAL) return {};
    return { vueTemplate: { source: metaSourceCode, args: (args ?? {}) as Record<string, unknown> } };
  }
  if (framework.key === 'angular') {
    const template =
      reader.renderTemplate(reader.get(story, 'render')) ?? reader.renderTemplate(reader.get(meta, 'render'));
    return { staticCode: template ?? metaSourceCode };
  }
  return {};
};

/** Leest één storybestand. `undefined` als de titel niet bij deze Storybook hoort. */
export const parseStorySource = (file: string, sourceText: string, framework: Storybook): StoryFile | undefined => {
  const statements = readStatements(ts.createSourceFile(file, sourceText, ts.ScriptTarget.Latest, true));
  const reader = new Reader(statements.constants);
  const meta = reader.resolve(statements.meta);
  const title = reader.text(reader.get(meta, 'title'));
  if (!meta || !title?.startsWith(`${framework.titlePrefix}/`)) return undefined;

  const tags = reader.literal(reader.get(meta, 'tags'));
  const defaultStory = statements.stories.find((story) => story.name === 'Default') ?? statements.stories[0];

  return {
    file,
    framework: framework.key,
    title,
    name: title.split('/').at(-1)!.trim(),
    id: reader.text(reader.get(meta, 'id')) ?? sanitize(title),
    tags: Array.isArray(tags) ? tags.filter((tag): tag is string => typeof tag === 'string') : [],
    parameters: readParameters(reader, meta),
    status: reader.text(reader.get(meta, 'parameters', 'status', 'type')),
    imports: statements.imports,
    tokensPackage: readTokensPackage(reader, meta, statements.importedFrom),
    defaultStory: defaultStory?.name,
    ...readCode(reader, meta, defaultStory, framework),
  };
};

let cache: StoryFile[] | undefined;

export const getStoryFiles = (): StoryFile[] => {
  if (cache) return cache;
  const root = findRepoRoot();
  cache = STORYBOOKS.flatMap((framework) =>
    findStoryFiles(path.join(root, framework.storiesDir)).flatMap((file) => {
      try {
        return parseStorySource(file, fs.readFileSync(file, 'utf8'), framework) ?? [];
      } catch (error) {
        console.warn(`[storybook] Could not read ${path.relative(root, file)}: ${error}`);
        return [];
      }
    }),
  );
  return cache;
};
