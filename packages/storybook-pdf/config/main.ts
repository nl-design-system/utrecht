import type { StorybookConfig } from '@storybook/react-webpack5';

const config: StorybookConfig = {
  core: {
    disableTelemetry: true,
  },
  stories: ['../src/**/*stories.@(js|jsx|mdx|ts|tsx)'],
  features: {
    buildStoriesJson: true,
    storyStoreV7: true,
  },
  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },
  addons: ['@storybook/addon-docs', '@storybook/preset-scss'],
  staticDirs: ['../../../proprietary/assets', '../src/script/', '../../component-library-pdf/screenshots/'],
  docs: {
    autodocs: true,
  },
};

export default config;
