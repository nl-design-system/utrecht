import { Meta, StoryObj } from '@storybook/react';
import { SingleFormioComponent } from './StoryUtil';

const meta = {
  id: 'open-forms-currency',
  title: 'Open Formulieren/Currency',
  component: SingleFormioComponent,
  args: {
    type: 'currency',
    extraComponentProperties: {
      currency: 'EUR',
      decimalLimit: 2,
      allowNegative: false,
      defaultValue: 5,
    },
  },
} satisfies Meta<typeof SingleFormioComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => <SingleFormioComponent {...args} />,
};

export const AllowNegative: Story = {
  render: (args) => <SingleFormioComponent {...args} />,
  args: {
    extraComponentProperties: {
      currency: 'EUR',
      decimalLimit: 2,
      allowNegative: true,
      defaultValue: -100,
    },
  },
};
