/**
 * @license EUPL-1.2
 * Copyright (c) 2022 Robbert Broersma
 */

import clsx from 'clsx';
import { ForwardedRef, forwardRef, PropsWithChildren, TdHTMLAttributes } from 'react';

export type TableCellProps = TdHTMLAttributes<HTMLTableCellElement>;

export const TableCell = forwardRef(
  (
    { children, className, ...restProps }: PropsWithChildren<TableCellProps>,
    ref: ForwardedRef<HTMLTableCellElement>,
  ) => (
    <td {...restProps} ref={ref} className={clsx('utrecht-table__cell', className)}>
      {children}
    </td>
  ),
);

TableCell.displayName = 'utrecht-table-cell';
