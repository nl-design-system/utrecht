import { Meta, StoryObj } from '@storybook/react';
import { Heading } from '@utrecht/component-library-react/src/css-module/index';
import readme from '@utrecht/components/heading/README.md?raw';
import tokensDefinition from '@utrecht/components/heading/tokens.json';
import tokens from '@utrecht/design-tokens/dist/index.json';
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
} satisfies Meta<typeof Heading>;

export default meta;

const exampleArgs = {
  children: 'The Quick Brown Fox Jumps Over The Lazy Dog',
};

type Story = StoryObj<typeof meta>;
export const Default: Story = {
  name: 'Heading Level 1',
  args: {
    level: 1,
    ...exampleArgs,
  },
};

export const HeadingLevel2: Story = {
  args: {
    level: 2,
    ...exampleArgs,
  },
};

export const HeadingLevel3: Story = {
  args: {
    level: 3,
    ...exampleArgs,
  },
};

export const HeadingLevel4: Story = {
  args: {
    level: 4,
    ...exampleArgs,
  },
};

export const HeadingLevel5: Story = {
  args: {
    level: 5,
    ...exampleArgs,
  },
};

export const HeadingLevel6: Story = {
  args: {
    level: 6,
    ...exampleArgs,
  },
};

export const HeadingAppearance: Story = {
  args: {
    ...exampleArgs,
    appearance: 'utrecht-heading-4',
    level: 2,
  },
};

export const DesignTokens = designTokenStory(meta);
