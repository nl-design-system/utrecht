/* @license CC0-1.0 */

import type { Meta, StoryObj } from '@storybook/react-webpack5';
import readme from '@utrecht/column-layout-css/README.md?raw';
import tokensDefinition from '@utrecht/column-layout-css/src/tokens.json';
import tokens from '@utrecht/design-tokens/dist/index.json';
import { UtrechtColumnLayout, UtrechtHeading1, UtrechtParagraph } from '@utrecht/web-component-library-react';
import React from 'react';
import { designTokenStory } from './design-token-story';

const meta = {
  title: 'Web Component/Column layout',
  id: 'web-component-column-layout',
  component: UtrechtColumnLayout,
  argTypes: {
    children: {
      description: 'Content of the column layout',
    },
    rule: {
      description: 'Display a rule between columns',
      control: 'boolean',
    },
  },
  args: {
    rule: false,
  },
  tags: ['autodocs'],
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
    tokensPrefix: 'utrecht-column-layout',
    tokens,
    tokensDefinition,
    docs: {
      description: {
        component: readme,
      },
    },
  },
} satisfies Meta<typeof UtrechtColumnLayout>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
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
};

export const DesignTokens = designTokenStory(meta);
