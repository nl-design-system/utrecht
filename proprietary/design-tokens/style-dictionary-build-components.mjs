import { register } from '@tokens-studio/sd-transforms';
import StyleDictionary from 'style-dictionary';
import { typeDtcgDelegate } from 'style-dictionary/utils';
import { readFile } from 'node:fs/promises';
import { createStyleDictionaryConfig } from './style-dictionary-config.mjs';

const build = async () => {
  const themeConfig = JSON.parse(await readFile('./config.json', 'utf-8'));
  StyleDictionary.registerPreprocessor({
    name: 'dtcg-delegate',
    preprocessor: typeDtcgDelegate,
  });

  register(StyleDictionary, {
    // TODO: Enable `excludeParentKeys` when Figma is the source of design tokens
    // excludeParentKeys: true,
  });

  const sd = new StyleDictionary({
    ...createStyleDictionaryConfig({
      themeName: `${themeConfig.prefix}-theme`,
    }),
    log: {
      verbosity: 'verbose',
    },
    preprocessors: ['tokens-studio', 'dtcg-delegate'],
    source: [
      '../../components/**/tokens.json',
      '../../components/**/*.tokens.json',
      './src/brand/tokens.json',
      './src/brand/**/*.tokens.json',
      './src/common/tokens.json',
      './src/common/**/*.tokens.json',
      './src/component/tokens.json',
      './src/component/**/*.tokens.json',
    ],
  });

  await sd.cleanAllPlatforms();
  await sd.buildAllPlatforms();
};

build();
