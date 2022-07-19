/* eslint-disable no-undef */
module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials', 'storybook-addon-pseudo-states'],
  framework: '@storybook/vue3',
  staticDirs: ['../../../proprietary/assets'],
};
