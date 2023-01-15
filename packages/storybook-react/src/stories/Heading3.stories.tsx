import { Meta, StoryObj } from '@storybook/react';
import { Heading3 } from '@utrecht/component-library-react/dist/css-module/index';
import readme from '@utrecht/components/heading-3/README.md?raw';
import tokensDefinition from '@utrecht/components/heading-3/tokens.json';
import tokens from '@utrecht/design-tokens/dist/index.json';
import React from 'react';
import { designTokenStory } from './util';

const meta = {
  title: 'React Component/Heading 3',
  id: 'react-heading-3',
  component: Heading3,
  tags: ['autodocs'],
  parameters: {
    tokensPrefix: 'utrecht-heading-3',
    tokens,
    tokensDefinition,
    docs: {
      description: {
        component: readme,
      },
    },
  },
} as Meta<typeof Heading3>;

export default meta;

const Template: StoryObj<typeof Heading3> = (args) => <Heading3 {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: 'The Quick Brown Fox Jumps Over The Lazy Dog',
};

export const DesignTokens = designTokenStory(meta);
