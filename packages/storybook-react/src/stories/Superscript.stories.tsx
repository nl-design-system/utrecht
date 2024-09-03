import { Meta, StoryObj } from '@storybook/react';
import { Superscript } from '@utrecht/component-library-react/dist/css-module';
import tokens from '@utrecht/design-tokens/dist/index.json';
import readme from '@utrecht/superscript-css/README.md?raw';
import tokensDefinition from '@utrecht/superscript-css/src/tokens.json';
import { designTokenStory } from './util';

const meta = {
  title: 'React Component/Superscript',
  id: 'react-superscript',
  component: Superscript,
  args: {
    children: 'The Quick Brown Fox Jumps Over The Lazy Dog',
  },
  argTypes: {
    openType: {
      description: 'Render with OpenType font features.',
      control: 'boolean',
    },
  },
  parameters: {
    tokensPrefix: 'utrecht-superscript',
    tokens,
    tokensDefinition,
    docs: {
      description: {
        component: readme,
      },
    },
  },
} satisfies Meta<typeof Superscript>;

export default meta;

type Story = StoryObj<typeof meta>;
export const Default: Story = {};

export const DesignTokens = designTokenStory(meta);
