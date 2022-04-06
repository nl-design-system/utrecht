/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Robbert Broersma
 */

import clsx from 'clsx';
import { ForwardedRef, forwardRef, HTMLAttributes, PropsWithChildren } from 'react';

type UnorderedListProps = HTMLAttributes<HTMLUListElement>;

export const UnorderedList = forwardRef(
  (
    { children, className, ...restProps }: PropsWithChildren<UnorderedListProps>,
    ref: ForwardedRef<HTMLUListElement>,
  ) => (
    <ul {...restProps} ref={ref} className={clsx('utrecht-unordered-list', className)}>
      {children}
    </ul>
  ),
);

UnorderedList.displayName = 'utrecht-unordered-list';
