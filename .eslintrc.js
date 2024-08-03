/* eslint-env node */

module.exports = {
  env: {
    browser: true,
    es6: true,
    node: false,
    jest: true,
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  overrides: [
    {
      extends: ['plugin:json/recommended'],
      files: ['*.json'],
    },
    {
      extends: [
        'plugin:react/recommended',
        'eslint-config-prettier',
        './.eslintrc.js.json',
        './.eslintrc.react.json',
        'plugin:mdx/overrides',
      ],
      files: ['*.mdx'],
      plugins: ['import'],
      settings: {
        'mdx/code-blocks': true,
      },
    },
    {
      extends: ['plugin:react/recommended', 'eslint-config-prettier', './.eslintrc.js.json', './.eslintrc.react.json'],
      files: ['*.js', '*.jsx'],
      plugins: ['import', 'jest'],
    },
    {
      extends: [
        'plugin:react/recommended',
        'eslint-config-prettier',
        './.eslintrc.js.json',
        './.eslintrc.react.json',
        './.eslintrc.ts.json',
      ],
      files: ['*.ts', '*.tsx'],
      parser: '@typescript-eslint/parser',
      plugins: ['@typescript-eslint', 'import', 'jest'],
    },
    {
      extends: [
        'plugin:react/recommended',
        'eslint-config-prettier',
        './.eslintrc.js.json',
        './.eslintrc.react.json',
        './.eslintrc.ts.json',
      ],
      files: ['**/stencil.tsx', '**/*.stencil.tsx'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: ['packages/web-component-library-stencil/tsconfig.json'],
      },
      plugins: ['@typescript-eslint', 'import'],
    },
    {
      excludedFiles: ['**/stencil.tsx', '**/*.stencil.tsx'],
      extends: ['plugin:react/recommended', 'eslint-config-prettier', './.eslintrc.js.json', './.eslintrc.ts.json'],
      files: ['*.ts', '*.tsx'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        projectService: true,
      },
      plugins: ['@typescript-eslint', 'import'],
    },
    {
      extends: [
        'plugin:vue/vue3-recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'eslint-config-prettier',
        './.eslintrc.js.json',
      ],
      files: ['*.vue'],
      parserOptions: {
        parser: '@typescript-eslint/parser',
        extraFileExtensions: ['.vue'],
        ecmaFeatures: {
          jsx: true,
        },
        project: ['packages/component-library-vue/tsconfig.lib.json'],
      },
      plugins: ['@typescript-eslint'],
      rules: {
        'vue/require-explicit-emits': 'off',
        'vue/no-use-v-if-with-v-for': 'off',
      },
    },
  ],
};
