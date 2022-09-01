/**
 * @license EUPL-1.2
 * Copyright (c) 2022 Gemeente Utrecht
 * Copyright (c) 2022 Frameless B.V.
 */
import clsx from 'clsx';
import React from 'react';

export const argTypes = {
  disabled: {
    description: 'Disabled',
    control: 'boolean',
  },
  focus: {
    description: 'Focus',
    control: 'boolean',
  },
  invalid: {
    description: 'Invalid',
    control: 'boolean',
  },
  options: {
    description: 'Options',
    type: {
      name: 'array',
      required: true,
    },
  },
  required: {
    description: 'Required',
    control: 'boolean',
  },
};

export const defaultArgs = {
  disabled: false,
  focus: false,
  invalid: false,
  options: [],
  required: false,
};

export const exampleArgs = {
  options: [
    { value: '1', label: 'Option #1' },
    { value: '2', label: 'Option #2', selected: true },
    { value: '3', label: 'Option #3' },
  ],
};

export const Select = ({
  disabled = defaultArgs.disabled,
  focus = defaultArgs.focus,
  invalid = defaultArgs.invalid,
  options = defaultArgs.options,
  required = defaultArgs.required,
}) => (
  <select
    aria-invalid={invalid || null}
    disabled={disabled || null}
    required={required || null}
    className={clsx('utrecht-select', 'utrecht-select--html-select', {
      'utrecht-select--disabled': disabled,
      'utrecht-select--focus': focus,
      'utrecht-select--focus-visible': focus,
      'utrecht-select--invalid': invalid,
      'utrecht-select--required': required,
    })}
  >
    {options.map(({ label, selected, value }) => (
      <option selected={selected || null} value={value || null}>
        {label}
      </option>
    ))}
  </select>
);

export default Select;
