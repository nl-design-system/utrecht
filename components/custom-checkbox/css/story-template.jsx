/**
 * @license EUPL-1.2
 * Copyright (c) 2020-2022 Gemeente Utrecht
 * Copyright (c) 2020-2022 Frameless B.V.
 */

import clsx from 'clsx';
import React from 'react';

export const argTypes = {
  active: {
    description: 'Active',
    control: 'boolean',
  },
  checked: {
    description: 'Checked',
    control: 'boolean',
  },
  disabled: {
    description: 'Disabled',
    control: 'boolean',
  },
  focus: {
    description: 'Focus',
    control: 'boolean',
  },
  indeterminate: {
    description: 'Indeterminate',
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
  value: {
    description: 'Set the value of the text box',
    control: 'text',
  },
};

export const decorators = [
  (story) => (
    <form method="POST" action="#">
      {story()}
    </form>
  ),
];

export const defaultArgs = {
  active: false,
  checked: false,
  disabled: false,
  focus: false,
  indeterminate: false,
  invalid: false,
  required: false,
  value: '',
};

export const CustomCheckbox = ({
  active = false,
  checked = false,
  disabled = false,
  focus = false,
  indeterminate = false,
  invalid = false,
  required = false,
  value = '',
}) => (
  <span class="utrecht-custom-checkbox">
    <input
      type="checkbox"
      checked={checked}
      disabled={disabled}
      value={value}
      required={required}
      className="utrecht-custom-checkbox__input"
    />
    <span
      className={clsx(
        'utrecht-custom-checkbox__box',
        active && 'utrecht-custom-checkbox__box--active',
        checked && 'utrecht-custom-checkbox__box--checked',
        !checked && 'utrecht-custom-checkbox__box--not-checked',
        disabled && 'utrecht-custom-checkbox__box--disabled',
        focus && 'utrecht-custom-checkbox__box--focus',
        invalid && 'utrecht-custom-checkbox__box--invalid',
        indeterminate && 'utrecht-custom-checkbox__box--indeterminate',
      )}
    >
      <utrecht-icon-checkmark class="utrecht-custom-checkbox__icon utrecht-custom-checkbox__icon--checked">
        ✔
      </utrecht-icon-checkmark>
      <utrecht-icon-indeterminate class="utrecht-custom-checkbox__icon utrecht-custom-checkbox__icon--indeterminate">
        ■
      </utrecht-icon-indeterminate>
    </span>
  </span>
);

export default CustomCheckbox;
