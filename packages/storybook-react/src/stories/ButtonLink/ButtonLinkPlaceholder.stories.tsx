import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ButtonLink } from '@utrecht/component-library-react';
import React from 'react';
import { argTypes } from './argTypes';

export default {
  title: 'React Component/Link that looks like a button',
  id: 'react-button-link-external',
  component: ButtonLink,
  argTypes,
} as ComponentMeta<typeof ButtonLink>;

const Template: ComponentStory<typeof ButtonLink> = (args) => <ButtonLink {...args} />;

export const PlaceholderForLink = Template.bind({});

PlaceholderForLink.args = {
  children: 'Read more...',
  href: '#',
  placeholder: true,
};
