/* eslint-disable no-undef */
module.exports = {
  features: {
    postcss: false,
    buildStoriesJson: true,
    previewMdx2: true,
    storyStoreV7: true,
  },
  // stories: ['../src/**/*(?!docs).stories.@(js|jsx|mdx|ts|tsx)'],
  // stories: ['../src/stories/Article/**/*.stories.*'],
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
};
