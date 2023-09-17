/* @license CC0-1.0 */

import type { Meta, StoryObj } from '@storybook/react';
import readme from '@utrecht/components/icon/iconset.md?raw';
import tokensDefinition from '@utrecht/components/icon/tokens.json';
import tokens from '@utrecht/design-tokens/dist/index.json';
import iconSet from '@utrecht/icon/dist/index.json';
import React from 'react';
import { designTokenStory } from './design-token-story';

interface IconSetStoryProps {
  color?: string;
  icon?: string;
  size?: string;
}

const IconSetStory = ({ color, icon, size }: IconSetStoryProps) => {
  const IconElement = icon;
  if (color || size) {
    return (
      <div
        style={{
          '--utrecht-icon-color': color && color,
          '--utrecht-icon-size': size && `${size}px`,
        }}
      >
        <IconElement></IconElement>
      </div>
    );
  } else {
    return <IconElement></IconElement>;
  }
};

const meta = {
  title: 'Web Component/Icon set',
  id: 'web-component-icon-set',
  component: IconSetStory,
  argTypes: {
    color: {
      description: 'Color of the icon',
      control: 'color',
    },
    size: {
      description: 'Size of the icon (in pixels)',
      control: 'number',
    },
    icon: {
      description: 'Icon from the icon set',
      control: { type: 'select' },
      options: ['', ...iconSet.map(({ id }) => id)],
    },
  },
  args: {},
  tags: ['autodocs'],
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
    tokensPrefix: 'utrecht-icon',
    tokens,
    tokensDefinition,
    docs: {
      description: {
        component: readme,
      },
    },
  },
} satisfies Meta<typeof IconSetStory>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    color: '#888888',
    icon: 'utrecht-icon-loupe',
    size: 32,
  },
};

export const DesignTokens = designTokenStory(meta);
