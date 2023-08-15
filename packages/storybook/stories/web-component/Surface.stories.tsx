/* @license CC0-1.0 */

import type { Meta, StoryObj } from '@storybook/react';
import readme from '@utrecht/components/surface/README.md?raw';
import tokensDefinition from '@utrecht/components/surface/tokens.json';
import tokens from '@utrecht/design-tokens/dist/index.json';
import { utrechtSurfaceBackgroundColor } from '@utrecht/design-tokens/dist/index.mjs';
import React from 'react';
import themeColorDocs from './_surface-theme-color.md?raw';
import { designTokenStory } from '../components/util';

const Surface = ({ children }) => <utrecht-surface>{children}</utrecht-surface>;

const MetaThemeColor = ({ color }) => <meta name="theme-color" content={color} />;

const meta = {
  title: 'Web Component/Surface',
  id: 'web-component-surface',
  component: Surface,
  argTypes: {
    children: {
      description: 'Content of the surface',
    },
  },
  args: {
    children: [],
  },
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    status: {
      type: 'WORK IN PROGRESS',
    },
    tokensPrefix: 'utrecht-surface',
    tokens,
    tokensDefinition,
    docs: {
      description: {
        component: readme,
      },
    },
  },
} satisfies Meta<typeof Surface>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'The Quick Brown Fox Jumps Over The Lazy Dog',
  },
};

export const ThemeColor: Story = {
  args: {},
  name: 'Theme color',
  render: () => MetaThemeColor({ color: utrechtSurfaceBackgroundColor }),
  parameters: {
    docs: {
      description: {
        story: themeColorDocs,
      },
    },
  },
};

export const DesignTokens = designTokenStory(meta);
