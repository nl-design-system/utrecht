import { ArgsTable, Description, Primary, PRIMARY_STORY, Stories } from '@storybook/addon-docs';
import { Meta, StoryObj } from '@storybook/react';
import { BadgeCounter } from '@utrecht/component-library-react';
import readme from '@utrecht/components/badge-counter/README.md?raw';
import tokensDefinition from '@utrecht/components/badge-counter/tokens.json';
import tokens from '@utrecht/design-tokens/dist/index.json';
import React from 'react';
import { designTokenStory } from './design-token-story';

const meta = {
  title: 'CSS Component/Badge Counter',
  id: 'css-badge-counter',
  component: BadgeCounter,
  args: {
    children: '4',
    value: '4',
  },
  argTypes: {
    children: {
      name: 'Text content',
      type: { name: 'string', required: false },
      table: { defaultValue: { summary: '' } },
    },
  },
  parameters: {
    tokensPrefix: 'utrecht-badge-counter',
    status: {
      type: 'WORK IN PROGRESS',
    },
    tokens,
    tokensDefinition,
    docs: {
      description: {
        story: `Styling via the \`.utrecht-badge-counter\` class name.`,
      },
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
} satisfies Meta<typeof BadgeCounter>;

export default meta;

type Story = StoryObj<typeof meta>;
export const Default: Story = {};

export const DoubleDigits: Story = {
  args: {
    ...Default.args,
    children: '42',
    value: '42',
  },
};

export const TripleDigits: Story = {
  args: {
    ...Default.args,
    children: '316',
    value: '316',
  },
};

export const QuadrupleDigits: Story = {
  args: {
    ...Default.args,
    children: '2148',
    value: '2148',
  },
};

export const Empty: Story = {
  args: {
    ...Default.args,
    children: '',
    value: undefined,
  },
  parameters: {
    ...Default.parameters,
    docs: {
      ...Default.parameters?.['docs'],
      description: {
        story: `Wanneer de counter badge leeg is, zoals in een UI designer interface, dan moet de component wel zichtbaar zijn. De gebruiker moet er een getal in kunnen typen.`,
      },
    },
  },
};

export const DesignTokens = designTokenStory(meta);
