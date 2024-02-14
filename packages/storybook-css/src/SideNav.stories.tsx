/* @license CC0-1.0 */

import { Meta, StoryObj } from '@storybook/react';
import readme from '@utrecht/components/sidenav/README.md?raw';
import tokensDefinition from '@utrecht/components/sidenav/tokens.json';
import tokens from '@utrecht/design-tokens/dist/index.json';
import { UtrechtIconMenuDot } from '@utrecht/web-component-library-react';
import React from 'react';
import { SideNav } from './SideNav';
import { designTokenStory } from './design-token-story';

const meta = {
  title: 'CSS Component/Side navigation',
  id: 'css-sidenav',
  component: SideNav,
  argTypes: {
    items: {
      description: 'Menu items',
      control: 'array',
    },
    pseudoElements: {
      description: 'Render using CSS pseudo elements',
      control: 'boolean',
    },
  },
  args: {
    pseudoElements: false,
    items: [],
  },
  parameters: {
    tokensPrefix: 'utrecht-sidenav',
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
} satisfies Meta<typeof SideNav>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    items: [
      { icon: <UtrechtIconMenuDot />, href: '#', title: 'Item #1' },
      { href: '#', title: 'Item #2' },
      { href: '#', title: 'Item #3' },
    ],
  },
  parameters: {
    docs: {
      description: {
        story: 'Styling via `utrecht-sidenav` class name.',
      },
    },
  },
};

export const DesignTokens = designTokenStory(meta);
