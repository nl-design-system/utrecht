/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Gemeente Utrecht
 * Copyright (c) 2021 Robbert Broersma
 */

import { clsx } from 'clsx';
import { ForwardedRef, forwardRef, HTMLAttributes, PropsWithChildren } from 'react';

export interface DataBadgeProps extends HTMLAttributes<HTMLElement> {
  dateTime?: string;
  value?: string;
}

export const DataBadge = forwardRef(
  (
    { children, className, dateTime, value, ...restProps }: PropsWithChildren<DataBadgeProps>,
    ref: ForwardedRef<HTMLElement | HTMLDataElement>,
  ) => {
    const props = {
      children,
      className: clsx('utrecht-badge-data', className),
      ...restProps,
    };
    return typeof dateTime !== 'undefined' ? (
      <time {...props} dateTime={dateTime} ref={ref as ForwardedRef<HTMLTimeElement>} />
    ) : typeof value !== 'undefined' ? (
      <data {...props} value={value} ref={ref as ForwardedRef<HTMLDataElement>} />
    ) : (
      <span {...props} ref={ref as ForwardedRef<HTMLElement>} />
    );
  },
);

DataBadge.displayName = 'DataBadge';
