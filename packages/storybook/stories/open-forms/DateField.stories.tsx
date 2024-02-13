import { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { SingleFormioComponent } from './StoryUtil';

const meta: Meta = {
  id: 'open-forms-date-field',
  title: 'Open Formulieren/DateField',
  component: SingleFormioComponent,
  args: {
    type: 'date',
    extraComponentProperties: {
      enableTime: false,
      datePicker: {
        minDate: null,
        maxDate: null,
      },
      format: 'dd-MM-yyyy',

      placeholder: 'dd-mm-yyyy',
    },
  },
};

export default meta;
type Story = StoryObj<typeof SingleFormioComponent>;

export const Default: Story = {
  render: (args) => <SingleFormioComponent {...args} />,
};
