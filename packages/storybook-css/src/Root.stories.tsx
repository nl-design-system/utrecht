/* @license CC0-1.0 */

import { Meta, StoryObj } from '@storybook/react';
import { Body } from '@utrecht/body-react';
import tokens from '@utrecht/design-tokens/dist/index.json';
import readme from '@utrecht/root-css/README.md?raw';
import tokensDefinition from '@utrecht/root-css/src/tokens.json';
import { Root } from '@utrecht/root-react';
import React from 'react';
import Paragraph from './Paragraph';
import { designTokenStory } from './design-token-story';

const meta = {
  title: 'CSS Component/Root',
  id: 'css-root',
  component: Root,
  argTypes: {
    children: {
      description: 'Root content',
    },
  },
  args: {
    children: [],
  },
  parameters: {
    bugs: 'https://github.com/nl-design-system/utrecht/issues?q=is%3Aissue+is%3Aopen+label%3Acomponent%2Froot',
    layout: 'fullscreen',
    tokensPrefix: 'utrecht-root',
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
} satisfies Meta<typeof Root>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: [
      <Body>
        <Paragraph>Root content</Paragraph>
      </Body>,
    ],
  },
};

export const DesignTokens = designTokenStory(meta);
