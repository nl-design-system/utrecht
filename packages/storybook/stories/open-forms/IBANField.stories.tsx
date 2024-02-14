import { Meta, StoryObj } from '@storybook/react';
import { SingleFormioComponent } from './StoryUtil';

const meta = {
  id: 'open-forms-iban',
  title: 'Open Formulieren/IBANField',
  component: SingleFormioComponent,
  args: {
    key: 'iban',
    type: 'iban',
    label: 'IBAN',
  },
} satisfies Meta<typeof SingleFormioComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (meta) => <SingleFormioComponent {...meta} />,
};
