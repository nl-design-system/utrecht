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

const findStoryFiles = (dir: string): string[] =>
  fs.existsSync(dir)
    ? fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
        const file = path.join(dir, entry.name);
        if (entry.isDirectory()) return entry.name === 'node_modules' ? [] : findStoryFiles(file);
        return /\.stories\.tsx?$/.test(entry.name) ? [file] : [];
      })
    : [];

/** Deel van de story-id uit een exportnaam, bijvoorbeeld `ToggleButton` wordt `toggle-button` */
export const storyIdFromExport = (exportName: string) =>
  sanitize(exportName.replace(/([a-z\d])([A-Z])/g, '$1 $2').replace(/([A-Z]+)([A-Z][a-z])/g, '$1 $2'));

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
  const indent = Math.min(...lines.filter((line) => line.trim()).map((line) => line.match(/^\s*/)![0].length));
  return lines.map((line) => line.slice(indent)).join('\n');
};

const NOT_LITERAL = Symbol('not a literal');

/** Leest één storybestand. `undefined` als de titel niet bij deze Storybook hoort. */
export const parseStorySource = (file: string, sourceText: string, framework: Storybook): StoryFile | undefined => {
  const source = ts.createSourceFile(file, sourceText, ts.ScriptTarget.Latest, true);

  const constants = new Map<string, ts.Expression>();
  const stories: { name: string; init: ts.Expression }[] = [];
  const imports: string[] = [];
  /** De module van elke geïmporteerde naam */
  const importedFrom = new Map<string, string>();
  let metaNode: ts.Expression | undefined;

  for (const statement of source.statements) {
    if (ts.isImportDeclaration(statement) && ts.isStringLiteral(statement.moduleSpecifier)) {
      const specifier = statement.moduleSpecifier.text;
      imports.push(specifier);
      const clause = statement.importClause;
      if (clause?.name) importedFrom.set(clause.name.text, specifier);
      if (clause?.namedBindings && ts.isNamedImports(clause.namedBindings)) {
        for (const element of clause.namedBindings.elements) importedFrom.set(element.name.text, specifier);
      }
    } else if (ts.isVariableStatement(statement)) {
      const exported = statement.modifiers?.some((modifier) => modifier.kind === ts.SyntaxKind.ExportKeyword);
      for (const declaration of statement.declarationList.declarations) {
        if (!ts.isIdentifier(declaration.name) || !declaration.initializer) continue;
        constants.set(declaration.name.text, declaration.initializer);
        if (exported) stories.push({ name: declaration.name.text, init: declaration.initializer });
      }
    } else if (ts.isExportAssignment(statement) && !statement.isExportEquals) {
      metaNode = statement.expression;
    }
  }

  // Volg `const x = ...` in hetzelfde bestand
  const resolve = (node: ts.Expression | undefined): ts.Expression | undefined => {
    let current = node;
    for (let depth = 0; current && depth < 10; depth++) {
      current = unwrap(current);
      if (!ts.isIdentifier(current) || !constants.has(current.text)) return current;
      current = constants.get(current.text);
    }
    return current;
  };

  const get = (node: ts.Expression | undefined, ...keys: string[]): ts.Expression | undefined =>
    keys.reduce<ts.Expression | undefined>((current, key) => {
      const object = resolve(current);
      if (!object || !ts.isObjectLiteralExpression(object)) return undefined;
      const property = object.properties.find(
        (p): p is ts.PropertyAssignment | ts.ShorthandPropertyAssignment =>
          (ts.isPropertyAssignment(p) && propertyName(p.name) === key) ||
          (ts.isShorthandPropertyAssignment(p) && p.name.text === key),
      );
      if (!property) return undefined;
      return resolve(ts.isPropertyAssignment(property) ? property.initializer : property.name);
    }, node);

  const text = (node: ts.Expression | undefined) => (node && ts.isStringLiteralLike(node) ? node.text : undefined);

  const literal = (expression: ts.Expression | undefined): unknown => {
    const node = resolve(expression);
    if (!node) return NOT_LITERAL;
    if (ts.isStringLiteralLike(node)) return node.text;
    if (ts.isNumericLiteral(node)) return Number(node.text);
    if (node.kind === ts.SyntaxKind.TrueKeyword) return true;
    if (node.kind === ts.SyntaxKind.FalseKeyword) return false;
    if (node.kind === ts.SyntaxKind.NullKeyword) return null;
    if (ts.isArrayLiteralExpression(node)) {
      const values = node.elements.map(literal);
      return values.includes(NOT_LITERAL) ? NOT_LITERAL : values;
    }
    if (ts.isObjectLiteralExpression(node)) {
      const entries = node.properties.map((p) =>
        ts.isPropertyAssignment(p) && propertyName(p.name)
          ? [propertyName(p.name), literal(p.initializer)]
          : NOT_LITERAL,
      );
      return entries.some((entry) => entry === NOT_LITERAL || (entry as unknown[])[1] === NOT_LITERAL)
        ? NOT_LITERAL
        : Object.fromEntries(entries as [string, unknown][]);
    }
    return NOT_LITERAL;
  };

  // Een `render: (args) => ({ props: args, template: '...' })` van Angular
  const renderTemplate = (render: ts.Expression | undefined) => {
    if (!render || !(ts.isArrowFunction(render) || ts.isFunctionExpression(render))) return undefined;
    let result: ts.Expression | undefined;
    if (ts.isBlock(render.body)) {
      const returnStatement = render.body.statements.find(ts.isReturnStatement);
      result = returnStatement?.expression;
    } else {
      result = render.body;
    }
    const template = text(get(result, 'template'));
    return template === undefined ? undefined : dedent(template);
  };

  const meta = resolve(metaNode);
  const title = text(get(meta, 'title'));
  if (!meta || !title?.startsWith(`${framework.titlePrefix}/`)) return undefined;

  const tags = literal(get(meta, 'tags'));
  const parameters: StoryFile['parameters'] = {};
  for (const key of ['figma', 'communityFigma'] as const) {
    const value = text(get(meta, 'parameters', key));
    if (value) parameters[key] = value;
  }
  const status = text(get(meta, 'parameters', 'status', 'type'));
  const tokensDefinition = get(meta, 'parameters', 'tokensDefinition');
  const tokensPackage =
    tokensDefinition && ts.isIdentifier(tokensDefinition)
      ? importedFrom.get(tokensDefinition.text)?.match(/^@utrecht\/[a-z\d-]+-css(?=\/)/)?.[0]
      : undefined;

  const defaultStory = (stories.find((story) => story.name === 'Default') ?? stories[0]) as
    (typeof stories)[number] | undefined;

  let staticCode: string | undefined;
  let vueTemplate: StoryFile['vueTemplate'];
  if (defaultStory) {
    let story = resolve(defaultStory.init);
    let viaCreateStory = false;
    // Vue: `createStory(meta, { args })`
    if (story && ts.isCallExpression(story)) {
      viaCreateStory = ts.isIdentifier(story.expression) && story.expression.text === 'createStory';
      story = resolve(story.arguments.at(-1));
    }
    const sourceCode = text(get(story, 'parameters', 'docs', 'source', 'code'));
    const metaSourceCode = text(get(meta, 'parameters', 'docs', 'source', 'code'));

    if (sourceCode) {
      staticCode = sourceCode;
    } else if (framework.key === 'vue' && viaCreateStory && metaSourceCode) {
      const args = literal(get(story, 'args'));
      if (args !== NOT_LITERAL) vueTemplate = { source: metaSourceCode, args: (args ?? {}) as Record<string, unknown> };
    } else if (framework.key === 'angular') {
      staticCode = renderTemplate(get(story, 'render')) ?? renderTemplate(get(meta, 'render')) ?? metaSourceCode;
    }
  }

  return {
    file,
    framework: framework.key,
    title,
    name: title.split('/').at(-1)!.trim(),
    id: text(get(meta, 'id')) ?? sanitize(title),
    tags: Array.isArray(tags) ? tags.filter((tag): tag is string => typeof tag === 'string') : [],
    parameters,
    status,
    imports,
    tokensPackage,
    defaultStory: defaultStory?.name,
    staticCode,
    vueTemplate,
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
