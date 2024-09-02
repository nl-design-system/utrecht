import type { Meta, StoryObj } from '@storybook/react';
import readme from '@utrecht/combobox-css/README.md?raw';
import tokensDefinition from '@utrecht/combobox-css/src/tokens.json';
import { Combobox } from '@utrecht/component-library-react/dist/css-module';
import tokens from '@utrecht/design-tokens/dist/index.json';
import React from 'react';
import { designTokenStory } from './util';

const meta = {
  title: 'React Component/Combobox',
  id: 'react-combobox',
  component: Combobox,
  argTypes: {},
  args: {},
  parameters: {
    tokensPrefix: 'utrecht-combobox',
    tokens,
    tokensDefinition,
    docs: {
      description: {
        component: readme,
      },
    },
  },
} satisfies Meta<typeof Combobox>;

export default meta;

type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: {
    label: 'Select an option',
    inputProps: {
      placeholder: 'Type to search...',
    },
    options: ['Option-1', 'Option-2', 'Option-3', 'Option-4', 'Option-5', 'Option-6'],
  },
};

export const DesignTokens = designTokenStory(meta);
