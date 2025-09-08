/* @license CC0-1.0 */

import type { Meta, StoryObj } from '@storybook/react-webpack5';
import tokens from '@utrecht/design-tokens/dist/index.json';
import readme from '@utrecht/spotlight-section-css/README.md?raw';
import tokensDefinition from '@utrecht/spotlight-section-css/src/tokens.json';
import { UtrechtHeading1, UtrechtParagraph, UtrechtSpotlightSection } from '@utrecht/web-component-library-react';
import React from 'react';
import { designTokenStory } from './design-token-story';

const meta = {
  title: 'Web Component/Spotlight section',
  id: 'web-component-spotlight-section',
  component: UtrechtSpotlightSection,
  argTypes: {
    children: {
      description: 'HTML content of the spotlight-section',
    },
    appearance: {
      description: 'Appearance',
      control: { type: 'select' },
      options: ['', 'error', 'info', 'ok', 'warning'],
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
    tokensPrefix: 'utrecht-spotlight-section',
    tokens,
    tokensDefinition,
    docs: {
      description: {
        component: readme,
      },
    },
  },
} satisfies Meta<typeof UtrechtSpotlightSection>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Info: Story = {
  args: {
    ...Default.args,
    appearance: 'info',
  },
};

export const OK: Story = {
  args: {
    ...Default.args,
    appearance: 'ok',
  },
};

export const Warning: Story = {
  args: {
    ...Default.args,
    appearance: 'warning',
  },
};

export const Error: Story = {
  args: {
    ...Default.args,
    appearance: 'error',
  },
};

export const DesignTokens = designTokenStory(meta);
