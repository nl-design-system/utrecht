import type { StorybookConfig } from '@storybook/react-vite';
import { createRequire } from 'node:module';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const require = createRequire(import.meta.url);

// Utility to resolve the absolute path of a package
// https://storybook.js.org/docs/faq#how-do-i-fix-module-resolution-in-special-environments
const getAbsolutePath = (value: string): string => dirname(require.resolve(join(value, 'package.json')));

const config: StorybookConfig = {
  core: {
    disableTelemetry: true,
  },
  stories: ['../src/**/*.stories.@(js|jsx|mdx|ts|tsx)', '../src/**/*.mdx'],
  features: {},
  framework: {
    name: getAbsolutePath('@storybook/react-vite'),
    options: {},
  },
  typescript: {
    reactDocgen: 'react-docgen-typescript',
  },

  addons: [
    getAbsolutePath('@storybook/addon-docs'),
    getAbsolutePath('@storybook/addon-a11y'),
    getAbsolutePath('@storybook/preset-scss'),
    getAbsolutePath('@etchteam/storybook-addon-status'),
    // getAbsolutePath('@whitespace/storybook-addon-html'),
    getAbsolutePath('@storybook/addon-links'),
    getAbsolutePath('storybook-addon-pseudo-states'),
    getAbsolutePath('@chromatic-com/storybook'),
  ],
  staticDirs: ['../../../proprietary/assets', '../src/script/'],
  docs: {},
  async viteFinal(config) {
    const { mergeConfig } = await import('vite');
    return mergeConfig(config, {
      define: {
        global: 'globalThis',
        'process.env': {},
      },
      plugins: [
        {
          name: 'fix-mdx-react-shim',
          enforce: 'pre',
          resolveId(source) {
            if (source.startsWith('file://') && source.includes('mdx-react-shim.js')) {
              return new URL(source).pathname;
            }
            return null;
          },
        },
      ],
      resolve: {
        alias: {
          '~@utrecht': resolve(__dirname, '../node_modules/@utrecht'),
          path: require.resolve('path-browserify'),
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
};

export default config;
