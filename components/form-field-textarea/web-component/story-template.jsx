/**
 * @license EUPL-1.2
 * Copyright (c) 2020-2022 Gemeente Utrecht
 * Copyright (c) 2020-2022 Frameless B.V.
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
  label: {
    description: 'Set the content of the label',
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
};

export const defaultArgs = {
  disabled: false,
  invalid: false,
  label: '',
  placeholder: '',
  readOnly: false,
  required: false,
  value: '',
};

export const exampleArgs = {
  label: 'Message',
  value: '',
};

export const FormFieldTextarea = ({
  disabled = defaultArgs.disabled,
  invalid = defaultArgs.invalid,
  label = defaultArgs.label,
  placeholder = defaultArgs.placeholder,
  readOnly = defaultArgs.readOnly,
  required = defaultArgs.required,
  value = defaultArgs.value,
}) => (
  <utrecht-form-field-textarea
    disabled={disabled || null}
    invalid={invalid || null}
    placeholder={placeholder || null}
    readOnly={readOnly || null}
    required={required || null}
    value={value}
  >
    {label}
  </utrecht-form-field-textarea>
);

export default FormFieldTextarea;
