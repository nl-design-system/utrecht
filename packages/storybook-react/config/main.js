/* eslint-env node */
module.exports = {
  core: {
    builder: 'webpack5',
  },
  stories: ['../src/stories/**/*.stories.mdx', '../src/stories/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-a11y',
    'storybook-addon-pseudo-states',
  ],
  features: {
    postcss: false,
    buildStoriesJson: true,
  },
  framework: '@storybook/react',
  staticDirs: ['../../../proprietary/assets'],
};
