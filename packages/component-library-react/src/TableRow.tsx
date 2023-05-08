/**
 * @license EUPL-1.2
 * Copyright (c) 2022 Robbert Broersma
 */

import clsx from 'clsx';
import { ForwardedRef, forwardRef, HTMLAttributes, PropsWithChildren } from 'react';

export interface TableRowProps extends HTMLAttributes<HTMLTableRowElement> {
  active?: boolean;
  selected?: boolean;
}

export const TableRow = forwardRef(
  (
    { children, className, selected, ...restProps }: PropsWithChildren<TableRowProps>,
    ref: ForwardedRef<HTMLTableRowElement>,
  ) => (
    <tr
      aria-selected={selected ? true : undefined}
      {...restProps}
      ref={ref}
      className={clsx(
        'utrecht-table__row',
        {
          'utrecht-table__row--selected': selected,
        },
        className,
      )}
    >
      {children}
    </tr>
  ),
);

TableRow.displayName = 'TableRow';
