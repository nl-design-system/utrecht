/**
 * @license EUPL-1.2
 * Copyright (c) 2020-2024 Frameless B.V.
 * Copyright (c) 2021-2024 Gemeente Utrecht
 */

import clsx from 'clsx';
import { ForwardedRef, forwardRef, HTMLAttributes, PropsWithChildren } from 'react';

export type BackdropProps = HTMLAttributes<HTMLDivElement>;

export const Backdrop = forwardRef(
  ({ children, className, ...restProps }: PropsWithChildren<BackdropProps>, ref: ForwardedRef<HTMLDivElement>) => (
    <div {...restProps} ref={ref} className={clsx('utrecht-backdrop', className)}>
      {children}
    </div>
  ),
);

Backdrop.displayName = 'Backdrop';
