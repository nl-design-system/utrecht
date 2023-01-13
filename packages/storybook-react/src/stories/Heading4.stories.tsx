import { Meta, StoryObj } from '@storybook/react';
import { Heading4 } from '@utrecht/component-library-react/dist/css-module/index';
import readme from '@utrecht/components/heading-4/README.md';
import tokensDefinition from '@utrecht/components/heading-4/tokens.json';
import tokens from '@utrecht/design-tokens/dist/index.json';
import React from 'react';
import { designTokenStory } from './util';

const meta = {
  title: 'React Component/Heading 4',
  id: 'react-heading-4',
  component: Heading4,
  tags: ['autodocs'],
  parameters: {
    tokensPrefix: 'utrecht-heading-4',
    tokens,
    tokensDefinition,
    docs: {
      description: {
        component: readme,
      },
    },
  },
} as Meta<typeof Heading4>;

export default meta;

const Template: StoryObj<typeof Heading4> = (args) => <Heading4 {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: 'The Quick Brown Fox Jumps Over The Lazy Dog',
};

export const DesignTokens = designTokenStory(meta);
