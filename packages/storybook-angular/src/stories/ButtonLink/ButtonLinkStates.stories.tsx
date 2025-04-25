import { componentWrapperDecorator, Meta, Story } from '@storybook/angular';
import { UtrechtButtonLinkAttr } from '@utrecht/component-library-angular';
import { argTypes } from './argTypes';

export default {
  title: 'Angular Component/Button Link/States',
  decorators: [componentWrapperDecorator((story) => `<div class="utrecht-document utrecht-theme">${story}</div>`)],
  id: 'angular-button-link--states',
  component: UtrechtButtonLinkAttr,
  argTypes,
  args: {
    href: 'https://example.com',
    linkContent: 'Read more...',
  },
} as Meta<typeof UtrechtButtonLinkAttr>;

const Template: Story = (args: any) => ({
  props: args,
  template: `<a [external]="external" [href]="href" [appearance]="appearance" utrecht-button-link>${args.linkContent}</a>`,
  component: UtrechtButtonLinkAttr,
});

export const DefaultToggle = Template.bind({});

DefaultToggle.args = {
  pressed: false,
};

export const DefaultTogglePressed = Template.bind({});

DefaultTogglePressed.args = {
  pressed: true,
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
