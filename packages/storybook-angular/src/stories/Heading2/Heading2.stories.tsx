import { componentWrapperDecorator, Meta, Story } from '@storybook/angular';
import { UtrechtHeading2 } from '@utrecht/component-library-angular';

export default {
  title: 'Angular Component/Heading 2',
  id: 'angular-heading-2',
  decorators: [componentWrapperDecorator((story) => `<div class="utrecht-document utrecht-theme">${story}</div>`)],
  component: UtrechtHeading2,
} as Meta<typeof UtrechtHeading2>;

const Template: Story = (args) => ({
  props: args,
  template: `<utrecht-heading-2>The Quick Brown Fox Jumps Over The Lazy Dog</utrecht-heading-2>`,
  component: UtrechtHeading2,
});

export const Default = Template.bind({});

Default.args = {};
