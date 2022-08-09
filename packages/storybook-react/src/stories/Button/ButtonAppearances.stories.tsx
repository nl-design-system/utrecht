import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Button } from '@utrecht/component-library-react';
import React from 'react';
import { argTypes } from './argTypes';

export default {
  title: 'React.js Component/Button/Appearances',
  id: 'react-button-appearances',
  component: Button,
  argTypes,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

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
