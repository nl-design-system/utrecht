import { ComponentMeta, ComponentStory } from '@storybook/react';
import { FormField, FormLabel, RadioButton } from '@utrecht/component-library-react';
import React from 'react';
import { argTypes } from './argTypes';

export default {
  title: 'React.js Component/Radio Button',
  id: 'react-radio-button',
  component: RadioButton,
  subcomponents: { FormLabel, FormField },
  argTypes,
} as ComponentMeta<typeof RadioButton>;

const Template: ComponentStory<typeof RadioButton> = (args) => <RadioButton {...args} />;

export const Default = Template.bind({});
