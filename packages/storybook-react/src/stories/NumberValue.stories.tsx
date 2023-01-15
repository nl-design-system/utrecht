import { Meta, StoryObj } from '@storybook/react';
import { NumberValue } from '@utrecht/component-library-react/dist/css-module/index';
import readme from '@utrecht/components/value-number/README.md?raw';
import React from 'react';

const meta = {
  title: 'React Component/Number Value',
  id: 'react-value-number',
  component: NumberValue,
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
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: readme,
      },
    },
  },
} as Meta<typeof NumberValue>;

export default meta;

const Template: StoryObj<typeof NumberValue> = (args) => <NumberValue {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: '1234567890',
};

export const WithFormatting = Template.bind({});

WithFormatting.args = {
  children: '1.234.567.890',
  value: '1234567890',
};
