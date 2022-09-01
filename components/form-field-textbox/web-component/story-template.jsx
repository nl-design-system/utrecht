/**
 * @license EUPL-1.2
 * Copyright (c) 2020-2022 Gemeente Utrecht
 * Copyright (c) 2020-2022 Frameless B.V.
 */

import React from 'react';

export const argTypes = {
  autoComplete: {
    description: 'Autocomplete',
    control: { type: 'select' },
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
  disabled: {
    description: 'Disabled',
    control: 'boolean',
  },
  invalid: {
    description: 'Invalid',
    control: 'boolean',
  },
  label: {
    description: 'Set the content of the label',
    control: 'text',
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
  value: {
    description: 'Value',
    control: 'text',
  },
  type: {
    description: 'Type',
    control: { type: 'select' },
    options: ['', 'email', 'password', 'search', 'tel', 'text', 'url'],
  },
};

export const defaultArgs = {
  autoComplete: '',
  disabled: false,
  invalid: false,
  label: '',
  pattern: '',
  placeholder: '',
  readOnly: false,
  required: false,
  type: '',
  value: '',
};

export const exampleArgs = {
  label: 'Message',
  value: 'The Quick Brown Fox Jumps Over The Lazy Dog',
};

export const FormFieldTextbox = ({
  autoComplete = defaultArgs.autoComplete,
  disabled = defaultArgs.disabled,
  invalid = defaultArgs.invalid,
  label = defaultArgs.label,
  pattern = defaultArgs.pattern,
  placeholder = defaultArgs.placeholder,
  readOnly = defaultArgs.readOnly,
  required = defaultArgs.required,
  type = defaultArgs.type,
  value = defaultArgs.value,
  min,
  max,
}) => (
  <utrecht-form-field-textbox
    autoComplete={autoComplete || null}
    disabled={disabled || null}
    invalid={invalid || null}
    min={min || null}
    max={max || null}
    pattern={pattern || null}
    placeholder={placeholder || null}
    readOnly={readOnly || null}
    required={required || null}
    value={value}
    type={type || null}
  >
    {label}
  </utrecht-form-field-textbox>
);

export default FormFieldTextbox;
