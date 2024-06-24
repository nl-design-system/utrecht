import { defineCustomElements } from '@utrecht/web-component-library-stencil/loader';
import type { Plugin } from 'vue';

export const UtrechtComponentLibrary: Plugin = {
  async install() {
    defineCustomElements();
  },
};
