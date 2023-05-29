import { Preview } from '@storybook/vue3';
import { Document } from '@utrecht/component-library-vue';
import { addonStatus } from '@utrecht/storybook-helpers/dist/addon-status';
import { addonViewport } from '@utrecht/storybook-helpers/dist/addon-viewport';
import { defineCustomElements } from '@utrecht/web-component-library-stencil/loader';
import '@utrecht/component-library-vue/dist/style.css';
import '@utrecht/design-tokens/dist/index.css';
import '@utrecht/storybook-helpers/src/storybook-docs.scss';
defineCustomElements();

const preview: Preview = {
  decorators: [
    (story: any) => ({
      components: { Document, story },
      template: '<Document class="utrecht-theme"><story /></Document>',
    }),
  ],
  parameters: {
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
  },
};

export default preview;
