import { MouseEventHandler, PropsWithChildren } from 'react';
import { CalendarButton, CalendarButtonProps } from './CalendarButton';
import { CalendarIcon } from './CalendarIcon';
interface CalendarNavigationButtonsProps extends CalendarButtonProps {
  onPreviousClick?: MouseEventHandler<HTMLButtonElement>;
  onNextClick?: MouseEventHandler<HTMLButtonElement>;
  previousIcon?: any;
  nextIcon?: any;
  previousTitle?: string;
  nextTitle?: string;
}

export const CalendarNavigationButtons = ({
  onPreviousClick,
  onNextClick,
  previousIcon,
  nextIcon,
  children,
  ...props
}: PropsWithChildren<CalendarNavigationButtonsProps>) => (
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
