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
  textContent: {
    description: 'Set the value of the Text area',
    control: 'text',
  },
};

export const defaultArgs = {
  disabled: false,
  focus: false,
  hover: false,
  invalid: false,
  placeholder: '',
  readOnly: false,
  required: false,
  textContent: '',
};

export const exampleArgs = {
  textContent: 'The Quick Brown Fox Jumps Over The Lazy Dog',
};

export const Textarea = ({
  disabled = defaultArgs.disabled,
  focus = defaultArgs.focus,
  hover = defaultArgs.hover,
  invalid = defaultArgs.invalid,
  placeholder = defaultArgs.placeholder,
  readOnly = defaultArgs.readOnly,
  required = defaultArgs.required,
  textContent = defaultArgs.textContent,
}) => (
  <textarea
    className={clsx(
      'utrecht-textarea',
      'utrecht-textarea--html-textarea',
      disabled && 'utrecht-textarea--disabled',
      focus && 'utrecht-textarea--focus utrecht-textarea--focus-visible',
      hover && 'utrecht-textarea--hover',
      invalid && 'utrecht-textarea--invalid',
      readOnly && 'utrecht-textarea--readonly',
      required && 'utrecht-textarea--required',
    )}
    disabled={disabled || null}
    aria-invalid={invalid || null}
    placeholder={placeholder || null}
    readOnly={readOnly || null}
    required={required || null}
  >
    {textContent}
  </textarea>
);

export default Textarea;
