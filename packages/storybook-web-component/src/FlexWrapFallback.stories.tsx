/* @license CC0-1.0 */

import type { Meta, StoryObj } from '@storybook/react';
import tokens from '@utrecht/design-tokens/dist/index.json';
import readme from '@utrecht/flex-wrap-fallback-css/README.md?raw';
import tokensDefinition from '@utrecht/flex-wrap-fallback-css/src/tokens.json';
import {
  UtrechtButton,
  UtrechtButtonGroup,
  UtrechtDrawer,
  UtrechtFlexWrapFallback,
  UtrechtLink,
} from '@utrecht/web-component-library-react';
import React, { PropsWithChildren, ReactNode } from 'react';
import { designTokenStory } from './design-token-story';

interface FlexWrapFallbackStoryProps {
  fallback?: ReactNode;
}

const FlexWrapFallbackStory = ({ children, fallback, ...restProps }: PropsWithChildren<FlexWrapFallbackStoryProps>) => (
  <UtrechtFlexWrapFallback {...restProps}>
    {children}
    {fallback}
  </UtrechtFlexWrapFallback>
);

const meta = {
  title: 'Web Component/Flex-wrap fallback',
  id: 'web-component-flex-wrap-fallback',
  component: FlexWrapFallbackStory,
  argTypes: {
    children: {
      description: 'Content',
    },
    fallback: {
      description: 'Fallback content',
    },
  },
  args: {
    children: [],
  },
  tags: ['autodocs'],
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
    tokensPrefix: 'utrecht-flex-wrap-fallback',
    tokens,
    tokensDefinition,
    docs: {
      description: {
        component: readme,
      },
    },
  },
} satisfies Meta<typeof FlexWrapFallbackStory>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: [
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          minHeight: '100px',
          justifyContent: 'space-between',
          inlineSize: '100%',
        }}
      >
        <div>
          <a href="https://example.com/">Home</a>
        </div>
        <div>
          <a href="https://example.com/2">Link 2</a>
        </div>
        <div>
          <a href="https://example.com/3">Link 3</a>
        </div>
        <div>
          <a href="https://example.com/4">Link 4</a>
        </div>
        <div>
          <a href="https://example.com/5">Link 5</a>
        </div>
        <div>
          <a href="https://example.com/6">Link 6</a>
        </div>
        <div>
          <a href="https://example.com/7">Link 7</a>
        </div>
        <div>
          <a href="https://example.com/8">Link 8</a>
        </div>
        <div>
          <a href="https://example.com/9">Link 9</a>
        </div>
      </div>,
    ],
    fallback: [
      <UtrechtButtonGroup slot="fallback">
        <UtrechtButton appearance="subtle" expanded="false">
          Open menu
        </UtrechtButton>
      </UtrechtButtonGroup>,
      <UtrechtDrawer open slot="fallback">
        <ul>
          <li>
            <UtrechtLink href="https://example.com/">Home</UtrechtLink>
          </li>
          <li>
            <UtrechtLink href="https://example.com/2">Link 2</UtrechtLink>
          </li>
          <li>
            <UtrechtLink href="https://example.com/3">Link 3</UtrechtLink>
          </li>
          <li>
            <UtrechtLink href="https://example.com/4">Link 4</UtrechtLink>
          </li>
          <li>
            <UtrechtLink href="https://example.com/5">Link 5</UtrechtLink>
          </li>
          <li>
            <UtrechtLink href="https://example.com/6">Link 6</UtrechtLink>
          </li>
          <li>
            <UtrechtLink href="https://example.com/7">Link 7</UtrechtLink>
          </li>
          <li>
            <UtrechtLink href="https://example.com/8">Link 8</UtrechtLink>
          </li>
          <li>
            <UtrechtLink href="https://example.com/9">Link 9</UtrechtLink>
          </li>
        </ul>
      </UtrechtDrawer>,
    ],
  },
  decorators: [(Story) => <div style={{ inlineSize: '1280px', minBlockSize: '240px' }}>{Story()}</div>],
  name: 'No flex-wrap (1280px wide)',
};

export const SmallInlineSize: Story = {
  args: {
    ...Default.args,
  },
  decorators: [(Story) => <div style={{ maxInlineSize: '320px', minBlockSize: '240px' }}>{Story()}</div>],
  name: 'Flex-wrap fallback (320px wide)',
};

export const DesignTokens = designTokenStory(meta);
