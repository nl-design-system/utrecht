import { ComponentMeta, ComponentStory } from '@storybook/react';
import { CustomRadioButton, FormLabel } from '@utrecht/component-library-react';
import React from 'react';
import { argTypes } from './argTypes';

export default {
  title: 'React Component/Custom Radio Button/With Label',
  id: 'react-custom-radio-button-with-label',
  component: CustomRadioButton,
  argTypes,
} as ComponentMeta<typeof CustomRadioButton>;

const Template: ComponentStory<typeof CustomRadioButton> = (args) => (
  <>
    <CustomRadioButton {...args} id="1" />
    <FormLabel htmlFor="1">Label</FormLabel>
  </>
);

export const WithLabel = Template.bind({});
