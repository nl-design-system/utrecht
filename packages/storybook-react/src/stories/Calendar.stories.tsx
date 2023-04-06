import { Meta, StoryObj } from '@storybook/react';
import { Calendar } from '@utrecht/component-library-react/dist/css-module';
import tokensDefinition from '@utrecht/components/calendar/tokens.json';
import tokens from '@utrecht/design-tokens/dist/index.json';
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
    onCalendarClick: (date) => {
      console.log(date);
    },
    currentDate: new Date(),
    events,
    locale: nl,
    previousYearButtonTitle: 'Vorig jaar',
    nextYearButtonTitle: 'volgend jaar',
    previousMonthButtonTitle: 'Vorige maand',
    nextMonthButtonTitle: 'volgende maand',
  },
  argTypes: {
    onCalendarClick: {
      name: 'onCalendarClick',
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
    currentDate: {
      name: 'currentDate',
      description: 'The default value is `new Date()`, but you can provide a different date',
      table: {
        category: 'API',
        defaultValue: { summary: new Date() },
      },
    },
    locale: {
      name: 'locale',
      description:
        "to change the calendar language by using `date-fns/locale`\n\n `import { nl, enUS } from 'date-fns/locale';`",
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
  },
} satisfies Meta<typeof Calendar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const EnglishCalendar: Story = {
  args: {
    onCalendarClick: (date) => {
      console.log(date);
    },
    currentDate: new Date(),
    events,
    locale: enUS,
  },
};

export const DesignTokens = designTokenStory(meta);
