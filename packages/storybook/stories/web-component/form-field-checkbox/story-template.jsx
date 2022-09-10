/**
 * @license EUPL-1.2
 * Copyright (c) 2022 Gemeente Utrecht
 * Copyright (c) 2022 Frameless B.V.
 */
import React from 'react';

export const argTypes = {
  checked: {
    description: 'Checked',
    control: 'boolean',
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
  required: {
    description: 'Required',
    control: 'boolean',
  },
};

export const defaultArgs = {
  checked: false,
  disabled: false,
  invalid: false,
  label: '',
  required: false,
};

export const exampleArgs = {
  label: 'I agree',
};

export const FormFieldCheckbox = ({
  checked = defaultArgs.checked,
  disabled = defaultArgs.disabled,
  invalid = defaultArgs.invalid,
  label = defaultArgs.label,
  required = defaultArgs.required,
}) => (
  <utrecht-form-field-checkbox
    checked={checked || null}
    disabled={disabled || null}
    invalid={invalid || null}
    required={required || null}
  >
    {label}
  </utrecht-form-field-checkbox>
);

export default FormFieldCheckbox;
