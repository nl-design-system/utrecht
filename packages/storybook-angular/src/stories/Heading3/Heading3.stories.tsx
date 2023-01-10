import { componentWrapperDecorator, Meta, Story } from '@storybook/angular';
import { UtrechtHeading3 } from '@utrecht/component-library-angular';

export default {
  title: 'Angular Component/Heading 3',
  id: 'angular-heading-3',
  decorators: [componentWrapperDecorator((story) => `<div class="utrecht-document utrecht-theme">${story}</div>`)],
  component: UtrechtHeading3,
} as Meta<typeof UtrechtHeading3>;

const Template: Story = (args) => ({
  props: args,
  template: `<utrecht-heading-3>The Quick Brown Fox Jumps Over The Lazy Dog</utrecht-heading-3>`,
  component: UtrechtHeading3,
});

export const Default = Template.bind({});

Default.args = {};
