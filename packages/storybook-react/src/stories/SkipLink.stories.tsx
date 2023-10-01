import { ArgsTable, Description, Primary, PRIMARY_STORY, Stories } from '@storybook/addon-docs';
import { Meta, StoryObj } from '@storybook/react';
import { SkipLink } from '@utrecht/component-library-react/src/css-module/index';
import readme from '@utrecht/components/skip-link/README.md?raw';
import tokensDefinition from '@utrecht/components/skip-link/tokens.json';
import tokens from '@utrecht/design-tokens/dist/index.json';
import React from 'react';
import { designTokenStory } from './util';

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
      page: () => (
        <>
          <Description>{readme}</Description>
          <Primary />
          <ArgsTable story={PRIMARY_STORY} />
          <Stories />
        </>
      ),
    },
  },
} satisfies Meta<typeof SkipLink>;

export default meta;

type Story = StoryObj<typeof meta>;
export const Default: Story = {};

export const DesignTokens = designTokenStory(meta);
