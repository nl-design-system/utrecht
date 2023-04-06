import { ArgsTable, Description, Primary, PRIMARY_STORY, Stories } from '@storybook/addon-docs';
import { Meta, StoryObj } from '@storybook/react';
import { Heading1, PageHeader } from '@utrecht/component-library-react/dist/css-module/index';
import readme from '@utrecht/components/page-header/README.md?raw';
import tokensDefinition from '@utrecht/components/page-header/tokens.json';
import tokens from '@utrecht/design-tokens/dist/index.json';
import React from 'react';
import { designTokenStory } from './util';

const meta = {
  title: 'React Component/Page Header',
  id: 'react-page-header',
  component: PageHeader,
  args: {
    children: <Heading1>Header Area</Heading1>,
  },
  parameters: {
    tokensPrefix: 'utrecht-page-header',
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
} satisfies Meta<typeof PageHeader>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const DesignTokens = designTokenStory(meta);
