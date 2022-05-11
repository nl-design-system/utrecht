/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Robbert Broersma
 */

import clsx from 'clsx';

export const defaultArgs = {
  checked: false,
  disabled: false,
  focus: false,
  hover: false,
};

export const FormToggle = ({ checked = false, disabled = false, hover = false, focus = false }) =>
  `<div class="${clsx(
    'utrecht-form-toggle',
    checked && 'utrecht-form-toggle--checked',
    !checked && 'utrecht-form-toggle--not-checked',
    disabled && 'utrecht-form-toggle--disabled',
    focus && 'utrecht-form-toggle--focus',
    hover && 'utrecht-form-toggle--hover',
  )}" role="switch" tabindex="0"${checked ? ' aria-checked="true"' : ''}${disabled ? ' aria-disabled="true"' : ''}>
  <div class="${clsx(
    'utrecht-form-toggle__track',
    checked && 'utrecht-form-toggle__track--checked',
    !checked && 'utrecht-form-toggle__track--not-checked',
    disabled && 'utrecht-form-toggle__track--disabled',
  )}">
    <div class="${clsx(
      'utrecht-form-toggle__thumb',
      checked && 'utrecht-form-toggle__thumb--checked',
      !checked && 'utrecht-form-toggle__thumb--not-checked',
      disabled && 'utrecht-form-toggle__thumb--disabled',
    )}"></div>
  </div>
</div>`;

export const FormToggleCheckbox = ({ checked = false, disabled = false, id }) =>
  `<div class="${clsx('utrecht-form-toggle', 'utrecht-form-toggle--html-checkbox')}">
  <input id="${id}" type="checkbox" class="utrecht-form-toggle__checkbox"${checked ? ' checked' : ''}${
    disabled ? ' disabled' : ''
  }>
  <label for="${id}" class="${clsx('utrecht-form-toggle__track')}">
    <div class="${clsx('utrecht-form-toggle__thumb')}"></div>
  </label>
</div>`;
