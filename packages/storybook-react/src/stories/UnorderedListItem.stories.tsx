import { Meta, StoryObj } from '@storybook/react-vite';
import { UnorderedList, UnorderedListItem } from '@utrecht/component-library-react/dist/css-module';
import React from 'react';

const CustomBulletIcon = () => (
  <svg viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="4" cy="4" r="4" fill="currentColor" />
  </svg>
);

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
export const WithCustomBulletIcon: Story = {
  render: () => (
    <UnorderedListItem
      marker={<CustomBulletIcon />}
      style={{
        '--utrecht-unordered-list-custom-marker-color': 'blue',
        '--utrecht-unordered-list-custom-marker-size': '0.5em',
      }}
    >
      List item
    </UnorderedListItem>
  ),
};
