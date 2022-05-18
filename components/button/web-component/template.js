/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Gemeente Utrecht
 * Copyright (c) 2021 Robbert Broersma
 */

export const defaultArgs = {
  busy: false,
  disabled: false,
  textContent: '',
  type: '',
};

export const argTypes = {
  appearance: {
    description: 'Appearance',
    control: { type: 'select' },
    options: ['', 'button', 'primary-action-button', 'secondary-action-button', 'subtle-button'],
  },
  busy: {
    description: 'Busy',
    control: 'boolean',
  },
  disabled: {
    description: 'Disabled',
    control: 'boolean',
  },
  textContent: {
    description: 'Button text',
    control: 'text',
  },
  type: {
    description: 'Type',
    type: {
      name: 'enum',
    },
    options: ['', 'button', 'reset', 'submit'],
  },
};

export const Button = ({ appearance = '', busy = false, disabled = false, textContent = '', type = '' }) =>
  `<utrecht-button${appearance ? ` appearance="${appearance}"` : ''}${busy ? ' busy="true"' : ''}${
    disabled ? ' disabled' : ''
  }${type ? ` type="${type}"` : ''}>${textContent}</utrecht-button>`;
