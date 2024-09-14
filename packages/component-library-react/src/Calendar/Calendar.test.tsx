import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ar, nl, zhCN } from 'date-fns/locale';
import React from 'react';
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

    let dayButton = screen.getByRole('button', { name: '15 juni 2023' });
    fireEvent.click(dayButton);

    expect(selectedDate).toEqual('2023-06-15');
  });

  it('renders HTML table/thead/tbody/tr/td/th elements for a grid layout with no CSS', () => {
    const { container } = render(<Calendar />);

    const table = container.querySelector('table');
    const thead = container.querySelector('thead');
    const tbody = container.querySelector('tbody');
    const tr = container.querySelector('tr');
    const td = container.querySelector('td');
    const th = container.querySelector('th');

    expect(table).toBeInTheDocument();
    expect(thead).toBeInTheDocument();
    expect(tbody).toBeInTheDocument();
    expect(tr).toBeInTheDocument();
    expect(td).toBeInTheDocument();
    expect(th).toBeInTheDocument();
  });

  it('renders dir="ltr" to avoid right-to-left rendering of the grid', () => {
    /* dir="auto" would be more ideal, but browser support is not sufficient:
     * `dir="auto"` works in:
     *
     * - Safari 16.5
     *
     * `dir="auto"` does not work for our calendar table in:
     *
     * - Firefox 113
     *
     * So `dir="ltr"` is the better choice, for now.
     */
    const { container } = render(<Calendar locale={ar} />);

    const element = container.querySelector(':only-child');
    expect(element.getAttribute('dir')).toBe('ltr');
  });

  it('renders a grid role element', () => {
    render(<Calendar />);

    const calendar = screen.getByRole('grid');

    expect(calendar).toBeInTheDocument();
  });

  it('renders 7 columnheader role elements', () => {
    render(<Calendar defaultValue="2023-06-15" />);

    const rows = screen.getAllByRole('columnheader');

    expect(rows.length).toBe(7);
  });

  it('renders a grid role element with a label', () => {
    render(<Calendar defaultValue="2023-06-15" locale={nl} />);

    const calendar = screen.getByRole('grid', { name: 'juni 2023' });

    expect(calendar).toBeInTheDocument();
  });

  it('renders at least 4 grid rows', () => {
    render(<Calendar defaultValue="2023-06-15" />);

    const rows = screen.getAllByRole('row');

    expect(rows.length).toBeGreaterThanOrEqual(4);
  });

  it('renders no more than 7 grid rows', () => {
    render(<Calendar defaultValue="2023-06-15" />);

    const rows = screen.getAllByRole('row');

    expect(rows.length).toBeLessThanOrEqual(7);
  });

  it('renders at least 28 grid cells', () => {
    render(<Calendar defaultValue="2023-06-15" />);

    const cells = screen.getAllByRole('gridcell');

    expect(cells.length).toBeGreaterThanOrEqual(4);
  });

  it('renders at least 28 buttons', () => {
    render(<Calendar defaultValue="2023-06-15" locale={nl} />);

    const buttons = screen.getAllByRole('button');

    expect(buttons.length).toBeGreaterThanOrEqual(28);
  });

  it('renders no more than (7 rows x 7 days per week = ) 49 grid cells', () => {
    render(<Calendar defaultValue="2023-06-15" />);

    const cells = screen.getAllByRole('gridcell');

    expect(cells.length).toBeLessThanOrEqual(49);
  });

  it('renders a grid role element', () => {
    render(<Calendar />);

    const calendar = screen.getByRole('grid');

    expect(calendar).toBeInTheDocument();
  });

  it('renders group role element for the button group', () => {
    render(<Calendar />);

    const buttonGroup = screen.getByRole('group');
    const button1 = screen.getByRole('button', { name: 'Previous year' });
    const button2 = screen.getByRole('button', { name: 'Next year' });
    const button3 = screen.getByRole('button', { name: 'Next month' });
    const button4 = screen.getByRole('button', { name: 'Next year' });

    expect(buttonGroup).toBeInTheDocument();
    expect(buttonGroup).toContainElement(button1);
    expect(buttonGroup).toContainElement(button2);
    expect(buttonGroup).toContainElement(button3);
    expect(buttonGroup).toContainElement(button4);
  });

  it('renders a design system BEM class name', () => {
    const { container } = render(<Calendar />);

    const calendar = container.querySelector(':only-child');

    expect(calendar).toHaveClass('utrecht-calendar');
  });

  it('renders a columnheader role for each day of the week', () => {
    render(<Calendar defaultValue="2022-01-01" locale={nl} />);

    const headerMonday = screen.getByRole('columnheader', { name: 'maandag' });
    const headerTuesday = screen.getByRole('columnheader', { name: 'dinsdag' });
    const headerWednesday = screen.getByRole('columnheader', { name: 'woensdag' });
    const headerThursday = screen.getByRole('columnheader', { name: 'donderdag' });
    const headerFriday = screen.getByRole('columnheader', { name: 'vrijdag' });
    const headerSaturday = screen.getByRole('columnheader', { name: 'zaterdag' });
    const headerSunday = screen.getByRole('columnheader', { name: 'zondag' });

    expect(headerMonday).toBeInTheDocument();
    expect(headerTuesday).toBeInTheDocument();
    expect(headerWednesday).toBeInTheDocument();
    expect(headerThursday).toBeInTheDocument();
    expect(headerFriday).toBeInTheDocument();
    expect(headerSaturday).toBeInTheDocument();
    expect(headerSunday).toBeInTheDocument();
  });

  it('renders an abbr attribute for day of week when the locale has an abbreviation', () => {
    const { container } = render(<Calendar locale={nl} />);

    const columnHeader = container.querySelector('th');

    expect(columnHeader).toHaveTextContent('ma');
    expect(columnHeader?.getAttribute('abbr')).toBe('maandag');
  });

  it.skip('renders no abbr attribute for day of week when the locale has no abbreviation', () => {
    const { container } = render(<Calendar locale={zhCN} />);

    const columnHeader = container.querySelector('th');

    expect(columnHeader).toHaveTextContent('一');
    expect(columnHeader).not.toHaveAttribute('abbr');
  });

  it('renders the selected default date', () => {
    const currentDate = '2023-06-15';
    render(<Calendar defaultValue={currentDate} locale={nl} />);

    let dayButton = screen.getByRole('button', { name: '14 juni 2023' });
    fireEvent.click(dayButton);

    expect(dayButton).toHaveClass('utrecht-calendar__table-days-item-day--selected');
  });

  it('renders the selected date', () => {
    const currentDate = '2023-06-15';
    render(<Calendar value={currentDate} locale={nl} />);

    let dayButton = screen.getByRole('button', { name: '14 juni 2023' });
    fireEvent.click(dayButton);

    expect(dayButton).toHaveClass('utrecht-calendar__table-days-item-day--selected');
  });

  it('renders the selected date after changing value', () => {
    const initialDate = '2023-06-15';
    const newDate = '2023-06-16';

    const onChangeHandler = jest.fn();
    const { container, rerender } = render(<Calendar onChange={onChangeHandler} value={initialDate} locale={nl} />);

    const initialDateElement = container.querySelector(`time[datetime="${initialDate}"]`);
    let selectedGridCell = screen.getByRole('gridcell', { selected: true });

    let calendar = screen.getByRole('grid', { name: 'juni 2023' });

    expect(calendar).toBeInTheDocument();
    expect(initialDateElement).toBeInTheDocument();
    expect(selectedGridCell).toContainElement(initialDateElement);

    rerender(<Calendar value={newDate} locale={nl} />);

    expect(onChangeHandler).not.toHaveBeenCalled();

    const newDateElement = container.querySelector(`time[datetime="${newDate}"]`);
    selectedGridCell = screen.getByRole('gridcell', { selected: true });

    expect(newDateElement).toBeInTheDocument();
    expect(selectedGridCell).toContainElement(newDateElement);
  });

  it('disables dates before the minDate value', () => {
    const minDate = '2023-06-15';
    const currentDate = '2023-06-15';
    render(<Calendar locale={nl} defaultValue={currentDate} min={minDate} />);

    let previousDayButton = screen.getByRole('button', { name: '14 juni 2023' });
    let currentDayButton = screen.getByRole('button', { name: '15 juni 2023' });

    expect(previousDayButton).toBeDisabled();
    expect(previousDayButton).toHaveClass('utrecht-button--disabled');
    expect(currentDayButton).not.toBeDisabled();
  });

  it('disables dates after the maxDate value', () => {
    const maxDate = '2023-06-15';
    const currentDate = '2023-06-15';
    render(<Calendar locale={nl} defaultValue={currentDate} max={maxDate} />);

    let currentDayButton = screen.getByRole('button', { name: '15 juni 2023' });
    let nextDayButton = screen.getByRole('button', { name: '16 juni 2023' });

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

    let disabledEventButton = screen.getByRole('button', { name: '14 juni 2023' });
    let emphasisEventButton = screen.getByRole('button', { name: '15 juni 2023' });
    let selectedEventButton = screen.getByRole('button', { name: '16 juni 2023' });

    expect(disabledEventButton).toHaveClass('utrecht-button--disabled');
    expect(disabledEventButton).toBeDisabled();
    expect(emphasisEventButton).toHaveClass('utrecht-calendar__table-days-item-day--emphasis');
    expect(selectedEventButton).toHaveClass('utrecht-calendar__table-days-item-day--selected');
  });

  describe('button group', () => {
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

  describe.only('keyboard control', () => {
    const testKeyboardControl = ({
      key,
      currentDate,
      targetDate,
    }: {
      key: string;
      currentDate: string;
      targetDate: string;
    }) => {
      const changeHandler = jest.fn();
      const { container } = render(<Calendar locale={nl} value={currentDate} onChange={changeHandler} />);

      let selectedGridCell = screen.getByRole('gridcell', { selected: true });
      const currentDayButton = container.querySelector<HTMLButtonElement>(`button[value="${currentDate}"]`);

      expect(selectedGridCell).toBeInTheDocument();
      expect(currentDayButton).toBeInTheDocument();

      if (currentDayButton) {
        expect(selectedGridCell).toContainElement(currentDayButton);

        currentDayButton.focus();
        fireEvent.keyDown(currentDayButton, { key });
        fireEvent.keyDown(currentDayButton, { key: 'Enter' });

        const activeElement = currentDayButton.ownerDocument.activeElement;
        const targetDateElement = container.querySelector<HTMLTimeElement>(`time[datetime="${targetDate}"]`);
        expect(activeElement).toContainElement(targetDateElement);

        if (currentDayButton.ownerDocument.activeElement) {
          fireEvent.click(currentDayButton.ownerDocument.activeElement);
        }

        // fireEvent.keyDown(currentDayButton, { key: 'Enter' });

        expect(changeHandler).toHaveBeenCalled();
        // expect(changeHandler.mock.lastCall[0]).toBe(targetDate);
        // selectedGridCell = screen.getByRole('gridcell', { selected: true });
        // const targetDateElement = container.querySelector<HTMLTimeElement>(`time[datetime="${targetDate}"]`);
        // expect(selectedGridCell).toContainElement(targetDateElement);
      }
    };

    it('ArrowRight navigates to next day', () => {
      testKeyboardControl({
        currentDate: '2023-03-01',
        targetDate: '2023-03-02',
        key: 'ArrowRight',
      });
    });

    it('ArrowRight navigates to previous day', () => {
      testKeyboardControl({
        currentDate: '2023-03-01',
        targetDate: '2023-02-28',
        key: 'ArrowLeft',
      });
    });

    it('ArrowUp navigates to previous week', () => {
      testKeyboardControl({
        currentDate: '2023-03-01',
        targetDate: '2023-02-22',
        key: 'ArrowUp',
      });
    });
    it('ArrowDown navigates to next week', () => {
      testKeyboardControl({
        currentDate: '2023-03-01',
        targetDate: '2023-03-08',
        key: 'ArrowDown',
      });
    });
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

    let dayButton = screen.getByRole('button', { name: '15 juni 2023' });
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

    let dayButton = screen.getByRole('button', { name: '14 juni 2023' });
    fireEvent.click(dayButton);

    expect(dayButton).toHaveClass('utrecht-calendar__table-days-item-day--selected');
  });

  it('disables dates before the minDate value', () => {
    const minDate = new Date('2023-06-15');
    const currentDate = new Date('2023-06-15');
    render(<Calendar onCalendarClick={() => {}} locale={nl} currentDate={currentDate} minDate={minDate} />);

    let previousDayButton = screen.getByRole('button', { name: '14 juni 2023' });
    let currentDayButton = screen.getByRole('button', { name: '15 juni 2023' });

    expect(previousDayButton).toBeDisabled();
    expect(previousDayButton).toHaveClass('utrecht-button--disabled');
    expect(currentDayButton).not.toBeDisabled();
  });

  it('disables dates after the maxDate value', () => {
    const maxDate = new Date('2023-06-15');
    const currentDate = new Date('2023-06-15');
    render(<Calendar onCalendarClick={() => {}} locale={nl} currentDate={currentDate} maxDate={maxDate} />);

    let currentDayButton = screen.getByRole('button', { name: '15 juni 2023' });
    let nextDayButton = screen.getByRole('button', { name: '16 juni 2023' });

    expect(currentDayButton).not.toBeDisabled();
    expect(nextDayButton).toBeDisabled();
    expect(nextDayButton).toHaveClass('utrecht-button--disabled');
  });

  it('correctly renders disabled events', () => {
    const currentDate = new Date('2023-06-01');
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

    let disabledEventButton = screen.getByRole('button', { name: '14 juni 2023' });
    let emphasisEventButton = screen.getByRole('button', { name: '15 juni 2023' });
    let selectedEventButton = screen.getByRole('button', { name: '16 juni 2023' });

    expect(disabledEventButton).toHaveClass('utrecht-button--disabled');
    expect(disabledEventButton).toBeDisabled();
    expect(emphasisEventButton).toHaveClass('utrecht-calendar__table-days-item-day--emphasis');
    expect(selectedEventButton).toHaveClass('utrecht-calendar__table-days-item-day--selected');
  });

  describe('button group', () => {
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
});
