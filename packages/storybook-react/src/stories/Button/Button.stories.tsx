import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Button } from '@utrecht/component-library-react';
import React from 'react';
import { argTypes } from './argTypes';

export default {
  title: 'React.js Component/Button',
  id: 'react-button',
  component: Button,
  argTypes,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: 'Read more...',
};
