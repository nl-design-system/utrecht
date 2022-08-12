import { ComponentMeta, ComponentStory } from '@storybook/react';
import { RadioButton } from '@utrecht/component-library-react';
import React from 'react';
import { argTypes } from './argTypes';

export default {
  title: 'React.js Component/Radio Button/States',
  id: 'react-radio-button-states',
  component: RadioButton,
  argTypes,
} as ComponentMeta<typeof RadioButton>;

const Template: ComponentStory<typeof RadioButton> = (args) => <RadioButton {...args} />;

export const Hover = Template.bind({});

Hover.parameters = {
  pseudo: { hover: true },
};

export const Focus = Template.bind({});

Focus.parameters = {
  pseudo: { focus: true },
};

export const FocusVisible = Template.bind({});

FocusVisible.parameters = {
  pseudo: { focusVisible: true },
};

export const Checked = Template.bind({});

Checked.args = {
  checked: true,
  value: 'checked',
};

export const CheckedAndDisabled = Template.bind({});

CheckedAndDisabled.args = {
  checked: true,
  disabled: true,
};

export const Disabled = Template.bind({});

Disabled.args = {
  disabled: true,
};

export const Invalid = Template.bind({});

Invalid.args = {
  invalid: true,
};

export const Required = Template.bind({});

Required.args = {
  required: true,
};
