import { Meta, StoryObj } from '@storybook/react';
import { SingleFormioComponent } from './StoryUtil.js';

const meta = {
  id: 'open-forms-bsn',
  title: 'Open Formulieren/BSNField',
  component: SingleFormioComponent,
  args: {
    key: '',
    type: 'bsn',
    label: '',
  },
} satisfies Meta<typeof SingleFormioComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    key: 'bsn',
    label: 'Burgerservicenummer (BSN)',
  },
};
export const Disabled: Story = {
  args: {
    key: 'bsn',
    label: 'Burgerservicenummer (BSN)',
    extraComponentProperties: {
      disabled: true,
    },
  },
};
