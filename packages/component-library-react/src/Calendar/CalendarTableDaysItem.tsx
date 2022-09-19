import React from 'react';

export interface CalendarTableDaysItemProps
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLTableRowElement>, HTMLTableRowElement> {
  children?: React.ReactNode;
}

export const CalendarTableDaysItem: React.FC<CalendarTableDaysItemProps> = ({ children, ...props }) => (
  <tr {...props}>{children}</tr>
);
