/* @license CC0-1.0 */

import type { Meta, StoryObj } from '@storybook/react';
import readme from '@utrecht/components/heading-5/README.md?raw';
import tokensDefinition from '@utrecht/components/heading-5/tokens.json';
import tokens from '@utrecht/design-tokens/dist/index.json';
import React from 'react';
import { Heading5 } from './Heading5';
import { designTokenStory } from './util';
import '@utrecht/components/heading-5/css/index.scss';

const meta = {
  title: 'CSS Component/Heading/Heading 5',
  id: 'css-heading-5',
  component: Heading5,
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
    tokensPrefix: 'utrecht-heading-5',
    tokens,
    tokensDefinition,
    docs: {
      description: {
        component: readme,
      },
    },
  },
} as Meta<typeof Heading5>;

export default meta;

export const Default: StoryObj<typeof Heading5> = {
  parameters: {
    status: {
      type: 'ALPHA',
    },
  },
  storyName: 'Heading 5',
};

export const Distanced: StoryObj<typeof Heading5> = {
  args: {
    distanced: true,
  },
  parameters: {
    chromatic: { disableSnapshot: true },
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
  storyName: 'Distanced',
};

export const DesignTokens: StoryObj<typeof Heading5> = designTokenStory(meta);
