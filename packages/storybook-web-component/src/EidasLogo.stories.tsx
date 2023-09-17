/* @license CC0-1.0 */

import type { Meta, StoryObj } from '@storybook/react';
import tokens from '@utrecht/design-tokens/dist/index.json';
import { UtrechtEidasLogo } from '@utrecht/web-component-library-react';
import { designTokenStory } from './design-token-story';

const meta = {
  title: 'Web Component/eIDAS Logo',
  id: 'web-component-eidas-logo',
  component: UtrechtEidasLogo,
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
} satisfies Meta<typeof UtrechtEidasLogo>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const DesignTokens = designTokenStory(meta);
