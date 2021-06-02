module.exports = {
  stories: [
    '../documentation/**/*stories.@(js|mdx)',
    '../src/**/*stories.@(js|mdx)',
    '../proprietary/**/*stories.@(js|mdx)',
  ],
  features: {
    postcss: false,
  },
  addons: [
    {
      name: '@storybook/addon-docs',
      options: { configureJSX: true },
    },
    '@storybook/addon-a11y',
    '@storybook/addon-viewport',
    '@storybook/addon-notes/register',
    '@storybook/preset-scss',
    '@etchteam/storybook-addon-status/register',
    'storybook-addon-mdx-embed',
    'storybook-design-token',
  ],
};
