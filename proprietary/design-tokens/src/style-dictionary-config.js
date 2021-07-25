const config = require('../style-dictionary.config.json');
const cssPropertyFormat = require('./css-property-formatter.js');

module.exports = {
  format: {
    ...cssPropertyFormat,
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
  },
};
