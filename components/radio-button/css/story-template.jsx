/**
 * @license EUPL-1.2
 * Copyright (c) 2020-2022 Gemeente Utrecht
 * Copyright (c) 2020-2022 Frameless B.V.
 */

import clsx from 'clsx';
import React from 'react';

export const argTypes = {
  checked: {
    description: 'Checked',
    control: 'boolean',
  },
  disabled: {
    description: 'Disabled',
    control: 'boolean',
  },
  active: {
    description: 'Active',
    control: 'boolean',
  },
  hover: {
    description: 'Hover',
    control: 'boolean',
  },
  focus: {
    description: 'Focus',
    control: 'boolean',
  },
  invalid: {
    description: 'Invalid',
    control: 'boolean',
  },
};

export const defaultArgs = {
  checked: false,
  disabled: false,
  active: false,
  hover: false,
  focus: false,
  invalid: false,
};

export const exampleArgs = {};

export const RadioButton = ({
  checked = defaultArgs.checked,
  disabled = defaultArgs.disabled,
  active = defaultArgs.active,
  hover = defaultArgs.hover,
  focus = defaultArgs.focus,
  invalid = defaultArgs.invalid,
}) => (
  <input
    type="radio"
    defaultChecked={checked || null}
    disabled={disabled || null}
    className={clsx(
      'utrecht-radio-button',
      checked && 'utrecht-radio-button--checked',
      disabled && 'utrecht-radio-button--disabled',
      active && 'utrecht-radio-button--active',
      hover && 'utrecht-radio-button--hover',
      focus && 'utrecht-radio-button--focus',
      invalid && 'utrecht-radio-button--invalid',
    )}
  />
);

export default RadioButton;
