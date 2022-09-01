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
  readOnly: {
    description: 'Read-only',
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
  disabled: false,
  focus: false,
  invalid: false,
  readOnly: false,
  required: false,
  placeholder: '',
  value: '',
};

export const exampleArgs = { value: 'The Quick Brown Fox Jumps Over The Lazy Dog' };

export const Textbox = ({
  disabled = defaultArgs.disabled,
  focus = defaultArgs.focus,
  invalid = defaultArgs.invalid,
  placeholder = defaultArgs.placeholder,
  readOnly = defaultArgs.readOnly,
  required = defaultArgs.required,
  value = defaultArgs.value,
}) => (
  <input
    className={clsx(
      'utrecht-textbox',
      'utrecht-textbox--html-input',
      disabled && 'utrecht-textbox--disabled',
      focus && 'utrecht-textbox--focus utrecht-textbox--focus-visible',
      invalid && 'utrecht-textbox--invalid',
      readOnly && 'utrecht-textbox--readonly',
      required && 'utrecht-textbox--required',
    )}
    disabled={disabled || null}
    aria-invalid={invalid || null}
    placeholder={placeholder || null}
    readonly={readOnly || null}
    required={required || null}
    value={value}
  />
);

export default Textbox;
