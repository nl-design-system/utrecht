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
  indeterminate: {
    description: 'Indeterminate',
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

export const decorators = [
  (story) => (
    <form method="POST" action="#">
      {story()}
    </form>
  ),
];

export const defaultArgs = {
  checked: false,
  disabled: false,
  indeterminate: false,
  invalid: false,
  required: false,
  value: '',
};

export const CustomCheckbox = ({
  checked = false,
  disabled = false,
  indeterminate = false,
  invalid = false,
  required = false,
  value = '',
}) => (
  <utrecht-custom-checkbox
    checked={checked}
    disabled={disabled}
    indeterminate={indeterminate}
    invalid={invalid}
    required={required}
    value={value}
  ></utrecht-custom-checkbox>
);

export default CustomCheckbox;
