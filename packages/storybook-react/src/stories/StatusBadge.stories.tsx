import { ArgsTable, Description, Primary, PRIMARY_STORY, Stories } from '@storybook/addon-docs';
import { Meta, StoryObj } from '@storybook/react';
import { Paragraph, StatusBadge } from '@utrecht/component-library-react/dist/css-module/index';
import readme from '@utrecht/components/badge-data/README.md?raw';
import tokensDefinition from '@utrecht/components/badge-data/tokens.json';
import tokens from '@utrecht/design-tokens/dist/index.json';
import React from 'react';
import { designTokenStory } from './util';

const meta = {
  title: 'React Component/Status badge',
  id: 'react-status-badge',
  component: StatusBadge,
  args: {
    children: 'Utrecht',
  },
  argTypes: {
    status: {
      name: 'status',
      type: { name: 'string', required: false },
      table: { defaultValue: { summary: '' } },
    },
  },
  parameters: {
    tokensPrefix: 'utrecht-badge-status',
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
  decorators: [(Story) => <Paragraph>{Story()}</Paragraph>],
} as Meta<typeof StatusBadge>;

export default meta;

type Story = StoryObj<typeof meta>;
export const Default: Story = {};

export const Value: Story = {
  args: {
    ...Default.args,
    children: 'warning',
    status: 'warning',
  },
};

export const DesignTokens = designTokenStory(meta);
