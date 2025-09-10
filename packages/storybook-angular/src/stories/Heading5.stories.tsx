import { componentWrapperDecorator, Meta, StoryObj } from '@storybook/angular';
import { UtrechtHeading1 } from '@utrecht/component-library-angular';

const meta: Meta<typeof UtrechtHeading1> = {
  title: 'Angular Component/Heading 5',
  id: 'angular-heading-5',
  decorators: [componentWrapperDecorator((story) => `<div class="utrecht-document utrecht-theme">${story}</div>`)],
  component: UtrechtHeading1,
};
export default meta;

type Story = StoryObj<typeof UtrechtHeading1>;

export const Default: Story = {
  render: (args) => ({
    props: args,
    template: `<utrecht-heading-5>The Quick Brown Fox Jumps Over The Lazy Dog</utrecht-heading-5>`,
  }),
};
