/* @license CC0-1.0 */

import { Meta, StoryObj } from '@storybook/react';
import { Heading1, HeadingGroup, Paragraph, PreHeading } from '@utrecht/component-library-react/dist/css-module';
import readme from '@utrecht/components/heading-group/README.md?raw';
import tokensDefinition from '@utrecht/components/heading-group/tokens.json';
import tokens from '@utrecht/design-tokens/dist/index.json';
import React from 'react';
import { designTokenStory } from './design-token-story';

const meta = {
  title: 'CSS Component/Heading group',
  id: 'css-heading-group',
  component: HeadingGroup,
  argTypes: {
    children: {
      description: 'Content of the heading group.',
      control: 'text',
    },
  },
  args: {
    children: '',
  },
  parameters: {
    tokensPrefix: 'utrecht-heading-group',
    status: {
      type: 'ALPHA',
    },
    tokens,
    tokensDefinition,
    docs: {
      description: {
        component: readme,
      },
    },
  },
} satisfies Meta<typeof HeadingGroup>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: [
      <Heading1>The Quick Brown Fox Jumps Over The Lazy Dog</Heading1>,
      <Paragraph>The Quick Brown Fox Jumps Over The Lazy Dog</Paragraph>,
    ],
  },
  parameters: {
    docs: {
      description: {
        story: 'Markup with the `<hgroup>` element. Styling via the `.utrecht-heading-group` class name.',
      },
    },
    status: {
      type: 'ALPHA',
    },
  },
};

export const PreHeadingStory: Story = {
  args: {
    children: [
      <Heading1>The Quick Brown Fox Jumps Over The Lazy Dog</Heading1>,
      <PreHeading>The Quick Brown Fox Jumps Over The Lazy Dog</PreHeading>,
    ],
  },
  name: 'Pre-heading',
  parameters: {
    docs: {
      description: {
        story: `In HTML the _pre-heading_ comes after the _heading_, so you will not miss relevant information when jumping to the heading.

Visually the pre-heading is displayed before the heading.`,
      },
    },
    status: {
      type: 'ALPHA',
    },
  },
};

export const DesignTokens = designTokenStory(meta);
