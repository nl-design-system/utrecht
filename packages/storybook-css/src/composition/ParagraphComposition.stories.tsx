/* @license CC0-1.0 */

import { Meta, StoryObj } from '@storybook/react';
import { Link, Paragraph } from '@utrecht/component-library-react';
import React from 'react';

const meta = {
  title: 'CSS Component/Paragraph/Composition',
  id: 'css-paragraph-composition',
  component: Paragraph,
  argTypes: {},
  args: {
    children: [],
  },
  parameters: {
    chromatic: { disableSnapshot: true },
  },
} satisfies Meta<typeof Paragraph>;

export default meta;

type Story = StoryObj<typeof meta>;

export const ParagraphContainsLink: Story = {
  args: {
    children: (
      <>
        {
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, '
        }
        <Link href="https://example.com/">Lorem</Link>
        {
          ' ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        }
      </>
    ),
  },
  name: 'Paragraph with link',
};
