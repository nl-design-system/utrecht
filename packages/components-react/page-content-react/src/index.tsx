/**
 * @license EUPL-1.2
 * Copyright (c) 2020-2024 Frameless B.V.
 * Copyright (c) 2021-2024 Gemeente Utrecht
 */

import clsx from 'clsx';
import { ForwardedRef, forwardRef, HTMLAttributes, PropsWithChildren } from 'react';

export type PageContentProps = HTMLAttributes<HTMLDivElement>;

export const PageContent = forwardRef(
  ({ children, className, ...restProps }: PropsWithChildren<PageContentProps>, ref: ForwardedRef<HTMLDivElement>) => (
    <div {...restProps} ref={ref} className={clsx('utrecht-page-content', className)}>
      <div className="utrecht-page-content__content">{children}</div>
    </div>
  ),
);

PageContent.displayName = 'PageContent';
