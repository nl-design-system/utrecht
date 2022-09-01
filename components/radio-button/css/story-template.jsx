/**
 * @license EUPL-1.2
 * Copyright (c) 2022 Gemeente Utrecht
 * Copyright (c) 2022 Frameless B.V.
 */
import clsx from 'clsx';
import React from 'react';

export const argTypes = {
  checked: {
    description: 'Radio button checked',
    type: 'boolean',
  },
  disabled: {
    description: 'Radio button disabled',
    type: 'boolean',
  },
};

export const defaultArgs = {
  checked: false,
  disabled: false,
};

export const RadioButton = ({ checked = defaultArgs.checked, disabled = defaultArgs.disabled }) => (
  <input
    type="radio"
    checked={checked || null}
    disabled={disabled || null}
    className={clsx(
      'utrecht-radio-button',
      'utrecht-radio-button--html-input',
      checked && 'utrecht-radio-button--checked',
      disabled && 'utrecht-radio-button--disabled',
    )}
  />
);

export default RadioButton;
