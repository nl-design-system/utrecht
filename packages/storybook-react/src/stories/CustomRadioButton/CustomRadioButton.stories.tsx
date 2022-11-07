import { ComponentMeta, ComponentStory } from '@storybook/react';
import { CustomRadioButton } from '@utrecht/component-library-react';
import React from 'react';
import { argTypes } from './argTypes';

export default {
  title: 'React Component/Custom Radio Button',
  id: 'react-custom-radio-button',
  component: CustomRadioButton,
  argTypes,
} as ComponentMeta<typeof CustomRadioButton>;

const Template: ComponentStory<typeof CustomRadioButton> = (args) => <CustomRadioButton {...args} />;

export const Default = Template.bind({});
