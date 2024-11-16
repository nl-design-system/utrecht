/**
 * @license EUPL-1.2
 * Copyright (c) 2020-2024 Frameless B.V.
 * Copyright (c) 2021-2024 Gemeente Utrecht
 */

import clsx from 'clsx';
import { ForwardedRef, forwardRef, HTMLAttributes, PropsWithChildren } from 'react';

export type TableCaptionProps = HTMLAttributes<HTMLTableCaptionElement>;

export const TableCaption = forwardRef(
  (
    { children, className, ...restProps }: PropsWithChildren<TableCaptionProps>,
    ref: ForwardedRef<HTMLTableCaptionElement>,
  ) => (
    <caption {...restProps} ref={ref} className={clsx('utrecht-table__caption', className)}>
      {children}
    </caption>
  ),
);

TableCaption.displayName = 'TableCaption';
