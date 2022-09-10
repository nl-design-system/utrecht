/**
 * @license EUPL-1.2
 * Copyright (c) 2020-2022 Gemeente Utrecht
 * Copyright (c) 2020-2022 Frameless B.V.
 */

import React from 'react';

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

export const defaultArgs = {
  busy: false,
  disabled: false,
  textContent: '',
  type: '',
};

export const exampleArgs = {
  textContent: 'Read more...',
};
export const Button = ({
  appearance = defaultArgs.appearance,
  busy = defaultArgs.busy,
  disabled = defaultArgs.disabled,
  textContent = defaultArgs.textContent,
  type = defaultArgs.type,
}) => (
  <utrecht-button appearance={appearance} busy={busy || null} disabled={disabled || null} type={type || null}>
    {textContent}
  </utrecht-button>
);

export default Button;
