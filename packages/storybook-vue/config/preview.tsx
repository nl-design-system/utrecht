import { withTests } from '@storybook/addon-jest';
import { Preview } from '@storybook/vue3-vite';
import { Document } from '@utrecht/component-library-vue';
import results from '@utrecht/component-library-vue/dist/.jest-test-results.json';
import { addonStatus } from '@utrecht/storybook-helpers/dist/addon-status';
import { addonViewport } from '@utrecht/storybook-helpers/dist/addon-viewport';
import '@utrecht/storybook-helpers/dist/font-family.js';
import { defineCustomElements } from '@utrecht/web-component-library-stencil/loader';
import '@utrecht/component-library-vue/dist/style.css';
import '@utrecht/design-tokens/dist/index.css';
import '@utrecht/storybook-helpers/src/storybook-docs.scss';
import '@nl-design-system-unstable/amsterdam-design-tokens/dist/index.css';
import '@nl-design-system-unstable/rotterdam-design-tokens/dist/index.css';
import '@gemeente-denhaag/design-tokens-components/dist/theme/index.css';

defineCustomElements();

const preview: Preview = {
  decorators: [
    (story: any) => ({
      components: { Document, story },
      template: '<Document class="utrecht-theme"><story /></Document>',
    }),
    withTests({ results }),
  ],
  parameters: {
    ...addonStatus,
    ...addonViewport,
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    docs: {
      // Use our custom document component for docs
      codePanel: true,
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
    options: {
      storySort: {
        method: 'alphabetical',
        order: ['Vue.js Component', ['README', 'Changelog']],
      },
    },
  },
};

export default preview;
