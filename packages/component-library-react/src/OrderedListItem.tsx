/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Robbert Broersma
 */

import clsx from 'clsx';
import { ForwardedRef, forwardRef, LiHTMLAttributes, PropsWithChildren } from 'react';

export type OrderedListItemProps = LiHTMLAttributes<HTMLLIElement>;

export const OrderedListItem = forwardRef(
  (
    { children, className, ...restProps }: PropsWithChildren<OrderedListItemProps>,
    ref: ForwardedRef<HTMLLIElement>,
  ) => (
    <li {...restProps} ref={ref} className={clsx('utrecht-ordered-list__item', className)}>
      {children}
    </li>
  ),
);

OrderedListItem.displayName = 'OrderedListItem';
