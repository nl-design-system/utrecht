/* eslint-disable no-undef */
module.exports = {
  core: {
    builder: 'webpack5',
    disableTelemetry: true,
  },
  features: {
    babelModeV7: true,
    postcss: false,
    buildStoriesJson: true,
    previewMdx2: true,
    storyStoreV7: false,
  },
  stories: ['../src/**/*.stories.@(js|jsx|mdx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    'storybook-addon-pseudo-states',
    '@storybook/addon-a11y',
    '@storybook/addon-jest',
  ],
  framework: {
    name: '@storybook/vue3',
    options: {},
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
