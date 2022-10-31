/**
 * @license EUPL-1.2
 * Copyright (c) 2020-2022 Gemeente Utrecht
 * Copyright (c) 2020-2022 Frameless B.V.
 */

import clsx from 'clsx';
import React from 'react';

export const argTypes = {
  checked: {
    description: 'Checked',
    control: 'boolean',
    table: {
      category: 'HTML attribute',
      defaultValue: { summary: false },
    },
  },
  disabled: {
    description: 'Disabled',
    control: 'boolean',
    table: {
      category: 'HTML attribute',
      defaultValue: { summary: false },
    },
  },
  id: {
    description: 'ID',
    control: 'text',
    table: {
      category: 'HTML attribute',
      defaultValue: { summary: '' },
    },
  },
  indeterminate: {
    name: 'indeterminate',
    type: { name: 'boolean', required: false },
    table: {
      category: 'HTML attribute',
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
  name: {
    description: 'Name',
    control: 'text',
    table: {
      category: 'HTML attribute',
      defaultValue: { summary: '' },
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
    description: 'Value',
    control: 'text',
    table: {
      category: 'HTML attribute',
      defaultValue: { summary: '' },
    },
  },
};

export const defaultArgs = {
  checked: false,
  disabled: false,
  id: '',
  indeterminate: false,
  invalid: false,
  name: '',
  required: false,
  value: '',
};

export const Checkbox = ({
  checked = defaultArgs.checked,
  className,
  custom = false,
  disabled = defaultArgs.disabled,
  id = defaultArgs.id,
  indeterminate = defaultArgs.indeterminate,
  invalid = defaultArgs.invalid,
  name = defaultArgs.name,
  required = defaultArgs.required,
  value = defaultArgs.value,
  ...restProps
}) => (
  <input
    aria-invalid={invalid || undefined}
    className={clsx(
      'utrecht-checkbox',
      'utrecht-checkbox--html-input',
      custom && 'utrecht-checkbox--custom',
      checked && 'utrecht-checkbox--checked',
      disabled && 'utrecht-checkbox--disabled',
      className,
    )}
    defaultChecked={checked}
    disabled={disabled}
    id={id || undefined}
    indeterminate={!!indeterminate}
    name={name || undefined}
    required={!!required}
    type="checkbox"
    value={value || undefined}
    {...restProps}
  />
);

export default Checkbox;
