import { Meta, StoryObj } from '@storybook/react';
import { LinkSocial } from '@utrecht/component-library-react/dist/css-module/index';
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
  tags: ['autodocs'],
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
} as Meta<typeof LinkSocial>;

export default meta;

const Template: StoryObj<typeof LinkSocial> = (args) => <LinkSocial {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: <UtrechtIconFacebook />,
  href: 'https://www.facebook.com/GemeenteUtrecht',
  external: true,
  title: 'facebook',
};

export const DesignTokens = designTokenStory(meta);
