/**
 * @license EUPL-1.2
 * Copyright (c) 2022 Robbert Broersma
 */

import clsx from 'clsx';
import { ForwardedRef, forwardRef, HTMLAttributes, PropsWithChildren } from 'react';

type HeadingGroupProps = HTMLAttributes<HTMLElement>;

export const HeadingGroup = forwardRef(
  ({ children, className, ...restProps }: PropsWithChildren<HeadingGroupProps>, ref: ForwardedRef<HTMLElement>) => (
    <hgroup {...restProps} ref={ref} className={clsx('utrecht-heading-group', className)}>
      {children}
    </hgroup>
  ),
);

HeadingGroup.displayName = 'HeadingGroup';
