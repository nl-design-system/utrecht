/**
 * @license EUPL-1.2
 * Copyright (c) 2020-2024 Frameless B.V.
 * Copyright (c) 2021-2024 Gemeente Utrecht
 */

import clsx from 'clsx';
import { ForwardedRef, forwardRef, HTMLAttributes, PropsWithChildren } from 'react';

export type EmphasisProps = HTMLAttributes<HTMLElement>;

export const Emphasis = forwardRef(
  ({ children, className, ...restProps }: PropsWithChildren<EmphasisProps>, ref: ForwardedRef<HTMLElement>) => (
    <em ref={ref} className={clsx('utrecht-emphasis', 'utrecht-emphasis--stressed', className)} {...restProps}>
      {children}
    </em>
  ),
);

Emphasis.displayName = 'Emphasis';
