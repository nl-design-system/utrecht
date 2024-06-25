/* @license CC0-1.0 */

import { Meta, StoryObj } from '@storybook/react';
import { LinkList } from '@utrecht/component-library-react';
import tokens from '@utrecht/design-tokens/dist/index.json';
import readme from '@utrecht/link-list-css/README.md?raw';
import tokensDefinition from '@utrecht/link-list-css/src/tokens.json';
import { UtrechtIconChevronRight } from '@utrecht/web-component-library-react';
import React from 'react';
import { designTokenStory } from './design-token-story';

const meta = {
  title: 'CSS Component/Link list',
  id: 'css-link-list',
  component: LinkList,
  argTypes: {
    children: {},
    icon: {},
    links: {
      description: 'Links',
    },
  },
  args: {
    links: [],
  },
  parameters: {
    bugs: 'https://github.com/nl-design-system/utrecht/issues?q=is%3Aissue+is%3Aopen+label%3Acomponent%2Flink-list',
    tokensPrefix: 'utrecht-link-list',
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
} satisfies Meta<typeof LinkList>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    icon: () => <UtrechtIconChevronRight />,
    links: [
      { href: '#', children: 'Link 1 with so much content wow look how long!' },
      { href: '#', children: 'Link 2' },
      { href: '#', children: 'Link 3' },
    ],
  },
  parameters: {
    docs: {
      description: {
        story: 'The CSS code is currently very specific to Utrecht, and has no white label design tokens yet.',
      },
    },
  },
};

export const ColumnWidth: Story = {
  args: {
    icon: () => <UtrechtIconChevronRight />,
    links: [
      {
        href: '#',
        children: (
          <>
            Learn about <i lang="fr">joi de vivre</i>, an essential foreign phrase!
          </>
        ),
      },
      { href: '#', children: 'Link 2' },
      { href: '#', children: 'Link 3' },
    ],
  },
  parameters: {
    docs: {
      description: {
        story: 'The CSS code is currently very specific to Utrecht, and has no white label design tokens yet.',
      },
    },
  },
  decorators: [(Story) => <div style={{ inlineSize: '20em' }}>{Story()}</div>],
};

export const DesignTokens = designTokenStory(meta);
