/**
 * @license EUPL-1.2
 * Copyright (c) 2022 Robbert Broersma
 */

import clsx from 'clsx';
import { ForwardedRef, forwardRef, PropsWithChildren, TdHTMLAttributes } from 'react';

export interface TableCellProps extends TdHTMLAttributes<HTMLTableCellElement> {
  numericColumn?: boolean;
  selected?: boolean;
}

export const TableCell = forwardRef(
  (
    { children, className, numericColumn, selected, ...restProps }: PropsWithChildren<TableCellProps>,
    ref: ForwardedRef<HTMLTableCellElement>,
  ) => (
    <td
      aria-selected={selected ? true : undefined}
      {...restProps}
      ref={ref}
      className={clsx(
        'utrecht-table__cell',
        {
          'utrecht-table__cell--selected': selected,
          'utrecht-table__cell--numeric-column': numericColumn,
        },
        className,
      )}
    >
      {children}
    </td>
  ),
);

TableCell.displayName = 'TableCell';
