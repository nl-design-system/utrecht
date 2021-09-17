/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Robbert Broersma
 */

import clsx from 'clsx';

export const defaultArgs = {
  checked: false,
  disabled: false,
};

export const Checkbox = ({ checked = false, disabled = false }) =>
  `<input type="checkbox"${checked ? ' checked' : ''}${disabled ? ' disabled' : ''} class="${clsx(
    'utrecht-checkbox',
    checked && 'utrecht-checkbox--checked',
    disabled && 'utrecht-checkbox--disabled',
  )}">`;
