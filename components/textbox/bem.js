/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Robbert Broersma
 */

import clsx from 'clsx';

export const defaultArgs = {
  disabled: false,
  focus: false,
  invalid: false,
  readOnly: false,
  required: false,
  value: '',
};

export const TextBox = ({
  disabled = false,
  focus = false,
  invalid = false,
  readOnly = false,
  required = false,
  value = '',
}) =>
  `<input class="${clsx(
    'utrecht-textbox',
    disabled && 'utrecht-textbox--disabled',
    focus && 'utrecht-textbox--focus',
    invalid && 'utrecht-textbox--invalid',
    readOnly && 'utrecht-textbox--readonly',
    required && 'utrecht-textbox--required',
  )}" value="${value}">`;
