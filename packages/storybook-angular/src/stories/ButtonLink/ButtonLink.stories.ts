import { componentWrapperDecorator, Meta, Story } from '@storybook/angular';
import { UtrechtButtonLinkAttr } from '@utrecht/component-library-angular';

export default {
  title: 'Angular Component/Button Link',
  id: 'angular-button-link',
  decorators: [componentWrapperDecorator((story) => `<div class="utrecht-document utrecht-theme">${story}</div>`)],
  component: UtrechtButtonLinkAttr,
} as Meta<typeof UtrechtButtonLinkAttr>;

const Template: Story<typeof UtrechtButtonLinkAttr> = (args) => ({
  props: args,
  template:
    '<a [external]="external" href="https://example.com/" [appearance]="appearance" utrecht-button-link>Link</a>',
  component: UtrechtButtonLinkAttr,
});

export const Default = Template.bind({});

Default.args = {};
