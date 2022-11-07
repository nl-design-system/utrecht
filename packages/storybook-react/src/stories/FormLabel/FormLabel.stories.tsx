import { ComponentMeta, ComponentStory } from '@storybook/react';
import { FormLabel } from '@utrecht/component-library-react';
import React from 'react';
import { argTypes } from './argTypes';

export default {
  title: 'React Component/Form Label',
  id: 'react-form-label',
  component: FormLabel,
  argTypes,
} as ComponentMeta<typeof FormLabel>;

const Template: ComponentStory<typeof FormLabel> = (args) => <FormLabel {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: 'Username',
};
