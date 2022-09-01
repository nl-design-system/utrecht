/**
 * @license EUPL-1.2
 * Copyright (c) 2022 Gemeente Utrecht
 * Copyright (c) 2022 Frameless B.V.
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

export const RadioButton = ({
  checked = defaultArgs.checked,
  disabled = defaultArgs.disabled,
  invalid = defaultArgs.invalid,
  required = defaultArgs.required,
  value = defaultArgs.value,
}) => (
  <div className="utrecht-html">
    <input
      type="radio"
      checked={checked || null}
      aria-invalid={invalid || null}
      disabled={disabled || null}
      required={required || null}
      value={value}
    />
  </div>
);

export default RadioButton;
