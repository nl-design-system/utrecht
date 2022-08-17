/**
 * @license EUPL-1.2
 * Copyright (c) 2020-2022 Gemeente Utrecht
 * Copyright (c) 2020-2022 Frameless B.V.
 */

import clsx from 'clsx';
import React from 'react';

export const argTypes = {
  value: {
    description: 'Value',
    type: {
      name: 'text',
      required: false,
    },
  },
  appearance: {
    description: 'Appearance',
    options: ['', 'positive', 'negative'],
    control: { type: 'select' },
    type: {
      required: false,
    },
  },
};

export const defaultArgs = {};

export const NumberValue = ({ children, appearance, value }) => {
  const className = clsx(
    'utrecht-value-number',
    appearance === 'negative' && 'utrecht-value-number--negative',
    appearance === 'positive' && 'utrecht-value-number--positive',
  );
  return value ? (
    <data value={String(value)} className={className}>
      {children}
    </data>
  ) : (
    <span className={className}>{children}</span>
  );
};

export default NumberValue;
