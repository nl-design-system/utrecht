import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Link } from '@utrecht/component-library-react';
import React from 'react';
import { argTypes } from './argTypes';

export default {
  title: 'React.js Component/Link/Types',
  id: 'react-link-types',
  component: Link,
  args: {
    children: 'Read more',
  },
  argTypes,
} as ComponentMeta<typeof Link>;

const Template: ComponentStory<typeof Link> = (args) => <Link {...args} />;

export const External = Template.bind({});

External.args = {
  href: 'https://www.example.com',
  external: true,
};

export const Email = Template.bind({});

Email.args = {
  href: 'mailto:info@example.com',
  children: 'info@example.com',
};

export const Telephone = Template.bind({});

Telephone.args = {
  href: 'tel:+31555385385',
  children: '+31 555 385 385',
};

export const AlternateLanguage = Template.bind({});

AlternateLanguage.args = {
  href: 'https://example.com/en',
  title: 'This page in English',
  hrefLang: 'en',
  lang: 'en',
  rel: 'alternate',
  children: 'EN',
};

export const CurrentLanguage = Template.bind({});

CurrentLanguage.args = {
  href: 'https://example.com/en',
  title: 'This page in English',
  hrefLang: 'en',
  lang: 'en',
  children: 'EN',
  'aria-current': 'page',
};
