import { Meta, StoryObj } from '@storybook/react';
import { Heading } from '@utrecht/component-library-react/dist/css-module/index';
import readme from '@utrecht/components/heading/README.md?raw';
import tokensDefinition from '@utrecht/components/heading/tokens.json';
import tokens from '@utrecht/design-tokens/dist/index.json';
import React from 'react';
import { designTokenStory } from './util';

const meta = {
  title: 'React Component/Heading',
  id: 'react-heading',
  component: Heading,
  argTypes: {
    level: {
      description: 'Heading level',
      control: { type: 'select' },
      options: [1, 2, 3, 4, 5, 6],
    },
    appearance: {
      description: 'Appearance',
      control: { type: 'select' },
      options: [
        undefined,
        'utrecht-heading-1',
        'utrecht-heading-2',
        'utrecht-heading-3',
        'utrecht-heading-4',
        'utrecht-heading-5',
        'utrecht-heading-6',
      ],
    },
  },
  tags: ['autodocs'],
  parameters: {
    tokensPrefix: 'utrecht-heading',
    tokens,
    tokensDefinition,
    docs: {
      description: {
        component: readme,
      },
    },
  },
} as Meta<typeof Heading>;

export default meta;

const Template: StoryObj<typeof Heading> = (args) => <Heading {...args} />;

const exampleArgs = {
  children: 'The Quick Brown Fox Jumps Over The Lazy Dog',
};

export const HeadingLevel1 = Template.bind({});

HeadingLevel1.args = {
  ...exampleArgs,
  level: 1,
};

export const HeadingLevel2 = Template.bind({});

HeadingLevel2.args = {
  ...exampleArgs,
  level: 2,
};

export const HeadingLevel3 = Template.bind({});

HeadingLevel3.args = {
  ...exampleArgs,
  level: 3,
};

export const HeadingLevel4 = Template.bind({});

HeadingLevel4.args = {
  ...exampleArgs,
  level: 4,
};

export const HeadingLevel5 = Template.bind({});

HeadingLevel5.args = {
  ...exampleArgs,
  level: 5,
};

export const HeadingLevel6 = Template.bind({});

HeadingLevel6.args = {
  ...exampleArgs,
  level: 6,
};

export const HeadingAppearance = Template.bind({});

HeadingAppearance.args = {
  ...exampleArgs,
  appearance: 'utrecht-heading-4',
  level: 2,
};

export const DesignTokens = designTokenStory(meta);
