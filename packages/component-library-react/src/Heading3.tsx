/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Robbert Broersma
 */

import clsx from 'clsx';
import { ForwardedRef, forwardRef, HTMLAttributes, PropsWithChildren } from 'react';

export type Heading3Props = HTMLAttributes<HTMLHeadingElement>;

export const Heading3 = forwardRef(
  ({ children, className, ...restProps }: PropsWithChildren<Heading3Props>, ref: ForwardedRef<HTMLHeadingElement>) => (
    <h3 {...restProps} ref={ref} className={clsx('utrecht-heading-3', className)}>
      {children}
    </h3>
  ),
);

Heading3.displayName = 'Heading3';
