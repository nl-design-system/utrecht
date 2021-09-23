/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Robbert Broersma
 */

import clsx from 'clsx';

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
}) =>
  `<span class="utrecht-custom-checkbox">
  <input type="checkbox"${checked ? ' checked' : ''}${disabled ? ' disabled' : ''}${required ? ' required' : ''}${
    value ? ` value="${value}"` : ''
  } class="utrecht-custom-checkbox__input">
  <span class="${clsx(
    'utrecht-custom-checkbox__box',
    active && 'utrecht-custom-checkbox__box--active',
    checked && 'utrecht-custom-checkbox__box--checked',
    !checked && 'utrecht-custom-checkbox__box--not-checked',
    disabled && 'utrecht-custom-checkbox__box--disabled',
    focus && 'utrecht-custom-checkbox__box--focus',
    invalid && 'utrecht-custom-checkbox__box--invalid',
    indeterminate && 'utrecht-custom-checkbox__box--indeterminate',
  )}">
  <utrecht-icon-checkmark class="utrecht-custom-checkbox__icon utrecht-custom-checkbox__icon--checked">✔</utrecht-icon-checkmark>
  <utrecht-icon-indeterminate class="utrecht-custom-checkbox__icon utrecht-custom-checkbox__icon--indeterminate">■</utrecht-icon-indeterminate>
  </span>
</span>`;
