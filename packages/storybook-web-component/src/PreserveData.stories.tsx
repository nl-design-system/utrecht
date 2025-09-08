/* @license CC0-1.0 */

import type { Meta, StoryObj } from '@storybook/react-webpack5';
import tokens from '@utrecht/design-tokens/dist/index.json';
import readme from '@utrecht/preserve-data-css/README.md?raw';
import tokensDefinition from '@utrecht/preserve-data-css/src/tokens.json';
import { UtrechtParagraph, UtrechtPreserveData } from '@utrecht/web-component-library-react';
import React from 'react';
import { designTokenStory } from './design-token-story';

const meta = {
  title: 'Web Component/Preserve data',
  id: 'web-component-preserve-data',
  component: UtrechtPreserveData,
  argTypes: {
    children: {
      description: 'Text content',
      control: 'text',
    },
  },
  args: {},
  tags: ['autodocs'],
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
    tokensPrefix: 'utrecht-preserve-data',
    tokens,
    tokensDefinition,
    docs: {
      description: {
        component: readme,
      },
    },
  },
  decorators: [(Story) => <UtrechtParagraph>{Story()}</UtrechtParagraph>],
} satisfies Meta<typeof UtrechtPreserveData>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: ' (06) 249 0420 120',
  },
};

export const RightToLeft: Story = {
  args: {
    children: 'علي',
    lang: 'ar',
  },
  name: 'Right-to-left',
};

export const NoTranslate: Story = {
  args: {
    children: 'Mees de Vos',
    lang: 'nl',
  },
  name: 'Prevent translation',
};

export const Value: Story = {
  args: {
    children: '50,000',
    value: '50000',
  },
};

export const Time: Story = {
  args: {
    children: '19 januari 2038 om 03:14:08',
    dateTime: '2038-01-19T03:14:08Z',
  },
};

export const DesignTokens = designTokenStory(meta);
