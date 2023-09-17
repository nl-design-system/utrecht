/* @license CC0-1.0 */

import type { Meta, StoryObj } from '@storybook/react';
import readme from '@utrecht/components/heading-5/README.md?raw';
import tokensDefinition from '@utrecht/components/heading-5/tokens.json';
import tokens from '@utrecht/design-tokens/dist/index.json';
import { UtrechtHeading5 } from '@utrecht/web-component-library-react';
import { designTokenStory } from '../components/util';

const meta = {
  title: 'Web Component/Heading/Heading 5',
  id: 'web-component-heading-5',
  component: UtrechtHeading5,
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
    tokensPrefix: 'utrecht-heading-5',
    tokens,
    tokensDefinition,
    docs: {
      description: {
        component: readme,
      },
    },
  },
} satisfies Meta<typeof UtrechtHeading5>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const DesignTokens = designTokenStory(meta);
