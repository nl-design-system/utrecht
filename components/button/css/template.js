/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Gemeente Utrecht
 * Copyright (c) 2021 Robbert Broersma
 */

import clsx from 'clsx';

export const defaultArgs = {
  active: false,
  appearance: 'button',
  busy: false,
  disabled: false,
  focus: false,
  focusVisible: false,
  hover: false,
  textContent: '',
  type: 'button',
};

export const argTypes = {
  active: {
    description: 'Active',
    control: 'boolean',
  },
  appearance: {
    description: 'Appearance',
    control: { type: 'select' },
    options: ['', 'button', 'primary-action-button', 'secondary-action-button', 'subtle-button'],
  },
  busy: {
    description: 'Busy',
    control: 'boolean',
  },
  disabled: {
    description: 'Disabled',
    control: 'boolean',
  },
  focus: {
    description: 'Focus',
    control: 'boolean',
  },
  focusVisible: {
    description: 'Focus visible',
    control: 'boolean',
  },
  hover: {
    description: 'Hover',
    control: 'boolean',
  },
  textContent: {
    description: 'Button text',
    control: 'text',
  },
  type: {
    control: { type: 'select' },
    options: ['', 'button', 'reset', 'submit'],
  },
};

export const Button = ({
  active = false,
  appearance = null,
  busy = false,
  disabled = false,
  focus = false,
  focusVisible = false,
  hover = false,
  textContent = '',
  type = 'button',
}) =>
  `<button class="${clsx('utrecht-button', {
    'utrecht-button--active': active,
    'utrecht-button--busy': busy,
    'utrecht-button--hover': hover,
    'utrecht-button--focus': focus,
    'utrecht-button--focus-visible': focusVisible,
    'utrecht-button--disabled': disabled,
    'utrecht-button--primary-action': appearance === 'primary-action-button',
    'utrecht-button--secondary-action': appearance === 'secondary-action-button',
    'utrecht-button--subtle': appearance === 'subtle-button',
  })}"${disabled ? ' aria-disabled="true"' : ''} type="${type}">${textContent}</button>`;
