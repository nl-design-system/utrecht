import { addonStatus } from '@utrecht/storybook-helpers/src/addon-status';
import { addonViewport } from '@utrecht/storybook-helpers/src/addon-viewport';
import '@utrecht/component-library-vue/dist/style.css';
import '@utrecht/design-tokens/dist/index.css';
import '@utrecht/storybook-helpers/src/storybook-docs.scss';
import Vue from 'vue'
import '@utrecht/component-library-vue/dist/store/index';

export const decorators = [
  (story) => ({
    components: { story },
    template: '<div class="utrecht-theme"><story /></div>',
  }),
  // withTests({ results }),
];


// provide('store', store);
Vue.provide('store', store);

export const parameters = {
  ...addonStatus,
  ...addonViewport,
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  docs: {
    // Show code by default.
    // Stories without concise code snippets can hide the code at Story level.
    source: {
      state: 'open',
    },

    // container: ({ children }) => (
    //   <div className="utrecht-document utrecht-theme">
    //     <div className="utrecht-article">{children}</div>
    //   </div>
    // ),
  },
};
