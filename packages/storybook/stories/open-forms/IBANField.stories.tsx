import { Meta, StoryObj } from '@storybook/react';
import { SingleFormioComponent } from './StoryUtil';

const meta = {
  id: 'open-forms-iban',
  title: 'Open Formulieren/IBANField',
  component: SingleFormioComponent,
  args: {
    key: '',
    type: 'iban',
    label: '',
  },
} satisfies Meta<typeof SingleFormioComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    key: 'iban',
    label: 'IBAN',
  },
};
