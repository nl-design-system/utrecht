/**
 * @license EUPL-1.2
 * Copyright (c) 2022 Gemeente Utrecht
 * Copyright (c) 2022 Frameless B.V.
 */
import clsx from 'clsx';
import React from 'react';

export const defaultArgs = {
  appearance: '',
  textContent: '',
  value: '',
};

export const NumberValue = ({
  appearance = defaultArgs.appearance,
  textContent = defaultArgs.textContent,
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
