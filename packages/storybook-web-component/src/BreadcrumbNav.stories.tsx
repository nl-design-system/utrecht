/* @license CC0-1.0 */

import type { Meta, StoryObj } from '@storybook/react';
import readme from '@utrecht/components/breadcrumb-nav/README.md?raw';
import tokensDefinition from '@utrecht/components/breadcrumb-nav/tokens.json';
import tokens from '@utrecht/design-tokens/dist/index.json';
import { UtrechtBreadcrumbNav } from '@utrecht/web-component-library-react';
import React, { PropsWithChildren } from 'react';
import { designTokenStory } from './design-token-story';

const BreadcrumbStory = ({ children, items, variant }: PropsWithChildren<{ json: any; variant?: string }>) => {
  return (
    <UtrechtBreadcrumbNav json={JSON.stringify(items)} variant={variant}>
      {children}
    </UtrechtBreadcrumbNav>
  );
};

const meta = {
  title: 'Web Component/Breadcrumb navigation',
  id: 'web-component-breadcrumb-nav',
  component: BreadcrumbStory,
  argTypes: {
    items: {
      description: 'Menu items',
      type: {
        name: 'array',
        required: true,
      },
    },
    variant: {
      description: 'Variant',
      type: {
        name: 'enum',
      },
      options: ['', 'arrows'],
    },
  },
  args: {
    items: [],
    variant: '',
  },
  tags: ['autodocs'],
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
    tokensPrefix: 'utrecht-breadcrumb-nav',
    tokens,
    tokensDefinition,
    docs: {
      description: {
        component: readme,
      },
    },
  },
} satisfies Meta<typeof BreadcrumbStory>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    items: [
      { href: 'https://example.com/', title: 'Home' },
      { href: 'https://example.com/a/', title: 'Wonen en leven' },
      { href: 'https://example.com/a/b/', title: 'Afval' },
      { href: 'https://example.com/a/b/c/', title: "Kliko's", current: true },
    ],
    variant: 'arrows',
  },
};

export const DesignTokens = designTokenStory(meta);
