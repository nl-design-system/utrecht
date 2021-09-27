/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Gemeente Utrecht
 * Copyright (c) 2021 Robbert Broersma
 */

import clsx from 'clsx';

export const defaultArgs = {
  action: '',
  active: false,
  busy: false,
  disabled: false,
  focus: false,
  hover: false,
  textContent: '',
  type: 'button',
};

export const Button = ({
  action = '',
  active = false,
  busy = false,
  disabled = false,
  focus = false,
  hover = false,
  textContent = '',
  type = 'button',
}) =>
  `<button class="${clsx('utrecht-button', {
    'utrecht-button--active': active,
    'utrecht-button--busy': busy,
    'utrecht-button--hover': hover,
    'utrecht-button--focus': focus,
    'utrecht-button--disabled': disabled,
    'utrecht-button--primary-action': action === 'primary',
    'utrecht-button--secondary-action': action === 'secondary',
    'utrecht-button--tertiary-action': action === 'tertiary',
  })}"${disabled ? ' aria-disabled="true"' : ''} type="${type}">${textContent}</button>`;
