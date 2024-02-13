import { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { SingleFormioComponent } from './StoryUtil';

const meta: Meta = {
  id: 'open-forms-select',
  title: 'Open Formulieren/Select',
  component: SingleFormioComponent,
  args: {
    type: 'select',
    extraComponentProperties: {
      data: {
        values: [
          {
            label: 'Optie A',
            value: 'radioA',
          },
          {
            label: 'Optie B',
            value: 'radioB',
          },
          {
            label: 'Optie C',
            value: 'radioC',
          },
        ],
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof SingleFormioComponent>;

export const Default: Story = {
  render: (args) => <SingleFormioComponent {...args} />,
};
