import { Meta, StoryObj } from '@storybook/react';
import { Drawer, Heading1, Paragraph } from '@utrecht/component-library-react';
import tokens from '@utrecht/design-tokens/dist/index.json';
import readme from '@utrecht/drawer-css/README.md?raw';
import tokensDefinition from '@utrecht/drawer-css/src/tokens.json';
import React from 'react';
import { designTokenStory } from './design-token-story';

const meta = {
  title: 'CSS Component/Drawer',
  id: 'css-drawer',
  component: Drawer,
  decorators: [(Story) => <div style={{ minHeight: '256px' }}>{Story()}</div>],
  args: {
    children: '',
    open: false,
    modal: false,
  },
  argTypes: {
    align: {
      control: { type: 'select' },
      options: ['', 'block-end', 'block-start', 'inline-end', 'inline-start'],
    },
    children: {
      description: 'Content of the drawer',
    },
    open: {
      control: { type: 'boolean' },
    },
    modal: {
      control: { type: 'boolean' },
    },
  },
  parameters: {
    bugs: 'https://github.com/nl-design-system/utrecht/issues?q=is%3Aissue+is%3Aopen+label%3Acomponent%2Fdrawer',
    communityFigma:
      'https://www.figma.com/design/shhwGcqPLi2CapK0P1zz8O/NLDS---Voorbeeld---Bibliotheek?node-id=6021-5140&t=CiZrkiC5t6Bn59Hg-0',
    figma:
      'https://www.figma.com/design/UXIHcIurAD8hyoBWx4hDBV/NLDS---Gemeente-Utrecht---Bibliotheek?node-id=3113-27883&t=kJatlKfN59e8T0eA-0',
    nldesignsystem: 'https://nldesignsystem.nl/drawer',
    tokensPrefix: 'utrecht-drawer',
    status: {
      type: 'WORK IN PROGRESS',
    },
    tokens,
    tokensDefinition,
    docs: {
      description: {
        component: readme,
      },
    },
  },
} satisfies Meta<typeof Drawer>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: [
      <Heading1>Lorem ipsum</Heading1>,
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
        laborum.
      </Paragraph>,
    ],
    open: true,
  },
};

export const InlineStart: Story = {
  args: {
    ...Default.args,
    align: 'inline-start',
  },
  name: 'inline-start alignment',
};

export const InlineEnd: Story = {
  args: {
    ...Default.args,
    align: 'inline-end',
  },
  name: 'inline-end alignment',
};

export const BlockStart: Story = {
  args: {
    ...Default.args,
    align: 'block-start',
  },
  name: 'block-start alignment',
};

export const BlockEnd: Story = {
  args: {
    ...Default.args,
    align: 'block-end',
  },
  name: 'block-end alignment',
};

export const OverflowY: Story = {
  args: {
    align: 'inline-start',
    children: Array(10)
      .fill(0)
      .map(() => (
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum.
        </Paragraph>
      )),
    open: true,
  },
  name: 'Overflow Y',
};

export const DesignTokens = designTokenStory(meta);
