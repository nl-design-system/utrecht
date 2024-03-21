/**
 * @license EUPL-1.2
 * Copyright (c) 2022 Robbert Broersma
 */

import clsx from 'clsx';
import { ForwardedRef, forwardRef, HTMLAttributes, PropsWithChildren } from 'react';

export interface TableContainerProps extends HTMLAttributes<HTMLTableElement> {
  overflowInline?: boolean;
}

export const Table = forwardRef(
  (
    { overflowInline, children, className, ...restProps }: PropsWithChildren<TableContainerProps>,
    ref: ForwardedRef<HTMLDivElement>,
  ) => (
    <div
      ref={ref}
      className={clsx(
        'utrecht-table-container',
        {
          'utrecht-table-container--overflow-inline': overflowInline,
        },
        className,
      )}
      {...restProps}
    >
      {children}
    </div>
  ),
);

Table.displayName = 'Table';
