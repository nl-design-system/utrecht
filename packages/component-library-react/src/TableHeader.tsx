/**
 * @license EUPL-1.2
 * Copyright (c) 2022 Robbert Broersma
 */

import clsx from 'clsx';
import { ForwardedRef, forwardRef, HTMLAttributes, PropsWithChildren } from 'react';

type TableHeaderProps = HTMLAttributes<HTMLTableSectionElement>;

export const TableHeader = forwardRef(
  (
    { children, className, ...restProps }: PropsWithChildren<TableHeaderProps>,
    ref: ForwardedRef<HTMLTableSectionElement>,
  ) => (
    <thead {...restProps} ref={ref} className={clsx('utrecht-table__header', className)}>
      {children}
    </thead>
  ),
);

TableHeader.displayName = 'utrecht-table-header';
