/* @license CC0-1.0 */

import type { Meta, StoryObj } from '@storybook/react';
import { DataPlaceholder } from '@utrecht/component-library-react/dist/css-module';
import readme from '@utrecht/components/data-placeholder/README.md?raw';
import tokensDefinition from '@utrecht/components/data-placeholder/tokens.json';
import tokens from '@utrecht/design-tokens/dist/index.json';
import { designTokenStory } from './util';

const meta = {
  title: 'React Component/Data placeholder',
  id: 'react-data-placeholder',
  component: DataPlaceholder,
  argTypes: {
    loading: {
      description: 'Loading',
      control: 'boolean',
    },
  },
  args: {},
  tags: ['autodocs'],
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
    tokensPrefix: 'utrecht-data-placeholder',
    tokens,
    tokensDefinition,
    docs: {
      description: {
        component: readme,
      },
    },
  },
} satisfies Meta<typeof DataPlaceholder>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  parameters: {
    status: {
      type: 'ALPHA',
    },
  },
};

export const Loading: Story = {
  args: {
    loading: true,
  },
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
};

export const DesignTokens = designTokenStory(meta);
