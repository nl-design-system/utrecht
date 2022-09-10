/*
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
};

export const defaultArgs = {
  checked: false,
  disabled: false,
};

export const FormToggle = ({ checked = defaultArgs.checked, disabled = defaultArgs.disabled }) => (
  <utrecht-form-toggle checked={checked || null} disabled={disabled || null}></utrecht-form-toggle>
);

export default FormToggle;
