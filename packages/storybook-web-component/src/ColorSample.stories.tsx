/* @license CC0-1.0 */

import type { Meta, StoryObj } from '@storybook/react';
import readme from '@utrecht/components/color-sample/README.md?raw';
import tokensDefinition from '@utrecht/components/color-sample/tokens.json';
import tokens from '@utrecht/design-tokens/dist/index.json';
import { UtrechtColorSample } from '@utrecht/web-component-library-react';
import React from 'react';
import { designTokenStory } from './design-token-story';

interface ColorSampleStoryProps {
  color: string;
}

const ColorSampleStory = ({ color }: ColorSampleStoryProps) => (
  <UtrechtColorSample
    style={{
      color: color,
    }}
  />
);
const meta = {
  title: 'Web Component/Color sample',
  id: 'web-component-color-sample',
  component: ColorSampleStory,
  argTypes: {
    color: {
      name: 'Color',
      description: 'Color of the sample',
      control: {
        type: 'color',
      },
      type: {
        name: 'string',
        required: true,
      },
    },
  },
  args: {
    color: '',
  },
  tags: ['autodocs'],
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
    tokensPrefix: 'utrecht-color-sample',
    tokens,
    tokensDefinition,
    docs: {
      description: {
        component: readme,
      },
    },
  },
} satisfies Meta<typeof ColorSampleStory>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    color: '#007DAD',
  },
};

export const DesignTokens = designTokenStory(meta);
