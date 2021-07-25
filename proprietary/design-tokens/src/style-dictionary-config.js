const config = require('../style-dictionary.config.json');
const storybookDesignTokenFormat = require('./storybook-design-token-formatter.js');
const cssPropertyFormat = require('./css-property-formatter.js');

module.exports = {
  format: {
    ...cssPropertyFormat,
    ...storybookDesignTokenFormat,
  },
  source: ['../../components/**/*.style-dictionary.json', './src/**/*.style-dictionary.json'],
  ...config,
  platforms: {
    ...config.platforms,
    'css-property': {
      transforms: ['attribute/cti', 'name/cti/kebab', 'color/hsl-4'],
      buildPath: 'dist/',
      files: [
        {
          destination: 'properties.css',
          format: 'css/property',
        },
      ],
    },
    'css-storybook': {
      transforms: ['attribute/cti', 'name/cti/kebab', 'color/hsl-4'],
      buildPath: 'dist/',
      files: [
        {
          destination: 'storybook-design-token.css',
          format: 'css/storybook-design-token',
        },
      ],
    },
  },
};
