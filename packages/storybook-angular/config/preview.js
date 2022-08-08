import { setCompodocJson } from '@storybook/addon-docs/angular';
import { componentWrapperDecorator } from '@storybook/angular';
import docJson from '../tmp/documentation.json';

setCompodocJson(docJson);

export const decorators = [
  componentWrapperDecorator((story) => `<div class="utrecht-document utrecht-theme">${story}</div>`),
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
};
