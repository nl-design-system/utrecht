/* eslint-env node */
module.exports = {
  core: {
    builder: 'webpack5',
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
  addons: [
    {
      name: '@storybook/addon-docs',
    },
    '@storybook/addon-a11y',
    '@storybook/addon-viewport',
    '@storybook/preset-scss',
    '@etchteam/storybook-addon-status/register',
    '@whitespace/storybook-addon-html',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    'storybook-addon-pseudo-states',
  ],
  staticDir: ['../../../proprietary/assets', 'src/script/'],
  refs: (config, { configType }) => {
    if (configType === 'DEVELOPMENT') {
      return {
        vue: {
          title: 'Vue.js Components',
          url: 'http://localhost:6007',
        },
      };
    }
    return {
      vue: {
        title: 'Vue.js Components',
        url: '../storybook-vue',
      },
    };
  },
};
