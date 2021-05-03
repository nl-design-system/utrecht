module.exports = {
  stories: ['../__stories__/**/*stories.@(js|mdx)', '../src/**/*stories.@(js|mdx)'],
  features: {
    postcss: false,
  },
  addons: [
    {
      name: '@storybook/addon-docs',
      options: { configureJSX: true },
    },
    '@storybook/addon-notes/register',
    '@storybook/preset-scss',
    '@etchteam/storybook-addon-status/register',
    {
      name: '@storybook/addon-essentials',
      options: {
        actions: false,
        controls: false,
        backgrounds: false,
        viewport: false,
      },
    },
    'storybook-addon-mdx-embed',
    'storybook-design-token',
  ],
};
