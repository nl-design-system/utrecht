/* @license CC0-1.0 */

import type { Meta, StoryObj } from '@storybook/react';
import readme from '@utrecht/components/badge-data/README.md?raw';
import tokensDefinition from '@utrecht/components/badge-data/tokens.json';
import tokens from '@utrecht/design-tokens/dist/index.json';
import { UtrechtBadgeData } from '@utrecht/web-component-library-react';
import { designTokenStory } from '../components/util';

const meta = {
  title: 'Web Component/Badge data',
  id: 'web-component-badge-data',
  component: UtrechtBadgeData,
  argTypes: {
    children: {
      description: 'Text content',
      control: 'text',
    },
  },
  args: {
    children: '',
  },
  tags: ['autodocs'],
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
    tokensPrefix: 'utrecht-badge-data',
    tokens,
    tokensDefinition,
    docs: {
      description: {
        component: readme,
      },
    },
  },
} satisfies Meta<typeof UtrechtBadgeData>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Festivals',
  },
};

export const DesignTokens = designTokenStory(meta);
