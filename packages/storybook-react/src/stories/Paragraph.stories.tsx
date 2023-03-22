import readme from '@nl-design-system-unstable/documentation/componenten/_paragraph.md?raw';
import { ArgsTable, Description, Primary, PRIMARY_STORY, Stories } from '@storybook/blocks';
import { Meta, StoryObj } from '@storybook/react';
import { Paragraph } from '@utrecht/component-library-react/dist/css-module/index';
import tokensDefinition from '@utrecht/components/paragraph/tokens.json';
import tokens from '@utrecht/design-tokens/dist/index.json';
import React from 'react';
import { designTokenStory } from './util';

const meta = {
  title: 'React Component/Paragraph',
  id: 'react-paragraph',
  component: Paragraph,
  tags: ['autodocs'],
  args: {
    lead: false,
    small: false,
    children:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
  },
  argTypes: {
    lead: {
      name: 'lead',
      type: { name: 'boolean', required: false },
      table: {
        category: 'API',
        defaultValue: { summary: false },
      },
    },
    small: {
      name: 'small',
      type: { name: 'boolean', required: false },
      table: {
        category: 'API',
        defaultValue: { summary: false },
      },
    },
  },
  parameters: {
    tokensPrefix: 'utrecht-paragraph',
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
} as Meta<typeof Paragraph>;

export default meta;

type Story = StoryObj<typeof meta>;
export const Default: Story = {};

export const Lead: Story = {
  name: 'Lead',
  args: {
    ...Default.args,
    lead: true,
  },
};
export const Small: Story = {
  name: 'Small',
  args: {
    ...Default.args,
    small: true,
  },
};

export const DesignTokens = designTokenStory(meta);
