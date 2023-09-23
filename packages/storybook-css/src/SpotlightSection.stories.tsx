/* @license CC0-1.0 */

import { Meta, StoryObj } from '@storybook/react';
import { Heading2, Paragraph, SpotlightSection } from '@utrecht/component-library-react';
import readme from '@utrecht/components/spotlight-section/README.md?raw';
import tokensDefinition from '@utrecht/components/spotlight-section/tokens.json';
import tokens from '@utrecht/design-tokens/dist/index.json';
import React from 'react';
import { designTokenStory } from './design-token-story';

const meta = {
  title: 'CSS Component/Spotlight section',
  id: 'css-spotlight-section',
  component: SpotlightSection,
  argTypes: {
    aside: {
      description: 'Aside',
      control: { type: 'boolean' },
    },
    children: {
      description: 'HTML content of the spotlight',
      control: 'text',
    },
    type: {
      description: 'Type',
      control: { type: 'select' },
      options: ['', 'info', 'warning'],
    },
  },
  args: {
    aside: false,
    children: '',
    type: '',
  },
  parameters: {
    tokensPrefix: 'utrecht-spotlight-section',
    status: {
      type: 'WORK IN PROGRESS',
    },
    tokens,
    tokensDefinition,
    docs: {
      description: {
        component: readme,
      },
    },
  },
} satisfies Meta<typeof SpotlightSection>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: [
      <Heading2>Lorem ipsum</Heading2>,
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
        laborum.
      </Paragraph>,
    ],
  },
};

export const Info: Story = {
  args: {
    children: [
      <Heading2>Lorem ipsum</Heading2>,
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
        laborum.
      </Paragraph>,
    ],
    type: 'info',
  },
};

export const Warning: Story = {
  args: {
    children: [
      <Heading2>Lorem ipsum</Heading2>,
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
        laborum.
      </Paragraph>,
    ],
    type: 'warning',
  },
};

export const DesignTokens = designTokenStory(meta);
