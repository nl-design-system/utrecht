/**
 * @license EUPL-1.2
 * Copyright (c) 2020-2024 Frameless B.V.
 * Copyright (c) 2021-2024 Gemeente Utrecht
 */

import clsx from 'clsx';
import { ForwardedRef, forwardRef, HTMLAttributes, PropsWithChildren } from 'react';

export type UnorderedListProps = HTMLAttributes<HTMLUListElement>;

export const UnorderedList = forwardRef(
  (
    { children, className, ...restProps }: PropsWithChildren<UnorderedListProps>,
    ref: ForwardedRef<HTMLUListElement>,
  ) => (
    <ul role="list" {...restProps} ref={ref} className={clsx('utrecht-unordered-list', className)}>
      {children}
    </ul>
  ),
);

UnorderedList.displayName = 'UnorderedList';
