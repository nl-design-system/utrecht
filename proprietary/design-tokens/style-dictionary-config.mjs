const stringSort = (a, b) => (a === b ? 0 : a > b ? 1 : -1);

const sortByName = (a, b) => stringSort(a.name, b.name);

export const createStyleDictionaryConfig = ({ themeName, source = ['src/**/*.tokens.json'] }) => ({
  hooks: {
    formats: {
      'json/list': function ({ dictionary }) {
        return JSON.stringify(dictionary.allTokens.sort(sortByName), null, '  ');
      },
      'javascript/es6-list': function ({ dictionary }) {
        return `export default ${JSON.stringify(dictionary.allTokens.sort(sortByName), null, '  ')};\n`;
      },
      'typescript/list-declarations': function ({ dictionary }) {
        return `
declare interface DesignToken {
  value?: any;
  type?: string;
  comment?: string;
  name?: string;
  themeable?: boolean;
  attributes?: Record<string, unknown>;
  [key: string]: any;
}

export default tokens;

declare const tokens: DesignToken[];`;
      },
    },
    transforms: {
      'fontSize/pxToRem': {
        name: 'fontSize/pxToRem',
        type: 'value',
        transitive: false,
        transform: (token) => {
          const isFontSize = (token) => token.path[token.path.length - 1] === 'font-size' || token.type === 'fontSize';
          const isLineHeight = (token) => token.path[token.path.length - 1] === 'line-height';

          if ((isFontSize(token) || isLineHeight(token)) && /px$/i.test(token.value)) {
            const px = parseInt(token.value, 10);
            const ratio = 1 / 16;
            const rem = px * ratio;
            const value = `${rem}rem`;

            return value;
          }

          return token.value;
        },
      },
    },
  },
  source,
  platforms: {
    js: {
      transformGroups: 'tokens-studio',
      transforms: ['name/camel', 'fontSize/pxToRem'],
      buildPath: 'dist/',
      files: [
        {
          destination: 'variables.cjs',
          format: 'javascript/module-flat',
        },
        {
          destination: 'variables.mjs',
          format: 'javascript/es6',
        },
      ],
    },
    tokenTree: {
      transformGroups: 'tokens-studio',
      transforms: ['fontSize/pxToRem'],
      buildPath: 'dist/',
      files: [
        {
          format: 'javascript/module',
          destination: 'tokens.cjs',
        },
      ],
    },
    json: {
      transformGroups: 'tokens-studio',
      transforms: ['name/camel', 'fontSize/pxToRem'],
      buildPath: 'dist/',
      files: [
        {
          destination: 'tokens.json',
          format: 'json',
        },
        {
          destination: 'list.json',
          format: 'json/list',
        },
        {
          destination: 'list.mjs',
          format: 'javascript/es6-list',
        },
        {
          destination: 'variables.json',
          format: 'json/flat',
        },
      ],
    },
    css: {
      transformGroups: 'tokens-studio',
      transforms: ['name/kebab', 'fontSize/pxToRem'],
      buildPath: 'dist/',
      files: [
        {
          destination: 'theme.css',
          format: 'css/variables',
          options: {
            selector: `.${themeName}`,
            outputReferences: true,
          },
        },
        {
          destination: 'variables.css',
          format: 'css/variables',
          options: {
            selector: `:root`,
            outputReferences: true,
          },
        },
      ],
    },
    'css-theme-prince-xml': {
      transforms: ['name/kebab', 'fontSize/pxToRem'],
      buildPath: 'dist/',
      files: [
        {
          destination: 'theme-prince-xml.css',
          format: 'css/variables',
          options: {
            selector: '.utrecht-theme',
            outputReferences: true,
          },
        },
      ],
    },
    scss: {
      transformGroups: 'tokens-studio',
      transforms: ['name/kebab', 'fontSize/pxToRem'],
      buildPath: 'dist/',
      files: [
        {
          destination: '_variables.scss',
          format: 'scss/variables',
          options: {
            outputReferences: true,
          },
        },
      ],
    },
    'scss-theme-mixin': {
      transforms: ['name/kebab', 'fontSize/pxToRem'],
      buildPath: 'dist/',
      files: [
        {
          destination: '_mixin.scss',
          format: 'css/variables',
          options: {
            selector: `@mixin ${themeName}`,
            outputReferences: true,
          },
        },
      ],
    },
    less: {
      transformGroups: 'tokens-studio',
      transforms: ['name/kebab', 'fontSize/pxToRem'],
      buildPath: 'dist/',
      files: [
        {
          destination: 'variables.less',
          format: 'less/variables',
          options: {
            outputReferences: true,
          },
        },
      ],
    },
    typescript: {
      transforms: ['name/camel', 'fontSize/pxToRem'],
      transformGroup: 'js',
      buildPath: 'dist/',
      files: [
        {
          format: 'typescript/es6-declarations',
          destination: 'variables.d.ts',
        },
        {
          format: 'typescript/module-declarations',
          destination: 'tokens.d.ts',
        },
        {
          format: 'typescript/list-declarations',
          destination: 'list.d.ts',
        },
      ],
    },
    'deprecated-js': {
      transformGroups: 'tokens-studio',
      transforms: ['name/camel', 'fontSize/pxToRem'],
      buildPath: 'dist/',
      files: [
        {
          destination: 'index.cjs',
          format: 'javascript/module-flat',
        },
        {
          destination: 'index.mjs',
          format: 'javascript/es6',
        },
      ],
    },
    'deprecated-json': {
      transformGroups: 'tokens-studio',
      transforms: ['name/camel', 'fontSize/pxToRem'],
      buildPath: 'dist/',
      files: [
        {
          destination: 'index.tokens.json',
          format: 'json/nested',
        },
        {
          destination: 'index.json',
          format: 'json/list',
        },
        {
          destination: 'index.flat.json',
          format: 'json/flat',
        },
      ],
    },
    'deprecated-css': {
      transformGroups: 'tokens-studio',
      transforms: ['name/kebab', 'fontSize/pxToRem'],
      buildPath: 'dist/',
      files: [
        {
          destination: 'root.css',
          format: 'css/variables',
          options: {
            selector: `:root`,
            outputReferences: true,
          },
        },
      ],
    },
    'deprecated-scss-theme-mixin': {
      transforms: ['name/kebab', 'fontSize/pxToRem'],
      buildPath: 'dist/',
      files: [
        {
          destination: '_mixin-theme.scss',
          format: 'css/variables',
          options: {
            selector: `@mixin ${themeName}`,
            outputReferences: true,
          },
        },
      ],
    },
    'deprecated-typescript': {
      transforms: ['name/camel', 'fontSize/pxToRem'],
      transformGroup: 'js',
      buildPath: 'dist/',
      files: [
        {
          format: 'typescript/es6-declarations',
          destination: 'index.d.ts',
        },
      ],
    },
  },
});
