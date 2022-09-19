import React from 'react';

export interface CalendarNavigationProps
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children?: React.ReactNode;
}

export const CalendarNavigation: React.FC<CalendarNavigationProps> = ({ children, ...props }) => (
  <div className="utrecht-calendar__navigation" {...props}>
    {children}
  </div>
);
