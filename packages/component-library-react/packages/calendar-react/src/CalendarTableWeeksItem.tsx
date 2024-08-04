import { DetailedHTMLProps, PropsWithChildren, ThHTMLAttributes } from 'react';

export interface CalendarTableWeeksItemProps
  extends DetailedHTMLProps<ThHTMLAttributes<HTMLTableCellElement>, HTMLTableCellElement> {}

export const CalendarTableWeeksItem = ({ children, ...props }: PropsWithChildren<CalendarTableWeeksItemProps>) => (
  <th {...props} className="utrecht-calendar__table-weeks-item">
    {children}
  </th>
);
