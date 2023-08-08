import { ArgsTable, Description, Primary, PRIMARY_STORY, Stories } from '@storybook/addon-docs';
import { Meta, StoryObj } from '@storybook/react';
import { Backdrop } from '@utrecht/component-library-react/dist/css-module';
import readme from '@utrecht/components/backdrop/README.md?raw';
import tokensDefinition from '@utrecht/components/backdrop/tokens.json';
import tokens from '@utrecht/design-tokens/dist/index.json';
import clsx from 'clsx';
import React from 'react';
import { designTokenStory } from './util';

const checkerboard = (story: any) => (
  <div
    style={{
      '--checkerboard-color-1': '#000000',
      '--checkerboard-color-2': '#ffffff',
      '--checkerboard-size': '16px',
      'background-color': 'var(--checkerboard-color-2)',
      'background-image':
        'linear-gradient(45deg, var(--checkerboard-color-1) 25%, transparent 25%, transparent 75%, var(--checkerboard-color-1) 75%,var(--checkerboard-color-1)), linear-gradient(45deg, var(--checkerboard-color-1) 25%, transparent 25%, transparent 75%, var(--checkerboard-color-1) 75%, var(--checkerboard-color-1))',
      'background-position': ' 0 0, var(--checkerboard-size) var(--checkerboard-size)',
      'background-size': 'calc(var(--checkerboard-size) * 2) calc(var(--checkerboard-size) * 2)',
      height: '100%',
      'min-height': 'calc(40 * var(--checkerboard-size))',
      'min-width': 'calc(40 * var(--checkerboard-size))',
      position: 'relative',
      width: '100%',
    }}
  >
    {story()}
  </div>
);

const meta = {
  title: 'CSS Component/Backdrop',
  id: 'css-backdrop',
  component: Backdrop,
  args: {
    reducedMotion: false,
    reducedTransparency: false,
    viewport: false,
  },
  argTypes: {
    reducedMotion: {
      name: 'Reduced motion',
      type: 'boolean',
    },
    reducedTransparency: {
      name: 'Reduced transparency',
      type: 'boolean',
    },
    viewport: {
      name: 'Cover viewport',
      type: 'boolean',
    },
  },
  parameters: {
    tokensPrefix: 'utrecht-backdrop',
    layout: 'fullscreen',
    status: {
      type: 'WORK IN PROGRESS',
    },
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
} satisfies Meta<typeof Backdrop>;

export default meta;

const render = (args: any) => (
  <Backdrop
    className={clsx('utrecht-backdrop', {
      'utrecht-backdrop--reduced-motion': args.reducedMotion,
      'utrecht-backdrop--reduced-transparency': args.reducedTransparency,
      'utrecht-backdrop--viewport': args.viewport,
    })}
  />
);

type Story = StoryObj<typeof meta>;
export const Default: Story = {
  decorators: [checkerboard],
  render,
};

export const ReducedMotion: Story = {
  decorators: [checkerboard],
  args: {
    ...Default.args,
    reducedMotion: true,
  },
  render,
};
export const ReducedTransparency: Story = {
  decorators: [checkerboard],
  args: {
    ...Default.args,
    reducedTransparency: true,
  },
  render,
};

export const DesignTokens = designTokenStory(meta);
