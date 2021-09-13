/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Gemeente Utrecht
 * Copyright (c) 2021 Robbert Broersma
 */

import clsx from 'clsx';

export const defaultArgs = {
  disabled: false,
  focus: false,
  hover: false,
  textContent: '',
};

export const Button = ({ textContent = '', focus = false, hover = false, disabled = false }) =>
  `<button class="${clsx('utrecht-button', {
    'utrecht-button--hover': hover,
    'utrecht-button--focus': focus,
    'utrecht-button--disabled': disabled,
  })}"${disabled ? ' aria-disabled="true"' : ''}>${textContent}</button>`;
