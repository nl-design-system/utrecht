/**
 * @license EUPL-1.2
 * Copyright (c) 2020-2024 Frameless B.V.
 * Copyright (c) 2021-2024 Gemeente Utrecht
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
