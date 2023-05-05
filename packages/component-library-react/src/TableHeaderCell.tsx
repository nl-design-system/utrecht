/**
 * @license EUPL-1.2
 * Copyright (c) 2022 Robbert Broersma
 */

import clsx from 'clsx';
import { ForwardedRef, forwardRef, PropsWithChildren, ThHTMLAttributes } from 'react';

export interface TableHeaderCellProps extends ThHTMLAttributes<HTMLTableCellElement> {
  selected?: boolean;
}

export const TableHeaderCell = forwardRef(
  (
    { children, className, selected, ...restProps }: PropsWithChildren<TableHeaderCellProps>,
    ref: ForwardedRef<HTMLTableCellElement>,
  ) => (
    <th
      aria-selected={selected ? true : undefined}
      {...restProps}
      ref={ref}
      className={clsx(
        'utrecht-table__header-cell',
        {
          'utrecht-table__header-cell--selected': selected,
        },
        className,
      )}
    >
      {children}
    </th>
  ),
);

TableHeaderCell.displayName = 'TableHeaderCell';
