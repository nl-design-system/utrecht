import { ArgsTable, Description, Primary, PRIMARY_STORY, Stories } from '@storybook/addon-docs';
import { Meta, StoryObj } from '@storybook/react';
import { Code } from '@utrecht/component-library-react/dist/css-module/index';
import readme from '@utrecht/components/code/README.md?raw';
import tokensDefinition from '@utrecht/components/code/tokens.json';
import tokens from '@utrecht/design-tokens/dist/index.json';
import React from 'react';
import { designTokenStory } from './util';

const meta = {
  title: 'React Component/Code',
  id: 'react-code',
  component: Code,
  args: {
    children: '<input type="url" value="https://example.fi/">',
  },
  argTypes: {
    children: {
      name: 'Text content',
      type: { name: 'string', required: true },
      table: {
        category: 'API',
      },
    },
  },
  parameters: {
    tokensPrefix: 'utrecht-code',
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
} satisfies Meta<typeof Code>;

export default meta;

type Story = StoryObj<typeof meta>;
export const Default: Story = {};
export const DesignTokens = designTokenStory(meta);
