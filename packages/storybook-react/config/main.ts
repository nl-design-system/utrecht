import type { StorybookConfig } from '@storybook/react-vite';
import path from 'path';

const config: StorybookConfig = {
  core: {
    disableTelemetry: true,
  },
  stories: ['../src/stories/**/*.stories.@(js|jsx|mdx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-a11y',
    'storybook-addon-pseudo-states',
    '@storybook/preset-scss',
    '@storybook/addon-jest',
    '@etchteam/storybook-addon-status/register',
    'storybook-addon-themes',
  ],
  features: {
    buildStoriesJson: true,
  },
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  staticDirs: ['../../../proprietary/assets'],
  docs: {
    autodocs: true,
  },
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
            includePaths: [path.resolve(__dirname, '../node_modules/@utrecht')],
          },
        },
      },
    });
  },
};

export default config;
