import React, { HTMLAttributes, PropsWithChildren } from 'react';

interface ExampleDateValueProps extends PropsWithChildren<HTMLAttributes<HTMLElement>> {
  dateTime: string;
  locale: string;
}

export const ExampleDateValue = ({ dateTime, locale }: ExampleDateValueProps) => (
  <time dateTime={dateTime}>
    {new Intl.DateTimeFormat(locale, {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }).format(new Date(dateTime))}
  </time>
);
