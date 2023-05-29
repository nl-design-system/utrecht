import React, { HTMLAttributes, PropsWithChildren } from 'react';

interface ExampleTimeDurationProps extends PropsWithChildren<HTMLAttributes<HTMLElement>> {
  startTime: string;
  endTime: string;
  locale: string;
}

export const ExampleTimeDuration = ({ startTime, endTime, locale }: ExampleTimeDurationProps) => {
  // Use EN DASH (U+2013) as separator
  const separator = ' \u2013 ';
  let startFormatted = new Intl.DateTimeFormat(locale, {
    hour: 'numeric',
    minute: 'numeric',
  }).format(new Date(startTime));

  let endFormatted = new Intl.DateTimeFormat(locale, {
    hour: 'numeric',
    minute: 'numeric',
  }).format(new Date(endTime));

  let suffix = '';

  if (locale === 'nl-NL') {
    // Format `09:00` as `09.00`
    startFormatted = startFormatted.replace(':', '.');
    endFormatted = endFormatted.replace(':', '.');
    suffix = ' uur';
  }

  return (
    <>
      <time dateTime={startTime}>{startFormatted}</time>
      {separator}
      <time dateTime={endTime}>{endFormatted}</time>
      {suffix}
    </>
  );
};
