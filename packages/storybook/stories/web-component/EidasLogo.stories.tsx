/* @license CC0-1.0 */

import type { Meta, StoryObj } from '@storybook/react';
import tokens from '@utrecht/design-tokens/dist/index.json';
import React from 'react';
import { designTokenStory } from '../components/util';

const EidasLogo = () => <utrecht-eidas-logo></utrecht-eidas-logo>;

const meta = {
  title: 'Web Component/eIDAS Logo',
  id: 'web-component-eidas-logo',
  component: EidasLogo,
  argTypes: {},
  args: {},
  tags: ['autodocs'],
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
    tokensPrefix: 'utrecht-eidas-logo',
    tokens,
    tokensDefinition: {},
    docs: {
      description: {
        component: `Het logo van [eIDAS](https://en.wikipedia.org/wiki/EIDAS) die je kan gebruiken als icoon bij inloggen.`,
      },
    },
  },
} satisfies Meta<typeof EidasLogo>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const DesignTokens = designTokenStory(meta);
