/**
 * @license EUPL-1.2
 * Copyright (c) 2020-2024 Frameless B.V.
 * Copyright (c) 2021-2024 Gemeente Utrecht
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

TableBody.displayName = 'TableBody';
