import { Meta, StoryObj } from '@storybook/react';
import { Paragraph, Strong } from '@utrecht/component-library-react/dist/css-module/index';
import readme from '@utrecht/components/emphasis/README.md?raw';
import tokensDefinition from '@utrecht/components/emphasis/tokens.json';
import tokens from '@utrecht/design-tokens/dist/index.json';
import React from 'react';
import { designTokenStory } from './util';

const meta = {
  title: 'React Component/Strong',
  id: 'react-strong',
  component: Strong,
  decorators: [(Story) => <Paragraph>{Story()}</Paragraph>],
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
} as Meta<typeof Strong>;

export default meta;

const Template: StoryObj<typeof Strong> = (args) => <Strong {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: 'Hello, World!',
};

export const DesignTokens = designTokenStory(meta);
