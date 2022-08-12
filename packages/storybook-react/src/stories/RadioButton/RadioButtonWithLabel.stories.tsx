import { ComponentMeta, ComponentStory } from '@storybook/react';
import { FormField, FormLabel, RadioButton } from '@utrecht/component-library-react';
import React from 'react';
import { argTypes } from './argTypes';

export default {
  title: 'React.js Component/Radio Button/With Label',
  id: 'react-radio-button-with-label',
  component: RadioButton,
  subcomponents: { FormLabel, FormField },
  argTypes,
} as ComponentMeta<typeof RadioButton>;

const Template: ComponentStory<typeof RadioButton> = (args) => (
  <FormField>
    <RadioButton {...args} id="1" />
    <FormLabel type="radio" htmlFor="1">
      Label
    </FormLabel>
  </FormField>
);

export const WithLabel = Template.bind({});
