import { Meta, StoryObj } from '@storybook/react-vite';
import { SkipLink } from '@utrecht/component-library-react/dist/css-module';
import tokens from '@utrecht/design-tokens/dist/list.mjs';
import readme from '@utrecht/skip-link-css/README.md?raw';
import tokensDefinition from '@utrecht/skip-link-css/dist/tokens.mjs';
import React from 'react';
import { designTokenStory } from './util.js';

// `will-change: transform` will create a "containing block" that will contain `position: fixed` elements.
const ExampleViewport = (Story: () => React.ReactElement<any, string | React.JSXElementConstructor<any>>) => (
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

const meta = {
  title: 'React Component/Skip link',
  id: 'react-skip-link',
  component: SkipLink,
  argTypes: {
    href: {
      name: 'href',
      type: { name: 'string', required: true },
      table: {
        category: 'HTML attribute',
        defaultValue: { summary: '' },
      },
    },
  },
  decorators: [ExampleViewport],
  args: {
    href: '#main',
    children: 'Skip to main content',
  },
  parameters: {
    pseudo: {
      // Since skip link is not visible by default, simulate focus state by default
      focus: true,
      focusVisible: true,
    },
    tokensPrefix: 'utrecht-skip-link',
    tokens,
    tokensDefinition,
    docs: {
      description: {
        component: readme,
      },
    },
  },
} satisfies Meta<typeof SkipLink>;

export default meta;

type Story = StoryObj<typeof meta>;
export const Default: Story = {};

export const DesignTokens = designTokenStory(meta);
