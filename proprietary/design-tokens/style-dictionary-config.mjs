import { propertyFormatter } from './src/css-property-formatter.mjs';

const stringSort = (a, b) => (a === b ? 0 : a > b ? 1 : -1);

const sortByName = (a, b) => stringSort(a.name, b.name);

/**
 * Register custom hooks (formats and transforms) on the StyleDictionary instance.
 * Must be called after register() from @tokens-studio/sd-transforms.
 */
export const registerCustomHooks = (StyleDictionary) => {
  StyleDictionary.registerFormat({
    name: 'css/property',
    format: propertyFormatter,
  });
  StyleDictionary.registerFormat({
    name: 'json/list',
    format: ({ dictionary }) => JSON.stringify(dictionary.allTokens.sort(sortByName), null, '  '),
  });
  StyleDictionary.registerFormat({
    name: 'javascript/es6-list',
    format: ({ dictionary }) =>
      `export default ${JSON.stringify(dictionary.allTokens.sort(sortByName), null, '  ')};\n`,
  });
  StyleDictionary.registerFormat({
    name: 'typescript/list-declarations',
    format: () => `
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

declare const tokens: DesignToken[];`,
  });
  StyleDictionary.registerTransform({
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
        return `${rem}rem`;
      }

      return token.value;
    },
  });
};

/**
 * Build the transforms array for a platform. Uses the tokens-studio transforms
 * (without name/*) plus the specified name transform and fontSize/pxToRem.
 *
 * We don't use `transformGroup` because the tokens-studio group includes
 * name/camel as the last transform, which conflicts with platforms that
 * need name/kebab.
 */
export const getTransforms = (StyleDictionary, nameTransform) => {
  const tsTransforms = StyleDictionary.hooks.transformGroups['tokens-studio'].filter((t) => !t.startsWith('name/'));
  return [...tsTransforms, 'fontSize/pxToRem', nameTransform];
};

export const createStyleDictionaryConfig = ({ themeName, transforms }) => ({
  platforms: {
    js: {
      transforms: transforms.camel,
      buildPath: 'dist/',
      files: [
        { destination: 'variables.cjs', format: 'javascript/module-flat' },
        { destination: 'variables.mjs', format: 'javascript/es6' },
      ],
    },
    tokenTree: {
      transforms: transforms.camel,
      buildPath: 'dist/',
      files: [{ format: 'javascript/module', destination: 'tokens.cjs' }],
    },
    json: {
      transforms: transforms.camel,
      buildPath: 'dist/',
      files: [
        { destination: 'tokens.json', format: 'json' },
        { destination: 'list.json', format: 'json/list' },
        { destination: 'list.mjs', format: 'javascript/es6-list' },
        { destination: 'variables.json', format: 'json/flat' },
      ],
    },
    css: {
      transforms: transforms.kebab,
      buildPath: 'dist/',
      files: [
        {
          destination: 'theme.css',
          format: 'css/variables',
          options: { selector: `.${themeName}`, outputReferences: true },
        },
        {
          destination: 'variables.css',
          format: 'css/variables',
          options: { selector: `:root`, outputReferences: true },
        },
        { destination: 'property.css', format: 'css/property' },
      ],
    },
    'css-theme-prince-xml': {
      transforms: transforms.kebab,
      buildPath: 'dist/',
      files: [
        {
          destination: 'theme-prince-xml.css',
          format: 'css/variables',
          options: { selector: '.utrecht-theme', outputReferences: true },
        },
      ],
    },
    scss: {
      transforms: transforms.kebab,
      buildPath: 'dist/',
      files: [
        {
          destination: '_variables.scss',
          format: 'scss/variables',
          options: { outputReferences: true },
        },
      ],
    },
    'scss-theme-mixin': {
      transforms: transforms.kebab,
      buildPath: 'dist/',
      files: [
        {
          destination: '_mixin.scss',
          format: 'css/variables',
          options: { selector: `@mixin ${themeName}`, outputReferences: true },
        },
      ],
    },
    less: {
      transforms: transforms.kebab,
      buildPath: 'dist/',
      files: [
        {
          destination: 'variables.less',
          format: 'less/variables',
          options: { outputReferences: true },
        },
      ],
    },
    typescript: {
      transforms: transforms.camel,
      buildPath: 'dist/',
      files: [
        { format: 'typescript/es6-declarations', destination: 'variables.d.ts' },
        { format: 'typescript/module-declarations', destination: 'tokens.d.ts' },
        { format: 'typescript/list-declarations', destination: 'list.d.ts' },
      ],
    },
    'deprecated-js': {
      transforms: transforms.camel,
      buildPath: 'dist/',
      files: [
        { destination: 'index.cjs', format: 'javascript/module-flat' },
        { destination: 'index.mjs', format: 'javascript/es6' },
      ],
    },
    'deprecated-json': {
      transforms: transforms.camel,
      buildPath: 'dist/',
      files: [
        { destination: 'index.tokens.json', format: 'json/nested' },
        { destination: 'index.json', format: 'json/list' },
        { destination: 'index.flat.json', format: 'json/flat' },
      ],
    },
    'deprecated-css': {
      transforms: transforms.kebab,
      buildPath: 'dist/',
      files: [
        {
          destination: 'root.css',
          format: 'css/variables',
          options: { selector: `:root`, outputReferences: true },
        },
        { destination: 'property.css', format: 'css/property' },
      ],
    },
    'deprecated-scss-theme-mixin': {
      transforms: transforms.kebab,
      buildPath: 'dist/',
      files: [
        {
          destination: '_mixin-theme.scss',
          format: 'css/variables',
          options: { selector: `@mixin ${themeName}`, outputReferences: true },
        },
      ],
    },
    'deprecated-typescript': {
      transforms: transforms.camel,
      buildPath: 'dist/',
      files: [{ format: 'typescript/es6-declarations', destination: 'index.d.ts' }],
    },
  },
});
