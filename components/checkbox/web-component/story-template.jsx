/**
 * @license EUPL-1.2
 * Copyright (c) 2020-2022 Gemeente Utrecht
 * Copyright (c) 2020-2022 Frameless B.V.
 */

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
  value: {
    description: 'Set the value of the text box',
    control: 'text',
  },
};

export const defaultArgs = {
  checked: false,
  disabled: false,
  value: '',
};

export const exampleArgs = {
  value: 'I agree',
};

export const Checkbox = ({
  checked = defaultArgs.checked,
  disabled = defaultArgs.disabled,
  value = defaultArgs.value,
}) => <utrecht-checkbox checked={checked || null} disabled={disabled || null} value={value || null} />;
