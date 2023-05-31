import { ArgsTable, Description, Primary, PRIMARY_STORY, Stories } from '@storybook/addon-docs';
import { Meta, StoryObj } from '@storybook/react';
import { PreHeading } from '@utrecht/component-library-react/src/css-module/index';
import readme from '@utrecht/components/pre-heading/README.md?raw';
import tokensDefinition from '@utrecht/components/pre-heading/tokens.json';
import tokens from '@utrecht/design-tokens/dist/index.json';
import React from 'react';
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
      page: () => (
        <>
          <Description>{readme}</Description>
          <Primary />
          <ArgsTable story={PRIMARY_STORY} />
          <Stories />
        </>
      ),
    },
  },
} satisfies Meta<typeof PreHeading>;

export default meta;

type Story = StoryObj<typeof meta>;
export const Default: Story = {};

export const DesignTokens = designTokenStory(meta);
