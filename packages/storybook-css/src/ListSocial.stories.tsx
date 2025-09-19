/* @license CC0-1.0 */

import type { Meta, StoryObj } from '@storybook/react-vite';
import { LinkSocial, ListSocial, ListSocialItem } from '@utrecht/component-library-react';
import type { LinkSocialProps } from '@utrecht/component-library-react';
import type { ListSocialProps } from '@utrecht/component-library-react';
import tokens from '@utrecht/design-tokens/dist/index.json';
import readme from '@utrecht/list-social-css/README.md?raw';
import tokensDefinition from '@utrecht/list-social-css/src/tokens.json';
import React from 'react';
import { designTokenStory } from './design-token-story';

interface ListSocialStoryProps extends ListSocialProps {
  items: ({ icon: string } & LinkSocialProps)[];
}
const ListSocialStory = ({ items }: ListSocialStoryProps) => (
  <ListSocial>
    {Array.isArray(items) &&
      items.map(({ icon, ...restProps }) => {
        const IconElement = icon;
        return (
          <ListSocialItem>
            <LinkSocial {...restProps}>
              <IconElement></IconElement>
            </LinkSocial>
          </ListSocialItem>
        );
      })}
  </ListSocial>
);

const meta = {
  title: 'CSS Component/Link to social media/Link list',
  id: 'css-list-social',
  component: ListSocialStory,
  argTypes: {
    items: {
      description: 'Social media links',
      table: {
        category: 'Demo',
      },
    },
  },
  args: {
    items: [],
  },
  parameters: {
    bugs: 'https://github.com/nl-design-system/utrecht/issues?q=is%3Aissue+is%3Aopen+label%3Acomponent%2Flist-social',
    tokensPrefix: 'utrecht-list-social',
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
} satisfies Meta<typeof ListSocialStory>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    items: [
      {
        href: 'https://www.facebook.com/GemeenteUtrecht',
        icon: 'utrecht-icon-facebook',
        'aria-label': 'Facebook',
      },
      {
        href: 'https://www.instagram.com/GemeenteUtrecht/',
        icon: 'utrecht-icon-instagram',
        'aria-label': 'Instagram',
      },
      {
        href: 'https://nl.linkedin.com/company/gemeente-utrecht',
        icon: 'utrecht-icon-linkedin',
        'aria-label': 'Linkedin',
      },
      {
        href: 'https://twitter.com/gemeenteutrecht',
        icon: 'utrecht-icon-x',
        'aria-label': 'X (voorheen Twitter)',
      },
      {
        href: 'https://api.whatsapp.com/send?phone=31624927665',
        icon: 'utrecht-icon-whatsapp',
        'aria-label': 'WhatsApp',
      },
    ],
  },
};

export const DesignTokens = designTokenStory(meta);
