/* @license CC0-1.0 */

import type { Meta, StoryObj } from '@storybook/react-webpack5';
import tokens from '@utrecht/design-tokens/dist/index.json';
import readme from '@utrecht/digid-button-css/README.md?raw';
import tokensDefinition from '@utrecht/digid-button-css/src/tokens.json';
import { UtrechtButton, UtrechtDigidButton, UtrechtIconArrow } from '@utrecht/web-component-library-react';
import React, { PropsWithChildren } from 'react';
import { designTokenStory } from './design-token-story';

const DigidButtonStory = ({ children }: PropsWithChildren<{}>) => (
  <UtrechtDigidButton>
    <UtrechtButton appearance="primary-action-button">{children}</UtrechtButton>
  </UtrechtDigidButton>
);

const meta = {
  title: 'Web Component/DigiD button',
  id: 'web-component-digid-button',
  component: DigidButtonStory,
  argTypes: {
    children: {
      description: 'Content of the digid-button',
    },
  },
  args: {
    children: [],
  },
  tags: ['autodocs'],
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
    tokensPrefix: 'utrecht-digid-button',
    tokens,
    tokensDefinition,
    docs: {
      description: {
        component: readme,
      },
    },
  },
} satisfies Meta<typeof DigidButtonStory>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: ['Inloggen', ' ', <UtrechtIconArrow></UtrechtIconArrow>],
  },
};

export const DesignTokens = designTokenStory(meta);
