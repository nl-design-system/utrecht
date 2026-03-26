/* eslint-env node */
import { setCompodocJson } from '@storybook/addon-docs/angular';
import { componentWrapperDecorator } from '@storybook/angular';
import type { Preview } from '@storybook/angular';
import { addonStatus } from '@utrecht/storybook-helpers/dist/addon-status';
import { addonViewport } from '@utrecht/storybook-helpers/dist/addon-viewport';
import '@utrecht/storybook-helpers/src/font-family';
import docJson from '../tmp/documentation.json';

setCompodocJson(docJson);

const preview: Preview = {
  decorators: [componentWrapperDecorator((story) => `<div class="utrecht-root utrecht-theme">${story}</div>`)],
  parameters: {
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
    },
    options: {
      storySort: {
        method: 'alphabetical',
        order: ['Angular Component', ['README', 'Changelog']],
      },
    },
    ...addonStatus,
    ...addonViewport,
  },
};

export default preview;
