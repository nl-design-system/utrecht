/**
 * @license EUPL-1.2
 * Copyright (c) 2020-2024 Frameless B.V.
 * Copyright (c) 2021-2024 Gemeente Utrecht
 */

import clsx from 'clsx';
import type { ForwardedRef, HTMLAttributes, PropsWithChildren, ReactNode } from 'react';
import { forwardRef } from 'react';

export interface LogoProps extends HTMLAttributes<HTMLDivElement> {
  caption?: ReactNode;
}

export const Logo = forwardRef(
  ({ children, className, caption, ...restProps }: PropsWithChildren<LogoProps>, ref: ForwardedRef<HTMLDivElement>) => (
    <figure ref={ref} className={clsx('utrecht-logo', className)} {...restProps}>
      {children}
      {caption && <figcaption className="utrecht-logo__caption">{caption}</figcaption>}
    </figure>
  ),
);

Logo.displayName = 'Logo';
