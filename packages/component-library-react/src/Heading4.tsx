/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Robbert Broersma
 */

import clsx from 'clsx';
import { ForwardedRef, forwardRef, HTMLAttributes, PropsWithChildren } from 'react';

type Heading4Props = HTMLAttributes<HTMLHeadingElement>;

export const Heading4 = forwardRef(
  ({ children, className, ...restProps }: PropsWithChildren<Heading4Props>, ref: ForwardedRef<HTMLHeadingElement>) => (
    <h4 {...restProps} ref={ref} className={clsx('utrecht-heading-4', className)}>
      {children}
    </h4>
  ),
);

Heading4.displayName = 'utrecht-heading-4';
