import type { StorybookConfig } from '@storybook/react-vite';
import { dirname, join, resolve } from 'path';

// Utility to resolve the absolute path of a package
// https://storybook.js.org/docs/faq#how-do-i-fix-module-resolution-in-special-environments
const getAbsolutePath = (value: string): string => dirname(require.resolve(join(value, 'package.json')));

const config: StorybookConfig = {
  core: {
    disableTelemetry: true,
  },
  stories: ['../src/**/*.stories.@(js|jsx|mdx|ts|tsx)', '../src/**/*.mdx'],
  framework: {
    name: getAbsolutePath('@storybook/react-vite'),
    options: {},
  },

  addons: [getAbsolutePath('@storybook/addon-docs'), getAbsolutePath('@chromatic-com/storybook')],

  staticDirs: ['../../../proprietary/assets', '../src/script/', '../../component-library-pdf/screenshots/'],

  async viteFinal(config) {
    const { mergeConfig } = await import('vite');
    return mergeConfig(config, {
      define: {
        global: 'globalThis',
        'process.env': {},
      },
      resolve: {
        alias: {
          '~@utrecht': resolve(__dirname, '../node_modules/@utrecht'),
          path: resolve('path-browserify'),
        },
      },
      assetsInclude: ['**/*.md'],
      css: {
        preprocessorOptions: {
          scss: {
            // Temporary fix for the SCSS @import deprecation in Storybook 9
            // Remove once all @utrecht packages have been migrated to @use
            silenceDeprecations: ['import'],
            includePaths: [resolve(__dirname, '../node_modules/@utrecht')],
          },
        },
      },
    });
  },

  typescript: {
    reactDocgen: 'react-docgen-typescript',
  },
};

export default config;
