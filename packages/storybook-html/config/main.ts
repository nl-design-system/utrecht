import type { StorybookConfig } from '@storybook/react-webpack5';
import { dirname, join } from 'node:path';
import * as webpack from 'webpack';

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
    name: getAbsolutePath('@storybook/react-webpack5'),
    options: {},
  },

  addons: [
    getAbsolutePath('@storybook/addon-docs'),
    getAbsolutePath('@storybook/addon-a11y'),
    getAbsolutePath('@storybook/preset-scss'),
    getAbsolutePath('@etchteam/storybook-addon-status'),
    getAbsolutePath('@whitespace/storybook-addon-html'),
    getAbsolutePath('@storybook/addon-links'),
    getAbsolutePath('storybook-addon-pseudo-states'),
    getAbsolutePath('@storybook/addon-webpack5-compiler-swc'),
    getAbsolutePath('@chromatic-com/storybook'),
  ],
  staticDirs: ['../../../proprietary/assets', '../src/script/'],

  docs: {},
  webpackFinal: async (config: any) => {
    // Provide process polyfill for browser environment to fix Node.js compatibility issues
    // Required for packages that reference process.env in browser context
    config.plugins.push(
      new webpack.ProvidePlugin({
        process: 'process/browser',
      }),
    );
    return config;
  },
  typescript: {
    reactDocgen: 'react-docgen-typescript',
  },
};

export default config;
