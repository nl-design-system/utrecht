import { ArgsTable, Description, Primary, PRIMARY_STORY, Stories } from '@storybook/addon-docs';
import { Meta, StoryObj } from '@storybook/react';
import { LinkSocial } from '@utrecht/component-library-react/src/css-module/index';
import readme from '@utrecht/components/link-social/README.md?raw';
import tokensDefinition from '@utrecht/components/link-social/tokens.json';
import tokens from '@utrecht/design-tokens/dist/index.json';
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
      page: () => (
        <>
          <Description>{readme}</Description>
          <Primary />
          <ArgsTable story={PRIMARY_STORY} />
          <Stories />
        </>
      ),
    },
  },
} satisfies Meta<typeof LinkSocial>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const DesignTokens = designTokenStory(meta);
