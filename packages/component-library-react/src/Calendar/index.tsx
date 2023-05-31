/* eslint-disable no-unused-vars */
import {
  addMonths,
  addWeeks,
  addYears,
  eachDayOfInterval,
  endOfDay,
  endOfWeek,
  format,
  formatISO,
  getYear,
  isAfter,
  isBefore,
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
import { FC, useState } from 'react';
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

function createCalendar(today: Date): Date[] {
  const start = startOfWeek(startOfMonth(today), {
    weekStartsOn: 1 /* Monday */,
  });
  const end = endOfWeek(addWeeks(start, 5), {
    weekStartsOn: 1 /* Monday */,
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

interface CalendarProps {
  /**
   * `onCalendarClick` It's a callback function that returns the selected date, triggered when you click on the day
   *
   * */
  onCalendarClick: (date: string) => void;
  /**
   * `events` An array of event objects that contain some properties that allow you to change the calendar day style base on your value
   * `{date?: Date; emphasis?: boolean; selected?: boolean; disabled?: boolean;}`
   *
   * */
  events?: Events[];
  /**
   * `currentDate` The default value is `new Date()`, but you can provide a different date
   *   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
   * */
  currentDate?: Date;
  /**
   * `locale` to change the calendar language by using 'date-fns/locale'
   *  `import { nl, enUS } from 'date-fns/locale';`
   * */
  locale?: Locale;
  previousYearButtonTitle?: string;
  nextYearButtonTitle?: string;
  previousMonthButtonTitle?: string;
  nextMonthButtonTitle?: string;
  minDate?: Date;
  maxDate?: Date;
}

/**
 * Calendar Component
 * powered by date-fns, so that make it easy to use the `date-fns` date functions & locale
 * */

export const Calendar: FC<CalendarProps> = ({
  onCalendarClick,
  events,
  currentDate,
  locale = enUS,
  previousYearButtonTitle = 'Previous year',
  nextYearButtonTitle = 'Next year',
  previousMonthButtonTitle = 'Previous month',
  nextMonthButtonTitle = 'Next month',
  minDate,
  maxDate,
}) => {
  const now = new Date();
  const _events: InternalDayState[] = (events || []).map((day: Events) => ({
    ...day,
    date: parseISO(day.date),
  }));

  const [visibleMonth, setVisibleMonth] = useState(currentDate || now);
  const [selectedDate, setSelectedDate] = useState(currentDate);
  const calendar = createCalendar(visibleMonth);
  const start = startOfWeek(visibleMonth, { weekStartsOn: Day.MONDAY });
  const end = endOfWeek(visibleMonth, { weekStartsOn: Day.MONDAY });

  const maxRows = 6;
  const currentWeek = eachDayOfInterval({ start, end });
  const chunksWeeks = chunk(calendar, calendar.length / maxRows);

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
    currentMonth: format(visibleMonth, 'yyyy-mm'),
    currentMonthLabel: format(visibleMonth, 'LLLL Y', { locale }),
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
      label: format(day, 'EEEEEE', { locale }),
      labelAbbr: format(day, 'EEEE', { locale }),
    })),
    rows: weeks.map((week) => ({
      columns: week.map((day) => ({
        isToday: isSameDay(day.date, now),
        isCurrentMonth: isSameMonth(day.date, visibleMonth),
        onClick: () => {
          setVisibleMonth(day.date);
          if (isSameMonth(day.date, visibleMonth)) {
            setSelectedDate(day.date);
            onCalendarClick(formatISO(day.date));
          }
        },
        label: format(day.date, 'eeee dd LLLL Y', { locale }),
        date: day.date.getDate().toString(),
        emphasis: day.emphasis,
        selected: day.selected || (selectedDate && isSameDay(day.date, selectedDate)),
        disabled:
          day.disabled ||
          (minDate && isBefore(day.date, startOfDay(minDate))) ||
          (maxDate && isAfter(day.date, endOfDay(maxDate))),
      })),
    })),
  };

  return (
    <div className="utrecht-calendar">
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
            <CalendarNavigationLabel dateTime={grid.currentMonth}>{grid.currentMonthLabel}</CalendarNavigationLabel>
          </CalendarNavigationButtons>
        </CalendarNavigationButtons>
      </CalendarNavigation>
      <table className="utrecht-calendar__table" role="grid">
        <CalendarTableWeeksContainer>
          {grid.columnHeaders.map(({ label, labelAbbr }, index) => (
            <CalendarTableWeeksItem scope="col" abbr={labelAbbr} key={index}>
              {label}
            </CalendarTableWeeksItem>
          ))}
        </CalendarTableWeeksContainer>
        <CalendarTableDaysContainer>
          {grid.rows.map((row, rowIndex) => (
            <CalendarTableDaysItem key={rowIndex}>
              {row.columns.map(
                ({ date, isToday, isCurrentMonth, onClick, label, selected, emphasis, disabled }, columnIndex) => {
                  return (
                    <CalendarTableDaysItemDay
                      isToday={isToday}
                      dayOutOfTheMonth={!isCurrentMonth}
                      key={columnIndex}
                      onClick={onClick}
                      aria-label={label}
                      day={date}
                      emphasis={emphasis}
                      selected={selected}
                      disabled={disabled}
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
