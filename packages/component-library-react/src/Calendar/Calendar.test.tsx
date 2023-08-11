import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { nl } from 'date-fns/locale';
import { Calendar, Events } from './index';

describe('Calendar', () => {
  it('invokes an change callback with a selected date', () => {
    let selectedDate = '';
    render(
      <Calendar
        defaultValue="2023-06-11"
        onChange={(evt) => {
          selectedDate = evt.detail.value;
        }}
        locale={nl}
      />,
    );

    let dayButton = screen.getByRole('button', { name: 'donderdag 15 juni 2023' });
    fireEvent.click(dayButton);

    expect(selectedDate).toEqual('2023-06-15');
  });

  it('renders a design system BEM class name', () => {
    const { container } = render(<Calendar />);

    const calendar = container.querySelector(':only-child');

    expect(calendar).toHaveClass('utrecht-calendar');
  });

  it('renders the selected date', () => {
    const currentDate = '2023-06-15';
    render(<Calendar defaultValue={currentDate} locale={nl} />);

    let dayButton = screen.getByRole('button', { name: 'woensdag 14 juni 2023' });
    fireEvent.click(dayButton);

    expect(dayButton).toHaveClass('utrecht-calendar__table-days-item-day--selected');
  });

  it('disables dates before the minDate value', () => {
    const minDate = '2023-06-15';
    const currentDate = '2023-06-15';
    render(<Calendar locale={nl} defaultValue={currentDate} min={minDate} />);

    let previousDayButton = screen.getByRole('button', { name: 'woensdag 14 juni 2023' });
    let currentDayButton = screen.getByRole('button', { name: 'donderdag 15 juni 2023' });

    expect(previousDayButton).toBeDisabled();
    expect(previousDayButton).toHaveClass('utrecht-button--disabled');
    expect(currentDayButton).not.toBeDisabled();
  });

  it('disables dates after the maxDate value', () => {
    const maxDate = '2023-06-15';
    const currentDate = '2023-06-15';
    render(<Calendar locale={nl} defaultValue={currentDate} max={maxDate} />);

    let currentDayButton = screen.getByRole('button', { name: 'donderdag 15 juni 2023' });
    let nextDayButton = screen.getByRole('button', { name: 'vrijdag 16 juni 2023' });

    expect(currentDayButton).not.toBeDisabled();
    expect(nextDayButton).toBeDisabled();
    expect(nextDayButton).toHaveClass('utrecht-button--disabled');
  });

  it('correctly renders disabled events', () => {
    const currentDate = '2023-06-01';
    const events: Events[] = [
      {
        date: '2023-06-14',
        disabled: true,
      },
      {
        date: '2023-06-15',
        emphasis: true,
      },
      {
        date: '2023-06-16',
        selected: true,
      },
    ];
    render(<Calendar locale={nl} defaultValue={currentDate} events={events} />);

    let disabledEventButton = screen.getByRole('button', { name: 'woensdag 14 juni 2023' });
    let emphasisEventButton = screen.getByRole('button', { name: 'donderdag 15 juni 2023' });
    let selectedEventButton = screen.getByRole('button', { name: 'vrijdag 16 juni 2023' });

    expect(disabledEventButton).toHaveClass('utrecht-button--disabled');
    expect(disabledEventButton).toBeDisabled();
    expect(emphasisEventButton).toHaveClass('utrecht-calendar__table-days-item-day--emphasis');
    expect(selectedEventButton).toHaveClass('utrecht-calendar__table-days-item-day--selected');
  });

  it('navigates to previous year', () => {
    const currentDate = '2023-03-01';
    const { container } = render(<Calendar locale={nl} defaultValue={currentDate} />);

    let previousYearButton = screen.getByRole('button', { name: 'Previous year' });
    let currentDateLabel = container.querySelector('.utrecht-calendar__navigation-label');

    expect(currentDateLabel).toContainHTML('maart 2023');
    if (previousYearButton) fireEvent.click(previousYearButton);
    expect(currentDateLabel).toContainHTML('maart 2022');
  });

  it('navigates to next year', () => {
    const currentDate = '2023-03-01';
    const { container } = render(<Calendar locale={nl} defaultValue={currentDate} />);

    let nextYearButton = screen.getByRole('button', { name: 'Next year' });
    let currentDateLabel = container.querySelector('.utrecht-calendar__navigation-label');

    expect(currentDateLabel).toContainHTML('maart 2023');
    if (nextYearButton) fireEvent.click(nextYearButton);
    expect(currentDateLabel).toContainHTML('maart 2024');
  });

  it('navigates to previous month', () => {
    const currentDate = '2023-03-01';
    const { container } = render(<Calendar locale={nl} defaultValue={currentDate} />);

    let previousMonthButton = screen.getByRole('button', { name: 'Previous month' });
    let currentDateLabel = container.querySelector('.utrecht-calendar__navigation-label');

    expect(currentDateLabel).toContainHTML('maart 2023');
    if (previousMonthButton) fireEvent.click(previousMonthButton);
    expect(currentDateLabel).toContainHTML('februari 2023');
  });

  it('navigates to next month', () => {
    const currentDate = '2023-03-01';
    const { container } = render(<Calendar locale={nl} defaultValue={currentDate} />);

    let nextMonthButton = screen.getByRole('button', { name: 'Next month' });
    let currentDateLabel = container.querySelector('.utrecht-calendar__navigation-label');

    expect(currentDateLabel).toContainHTML('maart 2023');
    if (nextMonthButton) fireEvent.click(nextMonthButton);
    expect(currentDateLabel).toContainHTML('april 2023');
  });
});

