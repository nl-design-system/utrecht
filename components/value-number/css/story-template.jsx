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
  textContent: {
    description: 'Children',
    type: 'text',
  },
};

export const defaultArgs = { textContent: '', value: '', appearance: '' };

export const exampleArgs = {
  // A Mersenne prime number
  textContent: '137438953471',
  value: 137438953471,
};

export const NumberValue = ({
  textContent = defaultArgs.textContent,
  appearance = defaultArgs.appearance,
  value = defaultArgs.value,
}) => {
  const className = clsx(
    'utrecht-value-number',
    appearance === 'negative' && 'utrecht-value-number--negative',
    appearance === 'positive' && 'utrecht-value-number--positive',
  );
  return value ? (
    <data value={String(value)} className={className}>
      {textContent}
    </data>
  ) : (
    <span className={className}>{textContent}</span>
  );
};

export default NumberValue;
