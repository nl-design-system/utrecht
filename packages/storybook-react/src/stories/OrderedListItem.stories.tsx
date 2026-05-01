import { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
import { OrderedList, OrderedListItem } from '../../../component-library-react/src/index.js';

const meta = {
  title: 'React Component/Ordered List/Item',
  id: 'react-ordered-list--item',
  component: OrderedListItem,
  decorators: [(Story) => <OrderedList>{Story()}</OrderedList>],
  args: {
    children: 'List item',
  },
  argTypes: {
    value: {
      type: { name: 'number', required: false },
      table: {
        category: 'HTML attribute',
        defaultValue: { summary: 0 },
      },
    },
  },
} satisfies Meta<typeof OrderedListItem>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
