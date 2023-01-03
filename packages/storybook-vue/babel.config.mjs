export default {
  sourceType: 'module',
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          chrome: 100,
        },
      },
    ],
    '@babel/preset-react',
    '@babel/preset-typescript',
  ],
};
