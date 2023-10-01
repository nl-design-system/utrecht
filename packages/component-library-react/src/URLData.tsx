/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Robbert Broersma
 */

import clsx from 'clsx';
import { ForwardedRef, forwardRef, HTMLAttributes, PropsWithChildren } from 'react';

export type URLDataProps = HTMLAttributes<HTMLElement>;

export const URLData = forwardRef(
  ({ children, className, ...restProps }: PropsWithChildren<URLDataProps>, ref: ForwardedRef<HTMLElement>) => (
    <bdi translate="no" {...restProps} ref={ref} className={clsx('utrecht-url-data', className)}>
      {children}
    </bdi>
  ),
);

URLData.displayName = 'URLData';
