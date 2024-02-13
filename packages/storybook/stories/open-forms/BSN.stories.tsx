import { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { SingleFormioComponent } from './StoryUtil';

const meta: Meta = {
  id: 'open-forms-bsn',
  title: 'Open Formulieren/BSNField',
  component: SingleFormioComponent,
  args: {
    key: 'bsn',
    type: 'bsn',
    label: 'Burgerservicenummer (BSN)',
  },
};

export default meta;
type Story = StoryObj<typeof SingleFormioComponent>;

export const Default: Story = {
  render: (args) => <SingleFormioComponent {...args} />,
};
