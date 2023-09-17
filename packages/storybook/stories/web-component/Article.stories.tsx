/* @license CC0-1.0 */

import type { Meta, StoryObj } from '@storybook/react';
import readme from '@utrecht/components/article/README.md?raw';
import tokensDefinition from '@utrecht/components/article/tokens.json';
import tokens from '@utrecht/design-tokens/dist/index.json';
import { UtrechtArticle, UtrechtHeading1, UtrechtParagraph } from '@utrecht/web-component-library-react';
import React from 'react';
import { designTokenStory } from '../components/util';

const meta = {
  title: 'Web Component/Article',
  id: 'web-component-article',
  component: UtrechtArticle,
  argTypes: {
    children: {
      description: 'Content of the article',
    },
  },
  args: {
    children: [
      <UtrechtHeading1>Lorem ipsum</UtrechtHeading1>,
      <UtrechtParagraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
        laborum.
      </UtrechtParagraph>,
    ],
  },
  tags: ['autodocs'],
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
    tokensPrefix: 'utrecht-article',
    tokens,
    tokensDefinition,
    docs: {
      description: {
        component: readme,
      },
    },
  },
} satisfies Meta<typeof UtrechtArticle>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const DesignTokens = designTokenStory(meta);
