import { ArgsTable, Description, Primary, PRIMARY_STORY, Stories } from '@storybook/addon-docs';
import { Meta, ReactRenderer, StoryObj } from '@storybook/react';
import { PartialStoryFn } from '@storybook/types';
import { Backdrop } from '@utrecht/component-library-react/dist/css-module';
import { BackdropProps } from '@utrecht/component-library-react/src/Backdrop';
import readme from '@utrecht/components/backdrop/README.md?raw';
import tokensDefinition from '@utrecht/components/backdrop/tokens.json';
import tokens from '@utrecht/design-tokens/dist/index.json';
import clsx from 'clsx';
import React from 'react';
import { designTokenStory } from './util';

const checkerboard = (Story: PartialStoryFn<ReactRenderer>) => (
  <div
    style={{
      '--example-checkerboard-color-1': '#000000',
      '--example-checkerboard-color-2': '#ffffff',
      '--example-checkerboard-size': '16px',
      backgroundColor: 'var(--example-checkerboard-color-2)',
      backgroundImage:
        'linear-gradient(45deg, var(--example-checkerboard-color-1) 25%, transparent 25%, transparent 75%, var(--example-checkerboard-color-1) 75%,var(--example-checkerboard-color-1)), linear-gradient(45deg, var(--example-checkerboard-color-1) 25%, transparent 25%, transparent 75%, var(--example-checkerboard-color-1) 75%, var(--example-checkerboard-color-1))',
      backgroundPosition: ' 0 0, var(--example-checkerboard-size) var(--example-checkerboard-size)',
      backgroundSize: 'calc(var(--example-checkerboard-size) * 2) calc(var(--example-checkerboard-size) * 2)',
      height: '100%',
      minHeight: 'calc(40 * var(--example-checkerboard-size))',
      minWidth: 'calc(40 * var(--example-checkerboard-size))',
      position: 'relative',
      width: '100%',
    }}
  >
    <Story />
  </div>
);
interface BackdropStoryProps extends BackdropProps {
  reducedMotion?: boolean;
  reducedTransparency?: boolean;
  viewport?: boolean;
}

const BackdropStory = ({ reducedMotion, reducedTransparency, viewport, ...args }: BackdropStoryProps) => (
  <Backdrop
    className={clsx({
      'utrecht-backdrop--reduced-motion': reducedMotion,
      'utrecht-backdrop--reduced-transparency': reducedTransparency,
      'utrecht-backdrop--viewport': viewport,
    })}
    {...args}
  />
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
      table: {
        category: 'Demo',
      },
    },
    reducedTransparency: {
      name: 'Reduced transparency',
      type: 'boolean',
      table: {
        category: 'Demo',
      },
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
      description: {
        story: `Styling via the \`.utrecht-backdrop\` class name. Displayed on a black-and-white checkerboard, so you can see the effect of the configured opacity.`,
      },
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
  render: BackdropStory,
  decorators: [checkerboard],
} satisfies Meta<typeof BackdropStory>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const ReducedMotion: Story = {
  args: {
    ...Default.args,
    reducedMotion: true,
  },
};

export const ReducedTransparency: Story = {
  args: {
    ...Default.args,
    reducedTransparency: true,
  },
  parameters: {
    ...Default.parameters,
    docs: {
      ...Default.parameters?.['docs'],
      description: {
        story: `Styling via the \`.utrecht-backdrop--reduced-transparency\` class name. Displayed on a black-and-white checkerboard, so you can see the effect of the configured opacity.`,
      },
    },
  },
};

export const DesignTokens = designTokenStory(meta);
