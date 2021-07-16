import { Config } from '@stencil/core';
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
    reactOutputTarget({
      componentCorePackage: '@utrecht/web-component-library-stencil',
      proxiesFile: '../web-component-library-react/src/components.ts',
    }),
  ],
  plugins: [sass()],
};
