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
  isSameDay,
  isSameMonth,
  Locale,
  parseISO,
  setDate as setDateFns,
  setMonth,
  setYear,
  startOfMonth,
  startOfWeek,
} from 'date-fns';
import { enUS } from 'date-fns/locale';
import { chunk, toNumber } from 'lodash';
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

function createCalendar(today: Date): Date[] {
  const start = startOfWeek(startOfMonth(today), {
    weekStartsOn: 1 /* Monday */,
  });
  const end = endOfWeek(addWeeks(start, 5), {
    weekStartsOn: 1 /* Monday */,
  });
  return eachDayOfInterval({ start, end });
}

type Events = {
  date: string;
  emphasis?: boolean;
  selected?: boolean;
  disabled?: boolean;
};

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
}) => {
  const [date, setDate] = useState(currentDate || new Date());
  const calendar = createCalendar(date);
  const start = startOfWeek(date, { weekStartsOn: 1 });
  const end = endOfWeek(date, { weekStartsOn: 1 });

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
          onPreviousClick={() => setDate(setYear(date, getYear(date) - 1))}
          onNextClick={() => setDate(addYears(date, 1))}
        >
          <CalendarNavigationButtons
            previousIcon={<IconArrowLeft title={previousMonthButtonTitle} />}
            nextIcon={<IconArrowRight title={nextMonthButtonTitle} />}
            onPreviousClick={() => setDate(setMonth(date, date.getMonth() - 1))}
            onNextClick={() => setDate(addMonths(date, 1))}
          >
            <CalendarNavigationLabel label={format(date, 'LLLL Y', { locale })} />
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
                      isToday={isSameDay(date, day.date)}
                      dayOutOfTheMonth={!isSameMonth(day.date, date)}
                      key={index}
                      onClick={(event) => {
                        const selectedDay = setDateFns(date, toNumber((event.target as HTMLButtonElement).textContent));
                        setDate(selectedDay);
                        onCalendarClick(formatISO(selectedDay));
                      }}
                      aria-label={format(day.date, 'eeee dd LLLL Y', { locale })}
                      day={day.date.getDate().toString()}
                      emphasis={day.emphasis}
                      selected={day.selected}
                      disabled={day.disabled}
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
