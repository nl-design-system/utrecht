/**
 * @license EUPL-1.2
 * Copyright (c) 2020-2024 Frameless B.V.
 * Copyright (c) 2021-2024 Gemeente Utrecht
 */

import clsx from 'clsx';
import { ForwardedRef, forwardRef, HTMLAttributes, PropsWithChildren } from 'react';

export interface TableFooterProps extends HTMLAttributes<HTMLTableSectionElement> {
  sticky?: boolean;
}

export const TableFooter = forwardRef(
  (
    { children, className, sticky, ...restProps }: PropsWithChildren<TableFooterProps>,
    ref: ForwardedRef<HTMLTableSectionElement>,
  ) => (
    <tfoot
      {...restProps}
      ref={ref}
      className={clsx(
        'utrecht-table__footer',
        {
          'utrecht-table__footer--sticky': sticky,
        },
        className,
      )}
    >
      {children}
    </tfoot>
  ),
);

TableFooter.displayName = 'TableFooter';
