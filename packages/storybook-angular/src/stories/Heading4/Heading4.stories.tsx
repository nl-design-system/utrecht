import { componentWrapperDecorator, Meta, Story } from '@storybook/angular';
import { UtrechtHeading4 } from '@utrecht/component-library-angular';

export default {
  title: 'Angular Component/Heading 4',
  id: 'angular-heading-4',
  decorators: [componentWrapperDecorator((story) => `<div class="utrecht-document utrecht-theme">${story}</div>`)],
  component: UtrechtHeading4,
} as Meta<typeof UtrechtHeading4>;

const Template: Story = (args) => ({
  props: args,
  template: `<utrecht-heading-4>The Quick Brown Fox Jumps Over The Lazy Dog</utrecht-heading-4>`,
  component: UtrechtHeading4,
});

export const Default = Template.bind({});

Default.args = {};
