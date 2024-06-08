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
  spellcheck: {
    description: 'Spellcheck',
    control: { type: 'select' },
    options: ['', 'false', 'true'],
  },
  textContent: {
    description: 'Set the value of the Text area',
    control: 'text',
  },
};

export const defaultArgs = {
  dir: 'auto',
  disabled: false,
  focus: false,
  hover: false,
  invalid: false,
  placeholder: '',
  readOnly: false,
  required: false,
  spellcheck: '',
  textContent: '',
};

export const exampleArgs = {
  textContent: 'The Quick Brown Fox Jumps Over The Lazy Dog',
};

export const Textarea = ({
  dir = defaultArgs.disabled,
  disabled = defaultArgs.disabled,
  focus = defaultArgs.focus,
  hover = defaultArgs.hover,
  invalid = defaultArgs.invalid,
  placeholder = defaultArgs.placeholder,
  readOnly = defaultArgs.readOnly,
  required = defaultArgs.required,
  spellcheck = defaultArgs.spellcheck,
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
    defaultValue={textContent}
    dir={dir || null}
    disabled={disabled || null}
    aria-invalid={invalid || null}
    placeholder={placeholder || null}
    readOnly={readOnly || null}
    spellcheck={spellcheck || null}
    required={required || null}
  ></textarea>
);

export const arabicDecorator = (Story) => (
  <div dir="rtl" lang="ar">
    {Story()}
  </div>
);

export default Textarea;
