/**
 * Draait `scripts/extract-storybook.ts` bij `astro dev`, `astro build` en `astro sync` (ook voor `astro check`), zodat
 * `src/generated/storybook.json` er altijd is. Bij `build` met `--strict`: een waarschuwing laat de build stoppen.
 * Bij `dev` draait het script opnieuw als een story of een componentpagina verandert.
 * Het script draait in een eigen proces: het rendert de stories met React in productiemodus en met een eigen
 * Vite-server, los van die van Astro.
 */
import type { AstroIntegration } from 'astro';
import { spawn } from 'node:child_process';
import path from 'node:path';
import process from 'node:process';
import { fileURLToPath } from 'node:url';
import { STORYBOOKS } from '../src/utils/storybook/frameworks.ts';

const packageRoot = fileURLToPath(new URL('..', import.meta.url));
const repoRoot = path.resolve(packageRoot, '../..');
const script = path.join(packageRoot, 'scripts/extract-storybook.ts');
const watched = [
  ...STORYBOOKS.map(({ storiesDir }) => path.join(repoRoot, storiesDir)),
  path.join(packageRoot, 'docs/components'),
];
const isWatchedFile = (file: string) => /\.stories\.tsx?$/.test(file) || /\.mdx?$/.test(file);

const extract = (strict: boolean) =>
  new Promise<void>((resolve, reject) => {
    const child = spawn(process.execPath, [script, ...(strict ? ['--strict'] : [])], { stdio: 'inherit' });
    child.on('error', reject);
    child.on('exit', (code) =>
      code === 0 ? resolve() : reject(new Error(`extract-storybook stopte met foutcode ${code}`)),
    );
  });

export const storybookDocs = (): AstroIntegration => ({
  name: 'storybook-docs',
  hooks: {
    'astro:config:setup': async ({ command }) => {
      if (command !== 'preview') await extract(command === 'build');
    },
    'astro:server:setup': ({ server, logger }) => {
      server.watcher.add(watched);
      let timer: ReturnType<typeof setTimeout> | undefined;
      let running = Promise.resolve();
      server.watcher.on('all', (_event, file) => {
        if (!watched.some((dir) => file.startsWith(dir)) || !isWatchedFile(file)) return;
        clearTimeout(timer);
        // Wacht tot een reeks wijzigingen klaar is, en draai het script niet twee keer tegelijk
        timer = setTimeout(() => {
          running = running.then(() => extract(false)).catch((error: Error) => logger.error(error.message));
        }, 300);
      });
    },
  },
});
