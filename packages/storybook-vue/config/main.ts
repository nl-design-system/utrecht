import type { StorybookConfig } from '@storybook/vue3-vite';
import path from 'path';

const config: StorybookConfig = {
  features: {
    buildStoriesJson: true,
    storyStoreV7: true,
  },
  stories: ['../src/stories/**/*.stories.mdx', '../src/stories/**/*.stories.ts'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    'storybook-addon-pseudo-states',
    '@storybook/addon-a11y',
    '@storybook/addon-jest',
    '@etchteam/storybook-addon-status/register',
  ],
  framework: {
    name: '@storybook/vue3-vite',
    options: {},
  },
  staticDirs: ['../../../proprietary/assets'],
  docs: {
    autodocs: 'tag',
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
