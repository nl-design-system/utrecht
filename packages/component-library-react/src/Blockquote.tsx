/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Robbert Broersma
 */

import clsx from 'clsx';
import { BlockquoteHTMLAttributes, ForwardedRef, forwardRef, PropsWithChildren, ReactNode } from 'react';

export interface BlockquoteProps extends BlockquoteHTMLAttributes<HTMLQuoteElement> {
  attribution?: ReactNode;
}

export const Blockquote = forwardRef(
  (
    { children, className, attribution, ...restProps }: PropsWithChildren<BlockquoteProps>,
    ref: ForwardedRef<HTMLQuoteElement>,
  ) => (
    <blockquote {...restProps} ref={ref} className={clsx('utrecht-blockquote', className)}>
      {children}
      {attribution && <div className="utrecht-blockquote__attribution">{attribution}</div>}
    </blockquote>
  ),
);

Blockquote.displayName = 'Blockquote';
