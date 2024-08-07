/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Gemeente Utrecht
 * Copyright (c) 2021 Robbert Broersma
 */

import clsx from 'clsx';
import { ForwardedRef, forwardRef, HTMLAttributes, PropsWithChildren } from 'react';

export type IconProps = HTMLAttributes<HTMLElement>;

export const Icon = forwardRef(
  (
    { children, className, role = 'presentation', ...restProps }: PropsWithChildren<IconProps>,
    ref: ForwardedRef<HTMLElement>,
  ) => (
    <span
      ref={ref}
      className={clsx('utrecht-icon', className)}
      role={role}
      aria-hidden={role === 'presentation' ? 'true' : undefined}
      {...restProps}
    >
      {children}
    </span>
  ),
);

Icon.displayName = 'Icon';
