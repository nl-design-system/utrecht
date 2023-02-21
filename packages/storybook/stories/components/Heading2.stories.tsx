/* @license CC0-1.0 */

import type { Meta, StoryObj } from '@storybook/react';
import readme from '@utrecht/components/heading-2/README.md?raw';
import tokensDefinition from '@utrecht/components/heading-2/tokens.json';
import tokens from '@utrecht/design-tokens/dist/index.json';
import { Heading2 } from './Heading2';
import { designTokenStory } from './util';

const meta = {
  title: 'CSS Component/Heading/Heading 2',
  id: 'css-heading-2',
  component: Heading2,
  argTypes: {
    distanced: {
      description: 'Zet afstand tussen de header en nabije content',
      control: 'boolean',
      defaultValue: false,
    },
    textContent: {
      description: 'De content van de header',
      control: 'text',
      defaultValue: '',
    },
  },
  args: {
    textContent: 'The Quick Brown Fox Jumps Over The Lazy Dog',
  },
  tags: ['autodocs'],
  parameters: {
    tokensPrefix: 'utrecht-heading-2',
    tokens,
    tokensDefinition,
    docs: {
      description: {
        component: readme,
      },
    },
  },
} as Meta<typeof Heading2>;

export default meta;

export const Default: StoryObj<typeof Heading2> = {
  parameters: {
    status: {
      type: 'ALPHA',
    },
  },
  name: 'Heading 2',
};

export const Distanced: StoryObj<typeof Heading2> = {
  args: {
    distanced: true,
  },
  parameters: {
    chromatic: { disableSnapshot: true },
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
  name: 'Distanced',
};

export const DesignTokens: StoryObj<typeof Heading2> = designTokenStory(meta);
