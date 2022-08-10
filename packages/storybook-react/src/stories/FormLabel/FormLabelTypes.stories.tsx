import { ComponentMeta, ComponentStory } from '@storybook/react';
import { FormLabel } from '@utrecht/component-library-react';
import React from 'react';
import { argTypes } from './argTypes';

export default {
  title: 'React.js Component/Form Label/Types',
  id: 'react-form-label-types',
  component: FormLabel,
  argTypes,
} as ComponentMeta<typeof FormLabel>;

const Template: ComponentStory<typeof FormLabel> = (args) => <FormLabel {...args} />;

export const Checkbox = Template.bind({});

Checkbox.args = {
  children: 'Form Label Checkbox',
  type: 'checkbox',
};

export const Radio = Template.bind({});

Radio.args = {
  children: 'Form Label Radio',
  type: 'radio',
};
