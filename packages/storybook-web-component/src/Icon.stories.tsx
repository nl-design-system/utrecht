/* @license CC0-1.0 */

import type { Meta, StoryObj } from '@storybook/react';
import tokens from '@utrecht/design-tokens/dist/index.json';
import iconSet from '@utrecht/icon/dist/index.json';
import readme from '@utrecht/icon-css/README.md?raw';
import tokensDefinition from '@utrecht/icon-css/src/tokens.json';
import React from 'react';
import { designTokenStory } from './design-token-story';

interface IconStoryProps {
  color?: string;
  icon?: string;
  size?: string;
}

const IconStory = ({ color, icon, size }: IconStoryProps) => {
  const IconElement = icon;
  if (color || size) {
    return (
      <div style={{ '--utrecht-icon-color': color && color, '--utrecht-icon-size': size && `${size}px` }}>
        <IconElement></IconElement>
      </div>
    );
  } else {
    return <IconElement></IconElement>;
  }
};

const meta = {
  title: 'Web Component/Icon',
  id: 'web-component-icon',
  component: IconStory,
  argTypes: {
    children: {
      description: 'Content of the icon, for example: an <svg> element',
    },
    color: {
      description: 'Color of the icon',
      control: 'color',
    },
    size: {
      description: 'Size of the icon (in pixels)',
      control: 'number',
    },
    icon: {
      description: 'Icon',
      control: { type: 'select' },
      options: ['', ...iconSet.map(({ id }) => id)],
    },
  },
  args: {
    children: [],
    color: '#888888',
    icon: 'utrecht-icon-loupe',
    size: 32,
  },
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
} satisfies Meta<typeof IconStory>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const InlineSVG: Story = {
  args: {
    children: (
      <svg viewBox="0 0 32 32">
        <rect fill="currentColor" x="0" y="0" width="32" height="32" />
      </svg>
    ),
  },
  name: 'with inline SVG',
};

export const Oversized: Story = {
  args: {
    children: (
      <svg viewBox="0 0 32 32" width="128px" height="128px">
        <rect fill="currentColor" x="0" y="0" width="32" height="32" />
      </svg>
    ),
  },
  name: 'Icon with inline SVG with oversized dimensions',
};

export const ButtonIcon: Story = {
  args: {
    children: (
      <svg viewBox="0 0 32 32">
        <rect fill="currentColor" x="0" y="0" width="32" height="32" />
      </svg>
    ),
  },
  decorators: [
    (Story) => (
      <button className="utrecht-button utrecht-button--html-button utrecht-button--primary-action">
        {Story()} Click me
      </button>
    ),
  ],
  name: 'Icon with inline SVG inside a button',
};

export const LinkIcon: Story = {
  args: {
    children: (
      <svg viewBox="0 0 32 32">
        <rect fill="currentColor" x="0" y="0" width="32" height="32" />
      </svg>
    ),
  },
  decorators: [
    (Story) => (
      <p className="utrecht-paragraph">
        <a className="utrecht-link utrecht-link--html-a" href="https://example.com/">
          {Story()}Link
        </a>
      </p>
    ),
  ],
  name: 'Icon with inline SVG inside a link',
};

export const DesignTokens = designTokenStory(meta);
