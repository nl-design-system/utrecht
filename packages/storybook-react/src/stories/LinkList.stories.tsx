import { Meta, StoryObj } from '@storybook/react';
import { LinkList, LinkListLink } from '@utrecht/component-library-react/dist/css-module';
import tokens from '@utrecht/design-tokens/dist/list.mjs';
import readme from '@utrecht/link-list-css/README.md?raw';
import tokensDefinition from '@utrecht/link-list-css/dist/tokens.mjs';
import { UtrechtIconChevronRight, UtrechtIconHuisEnOmgeving } from '@utrecht/web-component-library-react';
import React from 'react';
import { designTokenStory } from './util';

const meta = {
  title: 'React Component/Link list',
  id: 'react-link-list',
  component: LinkList,
  args: {
    children: '',
  },
  parameters: {
    tokensPrefix: 'utrecht-link-list',
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
    children: (
      <>
        <LinkListLink href="#" icon={<UtrechtIconChevronRight />}>
          Learn about <i lang="fr">joi de vivre</i>, an essential foreign phrase!
        </LinkListLink>
        <LinkListLink href="#" icon={<UtrechtIconChevronRight />}>
          Link 2
        </LinkListLink>
        <LinkListLink href="#" icon={<UtrechtIconChevronRight />}>
          Link 3
        </LinkListLink>
      </>
    ),
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

export const LinksProperty: Story = {
  args: {
    icon: () => <UtrechtIconChevronRight />,
    links: [
      { href: '#', icon: <UtrechtIconHuisEnOmgeving />, children: 'Custom icon' },
      {
        href: '#',
        children: (
          <>
            Learn about <i lang="fr">joi de vivre</i>, an essential foreign phrase!
          </>
        ),
      },
      { href: '#', children: 'Link 3' },
    ],
  },
  name: 'Links property',
  parameters: {
    docs: {
      description: {
        story: 'The CSS code is currently very specific to Utrecht, and has no white label design tokens yet.',
      },
    },
  },
};

export const DesignTokens = designTokenStory(meta);
