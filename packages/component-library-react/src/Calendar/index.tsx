/* eslint-disable no-unused-vars */
import {
  addDays,
  addMonths,
  addWeeks,
  addYears,
  eachDayOfInterval,
  endOfDay,
  endOfMonth,
  endOfWeek,
  format,
  formatISO,
  getYear,
  isAfter,
  isBefore,
  isEqual,
  isSameDay,
  isSameMonth,
  Locale,
  parseISO,
  setMonth,
  setYear,
  startOfDay,
  startOfMonth,
  startOfWeek,
} from 'date-fns';
import { enUS } from 'date-fns/locale';
import chunk from 'lodash.chunk';
import { FC, KeyboardEvent, ReactNode, useId, useRef, useState } from 'react';
import { CalendarNavigation } from './CalendarNavigation';
import { CalendarNavigationButtons } from './CalendarNavigationButtons';
import { CalendarNavigationLabel } from './CalendarNavigationLabel';
import { CalendarTableDaysContainer } from './CalendarTableDaysContainer';
import { CalendarTableDaysItem } from './CalendarTableDaysItem';
import { CalendarTableDaysItemDay } from './CalendarTableDaysItemDay';
import { CalendarTableWeeksContainer } from './CalendarTableWeeksContainer';
import { CalendarTableWeeksItem } from './CalendarTableWeeksItem';
import { IconArrowLeft } from './IconArrowLeft';
import { IconArrowLeftDouble } from './IconArrowLeftDouble';
import { IconArrowRight } from './IconArrowRight';
import { IconArrowRightDouble } from './IconArrowRightDouble';

/* date-fns `Day` type */
enum Day {
  SUNDAY = 0,
  MONDAY = 1,
  TUESDAY = 2,
  WEDNESDAY = 3,
  THURSDAY = 4,
  FRIDAY = 5,
  SATURDAY = 6,
}

/** returns YYYY-MM format */
const formatISOMonth = (date: Date): string =>
  // remove the day of month part (-DD)
  formatISO(date, { representation: 'date' }).replace(/-\d+$/, '');

function createCalendar(today: Date): Date[] {
  const MAX_DAYS_PER_MONTH = 31;
  const DAYS_PER_WEEK = 7;
  const MAX_WEEKS_PER_MONTH = Math.ceil(MAX_DAYS_PER_MONTH / DAYS_PER_WEEK);
  const start = startOfWeek(startOfMonth(today), {
    weekStartsOn: Day.MONDAY,
  });
  const end = endOfWeek(addWeeks(start, MAX_WEEKS_PER_MONTH), {
    weekStartsOn: Day.MONDAY,
  });
  return eachDayOfInterval({ start, end });
}

export type Events = {
  /** ISO 8601 date string */
  date: string;
  emphasis?: boolean;
  selected?: boolean;
  disabled?: boolean;
};

/**
 * Public API is ISO 8601 date string, internally we use a `Date` object.
 */
interface InternalDayState {
  date: Date;
  emphasis?: boolean;
  disabled?: boolean;
  selected?: boolean;
}

export interface CalendarProps {
  /**
   * `onChange` It's a callback function that returns the selected date in `evt.detail.value`, triggered when you click on the day
   */
  onChange?: (value: CustomEvent<{ value: string }>) => void;
  /**
   * `events` An array of event objects that contain some properties that allow you to change the calendar day style base on your value
   * `{date?: string; emphasis?: boolean; selected?: boolean; disabled?: boolean;}`
   */
  events?: Events[];
  /**
   * `showDate` The default value is current system date, but you can provide a different date as ISO 8601 date.
   */
  defaultValue?: string;
  /**
   * `locale` to change the calendar language by using 'date-fns/locale'
   *  `import { nl, enUS } from 'date-fns/locale';`
   */
  locale?: Locale;
  previousYearButtonTitle?: ReactNode;
  nextYearButtonTitle?: ReactNode;
  previousMonthButtonTitle?: ReactNode;
  nextMonthButtonTitle?: ReactNode;
  min?: string;
  max?: string;

  /** @deprecated */
  onCalendarClick?: (dateTime: string) => void;

  /** @deprecated */
  currentDate?: Date;

  /** @deprecated */
  minDate?: Date;

  /** @deprecated */
  maxDate?: Date;
}

const deprecated = (prev: string, current: string) => {
  try {
    console.warn(`${prev} is deprecated, please use: ${current}`);
  } catch (e) {
    // Ignore when no developers tools are available
  }
};

/**
 * Calendar Component
 * powered by date-fns, so that make it easy to use the `date-fns` date functions & locale
 * */

