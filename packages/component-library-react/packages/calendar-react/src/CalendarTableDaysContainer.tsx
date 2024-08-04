import { DetailedHTMLProps, HTMLAttributes, PropsWithChildren } from 'react';

export interface CalendarTableDaysContainerProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLTableSectionElement>, HTMLTableSectionElement> {}

export const CalendarTableDaysContainer = ({
  children,
  ...props
}: PropsWithChildren<CalendarTableDaysContainerProps>) => (
  <tbody {...props} className="utrecht-calendar__table-days-container">
    {children}
  </tbody>
);
