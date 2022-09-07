/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Robbert Broersma
 */

import parse from 'html-react-parser';
import React from 'react';

export const argTypes = {
  innerHTML: {
    description: 'Set the HTML content of the heading group',
    control: 'text',
  },
};

export const defaultArgs = {
  innerHTML: '',
};

export const exampleArgs = {
  innerHTML: `
    <h1 class="utrecht-heading-1">The Quick Brown Fox Jumps Over The Lazy Dog</h1>
    <p class="utrecht-paragraph">The Quick Brown Fox Jumps Over The Lazy Dog</p>
`,
};

export const HeadingGroup = ({ innerHTML = defaultArgs.innerHTML, children }) => (
  <hgroup className="utrecht-heading-group">
    {children}
    {innerHTML ? parse(innerHTML) : undefined}
  </hgroup>
);
