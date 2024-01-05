import { Meta, StoryObj } from '@storybook/react';
import { LogoImage } from '@utrecht/component-library-react/dist/css-module';
import readme from '@utrecht/components/logo-image/README.md?raw';
import tokensDefinition from '@utrecht/components/logo-image/tokens.json';
import tokens from '@utrecht/design-tokens/dist/index.json';
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
