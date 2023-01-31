/* @license CC0-1.0 */

import readme from '@nl-design-system-unstable/documentation/componenten/_paragraph.md';
import type { Meta, StoryObj } from '@storybook/react';
import tokensDefinition from '@utrecht/components/paragraph/tokens.json';
import tokens from '@utrecht/design-tokens/dist/index.json';
import React from 'react';
import { Paragraph } from './Paragraph';
import { designTokenStory } from './util';
import '@utrecht/components/paragraph/css/index.scss';

const lipsum =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

const meta = {
  title: 'CSS Component/Paragraph',
  id: 'css-paragraph',
  component: Paragraph,
  argTypes: {
    innerHTML: {
      description: 'Paragraph innerHTML',
      control: 'text',
      defaultValue: '',
    },
    lead: {
      description: 'Lead paragraph',
      control: 'boolean',
      defaultValue: false,
    },
    small: {
      description: 'Paragraph with small print',
      control: 'boolean',
      defaultValue: false,
    },
  },
  args: {
    innerHTML: lipsum,
  },
  tags: ['autodocs'],
  parameters: {
    tokensPrefix: 'utrecht-paragraph',
    tokens,
    tokensDefinition,
    docs: {
      description: {
        component: readme,
      },
    },
  },
} as Meta<typeof Paragraph>;

export default meta;

export const Default: StoryObj<typeof Paragraph> = {
  parameters: {
    status: {
      type: 'ALPHA',
    },
  },
  storyName: 'Paragraph',
};

export const LeadParagraph: StoryObj<typeof Paragraph> = {
  args: {
    lead: true,
  },
  parameters: {
    status: {
      type: 'ALPHA',
    },
  },
  storyName: 'Lead paragraph',
};

export const SmallPrint: StoryObj<typeof Paragraph> = {
  args: {
    small: true,
  },
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
  storyName: 'Small print',
};

export const Multiple: StoryObj<typeof Paragraph> = {
  args: {
    items: [
      {
        children: lipsum,
        lead: true,
      },
      {
        children: lipsum,
      },
      {
        children: lipsum,
      },
      {
        children: lipsum,
        small: true,
      },
    ],
  },
  decorators: [(Story) => <div style={{ '--utrecht-space-around': 1 }}>{Story()}</div>],
  render: ({ items = [] }) => {
    console.log(items);
    return <div>{[items.map((args) => <Paragraph {...args} />)]}</div>;
  },
  storyName: 'Multiple paragraphs',
};

export const DesignTokens: StoryObj<typeof Paragraph> = designTokenStory(meta);
