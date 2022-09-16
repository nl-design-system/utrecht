import { ComponentMeta, ComponentStory } from '@storybook/react';
import { LinkSocial } from '@utrecht/component-library-react';
import { UtrechtIconFacebook } from '@utrecht/web-component-library-react';
import React from 'react';

export default {
  title: 'React.js Component/Link Social',
  id: 'react-link-social',
  component: LinkSocial,
} as ComponentMeta<typeof LinkSocial>;

const Template: ComponentStory<typeof LinkSocial> = (args) => <LinkSocial {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: <UtrechtIconFacebook />,
  href: 'https://www.facebook.com/GemeenteUtrecht',
  external: true,
  title: 'facebook',
};
