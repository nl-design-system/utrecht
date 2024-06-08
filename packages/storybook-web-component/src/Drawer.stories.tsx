/* @license CC0-1.0 */

import type { Meta, StoryObj } from '@storybook/react';
import tokens from '@utrecht/design-tokens/dist/index.json';
import readme from '@utrecht/drawer-css/README.md?raw';
import tokensDefinition from '@utrecht/drawer-css/src/tokens.json';
import { UtrechtDrawer, UtrechtHeading1, UtrechtParagraph } from '@utrecht/web-component-library-react';
import React from 'react';
import { designTokenStory } from './design-token-story';

const meta = {
  title: 'Web Component/Drawer',
  id: 'web-component-drawer',
  component: UtrechtDrawer,
  decorators: [
    (Story) => (
      <div
        style={{
          minHeight: '256px',
          position: 'relative',
        }}
      >
        {Story()}
      </div>
    ),
  ],
  argTypes: {
    align: {
      control: { type: 'select' },
      options: ['', 'block-end', 'block-start', 'inline-end', 'inline-start'],
    },
    children: {
      description: 'HTML content of the drawer',
    },
    hidden: {
      control: { type: 'boolean' },
    },
    open: {
      control: { type: 'boolean' },
    },
    modal: {
      control: { type: 'boolean' },
    },
  },
  args: {
    children: '',
    hidden: false,
    open: false,
  },
  tags: ['autodocs'],
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
    tokensPrefix: 'utrecht-drawer',
    tokens,
    tokensDefinition,
    docs: {
      description: {
        component: readme,
      },
    },
  },
} satisfies Meta<typeof UtrechtDrawer>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: [
      <UtrechtHeading1>Lorem ipsum</UtrechtHeading1>,
      <UtrechtParagraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
        laborum.
      </UtrechtParagraph>,
    ],
    open: true,
  },
};

export const InlineStart: Story = {
  args: {
    ...Default.args,
    align: 'inline-start',
  },
};

export const InlineEnd: Story = {
  args: {
    ...Default.args,
    align: 'inline-end',
  },
};

export const BlockStart: Story = {
  args: {
    ...Default.args,
    align: 'block-start',
  },
};

export const BlockEnd: Story = {
  args: {
    ...Default.args,
    align: 'block-end',
  },
};

export const OverflowBlock: Story = {
  args: {
    children: [
      <UtrechtHeading1>Lorem ipsum</UtrechtHeading1>,
      ...Array(42)
        .fill(0)
        .map(() => (
          <UtrechtParagraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </UtrechtParagraph>
        )),
    ],
    open: true,
  },
};

export const DesignTokens = designTokenStory(meta);
