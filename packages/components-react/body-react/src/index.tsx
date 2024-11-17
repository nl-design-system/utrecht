/**
 * @license EUPL-1.2
 * Copyright (c) 2020-2024 Frameless B.V.
 * Copyright (c) 2021-2024 Gemeente Utrecht
 */

import clsx from 'clsx';
import { ForwardedRef, forwardRef, HTMLAttributes, PropsWithChildren } from 'react';

export interface BodyBodyProps extends HTMLAttributes<HTMLElement> {
  Component?: 'body';
}

export interface DivBodyProps extends HTMLAttributes<HTMLElement> {
  Component: 'div';
}

export const Body = forwardRef(
  (
    {
      children,
      className,
      Component = 'body',
      ...restProps
    }: PropsWithChildren<BodyBodyProps> | PropsWithChildren<DivBodyProps>,
    ref: ForwardedRef<HTMLElement>,
  ) => (
    <Component {...restProps} ref={ref as any} className={clsx('utrecht-body', className)}>
      {children}
    </Component>
  ),
);

Body.displayName = 'Body';
