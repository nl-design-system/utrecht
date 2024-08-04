import { DetailedHTMLProps, HTMLAttributes, PropsWithChildren } from 'react';

export interface CalendarNavigationProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const CalendarNavigation = ({ children, ...props }: PropsWithChildren<CalendarNavigationProps>) => (
  <div className="utrecht-calendar__navigation" {...props}>
    {children}
  </div>
);
