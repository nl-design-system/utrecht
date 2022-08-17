/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Robbert Broersma
 */

import clsx from 'clsx';
import { DataHTMLAttributes, ForwardedRef, forwardRef, PropsWithChildren } from 'react';

export interface NumberValueProps extends DataHTMLAttributes<HTMLDataElement> {
  value?: number | string;
}

export const NumberValue = forwardRef(
  (
    { children, className, value, ...restProps }: PropsWithChildren<NumberValueProps>,
    ref: ForwardedRef<HTMLDataElement>,
  ) => (
    <data
      value={typeof value === 'string' || typeof value === 'number' ? String(value) : undefined}
      {...restProps}
      ref={ref}
      className={clsx('utrecht-value-number', className)}
    >
      {children}
    </data>
  ),
);

NumberValue.displayName = 'NumberValue';
