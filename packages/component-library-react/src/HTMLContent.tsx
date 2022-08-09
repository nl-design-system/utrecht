/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Robbert Broersma
 */

import clsx from 'clsx';
import { ForwardedRef, forwardRef, HTMLAttributes, PropsWithChildren } from 'react';

export type HTMLContentProps = HTMLAttributes<HTMLDivElement>;

export const HTMLContent = forwardRef(
  ({ children, className, ...restProps }: PropsWithChildren<HTMLContentProps>, ref: ForwardedRef<HTMLDivElement>) => (
    <div {...restProps} ref={ref} className={clsx('utrecht-html', className)}>
      {children}
    </div>
  ),
);

HTMLContent.displayName = 'HTMLContent';
