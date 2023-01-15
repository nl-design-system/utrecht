import { Meta, StoryObj } from '@storybook/react';
import { Heading2 } from '@utrecht/component-library-react/dist/css-module/index';
import readme from '@utrecht/components/heading-2/README.md?raw';
import tokensDefinition from '@utrecht/components/heading-2/tokens.json';
import tokens from '@utrecht/design-tokens/dist/index.json';
import React from 'react';
import { designTokenStory } from './util';

const meta = {
  title: 'React Component/Heading 2',
  id: 'react-heading-2',
  component: Heading2,
  tags: ['autodocs'],
  parameters: {
    tokensPrefix: 'utrecht-heading-2',
    tokens,
    tokensDefinition,
    docs: {
      description: {
        component: readme,
      },
    },
  },
} as Meta<typeof Heading2>;

export default meta;

const Template: StoryObj<typeof Heading2> = (args) => <Heading2 {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: 'The Quick Brown Fox Jumps Over The Lazy Dog',
};

export const DesignTokens = designTokenStory(meta);
