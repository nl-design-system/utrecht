import clsx from 'clsx';
import { Ref } from 'react';
import { CalendarButton, CalendarButtonProps } from './CalendarButton';
export interface CalendarTableDaysItemDayProps extends CalendarButtonProps {
  day: string;
  date: string;
  dayOutOfTheMonth?: boolean;
  isToday: boolean;
  emphasis?: boolean;
  selected?: boolean;
  disabled?: boolean;
  buttonRef: Ref<HTMLButtonElement>;
}

export const CalendarTableDaysItemDay = ({
  day,
  dayOutOfTheMonth,
  date,
  isToday,
  emphasis,
  selected,
  disabled,
  buttonRef,
  ...props
}: CalendarTableDaysItemDayProps) => (
  <td
    role="gridcell"
    aria-current={isToday ? 'date' : undefined}
    aria-selected={selected}
    aria-readonly={dayOutOfTheMonth}
  >
    <CalendarButton
      className={clsx(
        'utrecht-calendar__table-days-item-day',
        { 'utrecht-calendar__table-days-item-day--readonly': dayOutOfTheMonth },
        { 'utrecht-calendar__table-days-item-day--current': isToday },
        { 'utrecht-calendar__table-days-item-day--emphasis': emphasis },
        { 'utrecht-calendar__table-days-item-day--selected': selected },
      )}
      disabled={disabled}
      value={date}
      ref={buttonRef}
      {...props}
    >
      <time dateTime={date}>{day}</time>
    </CalendarButton>
  </td>
);
