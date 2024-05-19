/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Robbert Broersma
 */

import clsx from 'clsx';
import { ForwardedRef, forwardRef, HTMLAttributes } from 'react';

export interface IBANDataProps extends HTMLAttributes<HTMLDataElement> {
  value: string;
}

/* Exported only for unit tests, not part of the public API */
export const normalizeIBAN = (iban: string): string =>
  iban
    // Remove whitespace and word separator characters such as the dash
    .replace(/[\s+\W]+/g, '')
    .toUpperCase();

/* Exported only for unit tests, not part of the public API */
export const formatIBAN = (normalizedIBAN: string): string =>
  normalizedIBAN
    // Add a space after every four characters, except at the end
    .replace(/(.{4})(?!$)/g, '$1 ');

export const IBANData = forwardRef(
  ({ children, value, className, ...restProps }: IBANDataProps, ref: ForwardedRef<HTMLDataElement>) => {
    const normalized = normalizeIBAN(value);
    const formatted = formatIBAN(normalized);

    return (
      <data {...restProps} ref={ref} value={normalized} className={clsx('utrecht-iban-data', className)} translate="no">
        {children || formatted}
      </data>
    );
  },
);

IBANData.displayName = 'IBANData';
