/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Robbert Broersma
 */

export const defaultArgs = {
  busy: false,
  disabled: false,
  focusable: false,
  textContent: '',
  type: 'button',
};

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

export const Button = ({ busy = false, disabled = false, focusable = false, textContent = '', type = 'button' }) =>
  `<button type="${type || 'button'}"${busy ? ' aria-busy="true"' : ''}${
    disabled ? (focusable ? ' aria-disabled="true"' : ' disabled') : ''
  }>${textContent}</button>`;
