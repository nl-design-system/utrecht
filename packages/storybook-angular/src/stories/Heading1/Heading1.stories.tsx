import { componentWrapperDecorator, Meta, Story } from '@storybook/angular';
import { UtrechtHeading1 } from '@utrecht/component-library-angular';

export default {
  title: 'Angular Component/Heading 1',
  id: 'angular-heading-1',
  decorators: [componentWrapperDecorator((story) => `<div class="utrecht-document utrecht-theme">${story}</div>`)],
  component: UtrechtHeading1,
} as Meta<typeof UtrechtHeading1>;

const Template: Story = (args) => ({
  props: args,
  template: `<utrecht-heading-1>The Quick Brown Fox Jumps Over The Lazy Dog</utrecht-heading-1>`,
  component: UtrechtHeading1,
});

export const Default = Template.bind({});

Default.args = {};
