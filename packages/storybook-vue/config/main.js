/* eslint-disable no-undef */
module.exports = {
  core: {
    builder: '@storybook/builder-webpack5',
  },
  features: {
    postcss: false,
    buildStoriesJson: true,
  },
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    'storybook-addon-pseudo-states',
    '@storybook/addon-a11y',
  ],
  framework: '@storybook/vue3',
  staticDirs: ['../../../proprietary/assets'],
};
