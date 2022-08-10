import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Checkbox } from '@utrecht/component-library-react';
import React from 'react';
import { argTypes } from './argTypes';

export default {
  title: 'React.js Component/Checkbox',
  id: 'react-checkbox',
  component: Checkbox,
  argTypes,
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args) => <Checkbox {...args} />;

export const Default = Template.bind({});
