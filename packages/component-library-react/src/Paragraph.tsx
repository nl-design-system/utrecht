/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Robbert Broersma
 */

import clsx from 'clsx';
import { ForwardedRef, forwardRef, HTMLAttributes, PropsWithChildren } from 'react';

export interface ParagraphProps extends HTMLAttributes<HTMLParagraphElement> {
  lead?: boolean;
}

export const Paragraph = forwardRef(
  (
    { children, className, lead, ...restProps }: PropsWithChildren<ParagraphProps>,
    ref: ForwardedRef<HTMLParagraphElement>,
  ) => (
    <p {...restProps} ref={ref} className={clsx('utrecht-paragraph', lead && 'utrecht-paragraph--lead', className)}>
      {children}
    </p>
  ),
);

Paragraph.displayName = 'utrecht-paragraph';
