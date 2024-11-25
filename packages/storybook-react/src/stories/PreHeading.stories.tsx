import { Meta, StoryObj } from '@storybook/react';
import { PreHeading } from '@utrecht/component-library-react/dist/css-module';
import tokens from '@utrecht/design-tokens/dist/list.mjs';
import readme from '@utrecht/pre-heading-css/README.md?raw';
import tokensDefinition from '@utrecht/pre-heading-css/dist/tokens.mjs';
import { designTokenStory } from './util';

const meta = {
  title: 'React Component/Pre-heading',
  id: 'react-pre-heading',
  component: PreHeading,
  args: {
    children: 'Lorem ipsum dolor sit amet',
  },
  parameters: {
    tokensPrefix: 'utrecht-pre-heading',
    tokens,
    tokensDefinition,
    docs: {
      description: {
        component: readme,
      },
    },
  },
} satisfies Meta<typeof PreHeading>;

export default meta;

type Story = StoryObj<typeof meta>;
export const Default: Story = {};

export const DesignTokens = designTokenStory(meta);
