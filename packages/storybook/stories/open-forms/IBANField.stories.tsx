import { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { SingleFormioComponent } from './StoryUtil';

const meta: Meta = {
  id: 'open-forms-iban',
  title: 'Open Formulieren/IBANField',
  component: SingleFormioComponent,
  args: {
    key: 'iban',
    type: 'iban',
    label: 'IBAN',
  },
};

export default meta;
type Story = StoryObj<typeof SingleFormioComponent>;

export const Default: Story = {
  render: (meta) => <SingleFormioComponent {...meta} />,
};
