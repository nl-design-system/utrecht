import { clsx } from 'clsx';
import { DetailedHTMLProps, HTMLAttributes, PropsWithChildren } from 'react';

export interface CalendarIconProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const CalendarIcon = ({ children, ...props }: PropsWithChildren<CalendarIconProps>) => (
  <div className={clsx('utrecht-calendar__icon')} {...props}>
    {children}
  </div>
);
