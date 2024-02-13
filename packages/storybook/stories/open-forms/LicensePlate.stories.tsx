import { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { SingleFormioComponent } from './StoryUtil';

const meta: Meta = {
  id: 'open-forms-license-plate',
  title: 'Open Formulieren/LicensePlateField',
  component: SingleFormioComponent,
  args: {
    key: 'licenseplate',
    type: 'licenseplate',
    label: 'Kentekennummer',
  },
};

export default meta;
type Story = StoryObj<typeof SingleFormioComponent>;

export const Default: Story = {
  render: (args) => <SingleFormioComponent {...args} />,
};
