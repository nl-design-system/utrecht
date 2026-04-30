import { register } from '@tokens-studio/sd-transforms';
import StyleDictionary from 'style-dictionary';
import { glob, readFile, writeFile } from 'node:fs/promises';
import { createStyleDictionaryConfig } from './style-dictionary-config.mjs';
import merge from 'es-toolkit/compat/merge';

const excludeDarkMode = (tokens) => {
  return Object.fromEntries(Object.entries(tokens).filter(([key]) => !key.startsWith('color-scheme-dark/')));
};

const build = async () => {
  const themeConfig = JSON.parse(await readFile('./config.json', 'utf-8'));

  register(StyleDictionary, {
    // Enable `excludeParentKeys` when Figma is the source of design tokens
    excludeParentKeys: true,
  });

  // Load Design Tokens `$extensions` from the `tokens.json` metadata provided by the
  // design system components.
  // Merge all `tokens.json` files in one object.
  const definitions = ['../../components/**/tokens.json', '../../components/**/*.tokens.json'];
  const filePaths = await Array.fromAsync(glob(definitions));
  const jsons = await Promise.all(filePaths.map(async (file) => JSON.parse(await readFile(file, 'utf8'))));
  const tokenDefinitionsJSON = merge({}, ...jsons);

  const tokensFiles = ['figma/figma.tokens.json', 'src/code-only.tokens.json'];
  const tokenJsons = await Promise.all(tokensFiles.map(async (file) => JSON.parse(await readFile(file, 'utf8'))));
  const tokenTrees = merge({}, ...tokenJsons);

  const tokensFile = JSON.parse(await readFile('figma/figma.tokens.json', 'utf8'));

  let lightModeTokens = excludeDarkMode(tokenTrees);

  const tokens = {
    // Create a token set layer around the tokens.json definitions
    'components/definitions': {
      ...tokenDefinitionsJSON,
    },
    ...lightModeTokens,
  };

  const sd = new StyleDictionary({
    ...createStyleDictionaryConfig({
      themeName: `${themeConfig.prefix}-theme`,
    }),
    log: {
      verbosity: 'verbose',
    },
    // Supplement the tokens in `source` with this object in `tokens`
    tokens,
    source: [],
  });

  await sd.cleanAllPlatforms();
  await sd.buildAllPlatforms();
};

build();
