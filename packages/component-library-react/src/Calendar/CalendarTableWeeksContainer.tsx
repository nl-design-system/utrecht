import React from 'react';

export const CalendarTableWeeksContainer: React.FC<{ children?: React.ReactNode }> = ({ children }) => (
  <thead className="utrecht-calendar__table-weeks-container">
    <tr className="utrecht-calendar__table-weeks-container-content">{children}</tr>
  </thead>
);
