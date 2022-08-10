import { ComponentMeta, ComponentStory } from '@storybook/react';
import { CustomRadioButton } from '@utrecht/component-library-react';
import React from 'react';
import { argTypes } from './argTypes';

export default {
  title: 'React.js Component/Custom Radio Button/States',
  id: 'react-custom-radio-button-states',
  component: CustomRadioButton,
  argTypes,
} as ComponentMeta<typeof CustomRadioButton>;

const Template: ComponentStory<typeof CustomRadioButton> = (args) => <CustomRadioButton {...args} />;

export const Checked = Template.bind({});

Checked.args = {
  checked: true,
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
