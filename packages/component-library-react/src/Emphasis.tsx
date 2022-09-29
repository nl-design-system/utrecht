/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Gemeente Utrecht
 * Copyright (c) 2021 Robbert Broersma
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
