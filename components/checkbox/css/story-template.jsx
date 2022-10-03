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
};

export const defaultArgs = {
  checked: false,
  disabled: false,
};

export const Checkbox = ({ checked = defaultArgs.checked, disabled = defaultArgs.disabled }) => (
  <input
    type="checkbox"
    defaultChecked={checked}
    disabled={disabled}
    className={clsx(
      'utrecht-checkbox',
      'utrecht-checkbox--html-input',
      checked && 'utrecht-checkbox--checked',
      disabled && 'utrecht-checkbox--disabled',
    )}
  />
);

export default Checkbox;
