import { FC } from 'react';
import { Heading2 } from '../Heading2';

interface CalendarNavigationLabelProps {
  label?: string;
}

export const CalendarNavigationLabel: FC<CalendarNavigationLabelProps> = ({ label }) => (
  <Heading2 className="utrecht-calendar__navigation-label">{label}</Heading2>
);
