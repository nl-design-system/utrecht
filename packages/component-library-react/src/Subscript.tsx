/**
 * @license EUPL-1.2
 * Copyright (c) 2020-2024 Frameless B.V.
 * Copyright (c) 2021-2024 Gemeente Utrecht
 */

import clsx from 'clsx';
import { ForwardedRef, forwardRef, HTMLAttributes, PropsWithChildren } from 'react';

export interface SubscriptProps extends HTMLAttributes<HTMLElement> {
  openType?: boolean;
}

export const Subscript = forwardRef(
  (
    { children, className, openType, ...restProps }: PropsWithChildren<SubscriptProps>,
    ref: ForwardedRef<HTMLElement>,
  ) => (
    <sub
      ref={ref}
      className={clsx('utrecht-subscript', { 'utrecht-subscript--open-type': openType }, className)}
      {...restProps}
    >
      {children}
    </sub>
  ),
);

Subscript.displayName = 'Subscript';
