import { Config } from '@stencil/core';
import { angularOutputTarget, ValueAccessorConfig } from '@stencil/angular-output-target';
import { reactOutputTarget } from '@stencil/react-output-target';
import { sass } from '@stencil/sass';

export const config: Config = {
  namespace: 'utrecht',
  srcDir: '../../components/',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements-bundle',
    },
    angularOutputTarget({
      componentCorePackage: '@utrecht/web-component-library-stencil',
      directivesProxyFile: '../web-component-library-angular/src/directives/proxies.ts',
    }),
    reactOutputTarget({
      componentCorePackage: '@utrecht/web-component-library-stencil',
      proxiesFile: '../web-component-library-react/src/components.ts',
    }),
  ],
  plugins: [sass()],
};
