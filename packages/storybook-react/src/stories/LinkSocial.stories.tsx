import { Meta, StoryObj } from '@storybook/react';
import { LinkSocial } from '@utrecht/component-library-react/dist/css-module';
import tokens from '@utrecht/design-tokens/dist/list.mjs';
import readme from '@utrecht/link-social-css/README.md?raw';
import tokensDefinition from '@utrecht/link-social-css/dist/tokens.mjs';
import { UtrechtIconFacebook } from '@utrecht/web-component-library-react';
import React from 'react';
import { designTokenStory } from './util';

const meta = {
  title: 'React Component/Link Social',
  id: 'react-link-social',
  component: LinkSocial,
  args: {
    children: <UtrechtIconFacebook />,
    href: 'https://www.facebook.com/GemeenteUtrecht',
    external: true,
    title: 'facebook',
  },
  parameters: {
    tokensPrefix: 'utrecht-link-social',
    tokens,
    tokensDefinition,
    docs: {
      description: {
        component: readme,
      },
    },
  },
} satisfies Meta<typeof LinkSocial>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const DesignTokens = designTokenStory(meta);
