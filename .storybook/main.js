module.exports = {
  stories: ['../src/**/*.stories.@(js|mdx)'],
  addons: [
    '@storybook/addon-notes/register',
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
