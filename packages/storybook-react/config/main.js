/* eslint-env node */
module.exports = {
  core: {
    disableTelemetry: true,
  },
  stories: ['../src/stories/**/*.stories.@(js|jsx|mdx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-a11y',
    '@storybook/addon-blocks',
    'storybook-addon-pseudo-states',
    '@storybook/preset-scss',
    // '@storybook/addon-jest',
    '@etchteam/storybook-addon-status/register',
  ],
  features: {
    babelModeV7: true,
    postcss: false,
    buildStoriesJson: true,
    previewMdx2: true,
    storyStoreV7: true,
  },
  framework: {
    name: '@storybook/react-vite',
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
  docs: {
    autodocs: true,
  },
};
