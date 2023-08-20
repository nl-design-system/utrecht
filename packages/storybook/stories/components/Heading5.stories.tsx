/* @license CC0-1.0 */

import { Meta, StoryObj } from '@storybook/react';
import { Heading5 } from '@utrecht/component-library-react/dist/css-module';
import readme from '@utrecht/components/heading-5/README.md?raw';
import tokensDefinition from '@utrecht/components/heading-5/tokens.json';
import tokens from '@utrecht/design-tokens/dist/index.json';
import { designTokenStory } from './util';

const meta = {
  title: 'CSS Component/Heading/Heading 5',
  id: 'css-heading-5',
  component: Heading5,
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
    tokensPrefix: 'utrecht-heading-5',
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
} satisfies Meta<typeof Heading5>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'The Quick Brown Fox Jumps Over The Lazy Dog',
  },
  parameters: {
    docs: {
      description: {
        story: 'Styling via `utrecht-heading-5` class name.',
      },
    },
  },
};

export const DesignTokens = designTokenStory(meta);
