/**
 * @license EUPL-1.2
 * Copyright (c) 2020-2024 Frameless B.V.
 * Copyright (c) 2021-2024 Gemeente Utrecht
 */

import clsx from 'clsx';
import { ForwardedRef, forwardRef, HTMLAttributes, PropsWithChildren } from 'react';

export interface SuperscriptProps extends HTMLAttributes<HTMLElement> {
  openType?: boolean;
}

export const Superscript = forwardRef(
  (
    { children, className, openType, ...restProps }: PropsWithChildren<SuperscriptProps>,
    ref: ForwardedRef<HTMLElement>,
  ) => (
    <sup
      ref={ref}
      className={clsx('utrecht-superscript', { 'utrecht-superscript--open-type': openType }, className)}
      {...restProps}
    >
      {children}
    </sup>
  ),
);

Superscript.displayName = 'Superscript';
