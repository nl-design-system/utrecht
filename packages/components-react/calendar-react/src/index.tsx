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
import chunk from 'lodash-es/chunk';
import { useState } from 'react';
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
  date: string;
  emphasis?: boolean;
  selected?: boolean;
  disabled?: boolean;
};

export interface CalendarProps {
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

export const Calendar = ({
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
}: CalendarProps) => {
  const [visibleMonth, setVisibleMonth] = useState(currentDate || new Date());
  const [selectedDate, setSelectedDate] = useState(currentDate);
  const calendar = createCalendar(visibleMonth);
  const start = startOfWeek(visibleMonth, { weekStartsOn: 1 });
  const end = endOfWeek(visibleMonth, { weekStartsOn: 1 });

  const currentWeek = eachDayOfInterval({ start, end }).map((day) => day);
  const chunksWeeks = chunk(calendar, calendar.length / 6);

  const weeks = chunksWeeks.map((week) =>
    week.map((date) => {
      const currentEvent =
        events && events.length > 0 && events.find((e) => isSameDay(endOfDay(parseISO(e.date)), date));
      if (currentEvent) {
        return {
          date,
          emphasis: currentEvent.emphasis,
          selected: currentEvent.selected,
          disabled: currentEvent.disabled,
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

  return (
    <div className="utrecht-calendar">
      <CalendarNavigation>
        <CalendarNavigationButtons
          previousIcon={<IconArrowLeftDouble title={previousYearButtonTitle} />}
          nextIcon={<IconArrowRightDouble title={nextYearButtonTitle} />}
          onPreviousClick={() => setVisibleMonth(setYear(visibleMonth, getYear(visibleMonth) - 1))}
          onNextClick={() => setVisibleMonth(addYears(visibleMonth, 1))}
        >
          <CalendarNavigationButtons
            previousIcon={<IconArrowLeft title={previousMonthButtonTitle} />}
            nextIcon={<IconArrowRight title={nextMonthButtonTitle} />}
            onPreviousClick={() => setVisibleMonth(setMonth(visibleMonth, visibleMonth.getMonth() - 1))}
            onNextClick={() => setVisibleMonth(addMonths(visibleMonth, 1))}
          >
            <CalendarNavigationLabel dateTime={format(visibleMonth, 'yyyy-mm')}>
              {format(visibleMonth, 'LLLL y', { locale })}
            </CalendarNavigationLabel>
          </CalendarNavigationButtons>
        </CalendarNavigationButtons>
      </CalendarNavigation>
      <table className="utrecht-calendar__table" role="grid">
        <CalendarTableWeeksContainer>
          {currentWeek &&
            currentWeek.length > 0 &&
            currentWeek.map((day, index) => (
              <CalendarTableWeeksItem scope="col" abbr={format(day, 'EEEE', { locale })} key={index}>
                {format(day, 'EEEEEE', { locale })}
              </CalendarTableWeeksItem>
            ))}
        </CalendarTableWeeksContainer>
        <CalendarTableDaysContainer>
          {weeks &&
            weeks.length > 0 &&
            weeks.map((week, index) => (
              <CalendarTableDaysItem key={index}>
                {week.map((day, index) => {
                  return (
                    <CalendarTableDaysItemDay
                      isToday={isSameDay(day.date, Date.now())}
                      dayOutOfTheMonth={!isSameMonth(day.date, visibleMonth)}
                      key={index}
                      onClick={() => {
                        setVisibleMonth(day.date);
                        setSelectedDate(day.date);
                        onCalendarClick(formatISO(day.date));
                      }}
                      aria-label={format(day.date, 'eeee dd LLLL Y', { locale })}
                      day={day.date.getDate().toString()}
                      emphasis={day.emphasis}
                      selected={day.selected || (selectedDate && isSameDay(day.date, selectedDate))}
                      disabled={
                        day.disabled ||
                        (minDate && isBefore(day.date, startOfDay(minDate))) ||
                        (maxDate && isAfter(day.date, endOfDay(maxDate)))
                      }
                    />
                  );
                })}
              </CalendarTableDaysItem>
            ))}
        </CalendarTableDaysContainer>
      </table>
    </div>
  );
};
