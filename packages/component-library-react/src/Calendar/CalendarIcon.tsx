import { clsx } from 'clsx';
import React from 'react';

export interface CalendarIconProps
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children?: React.ReactNode;
}

export const CalendarIcon: React.FC<CalendarIconProps> = ({ children, ...props }) => (
  <div className={clsx('utrecht-calendar__icon')} {...props}>
    {children}
  </div>
);
