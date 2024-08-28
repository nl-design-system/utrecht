/**
 * @license EUPL-1.2
 * Copyright (c) 2023 Gemeente Utrecht
 * Copyright (c) 2023 Frameless B.V.
 */

import clsx from 'clsx';
import { ForwardedRef, forwardRef, HTMLAttributes, PropsWithChildren } from 'react';

export interface NumberBadgeProps extends HTMLAttributes<HTMLElement> {
  value?: string;
}

export const NumberBadge = forwardRef(
  (
    { children, className, value, ...restProps }: PropsWithChildren<NumberBadgeProps>,
    ref: ForwardedRef<HTMLElement | HTMLDataElement>,
  ) => {
    const props = {
      children,
      className: clsx('utrecht-number-badge', className),
      ...restProps,
    };
    return typeof value !== 'undefined' ? (
      <data {...props} value={value} ref={ref as ForwardedRef<HTMLDataElement>} />
    ) : (
      <span {...props} ref={ref as ForwardedRef<HTMLElement>} />
    );
  },
);

NumberBadge.displayName = 'NumberBadge';
