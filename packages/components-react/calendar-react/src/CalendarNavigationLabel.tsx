import { PropsWithChildren, TimeHTMLAttributes } from 'react';

type CalendarNavigationLabelProps = TimeHTMLAttributes<HTMLTimeElement>;

export const CalendarNavigationLabel = ({ children, ...props }: PropsWithChildren<CalendarNavigationLabelProps>) => (
  <time className="utrecht-calendar__navigation-label" {...props}>
    {children}
  </time>
);
