/* @license CC0-1.0 */

import { Meta, StoryObj } from '@storybook/react';
import { LinkSocial, ListSocial, ListSocialItem } from '@utrecht/component-library-react';
import type { LinkSocialProps } from '@utrecht/component-library-react';
import type { ListSocialProps } from '@utrecht/component-library-react';
import readme from '@utrecht/components/list-social/README.md?raw';
import tokensDefinition from '@utrecht/components/list-social/tokens.json';
import tokens from '@utrecht/design-tokens/dist/index.json';
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
