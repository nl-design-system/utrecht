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

  const config = {
    ...createStyleDictionaryConfig({
      themeName: `${themeConfig.prefix}-theme--dark`,
    }),
    log: 'warn',
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

      // Additional dark theme tokens
      './src/dark/tokens.json',
      './src/dark/*.tokens.json',
      './src/dark/**/tokens.json',
      './src/dark/**.tokens.json',
    ],
  };

  Object.values(config.platforms).forEach((platform) => {
    platform.buildPath = 'dist/dark/';

    if (Array.isArray(platform.files)) {
      platform.files.forEach((file) => {
        if (file.destination === 'variables.css') {
          file.options.selector = '.utrecht-theme--dark, .utrecht-theme--dark ::backdrop';
        }
        if (file.destination === '_mixin.scss') {
          file.options.selector = '@mixin utrecht-theme--dark';
        }
      });
    }
  });

  const sd = new StyleDictionary(config);

  await sd.cleanAllPlatforms();
  await sd.buildAllPlatforms();
};

build();
