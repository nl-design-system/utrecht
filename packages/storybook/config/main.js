/* eslint-env node */
module.exports = {
  core: {
    builder: 'webpack5',
    disableTelemetry: true,
  },
  stories: [
    '../stories/**/*stories.@(js|mdx)',
    '../../../components/**/*stories.@(js|mdx)',
    '../../../proprietary/**/*stories.@(js|mdx)',
  ],
  features: {
    postcss: false,
    buildStoriesJson: true,
  },
  framework: '@storybook/react',
  addons: [
    '@storybook/addon-docs',
    '@storybook/addon-a11y',
    '@storybook/addon-viewport',
    '@storybook/preset-scss',
    '@etchteam/storybook-addon-status/register',
    '@whitespace/storybook-addon-html/register',
    '@storybook/addon-links',
    'storybook-addon-pseudo-states',
  ],
  staticDirs: ['../../../proprietary/assets', '../src/script/'],
  refs: (_, { configType }) => {
    if (configType === 'DEVELOPMENT') {
      return {
        angular: {
          title: 'Angular Components',
          url: 'http://localhost:6009',
        },
        vue: {
          title: 'Vue.js Components',
          url: 'http://localhost:6007',
        },
        react: {
          title: 'React.js Components',
          url: 'http://localhost:6008',
        },
        webComponent: {
          title: 'Web Components',
          url: 'http://localhost:6010',
        },
      };
    }
    return {
      angular: {
        title: 'Angular Components',
        url: '../storybook-angular',
      },
      vue: {
        title: 'Vue.js Components',
        url: '../storybook-vue',
      },
      react: {
        title: 'React.js Components',
        url: '../storybook-react',
      },
      webComponent: {
        title: 'React.js Component',
        url: '../storybook-web-component',
      },
    };
  },
  webpackFinal: async (config) => ({
    ...config,
    performance: {
      // Disable warning for: "asset size exceeds the recommended limit (244 KiB)"
      hints: false,
    },
  }),
};
