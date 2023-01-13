import { Meta, StoryObj } from '@storybook/react';
import { Heading1, HeadingGroup, Paragraph, PreHeading } from '@utrecht/component-library-react/dist/css-module/index';
import readme from '@utrecht/components/heading-group/README.md';
import tokensDefinition from '@utrecht/components/heading-group/tokens.json';
import tokens from '@utrecht/design-tokens/dist/index.json';
import React from 'react';
import { designTokenStory } from './util';

const meta = {
  title: 'React Component/Heading Group',
  id: 'react-heading-group',
  component: HeadingGroup,
  tags: ['autodocs'],
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
} as Meta<typeof HeadingGroup>;

export default meta;

const Template: StoryObj<typeof HeadingGroup> = () => (
  <HeadingGroup style={{ '--utrecht-space-around': 1 } as any}>
    <Heading1>The Quick Brown Fox Jumps Over The Lazy Dog</Heading1>
    <Paragraph>The Quick Brown Fox Jumps Over The Lazy Dog</Paragraph>
  </HeadingGroup>
);

export const Default = Template.bind({});

const PreHeadingTemplate: StoryObj<typeof HeadingGroup> = () => (
  <HeadingGroup style={{ '--utrecht-space-around': 1 } as any}>
    <Heading1>The Quick Brown Fox Jumps Over The Lazy Dog</Heading1>
    <PreHeading>The Quick Brown Fox Jumps Over The Lazy Dog</PreHeading>
  </HeadingGroup>
);

export const WithPreHeading = PreHeadingTemplate.bind({});

export const DesignTokens = designTokenStory(meta);
