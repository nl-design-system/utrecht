/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Robbert Broersma
 */

import clsx from 'clsx';
import { ForwardedRef, forwardRef, HTMLAttributes, PropsWithChildren } from 'react';

export type Heading1Props = HTMLAttributes<HTMLHeadingElement>;

export const Heading1 = forwardRef(
  ({ children, className, ...restProps }: PropsWithChildren<Heading1Props>, ref: ForwardedRef<HTMLHeadingElement>) => (
    <h1 {...restProps} ref={ref} className={clsx('utrecht-heading-1', className)}>
      {children}
    </h1>
  ),
);

Heading1.displayName = 'utrecht-heading-1';
