/**
 * Documentatie van een component uit de stories: codevoorbeelden, links, design tokens en badges.
 * Alles zonder story of zonder pakket blijft weg. Wat ontbreekt of niet eenduidig is, komt als waarschuwing in de
 * terminal.
 */
import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';
import * as prettier from 'prettier';
import { findRepoRoot, getStoryFiles, type StoryFile, storyIdFromExport } from './parse.ts';
import { loadModule, prettierConfig, renderStory } from './render.ts';
import {
  type Framework,
  FRAMEWORKS,
  GITHUB_URL,
  NPM_URL,
  STORYBOOK_URL,
  STORYBOOKS,
} from '../../src/utils/storybook/frameworks.ts';
import type { CodeTab, ComponentDocs, Link, Tokens } from '../../src/utils/storybook/types.ts';

interface PackageInfo {
  name: string;
  directory: string;
  private: boolean;
}

interface StoryOfFramework {
  framework: Framework;
  story: StoryFile;
}

const warnings = new Set<string>();

const warn = (component: string, message: string) => {
  const warning = `[storybook] ${component}: ${message}`;
  if (!warnings.has(warning)) console.warn(warning);
  warnings.add(warning);
};

/** Het aantal waarschuwingen, voor `--strict` */
export const warningCount = () => warnings.size;

/** Een bekende beperking, geen fout: telt niet mee voor `--strict` */
const notice = (component: string, message: string) => console.info(`[storybook] ${component}: ${message}`);

/** pnpm zelf: via `npm_execpath` als het script door pnpm gestart is, zodat het ook op Windows werkt */
const pnpm = (args: string[]) => {
  const options = { cwd: findRepoRoot(), encoding: 'utf8' as const };
  const execPath = process.env['npm_execpath'];
  return execPath?.includes('pnpm')
    ? execFileSync(process.execPath, [execPath, ...args], options)
    : execFileSync('pnpm', args, { ...options, shell: process.platform === 'win32' });
};

let packages: Map<string, PackageInfo> | undefined;

/** Alle pakketten in de workspace, op naam, zoals pnpm ze kent */
const getPackages = () => {
  if (!packages) {
    const root = findRepoRoot();
    const list = JSON.parse(pnpm(['ls', '--recursive', '--depth', '-1', '--json'])) as {
      name?: string;
      path: string;
      private?: boolean;
    }[];
    packages = new Map(
      list.flatMap(({ name, path: directory, private: isPrivate }) =>
        name ? [[name, { name, directory: path.relative(root, directory), private: Boolean(isPrivate) }]] : [],
      ),
    );
  }
  return packages;
};

let themeTokens: Map<string, unknown> | undefined;

/** De tokens van het Utrecht-thema per component, bijvoorbeeld `accordion` voor `utrecht.accordion` */
const getThemeTokens = () => {
  if (!themeTokens) {
    themeTokens = new Map();
    const dir = path.join(findRepoRoot(), 'proprietary/design-tokens/src/component/utrecht');
    for (const file of fs.readdirSync(dir).filter((name) => name.endsWith('.tokens.json'))) {
      const { utrecht = {} } = JSON.parse(fs.readFileSync(path.join(dir, file), 'utf8'));
      for (const [key, value] of Object.entries(utrecht)) themeTokens.set(key, value);
    }
  }
  return themeTokens;
};

/** Het laatste deel van de titel is de componentnaam, bijvoorbeeld `Accordion` in `CSS Component/Accordion` */
const matches = (story: StoryFile, component: string) => story.name.toLowerCase() === component.toLowerCase();

/**
 * Het storybestand per framework met een codetab en links, in de volgorde van FRAMEWORKS. Een story met precies de
 * titel `CSS Component/Textbox` gaat voor een story in een groep, zoals `CSS Component/Form Field/Textbox`.
 */
const getStories = (component: string): StoryOfFramework[] =>
  FRAMEWORKS.flatMap((framework) => {
    const candidates = getStoryFiles().filter((s) => s.framework === framework.key && matches(s, component));
    const exact = candidates.filter(({ title }) => title.split('/').length === 2);
    const [story, ...others] = exact.length ? exact : candidates;
    if (story && others.length) {
      const files = [story, ...others].map((s) => path.relative(findRepoRoot(), s.file)).join(', ');
      warn(component, `meer dan één ${framework.label}-story, de eerste telt: ${files}`);
    }
    return story ? [{ framework, story }] : [];
  });

