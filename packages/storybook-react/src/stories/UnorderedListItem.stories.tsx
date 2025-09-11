import { Meta, StoryObj } from '@storybook/react-vite';
import { UnorderedList, UnorderedListItem } from '@utrecht/component-library-react/dist/css-module';
import React from 'react';

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
