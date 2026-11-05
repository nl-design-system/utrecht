/**
 * Rendert de standaard-story van een Storybook op basis van React (CSS, React, Web Component).
 * Een Vite-server laadt het storybestand, met de dependencies van zijn eigen Storybook-pakket. De portable stories
 * API van Storybook (`composeStory`) zet de args en de render-functie klaar, zoals Storybook zelf dat doet.
 */
import { createRequire } from 'node:module';
import { pathToFileURL } from 'node:url';
import * as prettier from 'prettier';
import type { ReactElement, ReactNode } from 'react';
import { createServer, type ViteDevServer } from 'vite';
import { elementToJsx, isElement, unwrapStoryComponents } from './jsx.ts';
import { findRepoRoot } from './parse.ts';

let server: Promise<ViteDevServer> | undefined;

const getServer = () => {
  server ??= createServer({
    configFile: false,
    root: findRepoRoot(),
    logLevel: 'error',
    appType: 'custom',
    server: { middlewareMode: true, hmr: false, ws: false, watch: null },
    optimizeDeps: { noDiscovery: true, include: [] },
  });
  return server;
};

/** De prettier-config van de repo, maar smaller: het codeblok staat in de smalle inhoudskolom */
export const prettierConfig = async (file: string) => ({ ...(await prettier.resolveConfig(file)), printWidth: 100 });

/** Laadt een module van een Storybook-pakket via Vite, met de dependencies en instellingen van dat pakket */
export const loadModule = async (file: string) => (await getServer()).ssrLoadModule(file);

/** Sluit de Vite-server, anders blijft het proces draaien */
export const closeRenderer = async () => {
  const current = server;
  server = undefined;
  await (await current)?.close();
};

/** Het deel van een story of meta dat hier nodig is; de rest geeft `composeStory` ongewijzigd door */
type Annotations = Record<string, unknown> & { decorators?: unknown[] };

/**
 * `composeStory` uit de portable stories API van Storybook:
 * https://storybook.js.org/docs/api/portable-stories/portable-stories-vitest#composestory
 */
type ComposeStory = (
  story: Annotations,
  componentAnnotations: Annotations,
  projectAnnotations?: unknown,
  exportsName?: string,
) => () => unknown;

interface StoryModule {
  default: Annotations;
  [exportName: string]: unknown;
}

export const renderStory = async (file: string, exportName: string, output: 'html' | 'jsx') => {
  const vite = await getServer();
  const module = (await vite.ssrLoadModule(file)) as StoryModule;
  const exported = module[exportName];
  // Een CSF2-story is een functie: die is de render-functie
  const story = (typeof exported === 'function' ? { render: exported } : exported) as Annotations;

  // Storybook en React uit het Storybook-pakket van de story, zodat de story en de renderer één React delen
  const require = createRequire(file);
  // Als file-URL: een los pad werkt in Windows niet als ES-module-import
  const { composeStory } = (await import(pathToFileURL(require.resolve('@storybook/react-vite')).href)) as {
    composeStory: ComposeStory;
  };
  // Zonder decorators: de snippet toont alleen de story, niet de omgeving waarin Storybook hem toont
  const composed = composeStory(
    { ...story, decorators: [] },
    { ...module.default, decorators: [] },
    undefined,
    exportName,
  );
  const element = composed() as ReactElement;
  const config = await prettierConfig(file);

  if (output === 'jsx') {
    // Storybook verpakt de story in een component voor zijn hooks: toon wat de story zelf teruggeeft
    const inner = (element.type as (props: unknown) => ReactNode)(element.props);
    if (!isElement(inner)) return undefined;
    const code = await prettier.format(elementToJsx(unwrapStoryComponents(inner)), { ...config, parser: 'babel-ts' });
    return code.trim().replace(/;$/, '');
  }

  const { renderToStaticMarkup } = require('react-dom/server') as typeof import('react-dom/server');
  const html = renderToStaticMarkup(element);
  // Custom elements tellen als inline elementen, wat zonder `ignore` onleesbare regelafbrekingen geeft
  return (await prettier.format(html, { ...config, parser: 'html', htmlWhitespaceSensitivity: 'ignore' })).trim();
};
