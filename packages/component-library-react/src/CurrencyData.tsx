/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Robbert Broersma
 */

import clsx from 'clsx';
import { ForwardedRef, forwardRef, HTMLAttributes } from 'react';

export interface CurrencyDataProps extends HTMLAttributes<HTMLDataElement> {
  currency?: string;
  amount: string | number;
  locale?: string;
}

export const formatLabel = (locale: string, currency: string, amount: number): string =>
  new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
    minimumFractionDigits: Number.isInteger(amount) ? 0 : undefined,
    useGrouping: false,
  })
    .format(amount)
    // Remove whitespace
    .replace(/[\s]+/g, '')
    // Replace dash (U+002D) with minus sign (U+2212)
    .replace('-', '\u2212');

export const formatVisually = (locale: string, currency: string, amount: number): string => {
  let formatted = new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
  }).format(amount);

  // Replace dash (U+002D) with minus sign (U+2212)
  formatted = formatted.replace(/-/, '\u2212');

  // Move the minus to before the currency
  if ((locale === 'nl' || locale === 'nl-NL') && /\u2212/.test(formatted)) {
    formatted = formatted.replace(/(.+)\u2212(.+)/, '\u2212 $1$2');
  }

  // Replace white space with non-breaking space
  formatted = formatted.replace(/ /g, '\u00A0');

  return formatted;
};

export const CurrencyData = forwardRef(
  (
    { children, currency = 'EUR', amount, locale = 'nl-NL', className, ...restProps }: CurrencyDataProps,
    ref: ForwardedRef<HTMLDataElement>,
  ) => {
    const number = typeof amount === 'string' ? parseFloat(amount) : amount;
    const labelFormatted = formatLabel(locale, currency, number);
    const visuallyFormatted = formatVisually(locale, currency, number);

    return (
      <data
        {...restProps}
        ref={ref}
        value={`${currency} ${amount}`}
        className={clsx(
          'utrecht-currency-data',
          number < 0 && 'utrecht-currency-data--negative',
          number > 0 && 'utrecht-currency-data--positive',
          className,
        )}
        aria-label={labelFormatted}
      >
        {children || visuallyFormatted}
      </data>
    );
  },
);

CurrencyData.displayName = 'CurrencyData';
