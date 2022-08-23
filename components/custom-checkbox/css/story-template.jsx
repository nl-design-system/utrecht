/**
 * @license EUPL-1.2
 * Copyright (c) 2020-2022 Gemeente Utrecht
 * Copyright (c) 2020-2022 Frameless B.V.
 */

import clsx from 'clsx';
import React from 'react';

export const argTypes = {
  checked: {
    name: 'checked',
    type: { name: 'boolean', required: false },
    table: {
      defaultValue: { summary: false },
      category: 'HTML attribute',
    },
  },
  disabled: {
    name: 'disabled',
    type: { name: 'boolean', required: false },
    table: {
      defaultValue: { summary: false },
      category: 'HTML attribute',
    },
  },
  indeterminate: {
    name: 'indeterminate',
    type: { name: 'boolean', required: false },
    table: {
      defaultValue: { summary: false },
    },
  },
  invalid: {
    name: 'invalid',
    type: { name: 'boolean', required: false },
    table: {
      defaultValue: { summary: false },
    },
  },
  required: {
    name: 'required',
    type: { name: 'boolean', required: false },
    table: {
      defaultValue: { summary: false },
      category: 'HTML attribute',
    },
  },
  value: {
    name: 'value',
    type: { name: 'string', required: false },
    table: {
      category: 'HTML attribute',
    },
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

export const exampleArgs = {
  value: 'I agree',
};

export const CustomCheckbox = ({
  checked = false,
  disabled = false,
  indeterminate = false,
  required = false,
  invalid = false,
  value = '',
}) => (
  <input
    type="checkbox"
    checked={checked}
    disabled={disabled}
    value={value}
    required={required}
    className={clsx(
      'utrecht-custom-checkbox',
      'utrecht-custom-checkbox--html-input',
      invalid && 'utrecht-custom-checkbox--invalid',
      indeterminate && 'utrecht-custom-checkbox--indeterminate',
    )}
  />
);

export default CustomCheckbox;
