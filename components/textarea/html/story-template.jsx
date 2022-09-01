/**
 * @license EUPL-1.2
 * Copyright (c) 2022 Gemeente Utrecht
 * Copyright (c) 2022 Frameless B.V.
 */
import React from 'react';

export const argTypes = {
  invalid: {
    description: 'Invalid',
    control: 'boolean',
  },
  readOnly: {
    description: 'Read-only',
    control: 'boolean',
  },
  disabled: {
    description: 'Disabled',
    control: 'boolean',
  },
  placeholder: {
    description: 'Placeholder',
    control: 'text',
  },
  required: {
    description: 'Required',
    control: 'boolean',
  },
  textContent: {
    description: 'Set the content of the textarea',
    control: 'text',
  },
};

export const defaultArgs = {
  disabled: false,
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
  invalid = defaultArgs.invalid,
  placeholder = defaultArgs.placeholder,
  readOnly = defaultArgs.readOnly,
  required = defaultArgs.required,
  textContent = defaultArgs.textContent,
}) => (
  <textarea
    className="utrecht-textarea"
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
