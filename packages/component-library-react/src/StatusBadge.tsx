/**
 * @license EUPL-1.2
 * Copyright (c) 2023 Gemeente Utrecht
 * Copyright (c) 2023 Frameless B.V.
 */

import clsx from 'clsx';
import { ForwardedRef, forwardRef, HTMLAttributes, PropsWithChildren } from 'react';

export interface StatusBadgeProps extends HTMLAttributes<HTMLElement> {
  status?: string;
}

export const StatusBadge = forwardRef(
  ({ className, status, ...restProps }: PropsWithChildren<StatusBadgeProps>, ref: ForwardedRef<HTMLElement>) => (
    <span
      className={clsx('utrecht-status-badge', `utrecht-status-badge--${status ? status : 'neutral'}`, className)}
      {...restProps}
      ref={ref as ForwardedRef<HTMLElement>}
    />
  ),
);

StatusBadge.displayName = 'StatusBadge';
