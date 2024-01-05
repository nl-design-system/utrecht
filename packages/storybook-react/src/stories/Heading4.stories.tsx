import { Meta, StoryObj } from '@storybook/react';
import { Heading4 } from '@utrecht/component-library-react/dist/css-module';
import readme from '@utrecht/components/heading-4/README.md?raw';
import tokensDefinition from '@utrecht/components/heading-4/tokens.json';
import tokens from '@utrecht/design-tokens/dist/index.json';
import { designTokenStory } from './util';

const meta = {
  title: 'React Component/Heading 4',
  id: 'react-heading-4',
  component: Heading4,
  args: {
    children: 'The Quick Brown Fox Jumps Over The Lazy Dog',
  },
  parameters: {
    tokensPrefix: 'utrecht-heading-4',
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
export const Default: Story = {};

export const DesignTokens = designTokenStory(meta);
