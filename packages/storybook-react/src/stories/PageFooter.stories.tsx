import { ArgsTable, Description, Primary, PRIMARY_STORY, Stories } from '@storybook/addon-docs';
import { Meta, StoryObj } from '@storybook/react';
import { PageFooter, Paragraph } from '@utrecht/component-library-react/dist/css-module/index';
import readme from '@utrecht/components/page-footer/README.md?raw';
import tokensDefinition from '@utrecht/components/page-footer/tokens.json';
import tokens from '@utrecht/design-tokens/dist/index.json';
import React from 'react';
import { designTokenStory } from './util';

const meta = {
  title: 'React Component/Page Footer',
  id: 'react-page-footer',
  component: PageFooter,
  args: {
    children: <Paragraph>Page Footer Area</Paragraph>,
  },
  parameters: {
    tokensPrefix: 'utrecht-page-footer',
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
} satisfies Meta<typeof PageFooter>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const DesignTokens = designTokenStory(meta);
