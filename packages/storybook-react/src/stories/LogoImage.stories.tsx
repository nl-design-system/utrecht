import { Meta, StoryObj } from '@storybook/react';
import { LogoImage } from '@utrecht/component-library-react/dist/css-module';
import tokens from '@utrecht/design-tokens/dist/list.mjs';
import readme from '@utrecht/logo-image-css/README.md?raw';
import tokensDefinition from '@utrecht/logo-image-css/dist/tokens.mjs';
import { designTokenStory } from './util';

const meta = {
  title: 'React Component/Logo image',
  id: 'react-logo-image',
  component: LogoImage,
  args: {},
  parameters: {
    tokensPrefix: 'utrecht-logo-image',
    tokens,
    tokensDefinition,
    docs: {
      description: {
        component: readme,
      },
    },
  },
} satisfies Meta<typeof LogoImage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const DesignTokens = designTokenStory(meta);
