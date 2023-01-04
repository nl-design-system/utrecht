import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Button } from '@utrecht/component-library-react';
import React from 'react';
import { argTypes } from './argTypes';

export default {
  title: 'React Component/Button/States',
  id: 'react-button--state',
  component: Button,
  argTypes,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

// Default
export const Default = Template.bind({});

Default.args = {
  children: 'Read more...',
};

export const DefaultDisabled = Template.bind({});

DefaultDisabled.args = {
  children: 'Read more...',
  disabled: true,
};

export const DefaultBusy = Template.bind({});

DefaultBusy.args = {
  children: 'Read more...',
  busy: true,
};

export const DefaultHover = Template.bind({});

DefaultHover.args = {
  children: 'Read more...',
};

DefaultHover.parameters = {
  pseudo: { hover: true },
};

export const DefaultFocus = Template.bind({});

DefaultFocus.args = {
  children: 'Read more...',
};

DefaultFocus.parameters = {
  pseudo: { focus: true },
};

export const DefaultActive = Template.bind({});

DefaultActive.args = {
  children: 'Read more...',
};

DefaultActive.parameters = {
  pseudo: { active: true },
};

export const DefaultFocusVisible = Template.bind({});

DefaultFocusVisible.args = {
  children: 'Read more...',
};

DefaultFocusVisible.parameters = {
  pseudo: { focusVisible: true },
};

// Primary
export const PrimaryDefault = Template.bind({});

PrimaryDefault.args = {
  children: 'Read more...',
  appearance: 'primary-action-button',
};

export const PrimaryDisabled = Template.bind({});

PrimaryDisabled.args = {
  children: 'Read more...',
  appearance: 'primary-action-button',
  disabled: true,
};

export const PrimaryBusy = Template.bind({});

PrimaryBusy.args = {
  children: 'Read more...',
  appearance: 'primary-action-button',
  busy: true,
};

export const PrimaryHover = Template.bind({});

PrimaryHover.args = {
  children: 'Read more...',
  appearance: 'primary-action-button',
};

PrimaryHover.parameters = {
  pseudo: { hover: true },
};

export const PrimaryFocus = Template.bind({});

PrimaryFocus.args = {
  children: 'Read more...',
  appearance: 'primary-action-button',
};

PrimaryFocus.parameters = {
  pseudo: { focus: true },
};

export const PrimaryActive = Template.bind({});

PrimaryActive.args = {
  children: 'Read more...',
  appearance: 'primary-action-button',
};

PrimaryActive.parameters = {
  pseudo: { active: true },
};

export const PrimaryFocusVisible = Template.bind({});

PrimaryFocusVisible.args = {
  children: 'Read more...',
  appearance: 'primary-action-button',
};

PrimaryFocusVisible.parameters = {
  pseudo: { focusVisible: true },
};

// Secondary

export const SecondaryDefault = Template.bind({});

SecondaryDefault.args = {
  children: 'Read more...',
  appearance: 'secondary-action-button',
};

export const SecondaryDisabled = Template.bind({});

SecondaryDisabled.args = {
  children: 'Read more...',
  appearance: 'secondary-action-button',
  disabled: true,
};

export const SecondaryBusy = Template.bind({});

SecondaryBusy.args = {
  children: 'Read more...',
  appearance: 'secondary-action-button',
  busy: true,
};

export const SecondaryHover = Template.bind({});

SecondaryHover.args = {
  children: 'Read more...',
  appearance: 'secondary-action-button',
};

SecondaryHover.parameters = {
  pseudo: { hover: true },
};

export const SecondaryFocus = Template.bind({});

SecondaryFocus.args = {
  children: 'Read more...',
  appearance: 'secondary-action-button',
};

SecondaryFocus.parameters = {
  pseudo: { focus: true },
};

export const SecondaryActive = Template.bind({});

SecondaryActive.args = {
  children: 'Read more...',
  appearance: 'secondary-action-button',
};

SecondaryActive.parameters = {
  pseudo: { active: true },
};

export const SecondaryFocusVisible = Template.bind({});

SecondaryFocusVisible.args = {
  children: 'Read more...',
  appearance: 'secondary-action-button',
};

SecondaryFocusVisible.parameters = {
  pseudo: { focusVisible: true },
};

// Subtle

export const SubtleDefault = Template.bind({});

SubtleDefault.args = {
  children: 'Read more...',
  appearance: 'subtle-button',
};

export const SubtleDisabled = Template.bind({});

SubtleDisabled.args = {
  children: 'Read more...',
  appearance: 'subtle-button',
  disabled: true,
};

export const SubtleBusy = Template.bind({});

SubtleBusy.args = {
  children: 'Read more...',
  appearance: 'subtle-button',
  busy: true,
};

export const SubtleHover = Template.bind({});

SubtleHover.args = {
  children: 'Read more...',
  appearance: 'subtle-button',
};

SubtleHover.parameters = {
  pseudo: { hover: true },
};

export const SubtleFocus = Template.bind({});

SubtleFocus.args = {
  children: 'Read more...',
  appearance: 'subtle-button',
};

SubtleFocus.parameters = {
  pseudo: { focus: true },
};

export const SubtleActive = Template.bind({});

SubtleActive.args = {
  children: 'Read more...',
  appearance: 'subtle-button',
};

SubtleActive.parameters = {
  pseudo: { active: true },
};

export const SubtleFocusVisible = Template.bind({});

SubtleFocusVisible.args = {
  children: 'Read more...',
  appearance: 'subtle-button',
};

SubtleFocusVisible.parameters = {
  pseudo: { focusVisible: true },
};
