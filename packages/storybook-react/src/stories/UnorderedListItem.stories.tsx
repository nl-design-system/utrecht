import { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
import { UnorderedList, UnorderedListItem } from '../../../component-library-react/src/index.js';

const meta = {
  title: 'React Component/Unordered List/Item',
  id: 'react-unordered-list--item',
  component: UnorderedListItem,
  decorators: [(Story) => <UnorderedList>{Story()}</UnorderedList>],
  args: {
    children: 'List item',
  },
  argTypes: {},
} satisfies Meta<typeof UnorderedListItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
