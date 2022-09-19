import React from 'react';

export interface CalendarTableWeeksItemProps
  extends React.DetailedHTMLProps<React.ThHTMLAttributes<HTMLTableHeaderCellElement>, HTMLTableHeaderCellElement> {
  children?: React.ReactNode;
}

export const CalendarTableWeeksItem: React.FC<CalendarTableWeeksItemProps> = ({ children, ...props }) => (
  <th {...props} className="utrecht-calendar__table-weeks-item">
    {children}
  </th>
);
