/* @license CC0-1.0 */

import type { Meta, StoryObj } from '@storybook/react-vite';
import tokens from '@utrecht/design-tokens/dist/index.json';
import clsx from 'clsx';
import React from 'react';
import { TopNav, TopNavItem, TopNavLink } from './TopNav';
import type { TopNavLinkProps, TopNavProps } from './TopNav';
import { designTokenStory } from './design-token-story';
import readme from '../../../components/navigatie-topnav/README.md?raw';
import tokensDefinition from '../../../components/navigatie-topnav/src/tokens.json';

interface TopNavStoryProps extends TopNavProps {
  links: (TopNavLinkProps & { focus?: boolean; focusVisible?: boolean; hover?: boolean })[];
}

const TopNavStory = ({ links }: TopNavStoryProps) => (
  <TopNav>
    {Array.isArray(links) &&
      links.map(({ href, children, current, focus, focusVisible, hover }) => (
        <TopNavItem>
          <TopNavLink
            current={current}
            className={clsx(
              hover && 'utrecht-topnav__link--hover',
              focus && 'utrecht-topnav__link--focus',
              focusVisible && 'utrecht-topnav__link--focus-visible',
            )}
            href={href}
          >
            {children}
          </TopNavLink>
        </TopNavItem>
      ))}
  </TopNav>
);

const meta = {
  title: 'CSS Component/Top navigation',
  id: 'css-topnav',
  component: TopNavStory,
  argTypes: {
    links: {
      description: 'Links in the navigation bar',
      type: {
        name: 'array',
        required: true,
      },
    },
  },
  args: {
    links: [],
  },
  parameters: {
    bugs: 'https://github.com/nl-design-system/utrecht/issues?q=is%3Aissue+is%3Aopen+label%3Acomponent%2Ftop-nav',
    tokensPrefix: 'utrecht-topnav',
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
} satisfies Meta<typeof TopNavStory>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    links: [
      { href: 'https://example.com/', children: 'Wonen en leven' },
      { href: 'https://example.com/', children: 'Werk en inkomen' },
      { href: 'https://example.com/', children: 'Ondernemen' },
      { href: 'https://example.com/', children: 'Bestuur en organisatie' },
    ],
  },
  parameters: {
    docs: {
      description: {
        story: 'Styling via `utrecht-topnav` class name. Markup using the `<nav>` HTML-element.',
      },
    },
  },
};

export const Current: Story = {
  args: {
    links: [
      { href: 'https://example.com/', children: 'Wonen en leven', current: true },
      { href: 'https://example.com/', children: 'Werk en inkomen' },
      { href: 'https://example.com/', children: 'Ondernemen' },
      { href: 'https://example.com/', children: 'Bestuur en organisatie' },
    ],
  },
  name: 'Current',
  parameters: {
    docs: {
      description: {
        story: 'Markup using `<a aria-current="true">` for the link that is the current page.',
      },
    },
  },
};

export const Hover: Story = {
  args: {
    links: [
      { href: 'https://example.com/', children: 'Wonen en leven' },
      { href: 'https://example.com/', children: 'Werk en inkomen', hover: true },
      { href: 'https://example.com/', children: 'Ondernemen' },
      { href: 'https://example.com/', children: 'Bestuur en organisatie' },
    ],
  },
  name: 'Hover',
  parameters: {
    docs: {
      description: {
        story: 'Simulate styling via `utrecht-topnav__link--hover` class name.',
      },
    },
  },
};

export const Focus: Story = {
  args: {
    links: [
      { href: 'https://example.com/', children: 'Wonen en leven' },
      { href: 'https://example.com/', children: 'Werk en inkomen', focus: true },
      { href: 'https://example.com/', children: 'Ondernemen' },
      { href: 'https://example.com/', children: 'Bestuur en organisatie' },
    ],
  },
  name: 'Focus',
  parameters: {
    docs: {
      description: {
        story: 'Simulate styling via `utrecht-topnav__link--focus` class name.',
      },
    },
  },
};

export const FocusVisible: Story = {
  args: {
    links: [
      { href: 'https://example.com/', children: 'Wonen en leven' },
      { href: 'https://example.com/', children: 'Werk en inkomen', focus: true, focusVisible: true },
      { href: 'https://example.com/', children: 'Ondernemen' },
      { href: 'https://example.com/', children: 'Bestuur en organisatie' },
    ],
  },
  name: 'Focus-visible',
  parameters: {
    docs: {
      description: {
        story:
          'Simulate styling via `utrecht-topnav__link--focus` and `utrecht-topnav__link--focus-visible` class names.',
      },
    },
  },
};

export const DesignTokens = designTokenStory(meta);
