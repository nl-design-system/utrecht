import type { Meta, StoryObj } from '@storybook/react-vite';
import readme from '@utrecht/backdrop-css/README.md?raw';
import tokensDefinition from '@utrecht/backdrop-css/src/tokens.json';
import { Backdrop } from '@utrecht/component-library-react';
import type { BackdropProps } from '@utrecht/component-library-react';
import tokens from '@utrecht/design-tokens/dist/index.json';
import clsx from 'clsx';
import React, { PropsWithChildren } from 'react';
import { designTokenStory } from './design-token-story';

const Checkerboard = ({ children }: PropsWithChildren<{}>) => (
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
    {children}
  </div>
);
interface BackdropStoryProps extends BackdropProps {
  reducedMotion?: boolean;
  reducedTransparency?: boolean;
  viewport?: boolean;
}

const BackdropStory = ({ reducedMotion, reducedTransparency, viewport, ...args }: BackdropStoryProps) => (
  <Checkerboard>
    <Backdrop
      className={clsx({
        'utrecht-backdrop--reduced-motion': reducedMotion,
        'utrecht-backdrop--reduced-transparency': reducedTransparency,
        'utrecht-backdrop--viewport': viewport,
      })}
      {...args}
    />
  </Checkerboard>
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
    bugs: 'https://github.com/nl-design-system/utrecht/issues?q=is%3Aissue+is%3Aopen+label%3Acomponent%2Fbackdrop',
    communityFigma:
      'https://www.figma.com/design/shhwGcqPLi2CapK0P1zz8O/NLDS---Voorbeeld---Bibliotheek?node-id=5894-100900&t=CiZrkiC5t6Bn59Hg-0',
    figma:
      'https://www.figma.com/design/UXIHcIurAD8hyoBWx4hDBV/NLDS---Gemeente-Utrecht---Bibliotheek?node-id=3113-36160&t=kJatlKfN59e8T0eA-0',
    tokensPrefix: 'utrecht-backdrop',
    layout: 'fullscreen',
    status: {
      type: 'WORK IN PROGRESS',
    },
    tokens,
    tokensDefinition,
    docs: {
      description: {
        component: readme,
      },
    },
  },
  render: BackdropStory,
} satisfies Meta<typeof BackdropStory>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  parameters: {
    docs: {
      description: {
        story: `Styling via the \`.utrecht-backdrop\` class name. Displayed on a black-and-white checkerboard, so you can see the effect of the configured opacity.`,
      },
    },
  },
};

export const ReducedMotion: Story = {
  args: {
    ...Default.args,
    reducedMotion: true,
  },
  parameters: {
    ...Default.parameters,
    docs: {
      ...Default.parameters?.['docs'],
      description: {
        story: `
Happens automatically when \`@media (prefers-reduced-motion: reduce)\` is triggered.
Simulated with \`.utrecht-backdrop--reduced-motion\``,
      },
    },
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
        story: `
Happens automatically when \`@media (prefers-reduced-transparency: reduce)\` is triggered.
Simulated with the \`.utrecht-backdrop--reduced-transparency\` class name. The reduced transparency can be set with design tokens.

Displayed on a black-and-white checkerboard, so you can see the effect of the configured opacity.`,
      },
    },
  },
};

export const DesignTokens = designTokenStory(meta);
