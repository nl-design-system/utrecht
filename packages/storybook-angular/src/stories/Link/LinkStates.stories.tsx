import { componentWrapperDecorator, Meta, Story } from '@storybook/angular';
import { UtrechtLinkAttr } from '@utrecht/component-library-angular';
import { argTypes } from './argTypes';

export default {
  title: 'Angular Component/Link/States',
  decorators: [componentWrapperDecorator((story) => `<div class="utrecht-document utrecht-theme">${story}</div>`)],
  id: 'angular-link--states',
  component: UtrechtLinkAttr,
  argTypes,
  args: {
    href: 'https://example.com',
    linkContent: 'Read more...',
  },
} as Meta<typeof UtrechtLinkAttr>;

const Template: Story = (args: any) => ({
  props: args,
  template: `<a [external]="external" [href]="href" utrecht-link>${args.linkContent}</a>`,
  component: UtrechtLinkAttr,
});

export const Hover = Template.bind({});

Hover.parameters = {
  pseudo: {
    hover: true,
    link: true,
  },
};

export const Focus = Template.bind({});

Focus.parameters = {
  pseudo: {
    focus: true,
    link: true,
  },
};

export const FocusVisible = Template.bind({});

FocusVisible.parameters = {
  pseudo: {
    focus: true,
    focusVisible: true,
    link: true,
  },
};

export const Active = Template.bind({});

Active.parameters = {
  pseudo: {
    active: true,
    link: true,
  },
};

export const Visited = Template.bind({});

Visited.parameters = {
  pseudo: {
    link: true,
    visited: true,
  },
};
