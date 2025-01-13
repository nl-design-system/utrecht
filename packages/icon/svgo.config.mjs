export default {
  multipass: true,
  js2svg: {
    indent: 2,
    pretty: true,
  },
  plugins: [
    'preset-default',
    'removeDimensions',
    'removeTitle',
    'convertStyleToAttrs',
    {
      name: 'removeAttrs',
      params: {
        attrs: ['path:(fill|stroke)', 'fill'],
      },
    },
    {
      name: 'sortAttrs',
      params: {
        xmlnsOrder: 'alphabetical',
      },
    },
    {
      name: 'addAttributesToSVGElement',
      params: {
        attributes: [
          {
            fill: 'currentColor',
            height: '1em',
            width: '1em',
          },
        ],
      },
    },
  ],
};
