/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Gemeente Utrecht
 * Copyright (c) 2021 Robbert Broersma
 */

import clsx from 'clsx';
import { ForwardedRef, forwardRef, HTMLAttributes, PropsWithChildren } from 'react';

export type StrongProps = HTMLAttributes<HTMLElement>;

export const Strong = forwardRef(
  ({ children, className, ...restProps }: PropsWithChildren<StrongProps>, ref: ForwardedRef<HTMLElement>) => (
    <strong ref={ref} className={clsx('utrecht-emphasis', 'utrecht-emphasis--strong', className)} {...restProps}>
      {children}
    </strong>
  ),
);

Strong.displayName = 'Strong';