/**
 * De badges van de Storybooks met een story van de component. Dezelfde stories als voor de codetabs en links, dus een
 * badge betekent dat de pagina dat framework ook toont. De HTML Storybook heeft alleen een badge.
 */
const getFrameworkBadges = (component: string) =>
  STORYBOOKS.filter(({ key }) => getStoryFiles().some((s) => s.framework === key && matches(s, component))).map(
    ({ badge }) => badge,
  );

/**
 * Het CSS-pakket van de component, bijvoorbeeld `@utrecht/accordion-css`. Bij voorkeur het pakket van
 * `parameters.tokensDefinition` in de stories. Zonder die parameter het `-css`-pakket dat de stories het vaakst
 * importeren.
 */
const getCssPackage = (component: string, stories: StoryOfFramework[]) => {
  const files = stories.map(({ story }) => story);
  const fromTokens = [...new Set(files.flatMap(({ tokensPackage }) => tokensPackage ?? []))];
  if (fromTokens.length > 1) warn(component, `tokensDefinition uit meerdere pakketten: ${fromTokens.join(', ')}`);

  let name = fromTokens[0];
  if (!name) {
    const counts = new Map<string, number>();
    for (const specifier of files.flatMap(({ imports }) => imports)) {
      const match = specifier.match(/^@utrecht\/[a-z\d-]+-css(?=\/|$)/)?.[0];
      if (match) counts.set(match, (counts.get(match) ?? 0) + 1);
    }
    [name] = [...counts].sort((a, b) => b[1] - a[1])[0] ?? [];
    if (name) warn(component, `geen tokensDefinition in de stories, het CSS-pakket is geraden: ${name}`);
  }
  const pkg = name ? getPackages().get(name) : undefined;
  if (!pkg) warn(component, 'geen CSS-pakket gevonden: geen design tokens en geen HTML/CSS-links naar npm en GitHub');
  return pkg;
};

/** `templateSourceCode` uit storybook-vue, dezelfde functie als voor de snippets in de Vue Storybook */
const loadVueHelper = async () => {
  const vue = FRAMEWORKS.find(({ key }) => key === 'vue')!;
  const file = path.join(findRepoRoot(), vue.storiesDir, 'template-source-code.ts');
  return (await loadModule(file)) as {
    templateSourceCode: (source: string, args: Record<string, unknown>) => string;
  };
};

const getCode = async (component: string, stories: StoryOfFramework[]): Promise<CodeTab[]> => {
  const tabs = await Promise.all(
    stories.map(async ({ framework, story }) => {
      let code = story.staticCode;
      if (!code && story.vueTemplate) {
        const { source, args } = story.vueTemplate;
        code = (await loadVueHelper()).templateSourceCode(source, args);
      } else if (!code && framework.code !== 'static' && story.defaultStory) {
        try {
          code = await renderStory(story.file, story.defaultStory, framework.code);
        } catch (error) {
          warn(component, `story ${story.defaultStory} in ${story.title} renderen lukt niet: ${error}`);
        }
      } else if (code && framework.key === 'angular') {
        const config = await prettierConfig(story.file);
        code = await prettier.format(code, { ...config, parser: 'angular' }).catch(() => code);
      }
      if (!code?.trim()) {
        // Vue en Angular draaien niet in Node: hun code komt alleen uit de broncode, als die een bekend patroon volgt
        const report = framework.code === 'static' ? notice : warn;
        report(component, `geen code voor ${framework.label}`);
      }
      return code?.trim()
        ? [{ framework: framework.key, label: framework.label, lang: framework.lang, code: code.trim() }]
        : [];
    }),
  );
  return tabs.flat();
};

const storybookUrl = (framework: Framework, story: StoryFile) => {
  // De Vue Storybook heeft alleen een docs-pagina voor stories met de tag `autodocs`
  const hasDocs = framework.key !== 'vue' || story.tags.includes('autodocs');
  const urlPath = hasDocs
    ? `/docs/${framework.ref}_${story.id}--docs`
    : story.defaultStory && `/story/${framework.ref}_${story.id}--${storyIdFromExport(story.defaultStory)}`;
  return urlPath && `${STORYBOOK_URL}?path=${urlPath}`;
};

/** `WORK IN PROGRESS` wordt `Work in progress` */
const statusLabel = (status: string) => status.charAt(0).toUpperCase() + status.slice(1).toLowerCase();

