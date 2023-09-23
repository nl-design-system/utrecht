/* @license CC0-1.0 */

import { Meta, StoryObj } from '@storybook/react';
import { Heading4 } from '@utrecht/component-library-react';
import readme from '@utrecht/components/heading-4/README.md?raw';
import tokensDefinition from '@utrecht/components/heading-4/tokens.json';
import tokens from '@utrecht/design-tokens/dist/index.json';
import { designTokenStory } from './design-token-story';

const meta = {
  title: 'CSS Component/Heading/Heading 4',
  id: 'css-heading-4',
  component: Heading4,
  argTypes: {
    children: {
      description: 'Tekst van de heading.',
      control: 'text',
    },
  },
  args: {
    children: [],
  },
  parameters: {
    tokensPrefix: 'utrecht-heading-4',
    status: {
      type: 'ALPHA',
    },
    tokens,
    tokensDefinition,
    docs: {
      description: {
        component: readme,
      },
    },
  },
} satisfies Meta<typeof Heading4>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'The Quick Brown Fox Jumps Over The Lazy Dog',
  },
  parameters: {
    docs: {
      description: {
        story: 'Styling via `utrecht-heading-4` class name.',
      },
    },
  },
};

export const DesignTokens = designTokenStory(meta);
