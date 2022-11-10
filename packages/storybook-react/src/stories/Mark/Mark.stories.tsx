import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Mark } from '@utrecht/component-library-react';
import React from 'react';
import { argTypes } from './argTypes';

export default {
  title: 'React Component/Mark',
  id: 'react-mark',
  component: Mark,
  argTypes,
} as ComponentMeta<typeof Mark>;

const Template: ComponentStory<typeof Mark> = (args) => <Mark {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: 'The Quick Brown Fox Jumps Over The Lazy Dog',
};
