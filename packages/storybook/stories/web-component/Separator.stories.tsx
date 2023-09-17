/* @license CC0-1.0 */

import type { Meta, StoryObj } from '@storybook/react';
import readme from '@utrecht/components/separator/README.md?raw';
import tokensDefinition from '@utrecht/components/separator/tokens.json';
import tokens from '@utrecht/design-tokens/dist/index.json';
import { UtrechtSeparator } from '@utrecht/web-component-library-react';
import { designTokenStory } from '../components/util';

const meta = {
  title: 'Web Component/Separator',
  id: 'web-component-separator',
  component: UtrechtSeparator,
  argTypes: {},
  args: {},
  tags: ['autodocs'],
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
    tokensPrefix: 'utrecht-separator',
    tokens,
    tokensDefinition,
    docs: {
      description: {
        component: readme,
      },
    },
  },
} satisfies Meta<typeof UtrechtSeparator>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const DesignTokens = designTokenStory(meta);
