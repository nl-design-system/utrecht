import { Config } from '@stencil/core';
import { angularOutputTarget, ValueAccessorConfig } from '@stencil/angular-output-target';
import { patchAngularOutputTarget } from './patch-angular';
import { reactOutputTarget } from '@stencil/react-output-target';
import { sequentialOutputTargets } from './sequential-output-targets';
import { sass } from '@stencil/sass';

const valueAccessorConfigs: ValueAccessorConfig = [
  {
    elementSelectors: ['utrecht-textarea', 'utrecht-textbox', 'utrecht-form-field-textbox'],
    event: 'utrechtInput',
    targetAttr: 'value',
    type: 'text',
  },
  {
    elementSelectors: ['utrecht-number-input'],
    event: 'utrechtInput',
    targetAttr: 'value',
    type: 'number',
  },
  {
    elementSelectors: ['utrecht-checkbox', 'utrecht-form-field-checkbox'],
    event: 'utrechtInput',
    targetAttr: 'checked',
    type: 'boolean',
  },
  {
    elementSelectors: ['utrecht-radio-group', 'utrecht-form-field-radio-group'],
    event: 'utrechtInput',
    targetAttr: 'value',
    type: 'select',
  },
];

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
    sequentialOutputTargets(
      angularOutputTarget({
        componentCorePackage: '@utrecht/web-component-library-stencil',
        directivesProxyFile: '../web-component-library-angular/src/directives/proxies.ts',
        valueAccessorConfigs,
      }),
      patchAngularOutputTarget({
        componentCorePackage: '@utrecht/web-component-library-stencil',
        directivesProxyFile: '../web-component-library-angular/src/directives/proxies.ts',
      }),
    ),
    reactOutputTarget({
      componentCorePackage: '@utrecht/web-component-library-stencil',
      proxiesFile: '../web-component-library-react/src/components.ts',
    }),
  ],
  plugins: [sass()],
};