export const Calendar: FC<CalendarProps> = ({
  onChange,
  events,
  defaultValue,
  locale = enUS,
  previousYearButtonTitle = 'Previous year',
  nextYearButtonTitle = 'Next year',
  previousMonthButtonTitle = 'Previous month',
  nextMonthButtonTitle = 'Next month',
  onCalendarClick,
  minDate,
  maxDate,
  min,
  max,
  currentDate,
}) => {
  let _minDate: Date, _maxDate: Date;

  if (onCalendarClick) {
    deprecated('onCalendarClick', 'onChange');
  }
  if (minDate instanceof Date) {
    deprecated('minDate', 'min');
    _minDate = startOfDay(minDate);
  }
  if (maxDate instanceof Date) {
    deprecated('maxDate', 'max');
    _maxDate = endOfDay(maxDate);
  }

  if (typeof min === 'string') {
    _minDate = startOfDay(parseISO(min));
  }
  if (typeof max === 'string') {
    _maxDate = endOfDay(parseISO(max));
  }

  const now = new Date();
  const _events: InternalDayState[] = (events || []).map((day: Events) => ({
    ...day,
    date: parseISO(day.date),
  }));

  let defaultDate = typeof defaultValue === 'string' ? parseISO(defaultValue) : undefined;

  if (currentDate instanceof Date) {
    deprecated('currentDate', 'defaultValue');
    defaultDate = currentDate;
  }

  const [visibleMonth, setVisibleMonth] = useState(defaultDate || now);
  const [selectedDate, setSelectedDate] = useState(defaultDate);

  if (defaultDate && !(selectedDate && isEqual(selectedDate, defaultDate))) {
    setSelectedDate(defaultDate);
    setVisibleMonth(defaultDate);
  }

  const calendar = createCalendar(visibleMonth);
  const start = startOfWeek(visibleMonth, { weekStartsOn: Day.MONDAY });
  const end = endOfWeek(visibleMonth, { weekStartsOn: Day.MONDAY });

  const maxRows = 6;
  const currentWeek = eachDayOfInterval({ start, end });
  const chunksWeeks = chunk(calendar, calendar.length / maxRows);
  const captionId = useId();

  const weeks: InternalDayState[][] = chunksWeeks.map((week) =>
    week.map((date) => {
      const currentEvent = _events.find((e) => isSameDay(endOfDay(e.date), date));
      if (currentEvent) {
        return {
          date,
          emphasis: currentEvent.emphasis || false,
          selected: currentEvent.selected || false,
          disabled: currentEvent.disabled || false,
        };
      } else {
        return {
          date,
          emphasis: false,
          selected: false,
          disabled: false,
        };
      }
    }),
  );

  const grid = {
    currentMonth: formatISOMonth(visibleMonth),
    currentMonthLabel: format(visibleMonth, 'LLLL y', { locale }),
    actions: {
      showPreviousYear: {
        action: () => setVisibleMonth(setYear(visibleMonth, getYear(visibleMonth) - 1)),
        label: previousYearButtonTitle,
      },
      showPreviousMonth: {
        action: () => setVisibleMonth(setMonth(visibleMonth, visibleMonth.getMonth() - 1)),
        label: previousMonthButtonTitle,
      },
      showNextMonth: {
        action: () => setVisibleMonth(addMonths(visibleMonth, 1)),
        label: nextMonthButtonTitle,
      },
      showNextYear: {
        action: () => setVisibleMonth(addYears(visibleMonth, 1)),
        label: nextYearButtonTitle,
      },
    },
    columnHeaders: currentWeek.map((day) => ({
      id: useId(),
      label: format(day, 'EEEE', { locale }),
      labelAbbr: format(day, 'EEEEEE', { locale }),
    })),
    rows: weeks.map((week) => ({
      columns: week.map((day) => ({
        isToday: isSameDay(day.date, now),
        isCurrentMonth: isSameMonth(day.date, visibleMonth),
        onClick: () => {
          setVisibleMonth(day.date);
          if (isSameMonth(day.date, visibleMonth)) {
            setSelectedDate(day.date);
            if (typeof onCalendarClick === 'function') {
              onCalendarClick(formatISO(day.date));
            }
            if (typeof onChange === 'function') {
              onChange(
                new CustomEvent('change', {
                  detail: {
                    value: formatISO(day.date, { representation: 'date' }),
                  },
                }),
              );
            }
          }
        },
        label: format(day.date, 'PPP', { locale }),
        day: format(day.date, 'd', { locale }),
        date: formatISO(day.date, { representation: 'date' }),
        emphasis: day.emphasis,
        selected: day.selected || (selectedDate && isSameDay(day.date, selectedDate)),
        disabled:
          day.disabled || (_minDate && isBefore(day.date, _minDate)) || (_maxDate && isAfter(day.date, _maxDate)),
      })),
    })),
  };

  const calendarRef = useRef<HTMLTableElement>(null);

  const focusCalendar = () => {
    if (calendarRef.current) {
      calendarRef.current.focus();
    }
  };

  // const move = setVisibleMonth;
  const move = (date: Date) => {
    setSelectedDate(date);
    setVisibleMonth(date);
  };

  const focusPreviousWeek = () => {
    if (selectedDate) {
      console.log('Previous week');
      move(addWeeks(selectedDate, -1));
    }
  };
  const focusNextWeek = () => {
    if (selectedDate) {
      console.log('Next week');
      move(addWeeks(selectedDate, 1));
    }
  };
  const focusStartOfWeek = () => {
    if (selectedDate) {
      console.log('Start of week');
      move(startOfWeek(selectedDate));
    }
  };
  const focusPreviousDay = () => {
    if (selectedDate) {
      console.log('Previous day');
      move(addDays(selectedDate, -1));
      focusCalendar();
    }
  };
  const focusEndOfWeek = () => {
    if (selectedDate) {
      console.log('End of week');
      move(endOfWeek(selectedDate));
    }
  };
  const focusNextDay = () => {
    if (selectedDate) {
      console.log('Next day');
      move(addDays(selectedDate, 1));
      focusCalendar();
    }
  };
  const focusStartOfMonth = () => {
    if (selectedDate) {
      console.log('Start of month');
      move(startOfMonth(selectedDate));
    }
  };
  const focusNextMonth = () => {
    if (selectedDate) {
      console.log('Next month');
      move(addMonths(selectedDate, -1));
    }
  };
  const focusNextYear = () => {
    if (selectedDate) {
      console.log('Next year');
      move(addYears(selectedDate, -1));
    }
  };
  const focusEndOfMonth = () => {
    if (selectedDate) {
      console.log('End of month');
      move(endOfMonth(selectedDate));
    }
  };
  const focusPreviousYear = () => {
    if (selectedDate) {
      console.log('Previous year');
      move(addYears(selectedDate, -1));
    }
  };
  const focusPreviousMonth = () => {
    if (selectedDate) {
      console.log('Previous month');
      move(addMonths(selectedDate, -1));
    }
  };
  const handleKeyPress = (evt: KeyboardEvent) => {
    let action;

    if (evt.key === 'ArrowUp') {
      action = focusPreviousWeek;
    } else if (evt.key === 'ArrowDown') {
      action = focusNextWeek;
    } else if (evt.key === 'ArrowLeft') {
      action = evt.ctrlKey ? focusStartOfWeek : focusPreviousDay;
    } else if (evt.key === 'ArrowRight') {
      action = evt.ctrlKey ? focusEndOfWeek : focusNextDay;
    } else if (evt.key === 'Home') {
      action = focusStartOfMonth;
    } else if (evt.key === 'End') {
      action = focusEndOfMonth;
    } else if (evt.key === 'PageUp') {
      action = evt.ctrlKey ? focusPreviousYear : focusPreviousMonth;
    } else if (evt.key === 'PageDown') {
      action = evt.ctrlKey ? focusNextYear : focusNextMonth;
    }

    if (action) {
      evt.preventDefault();
      action();
    }
  };

  return (
    <div className="utrecht-calendar" dir="auto">
      <CalendarNavigation>
        <CalendarNavigationButtons
          previousIcon={<IconArrowLeftDouble title={grid.actions.showPreviousYear.label} />}
          nextIcon={<IconArrowRightDouble title={grid.actions.showNextYear.label} />}
          onPreviousClick={grid.actions.showPreviousYear.action}
          onNextClick={grid.actions.showNextYear.action}
        >
          <CalendarNavigationButtons
            previousIcon={<IconArrowLeft title={grid.actions.showPreviousMonth.label} />}
            nextIcon={<IconArrowRight title={grid.actions.showNextMonth.label} />}
            onPreviousClick={grid.actions.showPreviousMonth.action}
            onNextClick={grid.actions.showNextMonth.action}
          >
            <CalendarNavigationLabel id={captionId} dateTime={grid.currentMonth}>
              {grid.currentMonthLabel}
            </CalendarNavigationLabel>
          </CalendarNavigationButtons>
        </CalendarNavigationButtons>
      </CalendarNavigation>
      <table
        className="utrecht-calendar__table"
        role="grid"
        aria-labelledby={captionId}
        tabIndex={-1}
        ref={calendarRef}
        onKeyDown={handleKeyPress}
      >
        <CalendarTableWeeksContainer>
          {grid.columnHeaders.map(({ id, label, labelAbbr }, index) => (
            <CalendarTableWeeksItem
              scope="col"
              abbr={labelAbbr !== label ? label : undefined}
              aria-label={labelAbbr !== label ? label : undefined}
              key={index}
              id={id}
            >
              {labelAbbr}
            </CalendarTableWeeksItem>
          ))}
        </CalendarTableWeeksContainer>
        <CalendarTableDaysContainer>
          {grid.rows.map((row, rowIndex) => (
            <CalendarTableDaysItem key={rowIndex}>
              {row.columns.map(
                ({ day, date, isToday, isCurrentMonth, onClick, label, selected, emphasis, disabled }, columnIndex) => {
                  return (
                    <CalendarTableDaysItemDay
                      isToday={isToday}
                      dayOutOfTheMonth={!isCurrentMonth}
                      key={columnIndex}
                      onClick={onClick}
                      aria-label={label}
                      aria-describedby={grid.columnHeaders[columnIndex].id}
                      day={day}
                      date={date}
                      emphasis={emphasis}
                      selected={selected}
                      disabled={disabled}
                      onKeyDown={handleKeyPress}
                    />
                  );
                },
              )}
            </CalendarTableDaysItem>
          ))}
        </CalendarTableDaysContainer>
      </table>
    </div>
  );
};
