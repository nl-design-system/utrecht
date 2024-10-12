/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Robbert Broersma
 */

import clsx from 'clsx';
import { ForwardedRef, forwardRef, HTMLAttributes, PropsWithChildren } from 'react';

export interface ColumnLayoutProps extends HTMLAttributes<HTMLDivElement> {
  rule?: boolean;
}

export const ColumnLayout = forwardRef(
  (
    { children, className, rule, ...restProps }: PropsWithChildren<ColumnLayoutProps>,
    ref: ForwardedRef<HTMLDivElement>,
  ) => (
    <div
      className={clsx('utrecht-column-layout', { 'utrecht-column-layout--rule': rule }, className)}
      ref={ref}
      {...restProps}
    >
      {children}
    </div>
  ),
);

ColumnLayout.displayName = 'ColumnLayout';
