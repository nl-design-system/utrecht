import { ComponentMeta, ComponentStory } from '@storybook/react';
import { FormField, FormLabel, Select, SelectOption } from '@utrecht/component-library-react';
import React from 'react';
import { argTypes, options } from './argTypes';

export default {
  title: 'React.js Component/Select/With Label',
  id: 'react-select-with-label',
  component: Select,
  argTypes,
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => (
  <FormField>
    <FormLabel htmlFor="1">Select Label</FormLabel>
    <br />
    <Select id="1" {...args}>
      {options &&
        options.length > 0 &&
        options.map(({ label, value, disabled }, index) => (
          <SelectOption key={index} value={value} disabled={disabled}>
            {label}
          </SelectOption>
        ))}
    </Select>
  </FormField>
);

export const WithLabel = Template.bind({});
