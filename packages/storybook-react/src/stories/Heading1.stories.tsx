import { Meta, StoryObj } from '@storybook/react';
import { Heading1 } from '@utrecht/component-library-react/dist/css-module/index';
import readme from '@utrecht/components/heading-1/README.md?raw';
import tokensDefinition from '@utrecht/components/heading-1/tokens.json';
import tokens from '@utrecht/design-tokens/dist/index.json';
import React from 'react';
import { designTokenStory } from './util';

const meta = {
  title: 'React Component/Heading 1',
  id: 'react-heading-1',
  component: Heading1,
  tags: ['autodocs'],
  parameters: {
    tokensPrefix: 'utrecht-heading-1',
    tokens,
    tokensDefinition,
    docs: {
      description: {
        component: readme,
      },
    },
  },
} as Meta<typeof Heading1>;

export default meta;

const Template: StoryObj<typeof Heading1> = (args) => <Heading1 {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: 'The Quick Brown Fox Jumps Over The Lazy Dog',
};

export const DesignTokens = designTokenStory(meta);
