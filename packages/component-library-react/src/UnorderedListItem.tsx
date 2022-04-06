/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Robbert Broersma
 */

import clsx from 'clsx';
import { ForwardedRef, forwardRef, LiHTMLAttributes, PropsWithChildren } from 'react';

export type UnorderedListItemProps = LiHTMLAttributes<HTMLLIElement>;

export const UnorderedListItem = forwardRef(
  (
    { children, className, ...restProps }: PropsWithChildren<UnorderedListItemProps>,
    ref: ForwardedRef<HTMLLIElement>,
  ) => (
    <li {...restProps} ref={ref} className={clsx('utrecht-unordered-list__item', className)}>
      {children}
    </li>
  ),
);

UnorderedListItem.displayName = 'utrecht-unordered-list__item';
