/* @license CC0-1.0 */

import type { Meta, StoryObj } from '@storybook/react-vite';
import { SkipLink } from '@utrecht/component-library-react';
import type { SkipLinkProps } from '@utrecht/component-library-react';
import tokens from '@utrecht/design-tokens/dist/index.json';
import readme from '@utrecht/skip-link-css/README.md?raw';
import tokensDefinition from '@utrecht/skip-link-css/src/tokens.json';
import clsx from 'clsx';
import React from 'react';
import { designTokenStory } from './design-token-story';
import { ExampleViewport } from './util/ExampleViewport';

interface SkipLinkStoryProps extends SkipLinkProps {
  focus?: boolean;
  visibility?: string | 'hidden' | 'visible';
  visibleOnFocus?: boolean;
}

const SkipLinkStory = ({ focusVisible, visibility, visibleOnFocus, ...restProps }: SkipLinkStoryProps) => (
  <SkipLink
    className={clsx({
      'utrecht-skip-link--focus-visible': focusVisible,
      'utrecht-skip-link--visible-on-focus': visibleOnFocus,
      'utrecht-skip-link--hidden': visibility === 'hidden',
      'utrecht-skip-link--visible': visibility === 'visible',
    })}
    {...restProps}
  />
);

const meta = {
  title: 'CSS Component/Skip link',
  id: 'css-skip-link',
  component: SkipLinkStory,
  decorators: [ExampleViewport],
  argTypes: {
    children: {
      description: 'Link text',
      type: {
        name: 'string',
        required: false,
      },
    },
    href: {
      description: 'Target URL',
      type: {
        name: 'string',
        required: true,
      },
    },
    focusVisible: {
      description: 'Simulate :focus-visible',
      type: {
        name: 'boolean',
      },
    },
    visibility: {
      description: 'Visibilty',
      control: { type: 'select' },
      options: ['', 'hidden', 'visible'],
    },
    visibleOnFocus: {
      description: 'Visible on focus',
      control: 'boolean',
    },
  },
  args: {
    children: '',
    href: '',
    focusVisible: false,
    visibility: '',
    visibleOnFocus: false,
  },
  parameters: {
    bugs: 'https://github.com/nl-design-system/utrecht/issues?q=is%3Aissue+is%3Aopen+label%3Acomponent%2Fskip-link',
    communityFigma:
      'https://www.figma.com/design/shhwGcqPLi2CapK0P1zz8O/NLDS---Voorbeeld---Bibliotheek?node-id=2217-10122&t=CiZrkiC5t6Bn59Hg-0',
    figma:
      'https://www.figma.com/design/UXIHcIurAD8hyoBWx4hDBV/NLDS---Gemeente-Utrecht---Bibliotheek?node-id=2217-10122&t=kJatlKfN59e8T0eA-0',
    nldesignsystem: 'https://nldesignsystem.nl/skip-link',
    tokensPrefix: 'utrecht-skip-link',
    status: {
      type: 'ALPHA',
    },
    tokens,
    tokensDefinition,
    docs: {
      description: {
        component: readme,
      },
    },
  },
} satisfies Meta<typeof SkipLinkStory>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    href: '#main',
    focusVisible: true,
    children: 'Skip to main content',
    visibility: 'visible',
  },
  parameters: {
    docs: {
      description: {
        story: `Styling met de \`.utrecht-skip-link\` en \`.utrecht-skip-link--visible-on-focus\` class naam.`,
      },
    },
  },
};

export const VisibleOnFocus: Story = {
  args: {
    href: '#main',
    focusVisible: true,
    children: 'Skip to main content',
    visibleOnFocus: true,
  },
  name: 'Visible on focus',
  parameters: {
    chromatic: { disableSnapshot: true },
    docs: {
      description: {
        story:
          'Styling met de `.utrecht-skip-link--visible-on-focus` class naam. Standaard niet zichtbaar, wordt zichtbaar wanneer je met het toetsenbord er naar toe tabt.',
      },
    },
  },
};

export const RightToLeft: Story = {
  args: {
    href: '#main',
    focusVisible: true,
    children: 'تخطي إلى المحتوى الرئيسي',
    visibility: 'visible',
  },
  name: 'Right-to-left',
  decorators: [
    (Story) => (
      <div dir="rtl" lang="ar">
        {Story()}
      </div>
    ),
  ],
  parameters: {
    docs: {
      description: {
        story: `Skip link in right-to-left script.`,
      },
    },
  },
};

export const DesignTokens = designTokenStory(meta);
