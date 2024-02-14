import { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { SingleFormioComponent } from './StoryUtil';

const meta: Meta = {
  id: 'open-forms-signature',
  title: 'Open Formulieren/Signature',
  component: SingleFormioComponent,
  args: {
    type: 'signature',
    label: 'Handtekening',
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
