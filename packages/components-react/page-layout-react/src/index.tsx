/**
 * @license EUPL-1.2
 * Copyright (c) 2020-2024 Frameless B.V.
 * Copyright (c) 2021-2024 Gemeente Utrecht
 */

import clsx from 'clsx';
import { ForwardedRef, forwardRef, HTMLAttributes, PropsWithChildren } from 'react';

export type PageLayoutProps = HTMLAttributes<HTMLElement>;

export const PageLayout = forwardRef(
  ({ children, className, ...restProps }: PropsWithChildren<PageLayoutProps>, ref: ForwardedRef<HTMLDivElement>) => (
    <div {...restProps} ref={ref} className={clsx('utrecht-page-layout', className)}>
      {children}
    </div>
  ),
);

PageLayout.displayName = 'PageLayout';
