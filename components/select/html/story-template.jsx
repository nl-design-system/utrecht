/**
 * @license EUPL-1.2
 * Copyright (c) 2022 Gemeente Utrecht
 * Copyright (c) 2022 Frameless B.V.
 */
import React from 'react';

export const argTypes = {
  disabled: {
    description: 'Disabled',
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
  invalid: false,
  required: false,
  options: [],
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
  invalid = defaultArgs.invalid,
  options = defaultArgs.options,
  required = defaultArgs.required,
}) => (
  <section className="utrecht-html">
    <select
      aria-invalid={invalid || null}
      disabled={disabled || null}
      required={required || null}
      className="utrecht-select"
    >
      {options.map(({ label, selected, value }) => (
        <option selected={selected || null} value={value || null}>
          {label}
        </option>
      ))}
    </select>
  </section>
);

export default Select;
