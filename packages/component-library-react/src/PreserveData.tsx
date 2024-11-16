/**
 * @license EUPL-1.2
 * Copyright (c) 2020-2024 Frameless B.V.
 * Copyright (c) 2021-2024 Gemeente Utrecht
 */

import clsx from 'clsx';
import { ForwardedRef, forwardRef, HTMLAttributes, PropsWithChildren } from 'react';

export interface PreserveDataProps extends HTMLAttributes<HTMLElement> {
  dateTime?: string;
  value?: string;
}

export const PreserveData = forwardRef(
  (
    { children, className, dateTime, value, ...restProps }: PropsWithChildren<PreserveDataProps>,
    ref: ForwardedRef<HTMLElement | HTMLDataElement>,
  ) => {
    const props = {
      children: <bdi translate="no">{children}</bdi>,
      className: clsx('utrecht-preserve-data', className),
      ...restProps,
    };

    return typeof dateTime !== 'undefined' ? (
      <time {...props} dateTime={dateTime} ref={ref as ForwardedRef<HTMLTimeElement>} />
    ) : typeof value !== 'undefined' ? (
      <data {...props} value={value} ref={ref as ForwardedRef<HTMLDataElement>} />
    ) : (
      <bdi translate="no" ref={ref} {...props}>
        {children}
      </bdi>
    );
  },
);

PreserveData.displayName = 'PreserveData';
