/**
 * @license EUPL-1.2
 * Copyright (c) 2022 Gemeente Utrecht
 * Copyright (c) 2022 Frameless B.V.
 */
import React from 'react';

export const argTypes = {
  autoComplete: {
    description: 'Autocomplete type',
    control: 'text',
  },
  disabled: {
    description: 'Disabled',
    control: 'boolean',
  },
  invalid: {
    description: 'Invalid',
    control: 'boolean',
  },
  min: {
    description: 'Minimum',
    control: 'number',
  },
  max: {
    description: 'Maximum',
    control: 'number',
  },
  pattern: {
    description: 'Pattern',
    control: 'text',
  },
  placeholder: {
    description: 'Placeholder',
    control: 'text',
  },
  readOnly: {
    description: 'Read-only',
    control: 'boolean',
  },
  required: {
    description: 'Required',
    control: 'boolean',
  },
  type: {
    description: 'Type',
    control: 'select',
    options: ['', 'email', 'number', 'password', 'search', 'tel', 'text', 'url'],
  },
  value: {
    description: 'Set the value of the text box',
    control: 'text',
  },
};

export const defaultArgs = {
  autoComplete: null,
  disabled: false,
  invalid: false,
  min: '',
  max: '',
  pattern: '',
  placeholder: '',
  readOnly: false,
  required: false,
  type: 'text',
  value: '',
};

export const exampleArgs = {
  value: 'The Quick Brown Fox Jumps Over The Lazy Dog',
};

export const Textbox = ({
  autoComplete = defaultArgs.autoComplete,
  disabled = defaultArgs.disabled,
  invalid = defaultArgs.invalid,
  min = defaultArgs.min,
  max = defaultArgs.max,
  pattern = defaultArgs.pattern,
  placeholder = defaultArgs.placeholder,
  readOnly = defaultArgs.readOnly,
  required = defaultArgs.required,
  type = defaultArgs.type,
  value = defaultArgs.value,
}) => (
  <div className="utrecht-html">
    <input
      type={type}
      aria-invalid={invalid || null}
      disabled={disabled || null}
      min={min || null}
      max={max || null}
      patter={pattern || null}
      placeholder={placeholder || null}
      required={required || null}
      readOnly={readOnly || null}
      value={value}
      autoComplete={autoComplete || null}
    />
  </div>
);

export default Textbox;
