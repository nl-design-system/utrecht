import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Select, SelectOption } from '@utrecht/component-library-react';
import React from 'react';
import { argTypes, options } from './argTypes';

export default {
  title: 'React Component/Select',
  id: 'react-select',
  component: Select,
  argTypes,
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => (
  <Select {...args}>
    {options &&
      options.length > 0 &&
      options.map(({ label, value, disabled }, index) => (
        <SelectOption key={index} value={value} disabled={disabled}>
          {label}
        </SelectOption>
      ))}
  </Select>
);

export const Default = Template.bind({});
