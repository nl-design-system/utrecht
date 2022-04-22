/**
 * @license EUPL-1.2
 * Copyright (c) 2022 Robbert Broersma
 */

import clsx from 'clsx';
import { ForwardedRef, forwardRef, PropsWithChildren, ThHTMLAttributes } from 'react';

export type TableHeaderCellProps = ThHTMLAttributes<HTMLTableCellElement>;

export const TableHeaderCell = forwardRef(
  (
    { children, className, ...restProps }: PropsWithChildren<TableHeaderCellProps>,
    ref: ForwardedRef<HTMLTableCellElement>,
  ) => (
    <th {...restProps} ref={ref} className={clsx('utrecht-table__header-cell', className)}>
      {children}
    </th>
  ),
);

TableHeaderCell.displayName = 'utrecht-table-header-cell';
