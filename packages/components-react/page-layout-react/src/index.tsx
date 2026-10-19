/**
 * @license EUPL-1.2
 * Copyright (c) 2020-2024 Frameless B.V.
 * Copyright (c) 2021-2024 Gemeente Utrecht
 */

import clsx from 'clsx';
import { ForwardedRef, forwardRef, HTMLAttributes, PropsWithChildren } from 'react';

export interface PageLayoutProps extends HTMLAttributes<HTMLElement> {
  Component?: 'div' | 'body';
}

export const PageLayout = forwardRef(
  (
    { Component = 'div', children, className, ...restProps }: PropsWithChildren<PageLayoutProps>,
    ref: ForwardedRef<HTMLDivElement>,
  ) => (
    <Component {...restProps} ref={ref as any} className={clsx('utrecht-page-layout', className)}>
      {children}
    </Component>
  ),
);

PageLayout.displayName = 'PageLayout';
