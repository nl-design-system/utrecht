import { Meta, StoryObj } from '@storybook/react';
import { Heading1, Paragraph, SpotlightSection } from '@utrecht/component-library-react/dist/css-module';
import readme from '@utrecht/components/spotlight-section/README.md?raw';
import tokensDefinition from '@utrecht/components/spotlight-section/tokens.json';
import tokens from '@utrecht/design-tokens/dist/index.json';
import React from 'react';
import { designTokenStory } from './util';

const meta = {
  title: 'React Component/Spotlight section',
  id: 'react-spotlight-section',
  component: SpotlightSection,
  argTypes: {
    aside: {
      name: 'Aside',
      control: { type: 'boolean' },
    },
    type: {
      name: 'Type',
      control: { type: 'select' },
      options: ['', 'info', 'warning'],
    },
  },
  args: {
    children: [
      <Heading1>Lorem ipsum</Heading1>,
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
        laborum.
      </Paragraph>,
    ],
  },
  parameters: {
    tokensPrefix: 'utrecht-spotlight-section',
    tokens,
    tokensDefinition,
    docs: {
      description: {
        component: readme,
      },
    },
  },
} satisfies Meta<typeof SpotlightSection>;

export default meta;

type Story = StoryObj<typeof meta>;
export const Default: Story = {};

export const Info: Story = {
  args: {
    type: 'info',
  },
};

export const Warning: Story = {
  args: {
    type: 'warning',
  },
};

export const DesignTokens = designTokenStory(meta);
