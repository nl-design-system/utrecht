import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Select, SelectOption } from '@utrecht/component-library-react';
import React from 'react';
import { argTypes, options } from './argTypes';

export default {
  title: 'React.js Component/Select/States',
  id: 'react-select-states',
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

export const Disabled = Template.bind({});

Disabled.args = {
  disabled: true,
};

export const Required = Template.bind({});

Required.args = {
  required: true,
};

export const RequiredServerSideRendering = Template.bind({});

RequiredServerSideRendering.args = {
  required: true,
  noscript: true,
};

export const Invalid = Template.bind({});

Invalid.args = {
  invalid: true,
};

export const Focus = Template.bind({});

Focus.parameters = {
  pseudo: { focus: true },
};

export const FocusVisible = Template.bind({});

FocusVisible.parameters = {
  pseudo: { focusVisible: true, focus: true },
};

export const Hover = Template.bind({});

Hover.parameters = {
  pseudo: { hover: true },
};
