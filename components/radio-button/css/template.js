/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Robbert Broersma
 */

import clsx from 'clsx';

export const defaultArgs = {
  checked: false,
  disabled: false,
};

export const RadioButton = ({ checked = false, disabled = false }) =>
  `<input type="radio"${checked ? ' checked' : ''}${disabled ? ' disabled' : ''} class="${clsx(
    'utrecht-radio-button',
    'utrecht-radio-button--html-input',
    checked && 'utrecht-radio-button--checked',
    disabled && 'utrecht-radio-button--disabled',
  )}">`;
