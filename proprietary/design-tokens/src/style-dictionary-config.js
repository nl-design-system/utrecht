const config = require('../style-dictionary.config.json');
const cssPropertyFormat = require('./css-property-formatter.js');

const stringSort = (a, b) => (a === b ? 0 : a > b ? 1 : -1);
const destinationSort = (a, b) => stringSort(a.destination, b.destination);

module.exports = {
  format: {
    ...cssPropertyFormat,
  },
  source: ['../../components/**/*.style-dictionary.json', './src/**/*.style-dictionary.json'],
  ...config,
  platforms: {
    ...config.platforms,
    css: {
      ...config.platforms.css,
      files: [
        ...config.platforms.css.files,
        {
          destination: 'properties.css',
          format: 'css/property',
        },
      ].sort(destinationSort),
    },
    },
  },
};
