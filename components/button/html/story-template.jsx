/**
 * @license EUPL-1.2
 * Copyright (c) 2020-2022 Gemeente Utrecht
 * Copyright (c) 2020-2022 Frameless B.V.
 */

import React from 'react';

export const argTypes = {
  busy: {
    description: 'Busy',
    control: 'boolean',
  },
  disabled: {
    description: 'Disabled',
    control: 'boolean',
  },
  focusable: {
    description: 'Focusable',
    control: 'boolean',
  },
  textContent: {
    description: 'Content of the button',
    control: 'text',
  },
  type: {
    description: 'Type',
    control: { type: 'select' },
    options: ['', 'button', 'reset', 'submit'],
  },
};

export const decorators = [(story) => <div class="utrecht-html">${story()}</div>];

export const defaultArgs = {
  busy: false,
  disabled: false,
  focusable: false,
  textContent: 'The Quick Brown Fox Jumps Over The Lazy Dog',
  type: 'button',
};

export const Button = ({ busy = false, disabled = false, focusable = false, textContent = '', type = 'button' }) => (
  <button type={type} ariaBusy={busy} ariaDisabled={disabled && focusable} disabled={disabled && !focusable}>
    {textContent}
  </button>
);

export default Button;
