import { angularOutputTarget, ValueAccessorConfig } from '@stencil/angular-output-target';
import { Config } from '@stencil/core';
import { reactOutputTarget } from '@stencil/react-output-target';
import { sass } from '@stencil/sass';
import { vueOutputTarget } from '@stencil/vue-output-target';
import { patchAngularOutputTarget } from './patch-angular';
import { patchVueOutputTarget } from './patch-vue';
import { sequentialOutputTargets } from './sequential-output-targets';

const valueAccessorConfigs: ValueAccessorConfig = [
  {
    elementSelectors: [
      'utrecht-textarea',
      'utrecht-textbox',
      'utrecht-form-field-textarea',
      'utrecht-form-field-textbox',
    ],
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
    elementSelectors: ['utrecht-checkbox', 'utrecht-form-field-checkbox', 'utrecht-form-toggle'],
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

const vueComponentModels = valueAccessorConfigs.map(({ elementSelectors, event, targetAttr }) => ({
  elements: elementSelectors,
  event,
  targetAttr,
}));

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
    sequentialOutputTargets(
      vueOutputTarget({
        componentCorePackage: '@utrecht/web-component-library-stencil',
        proxiesFile: '../web-component-library-vue/src/components.ts',
        componentModels: vueComponentModels,
      }),
      patchVueOutputTarget({
        proxiesFile: '../web-component-library-vue/src/components.ts',
      }),
    ),
  ],
  plugins: [sass()],
};
