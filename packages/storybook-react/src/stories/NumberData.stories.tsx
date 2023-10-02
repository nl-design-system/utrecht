import { Meta, StoryObj } from '@storybook/react';
import { NumberData } from '@utrecht/component-library-react/src/css-module/index';
import readme from '@utrecht/components/number-data/README.md?raw';

const meta = {
  title: 'React Component/Number data',
  id: 'react-number-data',
  component: NumberData,
  args: {
    children: '1234567890',
  },
  argTypes: {
    value: {
      name: 'value',
      type: { name: 'string', required: false },
      table: {
        category: 'API',
        defaultValue: { summary: undefined },
      },
    },
  },
  parameters: {
    docs: {
      description: {
        component: readme,
      },
    },
  },
} satisfies Meta<typeof NumberData>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithFormatting: Story = {
  args: {
    children: '1.234.567.890',
    value: '1234567890',
  },
};
