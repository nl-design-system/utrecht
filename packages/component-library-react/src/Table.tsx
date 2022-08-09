/**
 * @license EUPL-1.2
 * Copyright (c) 2022 Robbert Broersma
 */

import clsx from 'clsx';
import { ForwardedRef, forwardRef, PropsWithChildren, TableHTMLAttributes } from 'react';

export type TableProps = TableHTMLAttributes<HTMLTableElement>;

export const Table = forwardRef(
  ({ children, className, ...restProps }: PropsWithChildren<TableProps>, ref: ForwardedRef<HTMLTableElement>) => (
    <table {...restProps} ref={ref} className={clsx('utrecht-table', className)}>
      {children}
    </table>
  ),
);

Table.displayName = 'Table';
