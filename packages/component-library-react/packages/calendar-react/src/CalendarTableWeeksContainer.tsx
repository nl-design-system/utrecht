import { PropsWithChildren } from 'react';

export const CalendarTableWeeksContainer = ({ children }: PropsWithChildren) => (
  <thead className="utrecht-calendar__table-weeks-container">
    <tr className="utrecht-calendar__table-weeks-container-content">{children}</tr>
  </thead>
);
