import { Meta, StoryObj } from '@storybook/angular';
import { UtrechtArticle } from '@utrecht/component-library-angular';

const meta: Meta<UtrechtArticle> = {
  title: 'Angular Component/Article',
  component: UtrechtArticle,
};
export default meta;

type Story = StoryObj<UtrechtArticle>;
export const Default: Story = {
  render: (args) => ({
    props: args,
    template: `<utrecht-article>
  <h1>Hello world</h1>
  <p>Lorem ipsum</p>
</utrecht-article>`,
  }),
  args: {},
};
