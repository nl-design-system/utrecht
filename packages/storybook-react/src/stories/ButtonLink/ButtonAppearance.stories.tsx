import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ButtonLink } from '@utrecht/component-library-react';
import React from 'react';
import { argTypes } from './argTypes';

export default {
  title: 'React.js Component/Link that looks like a button',
  id: 'react-button-link-appearance',
  component: ButtonLink,
  argTypes,
} as ComponentMeta<typeof ButtonLink>;

const Template: ComponentStory<typeof ButtonLink> = (args) => <ButtonLink {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  children: 'Read more...',
  appearance: 'primary-action-button',
};

export const Secondary = Template.bind({});

Secondary.args = {
  children: 'Read more...',
  appearance: 'secondary-action-button',
};

export const Subtle = Template.bind({});

Subtle.args = {
  children: 'Read more...',
  appearance: 'subtle-button',
};
