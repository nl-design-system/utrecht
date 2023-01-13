import { Meta, StoryObj } from '@storybook/react';
import { OrderedList, OrderedListItem } from '@utrecht/component-library-react/dist/css-module/index';
import React from 'react';

const meta = {
  title: 'React Component/Ordered List/Item',
  id: 'react-ordered-list--item',
  component: OrderedListItem,
  decorators: [(Story) => <OrderedList>{Story()}</OrderedList>],
  argTypes: {
    value: {
      type: { name: 'number', required: false },
      table: {
        category: 'HTML attribute',
        defaultValue: { summary: 0 },
      },
    },
  },
} as Meta<typeof OrderedListItem>;

export default meta;

export const Default: StoryObj<typeof OrderedListItem> = (args) => <OrderedListItem {...args} />;

Default.args = {
  children: 'List item',
};

// Configure a `displayName` for the code snippet when used as Storybook subcomponent
Default.displayName = 'OrderedListItem';
