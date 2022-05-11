/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Robbert Broersma
 */

import clsx from 'clsx';

export const defaultArgs = {
  checked: false,
  disabled: false,
  textContent: '',
  type: null,
};

export const FormLabel = ({ checked = false, disabled = false, textContent = '', type = null }) =>
  `<span class="${clsx(
    'utrecht-form-label',
    type === 'checkbox' && 'utrecht-form-label--checkbox',
    checked && 'utrecht-form-label--checked',
    disabled && 'utrecht-form-label--disabled',
    type === 'radio' && 'utrecht-form-label--radio',
  )}">${textContent}</span>`;
