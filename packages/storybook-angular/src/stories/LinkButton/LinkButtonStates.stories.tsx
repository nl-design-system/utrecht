import { componentWrapperDecorator, Meta, Story } from '@storybook/angular';
import { UtrechtLinkButtonAttr } from '@utrecht/component-library-angular';
import { argTypes } from './argTypes';

export default {
  title: 'Angular Component/Link Button/Pseudo',
  decorators: [componentWrapperDecorator((story) => `<div class="utrecht-document utrecht-theme">${story}</div>`)],
  component: UtrechtLinkButtonAttr,
  argTypes,
} as Meta<typeof UtrechtLinkButtonAttr>;

const Template: Story = (args: any) => ({
  props: args,
  template: `<button [type]="type" [disabled]="disabled" [busy]="busy" utrecht-link-button >Button</button>`,
  component: UtrechtLinkButtonAttr,
});

export const Disabled = Template.bind({});

Disabled.args = {
  disabled: true,
};

export const Toggle = Template.bind({});

Toggle.args = {
  pressed: false,
};

export const TogglePressed = Template.bind({});

TogglePressed.args = {
  pressed: true,
};

export const Busy = Template.bind({});

Busy.args = {
  busy: true,
};

export const Hover = Template.bind({});

Hover.args = {};

Hover.parameters = {
  pseudo: { hover: true },
};

export const Focus = Template.bind({});

Focus.args = {};

Focus.parameters = {
  pseudo: { focus: true },
};

export const Active = Template.bind({});

Active.args = {};

Active.parameters = {
  pseudo: { active: true },
};

export const FocusVisible = Template.bind({});

FocusVisible.args = {};

FocusVisible.parameters = {
  pseudo: { focusVisible: true },
};
