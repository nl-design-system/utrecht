import React from 'react';

export const CalendarTableWeeksContainer: React.FC<{ children?: React.ReactNode }> = ({ children }) => (
  <thead className="utrecht-calendar__table-weeks-container" scope="col">
    <tr className="utrecht-calendar__table-weeks-container-content">{children}</tr>
  </thead>
);
