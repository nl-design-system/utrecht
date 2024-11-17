/**
 * @license EUPL-1.2
 * Copyright (c) 2020-2024 Frameless B.V.
 * Copyright (c) 2021-2024 Gemeente Utrecht
 */

import clsx from 'clsx';
import { ForwardedRef, forwardRef, HTMLAttributes, PropsWithChildren } from 'react';

export type PageHeaderProps = HTMLAttributes<HTMLDivElement>;

export const PageHeader = forwardRef(
  ({ children, className, ...restProps }: PropsWithChildren<PageHeaderProps>, ref: ForwardedRef<HTMLDivElement>) => (
    <header {...restProps} ref={ref} className={clsx('utrecht-page-header', className)}>
      <div className="utrecht-page-header__content">{children}</div>
    </header>
  ),
);

PageHeader.displayName = 'PageHeader';
