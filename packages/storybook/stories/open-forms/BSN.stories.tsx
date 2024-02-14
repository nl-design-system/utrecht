import { Meta, StoryObj } from '@storybook/react';
import { SingleFormioComponent } from './StoryUtil';

const meta = {
  id: 'open-forms-bsn',
  title: 'Open Formulieren/BSNField',
  component: SingleFormioComponent,
  args: {
    key: 'bsn',
    type: 'bsn',
    label: 'Burgerservicenummer (BSN)',
  },
} satisfies Meta<typeof SingleFormioComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
