/**
 * @license EUPL-1.2
 * Copyright (c) 2022 Gemeente Utrecht
 * Copyright (c) 2022 Frameless B.V.
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
  invalid: false,
  name: '',
  required: false,
  value: '',
};

export const RadioButton = ({
  checked = defaultArgs.checked,
  className,
  custom = false,
  disabled = defaultArgs.disabled,
  id = defaultArgs.id,
  invalid = defaultArgs.invalid,
  name = defaultArgs.name,
  required = defaultArgs.required,
  value = defaultArgs.value,
  ...restProps
}) => (
  <input
    aria-invalid={invalid || null}
    className={clsx(
      'utrecht-radio-button',
      'utrecht-radio-button--html-input',
      checked && 'utrecht-radio-button--checked',
      custom && 'utrecht-radio-button--custom',
      disabled && 'utrecht-radio-button--disabled',
      className,
    )}
    defaultChecked={checked || null}
    disabled={disabled || null}
    id={id || null}
    name={name || null}
    required={required}
    type="radio"
    value={value || null}
    {...restProps}
  />
);

export default RadioButton;