/** Per framework de status en de links naar Storybook, npm en GitHub, daarna de Figma-links */
const getLinks = (stories: StoryOfFramework[], cssPackage: PackageInfo | undefined): Link[] => {
  const links: Link[] = [];

  for (const { framework, story } of stories) {
    const pkg =
      framework.key === 'css' ? cssPackage : framework.packageName && getPackages().get(framework.packageName);
    const storybook = storybookUrl(framework, story);
    const suffix = `(${framework.label})`;
    const add = (link: Omit<Link, 'framework'>) => links.push({ ...link, framework: framework.key });
    if (story.status && storybook) {
      add({ prefix: `Status ${suffix}:`, href: storybook, label: statusLabel(story.status) });
    }
    if (pkg && !pkg.private) add({ href: `${NPM_URL}${pkg.name}`, label: `NPM ${suffix}`, icon: 'npm' });
    if (storybook) add({ href: storybook, label: `Storybook ${suffix}`, icon: 'storybook' });
    if (pkg) add({ href: `${GITHUB_URL}${pkg.directory}`, label: `GitHub ${suffix}`, icon: 'github' });
  }

  const parameters = Object.assign(
    {},
    ...stories.map(({ story }) => story.parameters).reverse(),
  ) as StoryFile['parameters'];
  if (parameters.figma) links.push({ href: parameters.figma, label: 'Figma', icon: 'figma' });
  if (parameters.communityFigma) {
    links.push({ href: parameters.communityFigma, label: 'Figma (NL Design System community)', icon: 'figma' });
  }
  return links;
};

interface TokenTree {
  [key: string]: TokenTree;
}

const isToken = (node: unknown) =>
  typeof node === 'object' && node !== null && ('$type' in node || '$value' in node || '$extensions' in node);

const getTokens = (component: string, cssPackage: PackageInfo): Tokens | undefined => {
  const file = path.join(findRepoRoot(), cssPackage.directory, 'src/tokens.json');
  if (!fs.existsSync(file)) {
    warn(component, `geen src/tokens.json in ${cssPackage.name}`);
    return undefined;
  }

  const properties: string[] = [];
  const walk = (node: Record<string, unknown>, tokenPath: string[]): TokenTree =>
    Object.fromEntries(
      Object.entries(node)
        .filter(([key, value]) => !key.startsWith('$') && typeof value === 'object' && value !== null)
        .map(([key, value]) => {
          if (!isToken(value)) return [key, walk(value as Record<string, unknown>, [...tokenPath, key])];
          const extensions = (value as { $extensions?: Record<string, unknown> }).$extensions ?? {};
          const syntax = extensions['nl.nldesignsystem.css-property-syntax'];
          properties.push(`--${[...tokenPath, key].join('-')}${typeof syntax === 'string' ? `: ${syntax}` : ''}`);
          return [key, {}];
        }),
    );

  const definition = JSON.parse(fs.readFileSync(file, 'utf8')) as { utrecht?: Record<string, unknown> };
  const tree = walk(definition, []);
  if (!properties.length) return undefined;

  // Het thema bij dezelfde keys als de tokens van de component, bijvoorbeeld `utrecht.accordion`
  const keys = Object.keys(definition.utrecht ?? {});
  const theme = Object.fromEntries(
    keys.flatMap((key) => (getThemeTokens().has(key) ? [[key, getThemeTokens().get(key)]] : [])),
  );
  if (!Object.keys(theme).length)
    warn(component, `geen tokens in het Utrecht-thema voor utrecht.${keys.join(', utrecht.')}`);

  return {
    json: JSON.stringify(tree, null, 2),
    theme: Object.keys(theme).length ? JSON.stringify({ utrecht: theme }, null, 2) : undefined,
    css: [
      '.your-theme {',
      '  /* Haal het commentaar weg bij elke custom property die je nodig hebt */',
      ...properties.map((property) => `  /* ${property}; */`),
      '}',
    ].join('\n'),
  };
};

export const getComponentDocs = async (component: string): Promise<ComponentDocs> => {
  const stories = getStories(component);
  if (!stories.length) warn(component, 'geen stories gevonden met deze naam als laatste deel van de titel');
  const cssPackage = getCssPackage(component, stories);
  return {
    badges: getFrameworkBadges(component),
    code: await getCode(component, stories),
    links: getLinks(stories, cssPackage),
    tokens: cssPackage && getTokens(component, cssPackage),
  };
};
