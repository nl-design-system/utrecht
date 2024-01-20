# Contributing to the Angular component library

## npm package

The Angular packager builds a `package.json` file in the `dist/` directory. The Angular build process takes the responsibility to configure the exports in various properties (such as the `exports` and `typings` properties).

We haven't found a way to publish the package from `dist/` using our current setup, so as a workaround we have manually copied the export properties from `dist/package.json` to `package.json` and corrected the paths to point to the `dist/` directory.

When you upgrade Angular, you will need to manually ensure the configurations are still in sync.

We included a test script `test-export.mjs` to warn when the configurations are out of sync.
