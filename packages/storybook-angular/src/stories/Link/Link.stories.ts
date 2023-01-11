import { componentWrapperDecorator, Meta, Story } from '@storybook/angular';
import { UtrechtLinkAttr } from '@utrecht/component-library-angular';

export default {
  title: 'Angular Component/Link',
  id: 'angular-link',
  decorators: [componentWrapperDecorator((story) => `<div class="utrecht-document utrecht-theme">${story}</div>`)],
  component: UtrechtLinkAttr,
} as Meta<typeof UtrechtLinkAttr>;

const Template: Story<typeof UtrechtLinkAttr> = (args) => ({
  props: args,
  template: '<a [external]="external" href="https://example.com/" utrecht-link>Link</a>',
  component: UtrechtLinkAttr,
});

export const Default = Template.bind({});

Default.args = {};
