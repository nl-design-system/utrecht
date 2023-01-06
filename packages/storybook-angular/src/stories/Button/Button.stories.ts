import { componentWrapperDecorator, Meta, Story } from '@storybook/angular';
import { UtrechtButtonAttr } from '@utrecht/component-library-angular';
import { argTypes } from './argTypes';

export default {
  title: 'Angular Component/Button',
  decorators: [componentWrapperDecorator((story) => `<div class="utrecht-document utrecht-theme">${story}</div>`)],
  component: UtrechtButtonAttr,
  argTypes,
} as Meta;

const Template: Story = (args: any) => ({
  props: args,
  template: `<button [type]="type" [disabled]="disabled" [busy]="busy" [appearance]="appearance" utrecht-button >Button</button>`,
  component: UtrechtButtonAttr,
});

export const Default = Template.bind({});

Default.args = {};
