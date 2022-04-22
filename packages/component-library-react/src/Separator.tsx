/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Robbert Broersma
 */

import clsx from 'clsx';
import { ForwardedRef, forwardRef, HTMLAttributes } from 'react';

export type SeparatorProps = HTMLAttributes<HTMLHRElement>;

// Do not pass `children` along with `restProps` and use _children as it's unused
export const Separator = forwardRef(
  ({ className, children: _children, ...restProps }: SeparatorProps, ref: ForwardedRef<HTMLHRElement>) => (
    <hr {...restProps} ref={ref} className={clsx('utrecht-separator', className)} />
  ),
);

Separator.displayName = 'utrecht-separator';
