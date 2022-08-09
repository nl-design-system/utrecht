import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ButtonLink } from '@utrecht/component-library-react';
import React from 'react';
import { argTypes } from './argTypes';

export default {
  title: 'React.js Component/Link that looks like a button',
  id: 'react-button-link',
  component: ButtonLink,
  argTypes,
} as ComponentMeta<typeof ButtonLink>;

const Template: ComponentStory<typeof ButtonLink> = (args) => <ButtonLink {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: 'Read more...',
  href: '#',
};
