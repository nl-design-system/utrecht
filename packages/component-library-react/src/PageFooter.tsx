/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Robbert Broersma
 */

import clsx from 'clsx';
import { ForwardedRef, forwardRef, HTMLAttributes, PropsWithChildren } from 'react';

export type PageFooterProps = HTMLAttributes<HTMLDivElement>;

export const PageFooter = forwardRef(
  ({ children, className, ...restProps }: PropsWithChildren<PageFooterProps>, ref: ForwardedRef<HTMLDivElement>) => (
    <footer {...restProps} ref={ref} className={clsx('utrecht-page-footer', className)}>
      {children}
    </footer>
  ),
);

PageFooter.displayName = 'PageFooter';
