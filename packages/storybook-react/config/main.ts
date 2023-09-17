import type { StorybookConfig } from '@storybook/react-vite';

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
    storyStoreV7: true,
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
