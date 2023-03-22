import { ArgsTable, Description, Primary, PRIMARY_STORY, Stories } from '@storybook/addon-docs';
import { Meta, StoryObj } from '@storybook/react';
import { NumberValue } from '@utrecht/component-library-react/dist/css-module/index';
import readme from '@utrecht/components/value-number/README.md?raw';
import React from 'react';

const meta = {
  title: 'React Component/Number Value',
  id: 'react-value-number',
  component: NumberValue,
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
      page: () => (
        <>
          <Description>{readme}</Description>
          <Primary />
          <ArgsTable story={PRIMARY_STORY} />
          <Stories />
        </>
      ),
    },
  },
} satisfies Meta<typeof NumberValue>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithFormatting: Story = {
  args: {
    children: '1.234.567.890',
    value: '1234567890',
  },
};
