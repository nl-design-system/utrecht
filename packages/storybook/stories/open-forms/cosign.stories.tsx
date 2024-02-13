import { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { SingleFormioComponent } from './StoryUtil';

const meta: Meta = {
  id: 'open-forms-cosign',
  title: 'Open Formulieren/Cosign',
  component: SingleFormioComponent,
  args: {
    key: 'cosign',
    type: 'cosign',
    label: 'Co-signer email address',
    validateOn: 'blur',
    authPlugin: 'digid',
  },
};

export default meta;
type Story = StoryObj<typeof SingleFormioComponent>;

export const Default: Story = {
  render: (args) => <SingleFormioComponent {...args} />,
};
