/* @license CC0-1.0 */

import type { Meta, StoryObj } from '@storybook/react';
import readme from '@utrecht/components/heading-3/README.md?raw';
import tokensDefinition from '@utrecht/components/heading-3/tokens.json';
import tokens from '@utrecht/design-tokens/dist/index.json';
import { UtrechtHeading3 } from '@utrecht/web-component-library-react';
import { designTokenStory } from './design-token-story';

const meta = {
  title: 'Web Component/Heading/Heading 3',
  id: 'web-component-heading-3',
  component: UtrechtHeading3,
  argTypes: {
    children: {
      description: 'Content of the heading',
    },
  },
  args: {
    children: ['The Quick Brown Fox Jumps Over The Lazy Dog'],
  },
  tags: ['autodocs'],
  parameters: {
    status: {
      type: 'ALPHA',
    },
    tokensPrefix: 'utrecht-heading-3',
    tokens,
    tokensDefinition,
    docs: {
      description: {
        component: readme,
      },
    },
  },
} satisfies Meta<typeof UtrechtHeading3>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const DesignTokens = designTokenStory(meta);
