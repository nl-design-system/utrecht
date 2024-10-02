import { DetailedHTMLProps, HTMLAttributes, PropsWithChildren } from 'react';

export interface CalendarTableDaysItemProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLTableRowElement>, HTMLTableRowElement> {}

export const CalendarTableDaysItem = ({ children, ...props }: PropsWithChildren<CalendarTableDaysItemProps>) => (
  <tr {...props}>{children}</tr>
);
