/* eslint-disable react/jsx-key */
// performance optimizations are not relevant for story rendering, ignore ESLint
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { OrderedList } from '@utrecht/component-library-react';
import React from 'react';
import { Default as OrderedListItem } from './OrderedListItem.stories.tsx';
import { argTypes } from './argTypes';

export default {
  title: 'React Component/Ordered List',
  id: 'react-ordered-list',
  component: OrderedList,
  subcomponents: { OrderedListItem },
  argTypes,
} as ComponentMeta<typeof OrderedList>;

export const Default: ComponentStory<typeof OrderedList> = (args) => <OrderedList {...args} />;

Default.args = {
  children: [
    <OrderedListItem {...OrderedListItem.args} />,
    <OrderedListItem {...OrderedListItem.args} />,
    <OrderedListItem {...OrderedListItem.args} />,
  ],
};
