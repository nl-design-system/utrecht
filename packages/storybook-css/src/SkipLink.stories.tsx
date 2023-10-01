/* @license CC0-1.0 */

import { Meta, StoryObj } from '@storybook/react';
import { SkipLink } from '@utrecht/component-library-react';
import type { SkipLinkProps } from '@utrecht/component-library-react';
import readme from '@utrecht/components/skip-link/README.md?raw';
import tokensDefinition from '@utrecht/components/skip-link/tokens.json';
import tokens from '@utrecht/design-tokens/dist/index.json';
import clsx from 'clsx';
import React from 'react';
import { designTokenStory } from './design-token-story';
import { ExampleViewport } from './util/ExampleViewport';

interface SkipLinkStoryProps extends SkipLinkProps {
  focus?: boolean;
  visibility?: string | 'hidden' | 'visible';
  visibleOnFocus?: boolean;
}

const SkipLinkStory = ({ focus, visibility, visibleOnFocus, ...restProps }: SkipLinkStoryProps) => (
  <SkipLink
    className={clsx({
      'utrecht-skip-link--focus': focus,
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
    visibility: {
      description: 'Visibilty',
      type: 'select',
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
    focus: false,
    visibility: '',
    visibleOnFocus: false,
  },
  parameters: {
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
    focus: true,
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
    focus: true,
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
    focus: true,
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
