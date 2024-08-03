/**
 * @license EUPL-1.2
 * Copyright (c) 2022 Gemeente Utrecht
 * Copyright (c) 2022 Frameless B.V.
 */
import { clsx } from 'clsx';
import React from 'react';

export const argTypes = {
  autoComplete: {
    description: 'Autocomplete',
    control: 'select',
    options: [
      '',
      'additional-name',
      'address-level1',
      'address-level2',
      'address-level3',
      'address-level4',
      'address-line1',
      'address-line2',
      'address-line3',
      'bday',
      'bday-day',
      'bday-month',
      'bday-year',
      'cc-additional-name',
      'cc-csc',
      'cc-exp',
      'cc-exp-month',
      'cc-exp-year',
      'cc-family-name',
      'cc-given-name',
      'cc-name',
      'cc-number',
      'cc-type',
      'country',
      'country-name',
      'current-password',
      'email',
      'family-name',
      'fax',
      'given-name',
      'home',
      'honorific-prefix',
      'honorific-suffix',
      'impp',
      'language',
      'mobile',
      'name',
      'new-password',
      'nickname',
      'one-time-code',
      'organization',
      'organization-title',
      'pager',
      'photo',
      'postal-code',
      'sex',
      'street-address',
      'tel',
      'tel-area-code',
      'tel-country-code',
      'tel-extension',
      'tel-local',
      'tel-local-prefix',
      'tel-local-suffix',
      'tel-national',
      'transaction-amount',
      'transaction-currency',
      'url',
      'username',
      'work',
    ],
  },
  dir: {
    description: 'Direction',
    control: 'select',
    options: ['', 'auto', 'ltr', 'rtl'],
  },
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
  placeholder: {
    description: 'Set the text of the placeholder',
    control: 'text',
  },
  placeholderDir: {
    description: 'Placeholder direction',
    control: 'select',
    options: ['', 'auto', 'ltr', 'rtl'],
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
  autoComplete: '',
  dir: 'auto',
  disabled: false,
  focus: false,
  invalid: false,
  readOnly: false,
  required: false,
  placeholder: '',
  spellcheck: null,
  type: '',
  value: '',
  minLength: 0,
};

export const exampleArgs = { value: 'The Quick Brown Fox Jumps Over The Lazy Dog' };

export const Textbox = ({
  autoComplete = defaultArgs.autoComplete,
  dir = defaultArgs.dir,
  disabled = defaultArgs.disabled,
  focus = defaultArgs.focus,
  invalid = defaultArgs.invalid,
  placeholder = defaultArgs.placeholder,
  placeholderDir = defaultArgs.placeholderDir,
  readOnly = defaultArgs.readOnly,
  required = defaultArgs.required,
  spellcheck = defaultArgs.spellcheck,
  type = defaultArgs.type,
  value = defaultArgs.value,
  minLength = defaultArgs.minLength,
  className,
  ...restProps
}) => (
  <input
    {...restProps}
    className={clsx(
      'utrecht-textbox',
      'utrecht-textbox--html-input',
      disabled && 'utrecht-textbox--disabled',
      focus && 'utrecht-textbox--focus utrecht-textbox--focus-visible',
      invalid && 'utrecht-textbox--invalid',
      readOnly && 'utrecht-textbox--readonly',
      required && 'utrecht-textbox--required',
      placeholderDir === 'ltr' && 'utrecht-textbox--placeholder-ltr',
      placeholderDir === 'rtl' && 'utrecht-textbox--placeholder-rtl',
      className,
    )}
    minLength={!minLength || (minLength === 1 && required) ? undefined : minLength}
    autoComplete={autoComplete || null}
    disabled={disabled || null}
    aria-invalid={invalid || null}
    dir={dir || null}
    placeholder={placeholder || null}
    readOnly={readOnly || null}
    required={required || null}
    spellCheck={spellcheck || null}
    type={type || null}
    defaultValue={value || null}
  />
);

export default Textbox;
