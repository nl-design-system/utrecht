import { Meta, Story } from '@storybook/angular';
import { UtrechtArticle } from '@utrecht/component-library-angular';

export default {
  title: 'Angular Component/Article',
  component: UtrechtArticle,
} as Meta;

const Template: Story = (args) => ({
  props: args,
  template: `<utrecht-article>
  <h1>Hello world</h1>
  <p>Lorem ipsum</p>
</utrecht-article>`,
});

export const Default = Template.bind({});

Default.args = {};
