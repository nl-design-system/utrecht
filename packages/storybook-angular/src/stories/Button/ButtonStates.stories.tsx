import { componentWrapperDecorator, Meta, Story } from '@storybook/angular';
import { UtrechtButtonAttr } from '@utrecht/component-library-angular';
import { argTypes } from './argTypes';

export default {
  title: 'Angular Component/Button/Pseudo',
  decorators: [componentWrapperDecorator((story) => `<div class="utrecht-document utrecht-theme">${story}</div>`)],
  component: UtrechtButtonAttr,
  argTypes,
} as Meta;

const Template: Story = (args: any) => ({
  props: args,
  template: `<button [type]="type" [disabled]="disabled" [busy]="busy" [appearance]="appearance" utrecht-button >Button</button>`,
  component: UtrechtButtonAttr,
});

export const DefaultDisabled = Template.bind({});

DefaultDisabled.args = {
  disabled: true,
};

export const DefaultBusy = Template.bind({});

DefaultBusy.args = {
  busy: true,
};

export const DefaultHover = Template.bind({});

DefaultHover.args = {};

DefaultHover.parameters = {
  pseudo: { hover: true },
};

export const DefaultFocus = Template.bind({});

DefaultFocus.args = {};

DefaultFocus.parameters = {
  pseudo: { focus: true },
};

export const DefaultActive = Template.bind({});

DefaultActive.args = {};

DefaultActive.parameters = {
  pseudo: { active: true },
};

export const DefaultFocusVisible = Template.bind({});

DefaultFocusVisible.args = {};

DefaultFocusVisible.parameters = {
  pseudo: { focusVisible: true },
};

export const PrimaryDefault = Template.bind({});

PrimaryDefault.args = {
  appearance: 'primary-action-button',
};

export const PrimaryDisabled = Template.bind({});

PrimaryDisabled.args = {
  appearance: 'primary-action-button',
  disabled: true,
};

export const PrimaryBusy = Template.bind({});

PrimaryBusy.args = {
  appearance: 'primary-action-button',
  busy: true,
};

export const PrimaryHover = Template.bind({});

PrimaryHover.args = {
  appearance: 'primary-action-button',
};

PrimaryHover.parameters = {
  pseudo: { hover: true },
};

export const PrimaryFocus = Template.bind({});

PrimaryFocus.args = {
  appearance: 'primary-action-button',
};

PrimaryFocus.parameters = {
  pseudo: { focus: true },
};

export const PrimaryActive = Template.bind({});

PrimaryActive.args = {
  appearance: 'primary-action-button',
};

PrimaryActive.parameters = {
  pseudo: { active: true },
};

export const PrimaryFocusVisible = Template.bind({});

PrimaryFocusVisible.args = {
  appearance: 'primary-action-button',
};

PrimaryFocusVisible.parameters = {
  pseudo: { focusVisible: true },
};

export const SecondaryDefault = Template.bind({});

SecondaryDefault.args = {
  appearance: 'secondary-action-button',
};

export const SecondaryDisabled = Template.bind({});

SecondaryDisabled.args = {
  appearance: 'secondary-action-button',
  disabled: true,
};

export const SecondaryBusy = Template.bind({});

SecondaryBusy.args = {
  appearance: 'secondary-action-button',
  busy: true,
};

export const SecondaryHover = Template.bind({});

SecondaryHover.args = {
  appearance: 'secondary-action-button',
};

SecondaryHover.parameters = {
  pseudo: { hover: true },
};

export const SecondaryFocus = Template.bind({});

SecondaryFocus.args = {
  appearance: 'secondary-action-button',
};

SecondaryFocus.parameters = {
  pseudo: { focus: true },
};

export const SecondaryActive = Template.bind({});

SecondaryActive.args = {
  appearance: 'secondary-action-button',
};

SecondaryActive.parameters = {
  pseudo: { active: true },
};

export const SecondaryFocusVisible = Template.bind({});

SecondaryFocusVisible.args = {
  appearance: 'secondary-action-button',
};

SecondaryFocusVisible.parameters = {
  pseudo: { focusVisible: true },
};

export const SubtleDefault = Template.bind({});

SubtleDefault.args = {
  appearance: 'subtle-button',
};

export const SubtleDisabled = Template.bind({});

SubtleDisabled.args = {
  appearance: 'subtle-button',
  disabled: true,
};

export const SubtleBusy = Template.bind({});

SubtleBusy.args = {
  appearance: 'subtle-button',
  busy: true,
};

export const SubtleHover = Template.bind({});

SubtleHover.args = {
  appearance: 'subtle-button',
};

SubtleHover.parameters = {
  pseudo: { hover: true },
};

export const SubtleFocus = Template.bind({});

SubtleFocus.args = {
  appearance: 'subtle-button',
};

SubtleFocus.parameters = {
  pseudo: { focus: true },
};

export const SubtleActive = Template.bind({});

SubtleActive.args = {
  appearance: 'subtle-button',
};

SubtleActive.parameters = {
  pseudo: { active: true },
};

export const SubtleFocusVisible = Template.bind({});

SubtleFocusVisible.args = {
  appearance: 'subtle-button',
};

SubtleFocusVisible.parameters = {
  pseudo: { focusVisible: true },
};
