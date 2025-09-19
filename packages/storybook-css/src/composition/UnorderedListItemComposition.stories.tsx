/* @license CC0-1.0 */

import { Meta, StoryObj } from '@storybook/react-vite';
import { Link } from '@utrecht/component-library-react';
import React from 'react';
import { UnorderedListStory } from '../UnorderedList';

const meta = {
  title: 'CSS Component/Unordered list/Composition',
  id: 'css-unordered-list-composition',
  component: UnorderedListStory,
  argTypes: {},
  args: {
    children: [],
  },
  parameters: {
    chromatic: { disableSnapshot: true },
  },
} satisfies Meta<typeof UnorderedListStory>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    items: [
      {
        children: <Link href="https://example.com/">Lorem</Link>,
      },
      {
        children: <Link href="https://example.com/">ipsum dolor</Link>,
      },
      {
        children: <Link href="https://example.com/">sit amet</Link>,
      },
    ],
  },
  name: 'Unordered list with multiple list items with one link',
};

export const Lines: Story = {
  args: {
    items: [
      {
        children: (
          <>
            <Link href="https://example.com/">Lorem</Link>
            <br />
            <Link href="https://example.com/">ipsum dolor</Link>
            <br />
            <Link href="https://example.com/">sit amet</Link>
          </>
        ),
      },
    ],
  },
  name: 'Unordered list item with multiple links',
};
