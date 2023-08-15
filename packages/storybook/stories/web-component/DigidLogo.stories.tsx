/* @license CC0-1.0 */

import type { Meta, StoryObj } from '@storybook/react';
import tokens from '@utrecht/design-tokens/dist/index.json';
import React from 'react';
import { designTokenStory } from '../components/util';

const DigidLogo = () => <utrecht-digid-logo></utrecht-digid-logo>;

const meta = {
  title: 'Web Component/DigiD logo',
  id: 'web-component-digid-logo',
  component: DigidLogo,
  argTypes: {},
  args: {},
  tags: ['autodocs'],
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
    tokensPrefix: 'utrecht-digid-logo',
    tokens,
    tokensDefinition: {},
    docs: {
      description: {
        component: `Het logo van [DigiD](https://digid.nl/) die je kan gebruiken als icoon bij inloggen.`,
      },
    },
  },
} satisfies Meta<typeof DigidLogo>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const DesignTokens = designTokenStory(meta);
