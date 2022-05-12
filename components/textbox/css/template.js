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
  placeholder: '',
  value: '',
};

export const Textbox = ({
  disabled = false,
  focus = false,
  invalid = false,
  placeholder = '',
  readOnly = false,
  required = false,
  value = '',
}) =>
  `<input class="${clsx(
    'utrecht-textbox',
    'utrecht-textbox--html-input',
    disabled && 'utrecht-textbox--disabled',
    focus && 'utrecht-textbox--focus utrecht-textbox--focus-visible',
    invalid && 'utrecht-textbox--invalid',
    readOnly && 'utrecht-textbox--readonly',
    required && 'utrecht-textbox--required',
  )}"${disabled ? ' disabled' : ''}${invalid ? ' aria-invalid="true"' : ''}${
    placeholder ? ` placeholder="${placeholder}"` : ''
  }${readOnly ? ' readonly' : ''}${required ? ' required' : ''} value="${value}">`;
