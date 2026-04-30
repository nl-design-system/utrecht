import { register } from '@tokens-studio/sd-transforms';
import StyleDictionary from 'style-dictionary';
import { glob, readFile } from 'node:fs/promises';
import { createStyleDictionaryConfig } from './style-dictionary-config.mjs';
import { writeFile, writeFileSync } from 'node:fs';
import merge from 'es-toolkit/compat/merge';

const build = async () => {
  const themeConfig = JSON.parse(await readFile('./config.json', 'utf-8'));

  register(StyleDictionary, {
    // TODO: Enable `excludeParentKeys` when Figma is the source of design tokens
    excludeParentKeys: true,
  });

  // Load Design Tokens `$extensions` from the `tokens.json` metadata provided by the
  // design system components.
  // Merge all `tokens.json` files in one object.
  const definitions = ['../../components/**/tokens.json', '../../components/**/*.tokens.json'];
  const filePaths = await Array.fromAsync(glob(definitions));
  const jsons = await Promise.all(filePaths.map(async (file) => JSON.parse(await readFile(file, 'utf8'))));
  const tokenDefinitionsJSON = merge({}, ...jsons);

  const sd = new StyleDictionary({
    ...createStyleDictionaryConfig({
      themeName: `${themeConfig.prefix}-theme`,
    }),
    log: {
      verbosity: 'verbose',
    },
    // Supplement the tokens in `source` with this object in `tokens`
    tokens: {
      // Create a token set layer around the tokens.json definitions
      'components/definitions': {
        ...tokenDefinitionsJSON,
      },
    },
    source: ['figma/figma.tokens.json'],
  });

  await sd.cleanAllPlatforms();
  await sd.buildAllPlatforms();
};

build();
