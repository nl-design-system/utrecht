/**
 * @license EUPL-1.2
 * Copyright (c) 2020-2022 Gemeente Utrecht
 * Copyright (c) 2020-2022 Frameless B.V.
 */

import clsx from 'clsx';
import React from 'react';

export const argTypes = {
  label: {
    description: 'Set the content of the label',
    control: 'text',
  },
  id: {
    description: 'Set the id of the formfield',
    control: 'text',
  },
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
  required: {
    description: 'Required',
    control: 'boolean',
  },
};

export const defaultArgs = {
  label: '',
  id: 'id-ce0239e2',
  checked: false,
  disabled: false,
  invalid: false,
  required: false,
};

export const exampleArgs = {
  label: 'I agree',
  id: 'id-ce01459a4',
};

export const FormFieldCheckbox = ({
  label = defaultArgs.label,
  id = defaultArgs.id,
  checked = defaultArgs.checked,
  disabled = defaultArgs.disabled,
  invalid = defaultArgs.invalid,
  required = defaultArgs.required,
}) => (
  <div className="utrecht-form-field utrecht-form-field--checkbox utrecht-form-field--distanced">
    <input
      type="checkbox"
      className="utrecht-form-field__input utrecht-checkbox"
      id={id}
      checked={checked || null}
      disabled={disabled || null}
      aria-invalid={invalid || null}
      required={required || null}
    />
    <label
      className={clsx(
        'utrecht-form-field__label',
        'utrecht-form-field__label--checkbox',
        'utrecht-form-label',
        'utrecht-form-label--checkbox',
        disabled && 'utrecht-form-label--disabled',
      )}
      htmlFor={id}
    >
      {label}
    </label>
  </div>
);

export default FormFieldCheckbox;
