import { componentWrapperDecorator, Meta, Story } from '@storybook/angular';
import { UtrechtLinkButtonAttr } from '@utrecht/component-library-angular';
import { argTypes } from './argTypes';

export default {
  title: 'Angular Component/Link Button',
  decorators: [componentWrapperDecorator((story) => `<div class="utrecht-document utrecht-theme">${story}</div>`)],
  component: UtrechtLinkButtonAttr,
  argTypes,
} as Meta;

const Template: Story = (args: any) => ({
  props: args,
  template: `<button [type]="type" [disabled]="disabled" [busy]="busy" utrecht-link-button >Button</button>`,
  component: UtrechtLinkButtonAttr,
});

export const Default = Template.bind({});

Default.args = {};
