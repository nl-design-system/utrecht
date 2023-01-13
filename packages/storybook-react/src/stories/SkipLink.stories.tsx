import { Meta, StoryObj } from '@storybook/react';
import { SkipLink } from '@utrecht/component-library-react/dist/css-module/index';
import readme from '@utrecht/components/skip-link/README.md';
import tokensDefinition from '@utrecht/components/skip-link/tokens.json';
import tokens from '@utrecht/design-tokens/dist/index.json';
import React from 'react';
import { designTokenStory } from './util';

// `will-change: transform` will create a "containing block" that will contain `position: fixed` elements.
const ExampleViewport = (Story) => (
  <div
    style={{
      minHeight: '240px',
      minWidth: '320px',
      position: 'relative',
      willChange: 'transform',
    }}
  >
    {Story()}
  </div>
);
ExampleViewport.displayName = 'ExampleViewport';

const meta = {
  title: 'React Component/Skip link',
  id: 'react-skip-link',
  component: SkipLink,
  href: {
    name: 'href',
    type: { name: 'string', required: true },
    table: {
      category: 'HTML attribute',
      defaultValue: { summary: '' },
    },
  },
  decorators: [ExampleViewport],
  tags: ['autodocs'],
  parameters: {
    tokensPrefix: 'utrecht-skip-link',
    tokens,
    tokensDefinition,
    docs: {
      description: {
        component: readme,
      },
    },
  },
} as Meta<typeof SkipLink>;

export default meta;

const Template: StoryObj<typeof SkipLink> = (args) => <SkipLink {...args} />;

export const Default = Template.bind({});

Default.args = {
  href: '#main',
  children: 'Skip to main content',
};

// Since skip link is not visible by default, simulate focus state by default
Default.parameters = {
  pseudo: {
    focus: true,
    focusVisible: true,
  },
};

export const DesignTokens = designTokenStory(meta);
