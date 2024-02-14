import { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { SingleFormioComponent } from './StoryUtil';

const meta: Meta = {
  id: 'open-forms-email',
  title: 'Open Formulieren/Email',
  component: SingleFormioComponent,
  args: {
    key: 'email',
    type: 'email',
    label: 'Email',
  },
};

export default meta;
type Story = StoryObj<typeof SingleFormioComponent>;

export const Default: Story = {
  render: (meta) => <SingleFormioComponent {...meta} />,
};
