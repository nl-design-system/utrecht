/* @license CC0-1.0 */

import type { Meta, StoryObj } from '@storybook/react-vite';
import tokens from '@utrecht/design-tokens/dist/index.json';
import iconSet from '@utrecht/icon/dist/index.json';
import readme from '@utrecht/tile-css/README.md?raw';
import tokensDefinition from '@utrecht/tile-css/src/tokens.json';
import React from 'react';
import { Tile, TileProps } from './Tile';
import { designTokenStory } from './design-token-story';

interface TileStoryProps extends TileProps {
  icon?: string;
}

const TileStory = ({ children, icon, ...props }: TileStoryProps) => {
  const IconElement = icon;
  return (
    <div style={{ inlineSize: '400px', paddingBlock: '16px', paddingInline: '16px' }}>
      <Tile icon={IconElement ? <IconElement /> : null} {...props}>
        {children}
      </Tile>
    </div>
  );
};

const meta = {
  title: 'CSS Component/Tile',
  id: 'css-tile',
  component: TileStory,
  argTypes: {
    children: {
      description: 'Text of the tile',
    },
    icon: {
      description: 'Icon',
      control: { type: 'select' },
      options: ['', ...iconSet.map(({ id }) => id)],
    },
    color: {
      description: 'Color variant of the tile',
      control: { type: 'select' },
      options: ['default', 'primary', 'secondary', 'tertiary'],
    },
  },
  parameters: {
    bugs: 'https://github.com/nl-design-system/utrecht/issues?q=is%3Aissue+is%3Aopen+label%3Acomponent%2Ftile',
    layout: 'fullscreen',
    tokensPrefix: 'utrecht-tile',
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
} satisfies Meta<typeof Tile>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    href: '#',
    children: 'Tile nummer 1',
    icon: 'utrecht-icon-facebook',
  },
  parameters: {
    docs: {
      description: {
        story: 'Test',
      },
    },
  },
};

export const Hover: Story = {
  parameters: {
    pseudo: { hover: true },
  },
  args: {
    ...Default.args,
  },
};

export const DefaultFocus: Story = {
  parameters: {
    pseudo: { focus: true },
  },
  args: {
    ...Default.args,
  },
};

export const Active: Story = {
  parameters: {
    pseudo: { active: true },
  },
  args: {
    ...Default.args,
  },
};

export const FocusVisible: Story = {
  parameters: {
    pseudo: { focusVisible: true, focus: true },
  },
  args: {
    ...Default.args,
  },
};

export const DesignTokens = designTokenStory(meta);
