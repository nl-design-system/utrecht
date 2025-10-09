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

  stories: ['../src/**/*.stories.tsx', '../src/**/*.mdx'],
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
    getAbsolutePath('storybook-addon-themes'),
  ],

  staticDirs: ['../../../proprietary/assets', '../src/script/'],

  docs: {},

  webpackFinal: async (config: any) => {
    // Add babel-loader to handle TypeScript and JSX compilation for Storybook 9
    // This ensures proper transpilation of React components and TypeScript files
    config.module.rules.push({
      test: /\.(js|jsx|ts|tsx)$/,
      exclude: /node_modules/,
      use: [
        {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],
          },
        },
      ],
    });

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
    check: false,
    checkOptions: {},
  },
};

export default config;
