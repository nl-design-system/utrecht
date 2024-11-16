/**
 * @license EUPL-1.2
 * Copyright (c) 2020-2024 Frameless B.V.
 * Copyright (c) 2021-2024 Gemeente Utrecht
 */

import clsx from 'clsx';
import { ForwardedRef, forwardRef, HTMLAttributes, PropsWithChildren } from 'react';

export type Heading5Props = HTMLAttributes<HTMLHeadingElement>;

export const Heading5 = forwardRef(
  ({ children, className, ...restProps }: PropsWithChildren<Heading5Props>, ref: ForwardedRef<HTMLHeadingElement>) => (
    <h5 {...restProps} ref={ref} className={clsx('utrecht-heading-5', className)}>
      {children}
    </h5>
  ),
);

Heading5.displayName = 'Heading5';
