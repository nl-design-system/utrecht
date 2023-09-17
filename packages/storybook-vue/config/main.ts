import type { StorybookConfig } from '@storybook/vue3-vite';

const config: StorybookConfig = {
  features: {
    buildStoriesJson: true,
    storyStoreV7: true,
  },
  stories: ['../src/stories/**/*.stories.ts'],
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
    // Workaround for `@storybook/addon-jest` with Vite
    // https://github.com/storybookjs/storybook/issues/14856#issuecomment-1262333250
    if (config.resolve) {
      config.resolve = {
        ...config.resolve,
        alias: {
          ...config.resolve.alias,
          path: require.resolve('path-browserify'),
        },
      };
    }
    return config;
  },
};

export default config;
