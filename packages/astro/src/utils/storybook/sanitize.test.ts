import { createRequire } from 'node:module';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
import { describe, expect, it } from 'vitest';
import { sanitize } from './sanitize.ts';

// Storybook uit een Storybook-pakket in de repo: de Astro-website zelf hangt niet van Storybook af
const storybookPackage = path.join(import.meta.dirname, '../../../../storybook-react/package.json');
const csf = createRequire(storybookPackage).resolve('storybook/internal/csf');
const { sanitize: storybookSanitize } = (await import(pathToFileURL(csf).href)) as {
  sanitize: (value: string) => string;
};

describe('sanitize', () => {
  it.each([
    'CSS Component/Accordion',
    'React Component/Form Field/Textbox',
    'Vue.js Component/Button',
    'Heading 1',
    "Don't ‘quote’ me – or — this",
    '  --leading and trailing--  ',
    'a/b\\c(d)[e]{f}<g>?h',
  ])('is the same as Storybook for %j', (value) => {
    expect(sanitize(value)).toBe(storybookSanitize(value));
  });
});
