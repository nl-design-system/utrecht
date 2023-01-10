import { componentWrapperDecorator, Meta, Story } from '@storybook/angular';
import { UtrechtHeading5 } from '@utrecht/component-library-angular';

export default {
  title: 'Angular Component/Heading 5',
  id: 'angular-heading-5',
  decorators: [componentWrapperDecorator((story) => `<div class="utrecht-document utrecht-theme">${story}</div>`)],
  component: UtrechtHeading5,
} as Meta<typeof UtrechtHeading5>;

const Template: Story = (args) => ({
  props: args,
  template: `<utrecht-heading-5>The Quick Brown Fox Jumps Over The Lazy Dog</utrecht-heading-5>`,
  component: UtrechtHeading5,
});

export const Default = Template.bind({});

Default.args = {};
