/**
 * @license EUPL-1.2
 * Copyright (c) 2020-2024 Frameless B.V.
 * Copyright (c) 2021-2024 Gemeente Utrecht
 */

import clsx from 'clsx';
import { ForwardedRef, forwardRef, HTMLAttributes, PropsWithChildren } from 'react';

export interface HtmlRootProps extends HTMLAttributes<HTMLElement> {
  Component?: 'html';
}

export interface DivRootProps extends HTMLAttributes<HTMLElement> {
  Component: 'div';
}

export const Root = forwardRef(
  (
    {
      children,
      className,
      Component = 'html',
      ...restProps
    }: PropsWithChildren<HtmlRootProps> | PropsWithChildren<DivRootProps>,
    ref: ForwardedRef<HTMLElement>,
  ) => (
    <Component {...restProps} ref={ref as any} className={clsx('utrecht-root', className)}>
      {children}
    </Component>
  ),
);

Root.displayName = 'Root';
