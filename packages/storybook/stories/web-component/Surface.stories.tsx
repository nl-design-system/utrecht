/* @license CC0-1.0 */

import type { Meta, StoryObj } from '@storybook/react';
import readme from '@utrecht/components/surface/README.md?raw';
import themeColorDocs from '@utrecht/components/surface/_surface-theme-color.md?raw';
import tokensDefinition from '@utrecht/components/surface/tokens.json';
import tokens from '@utrecht/design-tokens/dist/index.json';
import { utrechtSurfaceBackgroundColor } from '@utrecht/design-tokens/dist/index.mjs';
import { UtrechtSurface } from '@utrecht/web-component-library-react';
import React from 'react';
import { designTokenStory } from '../components/util';

const MetaThemeColor = ({ color }) => <meta name="theme-color" content={color} />;

const meta = {
  title: 'Web Component/Surface',
  id: 'web-component-surface',
  component: UtrechtSurface,
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
} satisfies Meta<typeof UtrechtSurface>;

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
