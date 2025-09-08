/* @license CC0-1.0 */

import type { Meta, StoryObj } from '@storybook/react-webpack5';
import tokens from '@utrecht/design-tokens/dist/index.json';
import readme from '@utrecht/heading-1-css/README.md?raw';
import tokensDefinition from '@utrecht/heading-1-css/src/tokens.json';
import { UtrechtHeading1 } from '@utrecht/web-component-library-react';
import { designTokenStory } from './design-token-story';

const meta = {
  title: 'Web Component/Heading/Heading 1',
  id: 'web-component-heading-1',
  component: UtrechtHeading1,
  argTypes: {
    children: {
      description: 'Content of the heading',
    },
  },
  args: {
    children: ['The Quick Brown Fox Jumps Over The Lazy Dog'],
  },
  tags: ['autodocs'],
  parameters: {
    status: {
      type: 'ALPHA',
    },
    tokensPrefix: 'utrecht-heading-1',
    tokens,
    tokensDefinition,
    docs: {
      description: {
        component: readme,
      },
    },
  },
} satisfies Meta<typeof UtrechtHeading1>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const DesignTokens = designTokenStory(meta);
