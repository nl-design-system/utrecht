import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Combobox, Paragraph } from '@utrecht/component-library-react';
import React from 'react';
import { argTypes, countries } from './argTypes';

export default {
  title: 'React Component/Combobox',
  id: 'react-combobox',
  component: Combobox,
  argTypes,
} as ComponentMeta<typeof Combobox>;

const Template: ComponentStory<typeof Combobox> = (args) => <Combobox {...args} />;

export const Default = Template.bind({});

Default.args = {
  options: countries,
  label: 'Select Your Country',
  placeholder: 'Write your country here...',
  onComboboxChange: (value) => {
    console.log(value);
  },
};

export const ComboBoxRenderOptions = Template.bind({});

ComboBoxRenderOptions.args = {
  options: countries,
  label: 'Select Your Country',
  placeholder: 'Write your counter here...',
  onComboboxChange: (value) => {
    console.log(value);
  },
  renderOptions: (option) => {
    return <Paragraph>{option}</Paragraph>;
  },
};
