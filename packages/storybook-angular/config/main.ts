import type { StorybookConfig } from '@storybook/angular';
import { dirname, join, resolve } from 'node:path';

// Utility to resolve the absolute path of a package
// https://storybook.js.org/docs/faq#how-do-i-fix-module-resolution-in-special-environments
const getAbsolutePath = (value: string): string => dirname(require.resolve(join(value, 'package.json')));

const config: StorybookConfig = {
  stories: ['../src/**/*.@(mdx|stories.@(js|jsx|ts|tsx))'],
  docs: {
    autodocs: true,
  },
  addons: [
    getAbsolutePath('@storybook/addon-a11y'),
    getAbsolutePath('@storybook/addon-docs'),
    getAbsolutePath('@storybook/addon-links'),
    getAbsolutePath('@etchteam/storybook-addon-status'),
    getAbsolutePath('@storybook/preset-scss'),
    getAbsolutePath('@storybook/addon-jest'),
  ],

  features: {},

  framework: {
    name: getAbsolutePath('@storybook/angular'),
    options: {},
  },
  core: {
    builder: '@storybook/builder-webpack5',
    disableTelemetry: true,
  },
  staticDirs: ['../../../proprietary/assets'],
  webpackFinal: async (config) => {
    config.resolve = {
      ...config.resolve,
      alias: {
        ...config.resolve?.alias,
        '~@utrecht': resolve(__dirname, '../node_modules/@utrecht'),
      },
    };

    config.module?.rules?.push({
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'sass-loader'],
      include: resolve(__dirname, '../node_modules/@utrecht'),
    });

    return {
      ...config,
      performance: {
        // Disable warning for: "asset size exceeds the recommended limit (244 KiB)"
        hints: false,
      },
    };
  },
};

export default config;
