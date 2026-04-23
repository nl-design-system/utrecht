/* @license CC0-1.0 */

import type { Meta, StoryObj } from '@storybook/react-vite';
import readme from '@utrecht/customizable-text-input-css/README.md?raw';
import anatomyDocs from '@utrecht/customizable-text-input-css/docs/anatomy.nl.md?raw';
import tokensDefinition from '@utrecht/customizable-text-input-css/src/tokens.json';
import { CustomizableTextInput, CustomizableTextInputProps } from '@utrecht/customizable-text-input-react';
import tokens from '@utrecht/design-tokens/dist/index.json';
import { mergeMarkdown } from '@utrecht/storybook-helpers/src/markdown';
import clsx from 'clsx';
import React from 'react';
import { designTokenStory } from './design-token-story';

const meta = {
  title: 'CSS Component/CustomizableTextInput',
  id: 'css-customizable-text-input',
  component: CustomizableTextInput,
  argTypes: {},
  args: {
    children: 'The Quick Brown Fox Jumps Over The Lazy Dog',
  },
  tags: ['autodocs'],
  parameters: {
    bugs: 'https://github.com/nl-design-system/utrecht/issues?q=is%3Aissue+is%3Aopen+label%3Acomponent%2Fcustomizable-text-input',
    // communityFigma:
    //   'https://www.figma.com/design/shhwGcqPLi2CapK0P1zz8O/NLDS---Voorbeeld---Bibliotheek?node-id=859-981&t=CiZrkiC5t6Bn59Hg-0',
    // figma:
    //   'https://www.figma.com/design/UXIHcIurAD8hyoBWx4hDBV/NLDS---Gemeente-Utrecht---Bibliotheek?node-id=859-981&t=kJatlKfN59e8T0eA-0',
    // nldesignsystem: 'https://nldesignsystem.nl/customizable-text-input',
    status: {
      type: 'WORK IN PROGRESS',
    },
    tokensPrefix: 'utrecht-customizable-text-input',
    tokens,
    tokensDefinition,
    docs: {
      description: {
        component: mergeMarkdown([readme, anatomyDocs]),
      },
    },
  },
} satisfies Meta<typeof CustomizableTextInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const DesignTokens = designTokenStory(meta);
