import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Checkbox } from '@utrecht/component-library-react';
import React from 'react';
import { argTypes } from './argTypes';

export default {
  title: 'React.js Component/Checkbox/States',
  id: 'react-checkbox-states',
  component: Checkbox,
  argTypes,
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args) => <Checkbox {...args} />;

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
