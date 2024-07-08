// performance optimizations are not relevant for story rendering, ignore ESLint

import { Meta, StoryObj } from '@storybook/react';
import {
  Heading1,
  Heading2,
  Paragraph,
  RichText,
  UnorderedList,
  UnorderedListItem,
} from '@utrecht/component-library-react/src/css-module';
// import tokensDefinition from '@utrecht/components/card-list/src/tokens.json';
import readme from '@utrecht/components/rich-text/README.md?raw';
import tokens from '@utrecht/design-tokens/dist/index.json';
import React from 'react';
import { designTokenStory } from './util';

const meta = {
  title: 'React Component/Rich Text',
  id: 'react-rich-text',
  component: RichText,
  argTypes: {},
  args: {
    children: [
      <Heading1>Componenten collage NL Design System</Heading1>,
      <Heading2>Componenten collage NL Design System</Heading2>,
      <Heading1>Componenten collage NL Design System</Heading1>,
      <Paragraph>Lorem ipsum dolor sit amet, consectetur ad * isicing elit, sed do eiusmod *</Paragraph>,
      <Heading1>Componenten collage NL Design System</Heading1>,
      <UnorderedList>
        <UnorderedListItem>label</UnorderedListItem>
        <UnorderedListItem>label</UnorderedListItem>
        <UnorderedListItem>label</UnorderedListItem>
      </UnorderedList>,
    ],
  },
  parameters: {
    tokensPrefix: 'utrecht-card-list',
    tokens,
    // tokensDefinition,
    docs: {
      description: {
        component: readme,
      },
    },
  },
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const paragraph: Story = {
  name: 'Paragraph',
  args: {
    children: [
      <Paragraph>Lorem ipsum dolor sit amet, consectetur ad * isicing elit, sed do eiusmod *</Paragraph>,
      <Heading2>Componenten collage NL Design System</Heading2>,
      <Paragraph>Lorem ipsum dolor sit amet, consectetur ad * isicing elit, sed do eiusmod *</Paragraph>,
      <Heading1>Componenten collage NL Design System</Heading1>,
      <Paragraph>Lorem ipsum dolor sit amet, consectetur ad * isicing elit, sed do eiusmod *</Paragraph>,
      <UnorderedList>
        <UnorderedListItem>label</UnorderedListItem>
        <UnorderedListItem>label</UnorderedListItem>
        <UnorderedListItem>label</UnorderedListItem>
      </UnorderedList>,
    ],
  },
};

export const DesignTokens = designTokenStory(meta);
