import { Meta, StoryObj } from '@storybook/react';
import { Heading1 } from '@utrecht/component-library-react/dist/css-module';
import readme from '@utrecht/components/heading-1/README.md?raw';
import tokensDefinition from '@utrecht/components/heading-1/tokens.json';
import tokens from '@utrecht/design-tokens/dist/index.json';
import { designTokenStory } from './util';

const meta = {
  title: 'React Component/Heading 1',
  id: 'react-heading-1',
  component: Heading1,
  args: {
    children: 'The Quick Brown Fox Jumps Over The Lazy Dog',
  },
  parameters: {
    tokensPrefix: 'utrecht-heading-1',
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
export const Default: Story = {};

export const DesignTokens = designTokenStory(meta);
