/* @license CC0-1.0 */

import type { Meta, StoryObj } from '@storybook/react-webpack5';
import tokens from '@utrecht/design-tokens/dist/index.json';
import readme from '@utrecht/iban-data-css/README.md?raw';
import tokensDefinition from '@utrecht/iban-data-css/src/tokens.json';
import { UtrechtIbanData, UtrechtParagraph } from '@utrecht/web-component-library-react';
import React from 'react';
import { designTokenStory } from './design-token-story';

const meta = {
  title: 'Web Component/IBAN data',
  id: 'web-component-iban-data',
  component: UtrechtIbanData,
  argTypes: {
    children: {
      description: 'Content of the code block',
    },
  },
  args: {},
  tags: ['autodocs'],
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
    tokensPrefix: 'utrecht-iban-data',
    tokens,
    tokensDefinition,
    docs: {
      description: {
        component: readme,
      },
    },
  },
  decorators: [(Story) => <UtrechtParagraph>{Story()}</UtrechtParagraph>],
} satisfies Meta<typeof UtrechtIbanData>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: 'GO00BACK123467899012',
  },
};

export const DesignTokens = designTokenStory(meta);
