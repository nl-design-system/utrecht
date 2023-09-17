/* @license CC0-1.0 */

import type { Meta, StoryObj } from '@storybook/react';
import readme from '@utrecht/components/backdrop/README.md?raw';
import tokensDefinition from '@utrecht/components/backdrop/tokens.json';
import tokens from '@utrecht/design-tokens/dist/index.json';
import { UtrechtBackdrop } from '@utrecht/web-component-library-react';
import React from 'react';
import { designTokenStory } from './design-token-story';

const checkerboard = (story) => (
  <div
    style={{
      '--checkerboard-color-1': '#000000',
      '--checkerboard-color-2': '#ffffff',
      '--checkerboard-size': '16px',
      'background-color': 'var(--checkerboard-color-2)',
      'background-image':
        'linear-gradient(45deg, var(--checkerboard-color-1) 25%, transparent 25%, transparent 75%, var(--checkerboard-color-1) 75%,var(--checkerboard-color-1)), linear-gradient(45deg, var(--checkerboard-color-1) 25%, transparent 25%, transparent 75%, var(--checkerboard-color-1) 75%, var(--checkerboard-color-1))',
      'background-position': '0 0, var(--checkerboard-size) var(--checkerboard-size)',
      'background-size': 'calc(var(--checkerboard-size) * 2) calc(var(--checkerboard-size) * 2)',
      height: '100%',
      'min-height': 'calc(40 * var(--checkerboard-size))',
      'min-width': 'calc(40 * var(--checkerboard-size))',
      position: 'relative',
      width: '100%',
    }}
  >
    {story()}
  </div>
);

const BackdropStory = ({ viewport }: { viewport?: boolean }) => (
  <UtrechtBackdrop viewport={viewport ? true : undefined} />
);

const meta = {
  title: 'Web Component/Backdrop',
  id: 'web-component-backdrop',
  component: BackdropStory,
  argTypes: {
    viewport: {
      name: 'Cover viewport',
      type: 'boolean',
      table: {
        category: 'Custom Element attribute',
        defaultValue: { summary: false },
      },
    },
  },
  args: {
    viewport: false,
  },
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    status: {
      type: 'WORK IN PROGRESS',
    },
    tokensPrefix: 'utrecht-backdrop',
    tokens,
    tokensDefinition,
    docs: {
      description: {
        component: readme,
      },
    },
  },
} satisfies Meta<typeof BackdropStory>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  decorators: [checkerboard],
};

export const DesignTokens = designTokenStory(meta);
