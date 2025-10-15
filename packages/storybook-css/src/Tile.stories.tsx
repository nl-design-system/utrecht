/* @license CC0-1.0 */

import type { Meta, StoryObj } from '@storybook/react-vite';
import tokens from '@utrecht/design-tokens/dist/index.json';
import readme from '@utrecht/tile-css/README.md?raw';
import tokensDefinition from '@utrecht/tile-css/src/tokens.json';
import React, { type ComponentProps, type CSSProperties } from 'react';
import { designTokenStory } from './design-token-story';

const meta = {
  title: 'CSS Component/Tile',
  id: 'css-tile',
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
} satisfies Meta<typeof HTMLDivElement>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <div className="utrecht-tile" {...args}>
      Hellooooo
    </div>
  ),
};

export const DesignTokens = designTokenStory(meta);
