/**
 * @license EUPL-1.2
 * Copyright (c) 2020-2024 Frameless B.V.
 * Copyright (c) 2021-2024 Gemeente Utrecht
 */

import clsx from 'clsx';
import { ForwardedRef, forwardRef, HTMLAttributes, PropsWithChildren } from 'react';

export type PageBodyProps = HTMLAttributes<HTMLDivElement>;

export const PageBody = forwardRef(
  ({ children, className, ...restProps }: PropsWithChildren<PageBodyProps>, ref: ForwardedRef<HTMLDivElement>) => (
    <div {...restProps} ref={ref} className={clsx('utrecht-page-body', className)}>
      <div className="utrecht-page-body__content">{children}</div>
    </div>
  ),
);

PageBody.displayName = 'PageBody';
