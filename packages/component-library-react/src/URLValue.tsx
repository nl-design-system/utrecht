/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Robbert Broersma
 */

import clsx from 'clsx';
import { ForwardedRef, forwardRef, HTMLAttributes, PropsWithChildren } from 'react';

export type URLValueProps = HTMLAttributes<HTMLElement>;

export const URLValue = forwardRef(
  ({ children, className, ...restProps }: PropsWithChildren<URLValueProps>, ref: ForwardedRef<HTMLElement>) => (
    <bdi translate="no" {...restProps} ref={ref} className={clsx('utrecht-url', className)}>
      {children}
    </bdi>
  ),
);

URLValue.displayName = 'URLValue';
