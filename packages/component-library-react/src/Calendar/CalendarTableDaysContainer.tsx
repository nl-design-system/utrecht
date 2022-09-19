import React from 'react';

export interface CalendarTableDaysContainerProps
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLTableSectionElement>, HTMLTableSectionElement> {
  children?: React.ReactNode;
}

export const CalendarTableDaysContainer: React.FC<CalendarTableDaysContainerProps> = ({ children, ...props }) => (
  <tbody {...props} className="utrecht-calendar__table-days-container">
    {children}
  </tbody>
);
