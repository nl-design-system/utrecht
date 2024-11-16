/**
 * @license EUPL-1.2
 * Copyright (c) 2020-2024 Frameless B.V.
 * Copyright (c) 2021-2024 Gemeente Utrecht
 */

import clsx from 'clsx';
import { ForwardedRef, forwardRef, PropsWithChildren, ThHTMLAttributes } from 'react';

export interface TableHeaderCellProps extends ThHTMLAttributes<HTMLTableCellElement> {
  numericColumn?: boolean;
  selected?: boolean;
  sticky?: boolean;
}

export const TableHeaderCell = forwardRef(
  (
    {
      children,
      className,
      numericColumn,
      selected,
      sticky,
      scope,
      ...restProps
    }: PropsWithChildren<TableHeaderCellProps>,
    ref: ForwardedRef<HTMLTableCellElement>,
  ) => (
    <th
      aria-selected={selected ? true : undefined}
      scope={scope}
      {...restProps}
      ref={ref}
      className={clsx(
        'utrecht-table__header-cell',
        {
          'utrecht-table__header-cell--numeric-column': numericColumn,
          'utrecht-table__header-cell--selected': selected,
          'utrecht-table__header-cell--sticky-inline': sticky && scope === 'row',
          'utrecht-table__header-cell--sticky-block': sticky && scope === 'col',
        },
        className,
      )}
    >
      {children}
    </th>
  ),
);

TableHeaderCell.displayName = 'TableHeaderCell';
