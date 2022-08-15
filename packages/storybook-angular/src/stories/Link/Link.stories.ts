import { componentWrapperDecorator, Meta, Story } from '@storybook/angular';
import { UtrechtLinkAttr } from '@utrecht/component-library-angular';

export default {
  title: 'Angular Component/Link',
  decorators: [componentWrapperDecorator((story) => `<div class="utrecht-document utrecht-theme">${story}</div>`)],
  component: UtrechtLinkAttr,
} as Meta;

const Template: Story = (args) => ({
  props: args,
  template: '<a href="https://example.com/" utrecht-link>Link</a>',
});

export const Default = Template.bind({});

Default.args = {};
