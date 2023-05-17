// @ts-check
import { setCompodocJson } from '@storybook/addon-docs/angular';
import { withTests } from '@storybook/addon-jest';
import { componentWrapperDecorator } from '@storybook/angular';
import results from '@utrecht/component-library-angular/dist/.jest-test-results.json';
import { addonStatus } from '@utrecht/storybook-helpers/src/addon-status';
import { addonViewport } from '@utrecht/storybook-helpers/src/addon-viewport';
import docJson from '../tmp/documentation.json';
setCompodocJson(docJson);

export const decorators = [
  componentWrapperDecorator((story) => `<div class="utrecht-document utrecht-theme">${story}</div>`),
  withTests({ results }),
];

export const parameters = {
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
};
