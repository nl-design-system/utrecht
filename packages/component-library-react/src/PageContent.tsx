/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Robbert Broersma
 */

import clsx from 'clsx';
import { ForwardedRef, forwardRef, HTMLAttributes, PropsWithChildren } from 'react';

export type PageContentProps = HTMLAttributes<HTMLDivElement>;

export const PageContent = forwardRef(
  ({ children, className, ...restProps }: PropsWithChildren<PageContentProps>, ref: ForwardedRef<HTMLDivElement>) => (
    <div {...restProps} ref={ref} className={clsx('utrecht-page-content', className)}>
      {children}
    </div>
  ),
);

PageContent.displayName = 'PageContent';

export type PageContentMainProps = HTMLAttributes<HTMLDivElement>;

export const PageContentMain = forwardRef(
  (
    { children, className, ...restProps }: PropsWithChildren<PageContentMainProps>,
    ref: ForwardedRef<HTMLDivElement>,
  ) => (
    <main {...restProps} ref={ref} className={clsx('utrecht-page-content__main', className)}>
      {children}
    </main>
  ),
);

PageContentMain.displayName = 'PageContentMain';
