import { Meta, StoryObj } from '@storybook/react';
import { Heading5 } from '@utrecht/component-library-react/dist/css-module/index';
import readme from '@utrecht/components/heading-5/README.md?raw';
import tokensDefinition from '@utrecht/components/heading-5/tokens.json';
import tokens from '@utrecht/design-tokens/dist/index.json';
import React from 'react';
import { designTokenStory } from './util';

const meta = {
  title: 'React Component/Heading 5',
  id: 'react-heading-5',
  component: Heading5,
  tags: ['autodocs'],
  parameters: {
    tokensPrefix: 'utrecht-heading-5',
    tokens,
    tokensDefinition,
    docs: {
      description: {
        component: readme,
      },
    },
  },
} as Meta<typeof Heading5>;

export default meta;

const Template: StoryObj<typeof Heading5> = (args) => <Heading5 {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: 'The Quick Brown Fox Jumps Over The Lazy Dog',
};

export const DesignTokens = designTokenStory(meta);
