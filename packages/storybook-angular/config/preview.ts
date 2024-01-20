/* eslint-env node */
import { setCompodocJson } from '@storybook/addon-docs/angular';
import { withTests } from '@storybook/addon-jest';
import { componentWrapperDecorator } from '@storybook/angular';
import type { Preview } from '@storybook/angular';
import { addonStatus } from '@utrecht/storybook-helpers/dist/addon-status';
import { addonViewport } from '@utrecht/storybook-helpers/dist/addon-viewport';
import results from '../../component-library-angular/dist/.jest-test-results.json';
import docJson from '../tmp/documentation.json';

setCompodocJson(docJson);

const preview: Preview = {
  decorators: [
    componentWrapperDecorator((story) => `<div class="utrecht-document utrecht-theme">${story}</div>`),
    withTests({ results }),
  ],
  parameters: {
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
    },
    ...addonStatus,
    ...addonViewport,
  },
};

export default preview;
