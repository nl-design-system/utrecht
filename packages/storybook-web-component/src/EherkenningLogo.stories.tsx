/* @license CC0-1.0 */

import type { Meta, StoryObj } from '@storybook/react-webpack5';
import tokens from '@utrecht/design-tokens/dist/index.json';
import { UtrechtEherkenningLogo } from '@utrecht/web-component-library-react';
import { designTokenStory } from './design-token-story';

const meta = {
  title: 'Web Component/eHerkenning Logo',
  id: 'web-component-eherkenning-logo',
  component: UtrechtEherkenningLogo,
  argTypes: {},
  args: {},
  tags: ['autodocs'],
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
    tokensPrefix: 'utrecht-eherkenning-logo',
    tokens,
    tokensDefinition: {},
    docs: {
      description: {
        component: `Het logo van [eHerkenning](https://eherkenning.nl/) die je kan gebruiken als icoon bij inloggen.`,
      },
    },
  },
} satisfies Meta<typeof UtrechtEherkenningLogo>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const DesignTokens = designTokenStory(meta);
