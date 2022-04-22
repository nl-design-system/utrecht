/**
 * @license EUPL-1.2
 * Copyright (c) 2022 Robbert Broersma
 */

import clsx from 'clsx';
import { ForwardedRef, forwardRef, HTMLAttributes, PropsWithChildren } from 'react';

export type TableBodyProps = HTMLAttributes<HTMLTableSectionElement>;

export const TableBody = forwardRef(
  (
    { children, className, ...restProps }: PropsWithChildren<TableBodyProps>,
    ref: ForwardedRef<HTMLTableSectionElement>,
  ) => (
    <tbody {...restProps} ref={ref} className={clsx('utrecht-table__body', className)}>
      {children}
    </tbody>
  ),
);

TableBody.displayName = 'utrecht-table-body';
