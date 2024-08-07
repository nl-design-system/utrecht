import clsx from 'clsx';
import { PropsWithChildren } from 'react';
import { CalendarButton, CalendarButtonProps } from './CalendarButton';
export interface CalendarTableDaysItemDayProps extends CalendarButtonProps {
  day: string;
  dayOutOfTheMonth?: boolean;
  isToday: boolean;
  emphasis?: boolean;
  selected?: boolean;
  disabled?: boolean;
}

export const CalendarTableDaysItemDay = ({
  day,
  dayOutOfTheMonth,
  isToday,
  emphasis,
  selected,
  disabled,
  ...props
}: PropsWithChildren<CalendarTableDaysItemDayProps>) => (
  <td>
    <CalendarButton
      className={clsx(
        'utrecht-calendar__table-days-item-day',
        { 'utrecht-calendar__table-days-item-day--out-of-the-month': dayOutOfTheMonth },
        { 'utrecht-calendar__table-days-item-day--is-today': isToday },
        { 'utrecht-calendar__table-days-item-day--emphasis': emphasis },
        { 'utrecht-calendar__table-days-item-day--selected': selected },
      )}
      disabled={disabled}
      {...props}
    >
      {day}
    </CalendarButton>
  </td>
);
