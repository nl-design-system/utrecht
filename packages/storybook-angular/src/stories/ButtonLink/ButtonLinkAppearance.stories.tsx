import { componentWrapperDecorator, Meta, Story } from '@storybook/angular';
import { UtrechtButtonLinkAttr } from '@utrecht/component-library-angular';
import { argTypes } from './argTypes';

export default {
  title: 'Angular Component/Button Link/Appearance',
  decorators: [componentWrapperDecorator((story) => `<div class="utrecht-document utrecht-theme">${story}</div>`)],
  id: 'angular-button-link--appearance',
  component: UtrechtButtonLinkAttr,
  argTypes,
} as Meta;

const Template: Story = (args: any) => ({
  props: args,
  template: `<a [external]="external" [href]="href" [appearance]="appearance" utrecht-button-link>Link</a>`,
  component: UtrechtButtonLinkAttr,
});

export const Primary = Template.bind({});

Primary.args = {
  appearance: 'primary-action-button',
};

export const Secondary = Template.bind({});

Secondary.args = {
  appearance: 'secondary-action-button',
};

export const Subtle = Template.bind({});

Subtle.args = {
  appearance: 'subtle-button',
};
