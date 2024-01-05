import { Meta, StoryObj } from '@storybook/react';
import { Surface } from '@utrecht/component-library-react/dist/css-module';
import readme from '@utrecht/components/surface/README.md?raw';
import tokensDefinition from '@utrecht/components/surface/tokens.json';
import tokens from '@utrecht/design-tokens/dist/index.json';
import { designTokenStory } from './util';

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
