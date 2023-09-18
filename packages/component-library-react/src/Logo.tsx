/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Gemeente Utrecht
 * Copyright (c) 2021 Robbert Broersma
 */

import clsx from 'clsx';
import { ForwardedRef, forwardRef, HTMLAttributes, PropsWithChildren } from 'react';

export type LogoProps = HTMLAttributes<HTMLDivElement>;

export const Logo = forwardRef(
  ({ children, className, ...restProps }: PropsWithChildren<LogoProps>, ref: ForwardedRef<HTMLDivElement>) => (
    <div ref={ref} className={clsx('utrecht-logo', className)} {...restProps}>
      {children}
    </div>
  ),
);

Logo.displayName = 'Logo';
