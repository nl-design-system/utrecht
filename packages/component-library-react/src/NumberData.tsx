/**
 * @license EUPL-1.2
 * Copyright (c) 2020-2024 Frameless B.V.
 * Copyright (c) 2021-2024 Gemeente Utrecht
 */

import clsx from 'clsx';
import { DataHTMLAttributes, ForwardedRef, forwardRef, PropsWithChildren } from 'react';

export interface NumberDataProps extends DataHTMLAttributes<HTMLDataElement> {
  value?: number | string;
}

export const NumberData = forwardRef(
  (
    { children, className, value, ...restProps }: PropsWithChildren<NumberDataProps>,
    ref: ForwardedRef<HTMLDataElement>,
  ) => (
    <data
      value={typeof value === 'string' || typeof value === 'number' ? String(value) : undefined}
      {...restProps}
      ref={ref}
      className={clsx('utrecht-number-data', className)}
    >
      {children}
    </data>
  ),
);

NumberData.displayName = 'NumberData';
