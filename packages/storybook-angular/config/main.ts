import type { StorybookConfig } from '@storybook/angular';

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.@(js|jsx|mdx|ts|tsx)'],
  addons: [
    '@storybook/addon-a11y',
    '@storybook/addon-actions',
    '@storybook/addon-controls',
    '@storybook/addon-docs',
    '@storybook/addon-interactions',
    '@storybook/addon-links',
    '@storybook/addon-measure',
    '@storybook/addon-outline',
    'storybook-addon-pseudo-states',
    '@storybook/addon-toolbars',
    '@storybook/addon-viewport',
    '@storybook/preset-scss',
    // Somehow `storybook-addon-status` breaks the Angular Storybook, need to investigate further
    // '@etchteam/storybook-addon-status/register',
    '@storybook/addon-jest',
  ],
  features: {
    buildStoriesJson: true,
  },
  framework: {
    name: '@storybook/angular',
    options: {},
  },
  core: {
    builder: '@storybook/builder-webpack5',
    disableTelemetry: true,
  },
  staticDirs: ['../../../proprietary/assets'],
  webpackFinal: async (config) => ({
    ...config,
    performance: {
      // Disable warning for: "asset size exceeds the recommended limit (244 KiB)"
      hints: false,
    },
  }),
};

export default config;
