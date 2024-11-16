/**
 * @license EUPL-1.2
 * Copyright (c) 2020-2024 Frameless B.V.
 * Copyright (c) 2021-2024 Gemeente Utrecht
 */

import clsx from 'clsx';
import { ForwardedRef, forwardRef, HTMLAttributes, PropsWithChildren } from 'react';

export interface TableContainerProps extends HTMLAttributes<HTMLDivElement> {
  overflowInline?: boolean;
}

export const TableContainer = forwardRef(
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

TableContainer.displayName = 'TableContainer';
