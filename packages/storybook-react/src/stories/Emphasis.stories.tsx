import { Meta, StoryObj } from '@storybook/react';
import { Emphasis, Paragraph } from '@utrecht/component-library-react/dist/css-module/index';
import readme from '@utrecht/components/emphasis/README.md';
import tokensDefinition from '@utrecht/components/emphasis/tokens.json';
import tokens from '@utrecht/design-tokens/dist/index.json';
import React from 'react';
import { designTokenStory } from './util';

const meta = {
  title: 'React Component/Emphasis',
  id: 'react-emphasis',
  component: Emphasis,
  tags: ['autodocs'],
  parameters: {
    tokensPrefix: 'utrecht-emphasis',
    tokens,
    tokensDefinition,
    docs: {
      description: {
        component: readme,
      },
    },
  },
  decorators: [(Story) => <Paragraph>{Story()}</Paragraph>],
} as Meta<typeof Emphasis>;

export default meta;

const Template: StoryObj<typeof Emphasis> = (args) => <Emphasis {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: 'Hello, World!',
};

export const DesignTokens = designTokenStory(meta);
