import { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { SingleFormioComponent } from './StoryUtil';

const meta: Meta = {
  id: 'open-forms-textarea',
  title: 'Open Formulieren/Textarea',
  component: SingleFormioComponent,
  args: {
    type: 'textarea',
    label: 'Textarea',
    extraComponentProperties: {
      description: 'Plaats hierboven uw handtekening',
    },
  },
};

export default meta;
type Story = StoryObj<typeof SingleFormioComponent>;

export const Default: Story = {
  render: (meta) => <SingleFormioComponent {...meta} />,
};
