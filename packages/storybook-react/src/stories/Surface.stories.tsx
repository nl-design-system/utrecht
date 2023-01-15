import { Meta, StoryObj } from '@storybook/react';
import { Surface } from '@utrecht/component-library-react/dist/css-module/index';
import readme from '@utrecht/components/surface/README.md?raw';
import tokensDefinition from '@utrecht/components/surface/tokens.json';
import tokens from '@utrecht/design-tokens/dist/index.json';
import React from 'react';
import { designTokenStory } from './util';

const meta = {
  title: 'React Component/Surface',
  id: 'react-surface',
  component: Surface,
  tags: ['autodocs'],
  parameters: {
    tokensPrefix: 'utrecht-surface',
    tokens,
    tokensDefinition,
    docs: {
      description: {
        component: readme,
      },
    },
  },
} as Meta<typeof Surface>;

export default meta;

const Template: StoryObj<typeof Surface> = (args) => <Surface {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: 'The Quick Brown Fox Jumps Over The Lazy Dog',
};

export const DesignTokens = designTokenStory(meta);
