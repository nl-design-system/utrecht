/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Gemeente Utrecht
 * Copyright (c) 2021 Robbert Broersma
 */

import clsx from 'clsx';

export const defaultArgs = {
  busy: false,
  disabled: false,
  focus: false,
  hover: false,
  textContent: '',
  type: 'button',
};

export const Button = ({
  textContent = '',
  busy = false,
  focus = false,
  hover = false,
  disabled = false,
  type = 'button',
}) =>
  `<button class="${clsx('utrecht-button', {
    'utrecht-button--busy': busy,
    'utrecht-button--hover': hover,
    'utrecht-button--focus': focus,
    'utrecht-button--disabled': disabled,
  })}"${disabled ? ' aria-disabled="true"' : ''} type="${type}">${textContent}</button>`;
