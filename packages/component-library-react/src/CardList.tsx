/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Robbert Broersma
 */

import clsx from 'clsx';
import { ForwardedRef, forwardRef, HTMLAttributes, PropsWithChildren } from 'react';

export type CardListProps = HTMLAttributes<HTMLUListElement>;

export const CardList = forwardRef(
  ({ children, className, ...restProps }: PropsWithChildren<CardListProps>, ref: ForwardedRef<HTMLUListElement>) => (
    <ul role="list" {...restProps} ref={ref} className={clsx('utrecht-card-list', className)}>
      {children}
    </ul>
  ),
);

CardList.displayName = 'CardList';
