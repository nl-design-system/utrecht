/**
 * @license EUPL-1.2
 * Copyright (c) 2022 Robbert Broersma
 */

import clsx from 'clsx';
import { ForwardedRef, forwardRef, HTMLAttributes, PropsWithChildren } from 'react';

export type TableFooterProps = HTMLAttributes<HTMLTableSectionElement>;

export const TableFooter = forwardRef(
  (
    { children, className, ...restProps }: PropsWithChildren<TableFooterProps>,
    ref: ForwardedRef<HTMLTableSectionElement>,
  ) => (
    <tfoot {...restProps} ref={ref} className={clsx('utrecht-table__footer', className)}>
      {children}
    </tfoot>
  ),
);

TableFooter.displayName = 'utrecht-table-footer';
