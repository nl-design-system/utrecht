/* @license CC0-1.0 */

import type { Meta, StoryObj } from '@storybook/react';
import readme from '@utrecht/components/button-group/README.md?raw';
import tokensDefinition from '@utrecht/components/button-group/tokens.json';
import tokens from '@utrecht/design-tokens/dist/index.json';
import {
  UtrechtButton,
  UtrechtButtonGroup,
  UtrechtButtonLink,
  UtrechtLinkButton,
} from '@utrecht/web-component-library-react';
import React from 'react';
import { designTokenStory } from './design-token-story';

const meta = {
  title: 'Web Component/Button group',
  id: 'web-component-button-group',
  component: UtrechtButtonGroup,
  argTypes: {
    children: {
      description: 'Content of the button group',
    },
    direction: {
      description: 'Layout of the button group',
      options: {
        '': undefined,
        column: 'column',
        row: 'row',
      },
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
    tokensPrefix: 'utrecht-button-group',
    tokens,
    tokensDefinition,
    docs: {
      description: {
        component: readme,
      },
    },
  },
} satisfies Meta<typeof UtrechtButtonGroup>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: [
      <UtrechtButton appearance="primary-action-button">Primary action button</UtrechtButton>,
      <UtrechtButton appearance="secondary-action-button">Secondary action button</UtrechtButton>,
      <UtrechtButton appearance="subtle-button">Subtle button</UtrechtButton>,
      <UtrechtButton>Default button</UtrechtButton>,
      <UtrechtButtonLink appearance="primary-action-button" href="#">
        Primary action button link
      </UtrechtButtonLink>,
      <UtrechtButtonLink appearance="secondary-action-button" href="#">
        Secondary action button link
      </UtrechtButtonLink>,
      <UtrechtButtonLink appearance="subtle-button" href="#">
        Subtle button link
      </UtrechtButtonLink>,
      <UtrechtButtonLink href="#">Default button link</UtrechtButtonLink>,
      <UtrechtLinkButton>Link button</UtrechtLinkButton>,
      <UtrechtLinkButton inline>Inline link button</UtrechtLinkButton>,
    ],
  },
};

export const DirectionColumn: Story = {
  args: {
    ...Default.args,
    direction: 'column',
  },
};

export const DesignTokens = designTokenStory(meta);
