/*
 * @license EUPL-1.2
 * Copyright (c) 2020-2022 Gemeente Utrecht
 * Copyright (c) 2020-2022 Frameless B.V.
 */

import clsx from 'clsx';
import React from 'react';

export const argTypes = {
  textContent: {
    description: 'Set the content of the label',
    control: 'text',
  },
  type: {
    description: 'Set the type of the form control',
    options: ['default', 'checkbox', 'radio'],
    control: { type: 'radio' },
  },
};

export const defaultArgs = {
  checked: false,
  disabled: false,
  textContent: '',
  type: null,
};

export const exampleArgs = {
  textContent: 'Username',
};

export const FormLabel = ({
  checked = defaultArgs.checked,
  disabled = defaultArgs.disabled,
  textContent = defaultArgs.textContent,
  type = defaultArgs.type,
}) => (
  <span
    className={clsx(
      'utrecht-form-label',
      type === 'checkbox' && 'utrecht-form-label--checkbox',
      checked && 'utrecht-form-label--checked',
      disabled && 'utrecht-form-label--disabled',
      type === 'radio' && 'utrecht-form-label--radio',
    )}
  >
    {textContent}
  </span>
);

export default FormLabel;
