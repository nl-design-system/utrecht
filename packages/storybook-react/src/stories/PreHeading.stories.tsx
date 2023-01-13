import { Meta, StoryObj } from '@storybook/react';
import { PreHeading } from '@utrecht/component-library-react/dist/css-module/index';
import readme from '@utrecht/components/pre-heading/README.md';
import tokensDefinition from '@utrecht/components/pre-heading/tokens.json';
import tokens from '@utrecht/design-tokens/dist/index.json';
import React from 'react';
import { designTokenStory } from './util';

const meta = {
  title: 'React Component/Pre-heading',
  id: 'react-pre-heading',
  component: PreHeading,
  args: {
    children: 'Lorem ipsum dolor sit amet',
  },
  tags: ['autodocs'],
  parameters: {
    tokensPrefix: 'utrecht-pre-heading',
    tokens,
    tokensDefinition,
    docs: {
      description: {
        component: readme,
      },
    },
  },
} as Meta<typeof PreHeading>;

export default meta;

const Template: StoryObj<typeof PreHeading> = (args) => <PreHeading {...args} />;

export const Default = Template.bind({});

export const DesignTokens = designTokenStory(meta);
