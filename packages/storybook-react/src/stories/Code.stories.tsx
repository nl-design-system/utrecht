import { Meta, StoryObj } from '@storybook/react';
import { Code } from '@utrecht/component-library-react/dist/css-module/index';
import readme from '@utrecht/components/code/README.md?raw';
import tokensDefinition from '@utrecht/components/code/tokens.json';
import tokens from '@utrecht/design-tokens/dist/index.json';
import React from 'react';
import { designTokenStory } from './util';

const meta = {
  title: 'React Component/Code',
  id: 'react-code',
  component: Code,
  tags: ['autodocs'],
  parameters: {
    tokensPrefix: 'utrecht-code',
    tokens,
    tokensDefinition,
    docs: {
      description: {
        component: readme,
      },
    },
  },
} as Meta<typeof Code>;

export default meta;

const Template: StoryObj<typeof Code> = (args) => <Code {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: '<input type="url" value="https://example.fi/">',
};

export const DesignTokens = designTokenStory(meta);
