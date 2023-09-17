/* @license CC0-1.0 */

import type { Meta, StoryObj } from '@storybook/react';
import readme from '@utrecht/components/link/README.md?raw';
import tokensDefinition from '@utrecht/components/link/tokens.json';
import tokens from '@utrecht/design-tokens/dist/index.json';
import { UtrechtLinkButton, UtrechtParagraph } from '@utrecht/web-component-library-react';
import React from 'react';
import { PropsWithChildren } from 'react';
import { designTokenStory } from './design-token-story';

interface LinkButtonStoryProps {
  disabled?: boolean;
  inline?: boolean;
  pressed?: boolean;
  type?: string;
}

const LinkButtonStory = ({ children, disabled, inline, pressed, type }: PropsWithChildren<LinkButtonStoryProps>) => (
  <UtrechtLinkButton
    disabled={disabled || undefined}
    inline={inline || undefined}
    pressed={pressed || undefined}
    type={type || undefined}
  >
    {children}
  </UtrechtLinkButton>
);

const meta = {
  title: 'Web Component/Link button',
  id: 'web-component-link-button',
  component: LinkButtonStory,
  argTypes: {
    children: {
      description: 'Button text',
      control: 'text',
    },
    disabled: {
      description: 'Disabled',
      control: 'boolean',
    },
    inline: {
      description: 'Inline',
      control: 'boolean',
    },
    pressed: {
      description: 'Pressed',
      control: 'boolean',
    },
    type: {
      description: 'Type',
      control: { type: 'select' },
      options: ['', 'button', 'reset', 'submit'],
    },
  },
  args: {
    disabled: false,
    inline: false,
    pressed: false,
    children: '',
    type: '',
  },
  tags: ['autodocs'],
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
    tokensPrefix: 'utrecht-link',
    tokens,
    tokensDefinition,
    docs: {
      description: {
        component: readme,
      },
    },
  },
} satisfies Meta<typeof LinkButtonStory>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Read more...',
  },
};

export const Disabled: Story = {
  args: {
    children: 'Premium feature (locked)',
    disabled: true,
  },
};

export const Submit: Story = {
  args: {
    children: '← Previous',
    type: 'submit',
  },
};

export const Pressed: Story = {
  args: {
    children: 'Edit',
    pressed: true,
  },
};

export const Inline: Story = {
  args: {
    children: 'approve this PR yourself',
    inline: true,
  },
  decorators: [(Story) => <UtrechtParagraph>You can {Story()}, if you need to.</UtrechtParagraph>],
};

export const DesignTokens = designTokenStory(meta);