describe('Calendar (deprecated API)', () => {
  it('invokes an onclick callback with a selected date', () => {
    let selectedDate = '';
    render(
      <Calendar
        currentDate={new Date('2023-06-11')}
        onCalendarClick={(date) => {
          selectedDate = date;
        }}
        locale={nl}
      />,
    );

    let dayButton = screen.getByRole('button', { name: 'donderdag 15 juni 2023' });
    fireEvent.click(dayButton);

    expect(selectedDate.startsWith('2023-06-15')).toBe(true);
  });

  it('renders a design system BEM class name', () => {
    const { container } = render(<Calendar onCalendarClick={() => {}} />);

    const calendar = container.querySelector(':only-child');

    expect(calendar).toHaveClass('utrecht-calendar');
  });

  it('renders the selected date', () => {
    const currentDate = new Date('2023-06-15');
    render(<Calendar currentDate={currentDate} onCalendarClick={() => {}} locale={nl} />);

    let dayButton = screen.getByRole('button', { name: 'woensdag 14 juni 2023' });
    fireEvent.click(dayButton);

    expect(dayButton).toHaveClass('utrecht-calendar__table-days-item-day--selected');
  });

  it('disables dates before the minDate value', () => {
    const minDate = new Date('2023-06-15');
    const currentDate = new Date('2023-06-15');
    render(<Calendar onCalendarClick={() => {}} locale={nl} currentDate={currentDate} minDate={minDate} />);

    let previousDayButton = screen.getByRole('button', { name: 'woensdag 14 juni 2023' });
    let currentDayButton = screen.getByRole('button', { name: 'donderdag 15 juni 2023' });

    expect(previousDayButton).toBeDisabled();
    expect(previousDayButton).toHaveClass('utrecht-button--disabled');
    expect(currentDayButton).not.toBeDisabled();
  });

  it('disables dates after the maxDate value', () => {
    const maxDate = new Date('2023-06-15');
    const currentDate = new Date('2023-06-15');
    render(<Calendar onCalendarClick={() => {}} locale={nl} currentDate={currentDate} maxDate={maxDate} />);

    let currentDayButton = screen.getByRole('button', { name: 'donderdag 15 juni 2023' });
    let nextDayButton = screen.getByRole('button', { name: 'vrijdag 16 juni 2023' });

    expect(currentDayButton).not.toBeDisabled();
    expect(nextDayButton).toBeDisabled();
    expect(nextDayButton).toHaveClass('utrecht-button--disabled');
  });

  it('correctly renders disabled events', () => {
    const currentDate = new Date(2023, 5, 1);
    const events: Events[] = [
      {
        date: new Date('2023-06-14').toISOString(),
        disabled: true,
      },
      {
        date: new Date('2023-06-15').toISOString(),
        emphasis: true,
      },
      {
        date: new Date('2023-06-16').toISOString(),
        selected: true,
      },
    ];
    render(<Calendar onCalendarClick={() => {}} locale={nl} currentDate={currentDate} events={events} />);

    let disabledEventButton = screen.getByRole('button', { name: 'woensdag 14 juni 2023' });
    let emphasisEventButton = screen.getByRole('button', { name: 'donderdag 15 juni 2023' });
    let selectedEventButton = screen.getByRole('button', { name: 'vrijdag 16 juni 2023' });

    expect(disabledEventButton).toHaveClass('utrecht-button--disabled');
    expect(disabledEventButton).toBeDisabled();
    expect(emphasisEventButton).toHaveClass('utrecht-calendar__table-days-item-day--emphasis');
    expect(selectedEventButton).toHaveClass('utrecht-calendar__table-days-item-day--selected');
  });

  it('navigates to previous year', () => {
    const currentDate = new Date('2023-03-01');
    const { container } = render(<Calendar onCalendarClick={() => {}} locale={nl} currentDate={currentDate} />);

    let previousYearButton = screen.getByRole('button', { name: 'Previous year' });
    let currentDateLabel = container.querySelector('.utrecht-calendar__navigation-label');

    expect(currentDateLabel).toContainHTML('maart 2023');
    if (previousYearButton) fireEvent.click(previousYearButton);
    expect(currentDateLabel).toContainHTML('maart 2022');
  });

  it('navigates to next year', () => {
    const currentDate = new Date('2023-03-01');
    const { container } = render(<Calendar onCalendarClick={() => {}} locale={nl} currentDate={currentDate} />);

    let nextYearButton = screen.getByRole('button', { name: 'Next year' });
    let currentDateLabel = container.querySelector('.utrecht-calendar__navigation-label');

    expect(currentDateLabel).toContainHTML('maart 2023');
    if (nextYearButton) fireEvent.click(nextYearButton);
    expect(currentDateLabel).toContainHTML('maart 2024');
  });

  it('navigates to previous month', () => {
    const currentDate = new Date('2023-03-01');
    const { container } = render(<Calendar onCalendarClick={() => {}} locale={nl} currentDate={currentDate} />);

    let previousMonthButton = screen.getByRole('button', { name: 'Previous month' });
    let currentDateLabel = container.querySelector('.utrecht-calendar__navigation-label');

    expect(currentDateLabel).toContainHTML('maart 2023');
    if (previousMonthButton) fireEvent.click(previousMonthButton);
    expect(currentDateLabel).toContainHTML('februari 2023');
  });

  it('navigates to next month', () => {
    const currentDate = new Date('2023-03-01');
    const { container } = render(<Calendar onCalendarClick={() => {}} locale={nl} currentDate={currentDate} />);

    let nextMonthButton = screen.getByRole('button', { name: 'Next month' });
    let currentDateLabel = container.querySelector('.utrecht-calendar__navigation-label');

    expect(currentDateLabel).toContainHTML('maart 2023');
    if (nextMonthButton) fireEvent.click(nextMonthButton);
    expect(currentDateLabel).toContainHTML('april 2023');
  });
});
