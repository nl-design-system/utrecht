/**
 * @license EUPL-1.2
 * Copyright (c) 2024 Yolijn van der Kolk
 */

import clsx from 'clsx';
import { ForwardedRef, forwardRef, HTMLAttributes } from 'react';

export type RichTextProps = HTMLAttributes<HTMLDivElement>;

export const RichText = forwardRef(
  ({ className, children, ...restProps }: RichTextProps, ref: ForwardedRef<HTMLHRElement>) => (
    <div {...restProps} ref={ref} className={clsx('utrecht-rich-text', className)}>
      {children}
    </div>
  ),
);

RichText.displayName = 'RichText';
