/**
 * @license EUPL-1.2
 * Copyright (c) 2023 Gemeente Utrecht
 * Copyright (c) 2023 Frameless B.V.
 */

import { clsx } from 'clsx';
import { ForwardedRef, forwardRef, HTMLAttributes, PropsWithChildren } from 'react';

export interface BadgeCounterProps extends HTMLAttributes<HTMLElement> {
  value?: string;
}

export const BadgeCounter = forwardRef(
  (
    { children, className, value, ...restProps }: PropsWithChildren<BadgeCounterProps>,
    ref: ForwardedRef<HTMLElement | HTMLDataElement>,
  ) => {
    const props = {
      children,
      className: clsx('utrecht-badge-counter', className),
      ...restProps,
    };
    return typeof value !== 'undefined' ? (
      <data {...props} value={value} ref={ref as ForwardedRef<HTMLDataElement>} />
    ) : (
      <span {...props} ref={ref as ForwardedRef<HTMLElement>} />
    );
  },
);

BadgeCounter.displayName = 'BadgeCounter';
