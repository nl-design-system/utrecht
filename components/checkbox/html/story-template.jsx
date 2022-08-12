/**
 * @license EUPL-1.2
 * Copyright (c) 2020-2022 Gemeente Utrecht
 * Copyright (c) 2020-2022 Frameless B.V.
 */

import React from 'react';

export const argTypes = {
  checked: {
    description: 'Checked',
    control: 'boolean',
  },
  disabled: {
    description: 'Disabled',
    control: 'boolean',
  },
  invalid: {
    description: 'Invalid',
    control: 'boolean',
  },
  required: {
    description: 'Required',
    control: 'boolean',
  },
  value: {
    description: 'Set the value of the text box',
    control: 'text',
  },
};

export const defaultArgs = {
  checked: false,
  disabled: false,
  invalid: false,
  required: false,
  value: '',
};

export const Checkbox = ({ checked = false, disabled = false, invalid = false, required = false, value = '' }) => (
  <div className="utrecht-html">
    <input
      type="checkbox"
      checked={checked}
      ariaInvalid={invalid}
      disabled={disabled}
      required={required}
      value={value}
    />
  </div>
);
