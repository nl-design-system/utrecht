import { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { SingleFormioComponent } from './StoryUtil';

const meta: Meta = {
  id: 'open-forms-timefield',
  title: 'Open Formulieren/TimeField',
  component: SingleFormioComponent,
  args: {
    type: 'time',
    label: 'Tijd',
    extraComponentProperties: {
      inputType: 'text',
    },
  },
};

export default meta;
type Story = StoryObj<typeof SingleFormioComponent>;

export const Default: Story = {
  render: (args) => <SingleFormioComponent {...args} />,
};
