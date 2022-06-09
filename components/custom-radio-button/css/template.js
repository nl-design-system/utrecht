/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Robbert Broersma
 */

import clsx from 'clsx';

export const defaultArgs = {
  checked: false,
  disabled: false,
};

export const CustomRadioButton = ({ checked = false, disabled = false }) =>
  `<input type="radio"${checked ? ' checked' : ''}${disabled ? ' disabled' : ''} class="${clsx(
    'utrecht-custom-radio-button',
    'utrecht-custom-radio-button--html-input',
    checked && 'utrecht-custom-radio-button--checked',
    disabled && 'utrecht-custom-radio-button--disabled',
  )}">`;
