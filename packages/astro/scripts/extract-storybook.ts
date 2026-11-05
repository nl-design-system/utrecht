/**
 * Haalt per componentpagina in `docs/components` de codevoorbeelden, links en design tokens uit de stories, en
 * schrijft die naar `src/generated/storybook.json`. De website leest alleen dat bestand.
 * De Astro-integratie in `integrations/storybook-docs.ts` draait het bij `dev`, `build` en `sync`. Los draai je het met
 * `pnpm run extract-storybook`. Met `--strict` stopt het met een foutcode als er waarschuwingen zijn.
 */
import './storybook/env.ts';
import fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';
import { parse } from 'yaml';
import { getComponentDocs, warningCount } from './storybook/docs.ts';
import { closeRenderer } from './storybook/render.ts';
import type { ComponentDocs } from '../src/utils/storybook/types.ts';

const root = path.join(import.meta.dirname, '..');
const pagesDir = path.join(root, 'docs/components');
const outputFile = path.join(root, 'src/generated/storybook.json');

/** De `title` uit de frontmatter: de componentnaam zoals in de titels van de stories */
const pageTitle = (file: string): string | undefined => {
  const frontmatter = /^---\r?\n([\s\S]*?)\r?\n---/.exec(fs.readFileSync(file, 'utf8'))?.[1];
  const title = frontmatter ? (parse(frontmatter) as { title?: unknown })?.title : undefined;
  return typeof title === 'string' ? title.trim() : undefined;
};

const titles = fs
  .readdirSync(pagesDir)
  .filter((file) => /^[^_].*\.mdx?$/.test(file))
  .map((file) => pageTitle(path.join(pagesDir, file)))
  .filter((title): title is string => Boolean(title));

const docs: Record<string, ComponentDocs> = {};
try {
  for (const title of titles) docs[title.toLowerCase()] = await getComponentDocs(title);
} finally {
  await closeRenderer();
}

fs.mkdirSync(path.dirname(outputFile), { recursive: true });
fs.writeFileSync(outputFile, `${JSON.stringify(docs, null, 2)}\n`);
console.log(`[storybook] ${titles.length} componenten naar ${path.relative(root, outputFile)}`);

if (process.argv.includes('--strict') && warningCount() > 0) {
  console.error(`[storybook] ${warningCount()} waarschuwingen: los ze op, of draai zonder --strict`);
  process.exitCode = 1;
}
