/* @license CC0-1.0 */

import { Meta, StoryObj } from '@storybook/react';
import { Heading1 } from '@utrecht/component-library-react/dist/css-module';
import readme from '@utrecht/components/heading-1/README.md?raw';
import tokensDefinition from '@utrecht/components/heading-1/tokens.json';
import tokens from '@utrecht/design-tokens/dist/index.json';
import { designTokenStory } from './util';

const meta = {
  title: 'CSS Component/Heading/Heading 1',
  id: 'css-heading-1',
  component: Heading1,
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
    tokensPrefix: 'utrecht-heading-1',
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
} satisfies Meta<typeof Heading1>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'The Quick Brown Fox Jumps Over The Lazy Dog',
  },
  parameters: {
    docs: {
      description: {
        story: 'Styling via `utrecht-heading-1` class name.',
      },
    },
  },
};

export const DesignTokens = designTokenStory(meta);
