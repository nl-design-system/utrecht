module.exports = {
  core: {
    builder: 'webpack5',
  },
  stories: [
    '../../../components/**/*stories.@(js|mdx)',
    '../../../documentation/**/*stories.@(js|mdx)',
    '../../../proprietary/**/*stories.@(js|mdx)',
  ],
  features: {
    postcss: false,
  },
  addons: [
    {
      name: '@storybook/addon-docs',
    },
    '@storybook/addon-a11y',
    '@storybook/addon-viewport',
    '@storybook/preset-scss',
    '@etchteam/storybook-addon-status/register',
  ],
};
