/* @license CC0-1.0 */

import type { Meta, StoryObj } from '@storybook/react';
import tokens from '@utrecht/design-tokens/dist/index.json';
import { UtrechtDigidLogo } from '@utrecht/web-component-library-react';
import { designTokenStory } from '../components/util';

const meta = {
  title: 'Web Component/DigiD logo',
  id: 'web-component-digid-logo',
  component: UtrechtDigidLogo,
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
} satisfies Meta<typeof UtrechtDigidLogo>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const DesignTokens = designTokenStory(meta);
