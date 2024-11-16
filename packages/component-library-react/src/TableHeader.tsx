/**
 * @license EUPL-1.2
 * Copyright (c) 2020-2024 Frameless B.V.
 * Copyright (c) 2021-2024 Gemeente Utrecht
 */

import clsx from 'clsx';
import { ForwardedRef, forwardRef, HTMLAttributes, PropsWithChildren } from 'react';

export interface TableHeaderProps extends HTMLAttributes<HTMLTableSectionElement> {
  sticky?: boolean;
}

export const TableHeader = forwardRef(
  (
    { children, className, sticky, ...restProps }: PropsWithChildren<TableHeaderProps>,
    ref: ForwardedRef<HTMLTableSectionElement>,
  ) => (
    <thead
      {...restProps}
      ref={ref}
      className={clsx(
        'utrecht-table__header',
        {
          'utrecht-table__header--sticky': sticky,
        },
        className,
      )}
    >
      {children}
    </thead>
  ),
);

TableHeader.displayName = 'TableHeader';
