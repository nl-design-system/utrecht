import { ComponentMeta, ComponentStory } from '@storybook/react';
import { OrderedList, OrderedListItem } from '@utrecht/component-library-react';
import React from 'react';
import { itemArgTypes } from './argTypes';

export default {
  title: 'React Component/Ordered List/Item',
  id: 'react-ordered-list-item',
  component: OrderedListItem,
  decorators: [(Story) => <OrderedList>{Story()}</OrderedList>],
  argTypes: itemArgTypes,
} as ComponentMeta<typeof OrderedListItem>;

export const Default: ComponentStory<typeof OrderedListItem> = (args) => <OrderedListItem {...args} />;

Default.args = {
  children: 'List item',
};

// Configure a `displayName` for the code snippet when used as Storybook subcomponent
Default.displayName = 'OrderedListItem';
