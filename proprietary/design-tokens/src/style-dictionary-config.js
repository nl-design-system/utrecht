const { transform } = require('@divriots/style-dictionary-to-figma');
const mergeWith = require('lodash.mergewith');
const config = require('../style-dictionary.config.json');
const cssPropertyFormat = require('./css-property-formatter.js');
const jsonListFormat = require('./json-list-formatter.js');
const stringSort = (a, b) => (a === b ? 0 : a > b ? 1 : -1);
const destinationSort = (a, b) => stringSort(a.destination, b.destination);

const figmaTokensConfig = {
  format: {
    figmaTokensPlugin: ({ dictionary }) => {
      const transformedTokens = transform(dictionary.tokens);
      return JSON.stringify(transformedTokens, null, 2);
    },
  },
  platforms: {
    jsonx: {
      transformGroup: 'js',
      files: [
        {
          destination: 'dist/figma-tokens.json',
          format: 'figmaTokensPlugin',
        },
      ],
    },
  },
};

const cssPropertyConfig = {
  format: {
    ...cssPropertyFormat,
  },
  platforms: {
    css: {
      files: [
        {
          destination: 'property.css',
          format: 'css/property',
        },
      ].sort(destinationSort),
    },
  },
};

const jsonConfig = {
  format: {
    ...jsonListFormat,
  },
  platforms: {
    json: {
      files: [
        {
          destination: 'index.json',
          format: 'json/list',
        },
      ].sort(destinationSort),
    },
  },
};

module.exports = mergeWith({}, config, cssPropertyConfig, jsonConfig, figmaTokensConfig, (objValue, srcValue) =>
  Array.isArray(objValue) && Array.isArray(srcValue) ? [...objValue, ...srcValue] : undefined,
);
