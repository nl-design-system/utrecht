// This file has been automatically migrated to valid ESM format by Storybook.
import type { StorybookConfig } from '@storybook/vue3-vite';
import { createRequire } from 'node:module';
import path, { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const require = createRequire(import.meta.url);

// Utility to resolve the absolute path of a package
// https://storybook.js.org/docs/faq#how-do-i-fix-module-resolution-in-special-environments
const getAbsolutePath = (value: string): string => dirname(require.resolve(join(value, 'package.json')));

const config: StorybookConfig = {
  stories: ['../src/stories/**/*.mdx', '../src/stories/**/*.stories.ts'],
  addons: [
    getAbsolutePath('@storybook/addon-links'),
    getAbsolutePath('storybook-addon-pseudo-states'),
    getAbsolutePath('@storybook/addon-a11y'),
    getAbsolutePath('@storybook/addon-docs'),
    getAbsolutePath('@storybook/addon-jest'),
  ],
  framework: {
    name: getAbsolutePath('@storybook/vue3-vite'),
    options: {},
  },
  staticDirs: ['../../../proprietary/assets'],
  docs: {},
  async viteFinal(config) {
    const { mergeConfig } = await import('vite');
    return mergeConfig(config, {
      resolve: {
        alias: {
          '~@utrecht': path.resolve(__dirname, '../node_modules/@utrecht'),
          path: require.resolve('path-browserify'),
        },
      },
      css: {
        preprocessorOptions: {
          scss: {
            // Temporary fix for the SCSS @import deprecation in Storybook 9
            // Remove once all @utrecht packages have been migrated to @use
            silenceDeprecations: ['import'],
            includePaths: [path.resolve(__dirname, '../node_modules/@utrecht')],
          },
        },
      },
    });
  },
};

export default config;
