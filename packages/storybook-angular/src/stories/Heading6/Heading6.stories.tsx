import { componentWrapperDecorator, Meta, Story } from '@storybook/angular';
import { UtrechtHeading6 } from '@utrecht/component-library-angular';

export default {
  title: 'Angular Component/Heading 6',
  id: 'angular-heading-6',
  decorators: [componentWrapperDecorator((story) => `<div class="utrecht-document utrecht-theme">${story}</div>`)],
  component: UtrechtHeading6,
} as Meta<typeof UtrechtHeading6>;

const Template: Story = (args) => ({
  props: args,
  template: `<utrecht-heading-6>The Quick Brown Fox Jumps Over The Lazy Dog</utrecht-heading-6>`,
  component: UtrechtHeading6,
});

export const Default = Template.bind({});

Default.args = {};
