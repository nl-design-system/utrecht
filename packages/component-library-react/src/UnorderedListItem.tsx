/**
 * @license EUPL-1.2
 * Copyright (c) 2020-2024 Frameless B.V.
 * Copyright (c) 2021-2024 Gemeente Utrecht
 */

import clsx from 'clsx';
import type { ForwardedRef, LiHTMLAttributes, PropsWithChildren, ReactNode } from 'react';
import { forwardRef } from 'react';

export interface UnorderedListItemProps extends LiHTMLAttributes<HTMLLIElement> {
  marker?: ReactNode;
}

export const UnorderedListItem = forwardRef(
  (
    { children, className, marker, ...restProps }: PropsWithChildren<UnorderedListItemProps>,
    ref: ForwardedRef<HTMLLIElement>,
  ) => (
    <li
      ref={ref}
      className={clsx('utrecht-unordered-list__item', className, {
        ['utrecht-unordered-list__custom-item']: marker,
      })}
      {...restProps}
    >
      {marker && <span className={clsx('utrecht-unordered-list__custom-marker')}>{marker}</span>} {children}
    </li>
  ),
);

UnorderedListItem.displayName = 'UnorderedListItem';
