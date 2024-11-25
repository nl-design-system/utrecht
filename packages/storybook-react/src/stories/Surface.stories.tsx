import { Meta, StoryObj } from '@storybook/react';
import { Surface } from '@utrecht/component-library-react/dist/css-module';
import tokens from '@utrecht/design-tokens/dist/list.mjs';
import readme from '@utrecht/surface-css/README.md?raw';
import tokensDefinition from '@utrecht/surface-css/dist/tokens.mjs';
import { designTokenStory } from './util.js';

const meta = {
  title: 'React Component/Surface',
  id: 'react-surface',
  component: Surface,
  args: {
    children: 'The Quick Brown Fox Jumps Over The Lazy Dog',
  },
  parameters: {
    tokensPrefix: 'utrecht-surface',
    tokens,
    tokensDefinition,
    docs: {
      description: {
        component: readme,
      },
    },
  },
} satisfies Meta<typeof Surface>;

export default meta;

type Story = StoryObj<typeof meta>;
export const Default: Story = {};

export const DesignTokens = designTokenStory(meta);
