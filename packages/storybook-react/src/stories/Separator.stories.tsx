import { ArgsTable, Description, Primary, PRIMARY_STORY, Stories } from '@storybook/addon-docs';
import { Meta, StoryObj } from '@storybook/react';
import { Separator } from '@utrecht/component-library-react/dist/css-module/index';
import readme from '@utrecht/components/separator/README.md?raw';
import tokensDefinition from '@utrecht/components/separator/tokens.json';
import tokens from '@utrecht/design-tokens/dist/index.json';
import React from 'react';
import { designTokenStory } from './util';

const meta = {
  title: 'React Component/Separator',
  id: 'react-separator',
  component: Separator,
  parameters: {
    tokensPrefix: 'utrecht-separator',
    tokens,
    tokensDefinition,
    docs: {
      page: () => (
        <>
          <Description markdown={readme} />
          <Primary />
          <ArgsTable story={PRIMARY_STORY} />
          <Stories />
        </>
      ),
    },
  },
} satisfies Meta<typeof Separator>;

export default meta;

type Story = StoryObj<typeof meta>;
export const Default: Story = {};

export const DesignTokens = designTokenStory(meta);
