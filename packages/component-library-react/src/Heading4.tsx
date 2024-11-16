/**
 * @license EUPL-1.2
 * Copyright (c) 2020-2024 Frameless B.V.
 * Copyright (c) 2021-2024 Gemeente Utrecht
 */

import clsx from 'clsx';
import { ForwardedRef, forwardRef, HTMLAttributes, PropsWithChildren } from 'react';

export type Heading4Props = HTMLAttributes<HTMLHeadingElement>;

export const Heading4 = forwardRef(
  ({ children, className, ...restProps }: PropsWithChildren<Heading4Props>, ref: ForwardedRef<HTMLHeadingElement>) => (
    <h4 {...restProps} ref={ref} className={clsx('utrecht-heading-4', className)}>
      {children}
    </h4>
  ),
);

Heading4.displayName = 'Heading4';
