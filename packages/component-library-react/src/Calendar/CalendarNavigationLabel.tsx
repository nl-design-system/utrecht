import { FC, TimeHTMLAttributes } from 'react';

type CalendarNavigationLabelProps = TimeHTMLAttributes<HTMLTimeElement>;

export const CalendarNavigationLabel: FC<CalendarNavigationLabelProps> = ({ children, ...props }) => (
  <time className="utrecht-calendar__navigation-label" {...props}>
    {children}
  </time>
);
