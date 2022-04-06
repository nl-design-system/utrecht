/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Robbert Broersma
 */

import clsx from 'clsx';
import { ForwardedRef, forwardRef, HTMLAttributes, PropsWithChildren } from 'react';

type Heading6Props = HTMLAttributes<HTMLHeadingElement>;

export const Heading6 = forwardRef(
  ({ children, className, ...restProps }: PropsWithChildren<Heading6Props>, ref: ForwardedRef<HTMLHeadingElement>) => (
    <h6 {...restProps} ref={ref} className={clsx('utrecht-heading-6', className)}>
      {children}
    </h6>
  ),
);

Heading6.displayName = 'utrecht-heading-6';
