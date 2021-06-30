import { Config } from '@stencil/core';
import { reactOutputTarget } from '@stencil/react-output-target';

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
      componentCorePackage: '@utrecht/component-library',
      proxiesFile: '../component-library-react/src/components.ts',
    }),
  ],
};
