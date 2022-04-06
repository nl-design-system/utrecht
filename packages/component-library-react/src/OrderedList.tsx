/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Robbert Broersma
 */

import clsx from 'clsx';
import { ForwardedRef, forwardRef, OlHTMLAttributes, PropsWithChildren } from 'react';

type OrderedListProps = OlHTMLAttributes<HTMLOListElement>;

export const OrderedList = forwardRef(
  ({ children, className, ...restProps }: PropsWithChildren<OrderedListProps>, ref: ForwardedRef<HTMLOListElement>) => (
    <ol {...restProps} ref={ref} className={clsx('utrecht-ordered-list', className)}>
      {children}
    </ol>
  ),
);

OrderedList.displayName = 'utrecht-ordered-list';
