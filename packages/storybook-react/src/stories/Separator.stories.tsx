import { Meta, StoryObj } from '@storybook/react';
import { Separator } from '@utrecht/component-library-react/dist/css-module/index';
import readme from '@utrecht/components/separator/README.md';
import tokensDefinition from '@utrecht/components/separator/tokens.json';
import tokens from '@utrecht/design-tokens/dist/index.json';
import React from 'react';
import { designTokenStory } from './util';

const meta = {
  title: 'React Component/Separator',
  id: 'react-separator',
  component: Separator,
  tags: ['autodocs'],
  parameters: {
    tokensPrefix: 'utrecht-separator',
    tokens,
    tokensDefinition,
    docs: {
      description: {
        component: readme,
      },
    },
  },
} as Meta<typeof Separator>;

export default meta;

const Template: StoryObj<typeof Separator> = (args) => <Separator {...args} />;

export const Default = Template.bind({});

export const DesignTokens = designTokenStory(meta);
