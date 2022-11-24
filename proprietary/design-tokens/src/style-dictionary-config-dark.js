const config = require('./style-dictionary-config.js');

module.exports = {
  ...config,
  source: [
    ...config.source,
    './src/dark/tokens.json',
    './src/dark/*.tokens.json',
    './src/dark/**/tokens.json',
    './src/dark/**.tokens.json',
  ],
  platforms: {
    css: {
      transforms: ['attribute/cti', 'name/cti/kebab', 'color/hsl-4'],
      buildPath: 'dist/dark/',
      files: [
        {
          destination: 'root.css',
          format: 'css/variables',
          options: {
            selector: ':root, ::backdrop',
            outputReferences: true,
          },
        },
      ],
    },
    'css-theme': {
      transforms: ['attribute/cti', 'name/cti/kebab', 'color/hsl-4'],
      buildPath: 'dist/dark/',
      files: [
        {
          destination: 'index.css',
          format: 'css/variables',
          options: {
            selector: '.utrecht-theme--dark, .utrecht-theme--dark ::backdrop',
            outputReferences: true,
          },
        },
      ],
    },
    'scss-theme-mixin': {
      transforms: ['attribute/cti', 'name/cti/kebab', 'color/hsl-4'],
      buildPath: 'dist/dark/',
      files: [
        {
          destination: '_mixin-theme.scss',
          format: 'css/variables',
          options: {
            selector: '@mixin utrecht-theme--dark',
            outputReferences: true,
          },
        },
      ],
    },
  },
};
