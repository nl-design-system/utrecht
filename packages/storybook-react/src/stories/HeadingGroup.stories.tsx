import { Meta, StoryObj } from '@storybook/react';
import { Heading1, HeadingGroup, Paragraph, PreHeading } from '@utrecht/component-library-react/dist/css-module';
import readme from '@utrecht/components/heading-group/README.md?raw';
import tokensDefinition from '@utrecht/components/heading-group/tokens.json';
import tokens from '@utrecht/design-tokens/dist/index.json';
import React from 'react';
import { designTokenStory } from './util';

const meta = {
  title: 'React Component/Heading Group',
  id: 'react-heading-group',
  component: HeadingGroup,
  decorators: [(Story) => <div style={{ '--utrecht-space-around': 1 } as any}>{Story()}</div>],
  args: {
    children: (
      <>
        <Heading1>The Quick Brown Fox Jumps Over The Lazy Dog</Heading1>
        <Paragraph>The Quick Brown Fox Jumps Over The Lazy Dog</Paragraph>
      </>
    ),
  },
  parameters: {
    tokensPrefix: 'utrecht-heading-group',
    tokens,
    tokensDefinition,
    docs: {
      description: {
        component: readme,
      },
    },
  },
} satisfies Meta<typeof HeadingGroup>;

export default meta;

type Story = StoryObj<typeof meta>;
export const Default: Story = {};

export const WithPreHeading: Story = {
  args: {
    children: (
      <HeadingGroup style={{ '--utrecht-space-around': 1 } as any}>
        <Heading1>The Quick Brown Fox Jumps Over The Lazy Dog</Heading1>
        <PreHeading>The Quick Brown Fox Jumps Over The Lazy Dog</PreHeading>
      </HeadingGroup>
    ),
  },
};

export const DesignTokens = designTokenStory(meta);
