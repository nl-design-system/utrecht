/* @license CC0-1.0 */

import type { Meta, StoryObj } from '@storybook/react';
import readme from '@utrecht/components/paragraph/README.md?raw';
import tokensDefinition from '@utrecht/components/paragraph/tokens.json';
import tokens from '@utrecht/design-tokens/dist/index.json';
import { UtrechtParagraph } from '@utrecht/web-component-library-react';
import React, { PropsWithChildren } from 'react';
import { designTokenStory } from '../components/util';

interface ParagraphStoryProps {
  lead?: boolean;
}

const ParagraphStory = ({ children, lead }: PropsWithChildren<ParagraphStoryProps>) => (
  <UtrechtParagraph lead={lead || null}>{children}</UtrechtParagraph>
);

const meta = {
  title: 'Web Component/Paragraph',
  id: 'web-component-paragraph',
  component: ParagraphStory,
  argTypes: {
    children: {
      description: 'Content of the paragraph',
    },
  },
  args: {
    children: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    ],
  },
  tags: ['autodocs'],
  parameters: {
    status: {
      type: 'ALPHA',
    },
    tokensPrefix: 'utrecht-paragraph',
    tokens,
    tokensDefinition,
    docs: {
      description: {
        component: readme,
      },
    },
  },
} satisfies Meta<typeof ParagraphStory>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  parameters: {
    status: {
      type: 'ALPHA',
    },
  },
};

export const Lead: Story = {
  args: {
    lead: true,
  },
  parameters: {
    docs: {
      description: {
        story:
          'Currently the API is a boolean attribute, but that will lead to conflicting expectations when another boolean attribute for appearance is introduced. Perhaps this API will be changed to `appearance="lead"`.',
      },
    },
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
};

export const DesignTokens = designTokenStory(meta);
