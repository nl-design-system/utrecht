const patchConfig = require('./.ncurc.patch');

module.exports = {
  reject: [
    ...patchConfig.reject,
    'typescript',
    // Storybook 6.4 causes issues with the code samples in our stories.
    // A fix and manual update is needed before upgrading.
    '@storybook/addon-a11y',
    '@storybook/addon-docs',
    '@storybook/addon-viewport',
    '@storybook/html',
    '@storybook/theming',
  ],
};
