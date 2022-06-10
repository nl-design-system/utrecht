/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Robbert Broersma
 */

import clsx from 'clsx';

export const defaultArgs = {
  checked: false,
  disabled: false,
  active: false,
  focus: false,
  invalid: false,
};

export const CustomRadioButton = ({
  checked = false,
  disabled = false,
  active = false,
  focus = false,
  invalid = false,
}) =>
  `<input autofocus="true" type="radio"${checked ? ' checked' : ''}${disabled ? ' disabled' : ''} class="${clsx(
    'utrecht-custom-radio-button',
    checked && 'utrecht-custom-radio-button--checked',
    disabled && 'utrecht-custom-radio-button--disabled',
    active && 'utrecht-custom-radio-button--active',
    focus && 'utrecht-custom-radio-button--focus',
    invalid && 'utrecht-custom-radio-button--invalid',
  )}">`;
