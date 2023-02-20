import { addonStatus } from '@utrecht/storybook-helpers/src/addon-status';
// import { withTests } from '@storybook/addon-jest';
// import results from '@utrecht/component-library-vue/dist/.jest-test-results.json';
import '@utrecht/component-library-vue/dist/style.css';
import '@utrecht/design-tokens/dist/index.css';
import '@utrecht/storybook-helpers/src/storybook-docs.scss';
// import React from 'react';

export const decorators = [
  (story) => ({
    components: { story },
    template: '<div class="utrecht-theme"><story /></div>',
  }),
  // withTests({ results }),
];

export const parameters = {
  ...addonStatus,
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
