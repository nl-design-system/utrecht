/**
 * @license EUPL-1.2
 * Copyright (c) 2020-2024 Frameless B.V.
 * Copyright (c) 2021-2024 Gemeente Utrecht
 */

import clsx from 'clsx';
import { ForwardedRef, forwardRef, HTMLAttributes, PropsWithChildren } from 'react';

export type MarkProps = HTMLAttributes<HTMLElement>;

export const Mark = forwardRef(
  ({ children, className, ...restProps }: PropsWithChildren<MarkProps>, ref: ForwardedRef<HTMLElement>) => (
    <mark ref={ref} className={clsx('utrecht-mark', className)} {...restProps}>
      {children}
    </mark>
  ),
);

Mark.displayName = 'Mark';
