import { Meta, StoryObj } from '@storybook/react';
import { Heading6 } from '@utrecht/component-library-react/src/css-module/index';
import readme from '@utrecht/components/heading-6/README.md?raw';
import tokensDefinition from '@utrecht/components/heading-6/tokens.json';
import tokens from '@utrecht/design-tokens/dist/index.json';
import { designTokenStory } from './util';

const meta = {
  title: 'React Component/Heading 6',
  id: 'react-heading-6',
  component: Heading6,
  args: {
    children: 'The Quick Brown Fox Jumps Over The Lazy Dog',
  },
  parameters: {
    tokensPrefix: 'utrecht-heading-6',
    tokens,
    tokensDefinition,
    docs: {
      description: {
        component: readme,
      },
    },
  },
} satisfies Meta<typeof Heading6>;

export default meta;

type Story = StoryObj<typeof meta>;
export const Default: Story = {};

export const DesignTokens = designTokenStory(meta);
