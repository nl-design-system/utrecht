const minorConfig = require('./.ncurc.minor');

module.exports = {
  reject: [
    ...minorConfig.reject,
    // Angular needs to be upgraded in combination with Typescript
    '@angular/cli',
    '@angular/compiler',
    '@angular/compiler-cli',
    '@angular/core',
    '@angular/forms',
    'rxjs',
    'ng-packagr',
    // Storybook needs React 16 to have support out of the box.
    // Alternatively we could manually keep track of all sub-package versions,
    // but the benefit of upgrading is currently not high enough.
    'react',
    'react-dom',
    '@types/react',
    '@types/react-dom',
    'css-loader',
    // Webpack 5 update can only happen after Storybook supports it, we'll need to do a manual upgrade then.
    // For now keep the loader versions compatible with Webpack 4.
    'sass-loader',
    'style-loader',
    'webpack',
    // We don't yet use Node 17 so the types of node should also be locked at Node 16.
    '@types/node',
  ],
};
