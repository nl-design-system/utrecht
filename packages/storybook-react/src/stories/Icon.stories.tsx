import { ArgsTable, Description, Primary, PRIMARY_STORY, Stories } from '@storybook/addon-docs';
import { Meta, StoryObj } from '@storybook/react';
import { Icon } from '@utrecht/component-library-react/dist/css-module/index';
import readme from '@utrecht/components/icon/README.md?raw';
import tokensDefinition from '@utrecht/components/icon/tokens.json';
import tokens from '@utrecht/design-tokens/dist/index.json';
import React from 'react';
import { designTokenStory } from './util';

const meta = {
  title: 'React Component/Icon',
  id: 'react-icon',
  component: Icon,
  args: {
    children: (
      <svg viewBox="0 0 1000 1000">
        <rect fill="currentColor" x="0" y="0" width="1000" height="1000" />
      </svg>
    ),
    color: 'green',
    size: 32,
  },
  parameters: {
    tokensPrefix: 'utrecht-icon',
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
  render: ({ color, size, ...args }) => (
    <div style={{ '--utrecht-icon-color': color, '--utrecht-icon-size': `${size}px` }}>
      <Icon {...args} />
    </div>
  ),
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;
export const WithInlineSVG: Story = {};

export const DesignTokens = designTokenStory(meta);
