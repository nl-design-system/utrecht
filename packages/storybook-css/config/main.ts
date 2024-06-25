import type { StorybookConfig } from '@storybook/react-webpack5';

const config: StorybookConfig = {
  core: {
    disableTelemetry: true,
  },
  stories: ['../src/**/Button.stories.@(js|jsx|ts|tsx)'],
  features: {
    buildStoriesJson: true,
  },
  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },
  addons: [
    '@storybook/addon-docs',
    '@storybook/addon-a11y',
    '@storybook/addon-viewport',
    '@storybook/preset-scss',
    '@etchteam/storybook-addon-status',
    '@whitespace/storybook-addon-html',
    '@storybook/addon-links',
    'storybook-addon-pseudo-states',
    'storybook-addon-themes',
    //'@storybook/addon-mdx-gfm',
  ],
  staticDirs: ['../../../proprietary/assets', '../src/script/'],
  docs: {
    autodocs: true,
  },
};

export default config;
