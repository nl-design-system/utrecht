import { ComponentMeta, ComponentStory } from '@storybook/react';
import { FormLabel } from '@utrecht/component-library-react';
import React from 'react';
import { argTypes } from './argTypes';

export default {
  title: 'React Component/Form Label/States',
  id: 'react-form-label-states',
  component: FormLabel,
  argTypes,
} as ComponentMeta<typeof FormLabel>;

const Template: ComponentStory<typeof FormLabel> = (args) => <FormLabel {...args} />;

export const Checked = Template.bind({});

Checked.args = {
  children: 'Form Label Checked',
  type: 'checkbox',
};

export const Disabled = Template.bind({});

Disabled.args = {
  children: 'Form Label Disabled',
  type: 'radio',
};
