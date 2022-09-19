import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Calendar } from '@utrecht/component-library-react';
import { enUS, nl } from 'date-fns/locale';
import React from 'react';
import { argTypes, events } from './argTypes';

export default {
  title: 'React.js Component/Calendar',
  id: 'react-calendar',
  component: Calendar,
  argTypes,
} as ComponentMeta<typeof Calendar>;

const Template: ComponentStory<typeof Calendar> = (args) => <Calendar {...args} />;

export const Default = Template.bind({});

Default.args = {
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
};

export const EnglishCalendar = Template.bind({});

EnglishCalendar.args = {
  onCalendarClick: (date) => {
    console.log(date);
  },
  currentDate: new Date(),
  events,
  locale: enUS,
};
