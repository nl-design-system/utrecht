/**
 * @license EUPL-1.2
 * Copyright (c) 2020-2024 Frameless B.V.
 * Copyright (c) 2021-2024 Gemeente Utrecht
 */

import clsx from 'clsx';
import { ForwardedRef, forwardRef, PropsWithChildren, TableHTMLAttributes } from 'react';

export interface TableProps extends TableHTMLAttributes<HTMLTableElement> {
  busy?: boolean;
}

export const Table = forwardRef(
  ({ busy, children, className, ...restProps }: PropsWithChildren<TableProps>, ref: ForwardedRef<HTMLTableElement>) => (
    <table
      aria-busy={busy}
      {...restProps}
      ref={ref}
      className={clsx(
        'utrecht-table',
        {
          'utrecht-table--busy': busy,
        },
        className,
      )}
    >
      {children}
    </table>
  ),
);

Table.displayName = 'Table';
