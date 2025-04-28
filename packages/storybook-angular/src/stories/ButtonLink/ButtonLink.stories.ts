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
  template: `
    <utrecht-button-link [external]="external" href="https://example.com/" [appearance]="appearance">Link</utrecht-button-link>
    <utrecht-button-link [external]="external" href="https://example.com/" [appearance]="appearance">
        <span slot="icon">icon</span>
        <span #labelcontent slot="label">label</span>
        default
    </utrecht-button-link>
    `,
  component: UtrechtButtonLinkAttr,
});

export const Default = Template.bind({});

Default.args = {};
