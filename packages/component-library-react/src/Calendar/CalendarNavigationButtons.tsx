import React from 'react';
import { CalendarButton, CalendarButtonProps } from './CalendarButton';
import { CalendarIcon } from './CalendarIcon';
interface CalendarNavigationButtonsProps extends CalendarButtonProps {
  onPreviousClick?: React.MouseEventHandler<HTMLButtonElement>;
  onNextClick?: React.MouseEventHandler<HTMLButtonElement>;
  previousIcon?: any;
  nextIcon?: any;
  previousTitle?: string;
  nextTitle?: string;
  children?: React.ReactNode;
}

export const CalendarNavigationButtons: React.FC<CalendarNavigationButtonsProps> = ({
  onPreviousClick,
  onNextClick,
  previousIcon,
  nextIcon,
  children,
  ...props
}) => (
  <div className="utrecht-calendar__navigation-buttons">
    <CalendarButton onClick={onPreviousClick} {...props}>
      <CalendarIcon>{previousIcon}</CalendarIcon>
    </CalendarButton>
    {children}
    <CalendarButton onClick={onNextClick} {...props}>
      <CalendarIcon>{nextIcon}</CalendarIcon>
    </CalendarButton>
  </div>
);
