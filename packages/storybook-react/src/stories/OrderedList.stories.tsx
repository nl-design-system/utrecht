// performance optimizations are not relevant for story rendering, ignore ESLint
import { ArgsTable, Description, Primary, PRIMARY_STORY, Stories } from '@storybook/addon-docs';
import { Meta, StoryObj } from '@storybook/react';
import { OrderedList } from '@utrecht/component-library-react/dist/css-module/index';
import readme from '@utrecht/components/ordered-list/README.md?raw';
import tokensDefinition from '@utrecht/components/ordered-list/tokens.json';
import tokens from '@utrecht/design-tokens/dist/index.json';
import React from 'react';
import { Default as OrderedListItem } from './OrderedListItem.stories.tsx';
import { designTokenStory } from './util';

const meta = {
  title: 'React Component/Ordered List',
  id: 'react-ordered-list',
  component: OrderedList,
  subcomponents: { OrderedListItem },
  argTypes: {
    reversed: {
      type: { name: 'boolean', required: false },
      table: {
        category: 'HTML attribute',
        defaultValue: { summary: false },
      },
    },
    start: {
      type: { name: 'number', required: false },
      table: {
        category: 'HTML attribute',
        defaultValue: { summary: 1 },
      },
    },
  },
  args: {
    children: [
      <OrderedListItem {...OrderedListItem.args} />,
      <OrderedListItem {...OrderedListItem.args} />,
      <OrderedListItem {...OrderedListItem.args} />,
    ],
  },
  parameters: {
    tokensPrefix: 'utrecht-ordered-list',
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
} satisfies Meta<typeof OrderedList>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const DesignTokens = designTokenStory(meta);
