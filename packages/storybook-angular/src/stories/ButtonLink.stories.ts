import { componentWrapperDecorator, Meta, StoryObj } from '@storybook/angular';
import { UtrechtButtonLinkAttr } from '@utrecht/component-library-angular';

type ButtonLinkType = UtrechtButtonLinkAttr & {
  href?: string;
  rel?: string;
};

const buttonLinkMeta: Meta<ButtonLinkType> = {
  title: 'Angular Component/Button Link',
  id: 'angular-button-link',
  decorators: [componentWrapperDecorator((story) => `<div class="utrecht-document utrecht-theme">${story}</div>`)],
  component: UtrechtButtonLinkAttr,
  argTypes: {
    external: {
      name: 'external',
      type: { name: 'boolean', required: false },
      table: {
        category: 'Component API',
        defaultValue: { summary: false },
      },
    },
    href: {
      name: 'href',
      type: { name: 'string', required: false },
      table: {
        category: 'DOM API',
        defaultValue: { summary: '' },
      },
    },
    rel: {
      name: 'rel',
      type: { name: 'string', required: false },
      table: {
        category: 'DOM API',
        defaultValue: { summary: '' },
      },
    },
    appearance: {
      options: ['primary-action-button', 'secondary-action-button', 'subtle-button'],
      control: { type: 'select' },
      table: {
        category: 'Component API',
        defaultValue: { summary: false },
      },
    },
  },
};

export default buttonLinkMeta;
type Story = StoryObj<ButtonLinkType>;

const Template: Story = {
  render: (args) => ({
    props: args,
    template: '<a [external]="external" [appearance]="appearance" [href]="href" utrecht-button-link>Read More</a>',
    component: UtrechtButtonLinkAttr,
  }),
};

export const Default: Story = {
  ...Template,
  args: {},
};

export const Primary: Story = {
  ...Template,
  args: {
    appearance: 'primary-action-button',
  },
};

export const Secondary: Story = {
  ...Template,
  args: {
    appearance: 'secondary-action-button',
  },
};

export const Subtle: Story = {
  ...Template,
  args: {
    appearance: 'subtle-button',
  },
};

export const External: Story = {
  ...Template,
  args: {
    external: true,
  },
};

export const PrimaryHover: Story = {
  ...Template,
  args: {
    appearance: 'primary-action-button',
  },
  parameters: {
    pseudo: { hover: true },
  },
};

export const PrimaryFocus: Story = {
  ...Template,
  args: {
    appearance: 'primary-action-button',
  },
  parameters: {
    pseudo: { focus: true, focusVisible: true },
  },
};

export const PrimaryActive: Story = {
  ...Template,
  args: {
    appearance: 'primary-action-button',
  },
  parameters: {
    pseudo: { active: true },
  },
};

export const SecondaryHover: Story = {
  ...Template,
  args: {
    appearance: 'secondary-action-button',
  },
  parameters: {
    pseudo: { hover: true },
  },
};

export const SecondaryFocus: Story = {
  ...Template,
  args: {
    appearance: 'secondary-action-button',
  },
  parameters: {
    pseudo: { focus: true, focusVisible: true },
  },
};

export const SecondaryActive: Story = {
  ...Template,
  args: {
    appearance: 'secondary-action-button',
  },
  parameters: {
    pseudo: { active: true },
  },
};

export const SubtleHover: Story = {
  ...Template,
  args: {
    appearance: 'subtle-button',
  },
  parameters: {
    pseudo: { hover: true },
  },
};

export const SubtleFocus: Story = {
  ...Template,
  args: {
    appearance: 'subtle-button',
  },
  parameters: {
    pseudo: { focus: true, focusVisible: true },
  },
};

export const SubtleActive: Story = {
  ...Template,
  args: {
    appearance: 'subtle-button',
  },
  parameters: {
    pseudo: { active: true },
  },
};
