import { Meta, StoryObj } from '@storybook/react';
import { LinkSocial, ListSocial, ListSocialItem } from '@utrecht/component-library-react/dist/css-module/index';
import readme from '@utrecht/components/list-social/README.md?raw';
import tokensDefinition from '@utrecht/components/list-social/tokens.json';
import tokens from '@utrecht/design-tokens/dist/index.json';
import {
  UtrechtIconFacebook,
  UtrechtIconInstagram,
  UtrechtIconLinkedin,
  UtrechtIconTwitter,
  UtrechtIconWhatsapp,
} from '@utrecht/web-component-library-react';
import React from 'react';
import { designTokenStory } from './util';

const meta = {
  title: 'React Component/List Social',
  id: 'react-list-social',
  component: ListSocial,
  tags: ['autodocs'],
  parameters: {
    tokensPrefix: 'utrecht-list-social',
    tokens,
    tokensDefinition,
    docs: {
      description: {
        component: readme,
      },
    },
  },
} as Meta<typeof ListSocial>;

export default meta;

const Template: StoryObj<typeof ListSocial> = (args) => <ListSocial {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: [
    <ListSocialItem>
      <LinkSocial title="facebook" external href="https://www.facebook.com/GemeenteUtrecht">
        <UtrechtIconFacebook />
      </LinkSocial>
    </ListSocialItem>,
    <ListSocialItem>
      <LinkSocial title="instagram" external href="https://www.instagram.com/GemeenteUtrecht/">
        <UtrechtIconInstagram />
      </LinkSocial>
    </ListSocialItem>,
    <ListSocialItem>
      <LinkSocial
        title="linkedin"
        external
        href="https://www.linkedin.com/company/gemeente-utrecht/?originalSubdomain=nl"
      >
        <UtrechtIconLinkedin />
      </LinkSocial>
    </ListSocialItem>,
    <ListSocialItem>
      <LinkSocial title="twitter" external href="https://twitter.com/gemeenteutrecht">
        <UtrechtIconTwitter />
      </LinkSocial>
    </ListSocialItem>,
    <ListSocialItem>
      <LinkSocial title="whatsapp" external href="https://api.whatsapp.com/send?phone=31624927665">
        <UtrechtIconWhatsapp />
      </LinkSocial>
    </ListSocialItem>,
  ],
};

export const DesignTokens = designTokenStory(meta);
