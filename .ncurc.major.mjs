import minorConfig from './.ncurc.minor.mjs';

export default {
  ...minorConfig,
  reject: [
    ...minorConfig.reject,
    // Docusaurus needs a migration
    '@docusaurus/*',
    '@mdx-js/react',
    '@tsconfig/docusaurus',
    'prism-react-renderer',

    // Prettier 3 is async, needs a refactoring
    '@mdx-js/react',
    'prettier',

    // Storybook v8 needs a refactoring
    'storybook',
    '@storybook/*',

    // Avoid ESLint 9
    'eslint',
    'eslint-plugin-jest',
    'eslint-plugin-mdx',
    'eslint-plugin-react',
    'eslint-plugin-vue',
  ],
  target: 'latest',
};
