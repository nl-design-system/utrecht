/**
 * @type {import('prettier').Config}
 */
module.exports = {
  printWidth: 120,
  singleQuote: true,
  // Remove `trailingComma` after we switch to Prettier 3 where this is the default
  trailingComma: 'all',
  overrides: [
    {
      files: ['*.yml', '*.yaml'],
      options: {
        singleQuote: false,
      },
    },
    {
      files: ['*.css', '*.scss'],
      options: {
        singleQuote: false,
      },
    },
    {
      files: ['*.md', '*.mdx'],
      options: {
        singleQuote: false,
      },
    },
  ],
};
