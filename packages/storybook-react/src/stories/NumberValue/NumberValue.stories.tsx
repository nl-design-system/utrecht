import { ComponentMeta, ComponentStory } from '@storybook/react';
import { NumberValue } from '@utrecht/component-library-react';
import React from 'react';
import { argTypes } from './argTypes';

export default {
  title: 'React Component/Number Value',
  id: 'react-value-number',
  component: NumberValue,
  argTypes,
} as ComponentMeta<typeof NumberValue>;

const Template: ComponentStory<typeof NumberValue> = (args) => <NumberValue {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: '1234567890',
};

export const WithFormatting = Template.bind({});

WithFormatting.args = {
  children: '1.234.567.890',
  value: '1234567890',
};
