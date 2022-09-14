/* eslint-disable react/jsx-key */
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { LinkSocial, ListSocial, ListSocialItem } from '@utrecht/component-library-react';
import {
  UtrechtIconFacebook,
  UtrechtIconInstagram,
  UtrechtIconLinkedin,
  UtrechtIconTwitter,
  UtrechtIconWhatsapp,
} from '@utrecht/web-component-library-react';
import React from 'react';

export default {
  title: 'React.js Component/List Social',
  id: 'react-list-social',
  component: ListSocial,
} as ComponentMeta<typeof ListSocial>;

const Template: ComponentStory<typeof ListSocial> = (args) => <ListSocial {...args} />;

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
