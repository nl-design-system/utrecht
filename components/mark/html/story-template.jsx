/**
 * @license EUPL-1.2
 * Copyright (c) 2020-2022 Gemeente Utrecht
 * Copyright (c) 2020-2022 Frameless B.V.
 */

import React from 'react';

export const argTypes = {
  textContent: {
    description: 'Set the text content',
    control: 'text',
  },
};

export const defaultArgs = {
  textContent: '',
};

export const exampleArgs = { textContent: 'The Quick Brown Fox Jumps Over The Lazy Dog' };

export const Mark = ({ children, textContent = defaultArgs.textContent }) => (
  <mark>
    {textContent}
    {children}
  </mark>
);
export default Mark;
