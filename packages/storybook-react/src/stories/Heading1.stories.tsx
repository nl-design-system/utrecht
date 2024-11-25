import { Meta, StoryObj } from '@storybook/react';
import { Heading1 } from '@utrecht/component-library-react/dist/css-module';
import tokens from '@utrecht/design-tokens/dist/list.mjs';
import readme from '@utrecht/heading-1-css/README.md?raw';
import tokensDefinition from '@utrecht/heading-1-css/dist/tokens.mjs';
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
