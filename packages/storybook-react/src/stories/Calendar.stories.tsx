import { Meta, StoryObj } from '@storybook/react';
import { Calendar } from '@utrecht/component-library-react/src/css-module';
import tokensDefinition from '@utrecht/components/calendar/tokens.json';
import tokens from '@utrecht/design-tokens/dist/index.json';
import { addDays, addWeeks, addYears } from 'date-fns';
import { enUS, nl } from 'date-fns/locale';
import { designTokenStory } from './util';

const events = [
  { date: '2022-09-22T21:59:59.999Z', emphasis: true, selected: false, disabled: false },
  { date: '2022-09-23T21:59:59.999Z', emphasis: false, selected: false, disabled: false },
  { date: '2022-09-24T21:59:59.999Z', emphasis: false, selected: false, disabled: true },
];

const meta = {
  title: 'React Component/Calendar',
  id: 'react-calendar',
  component: Calendar,
  parameters: {
    tokensPrefix: 'utrecht-calendar',
    tokens,
    tokensDefinition,
  },
  args: {
    onChange: (value) => {
      console.log(value);
    },
    defaultValue: addDays(new Date(), 3).toISOString(),
    events,
    locale: nl,
    previousYearButtonTitle: 'Vorig jaar',
    nextYearButtonTitle: 'volgend jaar',
    previousMonthButtonTitle: 'Vorige maand',
    nextMonthButtonTitle: 'volgende maand',
    min: new Date().toISOString(),
    max: addYears(new Date(), 1).toISOString(),
  },
  argTypes: {
    onChange: {
      name: 'onChange',
      description: "It's a callback function that returns the selected date, triggered when you click on the day",
      type: { name: 'number', required: false },
      table: { category: 'API' },
    },
    events: {
      name: 'events',
      description:
        'An array of event objects that contain some properties that allow you to change the calendar day style base on your value `{date?: Date; emphasis?: boolean; selected?: boolean; disabled?: boolean;}`',
      table: { category: 'API', defaultValue: { summary: undefined } },
    },
    defaultValue: {
      name: 'defaultValue',
      description: 'The default value is today, but you can provide a different date',
      table: {
        category: 'API',
        defaultValue: { summary: new Date().toISOString().replace(/T.+/g, '') },
      },
    },
    locale: {
      name: 'locale',
      description:
        "to change the calendar language by using `date-fns/locale`\n\n `import { nl, enUS } from 'date-fns/locale';`",
      options: ['en-US', 'nl'],
      mapping: {
        'en-US': enUS,
        nl: nl,
      },
      control: {
        type: 'select',
        labels: {
          // 'labels' maps option values to string labels
          'en-US': 'Amerikaans Engels (en-US)',
          nl: 'Nederlands (nl)',
        },
      },
      table: {
        category: 'API',
        defaultValue: { summary: 'enUS' },
      },
    },
    previousYearButtonTitle: {
      name: 'previousYearButtonTitle',
      table: {
        category: 'API',
        defaultValue: { summary: 'Previous year' },
      },
    },
    nextYearButtonTitle: {
      name: 'nextYearButtonTitle',
      table: {
        category: 'API',
        defaultValue: { summary: 'Next year' },
      },
    },
    previousMonthButtonTitle: {
      name: 'previousMonthButtonTitle',
      table: {
        category: 'API',
        defaultValue: { summary: 'Previous month' },
      },
    },
    nextMonthButtonTitle: {
      name: 'nextMonthButtonTitle',
      table: {
        category: 'API',
        defaultValue: { summary: 'Next month' },
      },
    },
    min: {
      name: 'min',
      table: {
        category: 'API',
        defaultValue: { summary: 'Minimum ISO-8601 date' },
      },
    },
    max: {
      name: 'max',
      table: {
        category: 'API',
        defaultValue: { summary: 'Maximum ISO-8601 date' },
      },
    },
    ...['onCalendarClick', 'minDate', 'maxDate', 'currentDate'].reduce(
      (argTypes, argName) => ({
        ...argTypes,
        [argName]: {
          table: {
            disable: true,
          },
        },
      }),
      {},
    ),
  },
} satisfies Meta<typeof Calendar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const LimitedRangeCalendar: Story = {
  args: {
    onChange: (date) => {
      console.log(date);
    },
    defaultValue: new Date().toISOString(),
    minDate: new Date(),
    maxDate: addWeeks(new Date(), 2),
    events,
  },
};

export const EnglishCalendar: Story = {
  args: {
    onChange: (date) => {
      console.log(date);
    },
    defaultValue: new Date().toISOString(),
    events,
    locale: enUS,
  },
};

export const EmptyValue: Story = {
  args: {
    onChange: (date) => {
      console.log(date);
    },
    defaultValue: undefined,
    locale: enUS,
  },
};

export const DesignTokens = designTokenStory(meta);
