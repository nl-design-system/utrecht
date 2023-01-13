import { Meta, StoryObj } from '@storybook/react';
import { Heading6 } from '@utrecht/component-library-react/dist/css-module/index';
import readme from '@utrecht/components/heading-6/README.md';
import tokensDefinition from '@utrecht/components/heading-6/tokens.json';
import tokens from '@utrecht/design-tokens/dist/index.json';
import React from 'react';
import { designTokenStory } from './util';

const meta = {
  title: 'React Component/Heading 6',
  id: 'react-heading-6',
  component: Heading6,
  tags: ['autodocs'],
  parameters: {
    tokensPrefix: 'utrecht-heading-6',
    tokens,
    tokensDefinition,
    docs: {
      description: {
        component: readme,
      },
    },
  },
} as Meta<typeof Heading6>;

export default meta;

const Template: StoryObj<typeof Heading6> = (args) => <Heading6 {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: 'The Quick Brown Fox Jumps Over The Lazy Dog',
};

export const DesignTokens = designTokenStory(meta);
