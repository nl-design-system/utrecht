import { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { SingleFormioComponent } from './StoryUtil';

const meta: Meta = {
  id: 'open-forms-checkbox',
  title: 'Open Formulieren/Checkbox',
  component: SingleFormioComponent,
  args: {
    key: 'checkbox',
    type: 'checkbox',
    label: 'Ik heb de voorwaarden gelezen en ga hiermee akkoord.',
  },
};

export default meta;
type Story = StoryObj<typeof SingleFormioComponent>;

export const Default: Story = {
  render: (args) => <SingleFormioComponent {...args} />,
};

export const Required: Story = {
  render: (args) => <SingleFormioComponent extraComponentProperties={{ validate: { required: true } }} {...args} />,
};
