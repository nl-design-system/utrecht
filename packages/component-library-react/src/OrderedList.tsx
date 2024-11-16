/**
 * @license EUPL-1.2
 * Copyright (c) 2020-2024 Frameless B.V.
 * Copyright (c) 2021-2024 Gemeente Utrecht
 */

import clsx from 'clsx';
import { ForwardedRef, forwardRef, OlHTMLAttributes, PropsWithChildren } from 'react';

export type OrderedListProps = OlHTMLAttributes<HTMLOListElement>;

export const OrderedList = forwardRef(
  ({ children, className, ...restProps }: PropsWithChildren<OrderedListProps>, ref: ForwardedRef<HTMLOListElement>) => (
    <ol {...restProps} ref={ref} className={clsx('utrecht-ordered-list', className)}>
      {children}
    </ol>
  ),
);

OrderedList.displayName = 'OrderedList';
