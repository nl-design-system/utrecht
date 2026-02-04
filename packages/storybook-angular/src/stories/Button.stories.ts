import { componentWrapperDecorator, Meta, StoryObj } from '@storybook/angular';
import { UtrechtButtonAttr } from '@utrecht/component-library-angular';

interface UtrechtButtonProps extends Omit<UtrechtButtonAttr, 'pressed'> {
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  pressed?: boolean;
}

const meta: Meta<UtrechtButtonProps> = {
  title: 'Angular Component/Button',
  decorators: [componentWrapperDecorator((story) => `<div class="utrecht-document utrecht-theme">${story}</div>`)],
  component: UtrechtButtonAttr,
  argTypes: {
    appearance: {
      control: { type: 'select', required: false },
      options: ['primary-action-button', 'secondary-action-button', 'subtle-button'],
      table: {
        category: 'API',
        defaultValue: { summary: undefined },
      },
    },
    busy: {
      type: { name: 'boolean', required: false },
      table: {
        category: 'API',
        defaultValue: { summary: undefined },
      },
    },
    type: {
      control: { name: 'select', required: false },
      options: ['button', 'submit', 'reset'],
      table: {
        category: 'API',
        defaultValue: { summary: '' },
      },
    },
    disabled: {
      name: 'disabled',
      control: { name: 'boolean', required: false },
      table: {
        category: 'HTML',
        defaultValue: { summary: '' },
      },
    },
  },
};
export default meta;
type Story = StoryObj<UtrechtButtonProps>;

export const Default: Story = {
  render: (args) => ({
    props: args,
    template: `<button [type]="type" [disabled]="disabled" [busy]="busy" [appearance]="appearance" utrecht-button >Button</button>`,
  }),
};

export const Primary: Story = {
  render: (args) => ({
    props: args,
    template: `<button [type]="type" [disabled]="disabled" [busy]="busy" [appearance]="appearance" utrecht-button >Button</button>`,
  }),
  args: {
    appearance: 'primary-action-button',
  },
};

export const Secondary: Story = {
  render: (args) => ({
    props: args,
    template: `<button [type]="type" [disabled]="disabled" [busy]="busy" [appearance]="appearance" utrecht-button >Button</button>`,
  }),
  args: {
    appearance: 'secondary-action-button',
  },
};

export const Subtle: Story = {
  render: (args) => ({
    props: args,
    template: `<button [type]="type" [disabled]="disabled" [busy]="busy" [appearance]="appearance" utrecht-button >Button</button>`,
  }),
  args: {
    appearance: 'subtle-button',
  },
};

export const Disabled: Story = {
  render: (args) => ({
    props: args,
    template: `<button [type]="type" [disabled]="disabled" [busy]="busy" [appearance]="appearance" utrecht-button >Button</button>`,
  }),
  args: {
    disabled: true,
  },
};

export const Toggle: Story = {
  render: (args) => ({
    props: args,
    template: `<button [type]="type" [disabled]="disabled" [busy]="busy" [appearance]="appearance" utrecht-button >Button</button>`,
  }),
  args: {
    pressed: true,
  },
};

export const TogglePressed: Story = {
  render: (args) => ({
    props: args,
    template: `<button [type]="type" [disabled]="disabled" [busy]="busy" [appearance]="appearance" utrecht-button >Button</button>`,
  }),
  args: {
    pressed: true,
  },
};

export const Busy: Story = {
  render: (args) => ({
    props: args,
    template: `<button [type]="type" [disabled]="disabled" [busy]="busy" [appearance]="appearance" utrecht-button >Button</button>`,
  }),
  args: {
    busy: true,
  },
};

export const Hover: Story = {
  render: (args) => ({
    props: args,
    template: `<button [type]="type" [disabled]="disabled" [busy]="busy" [appearance]="appearance" utrecht-button >Button</button>`,
  }),
  parameters: {
    pseudo: { hover: true },
  },
};
export const Focus: Story = {
  render: (args) => ({
    props: args,
    template: `<button [type]="type" [disabled]="disabled" [busy]="busy" [appearance]="appearance" utrecht-button >Button</button>`,
  }),
  parameters: {
    pseudo: { focus: true },
  },
};
export const Active: Story = {
  render: (args) => ({
    props: args,
    template: `<button [type]="type" [disabled]="disabled" [busy]="busy" [appearance]="appearance" utrecht-button >Button</button>`,
  }),
  parameters: {
    pseudo: { active: true },
  },
};

export const FocusVisible: Story = {
  render: (args) => ({
    props: args,
    template: `<button [type]="type" [disabled]="disabled" [busy]="busy" [appearance]="appearance" utrecht-button >Button</button>`,
  }),
  parameters: {
    pseudo: { focusVisible: true },
  },
};

export const PrimaryDisabled: Story = {
  render: (args) => ({
    props: args,
    template: `<button [type]="type" [disabled]="disabled" [busy]="busy" [appearance]="appearance" utrecht-button >Button</button>`,
  }),
  args: {
    appearance: 'primary-action-button',
    disabled: true,
  },
};
export const PrimaryBusy: Story = {
  render: (args) => ({
    props: args,
    template: `<button [type]="type" [disabled]="disabled" [busy]="busy" [appearance]="appearance" utrecht-button >Button</button>`,
  }),
  args: {
    appearance: 'primary-action-button',
    busy: true,
  },
};

export const PrimaryHover: Story = {
  render: (args) => ({
    props: args,
    template: `<button [type]="type" [disabled]="disabled" [busy]="busy" [appearance]="appearance" utrecht-button >Button</button>`,
  }),
  args: {
    appearance: 'primary-action-button',
  },
  parameters: {
    pseudo: { hover: true },
  },
};
export const PrimaryFocus: Story = {
  render: (args) => ({
    props: args,
    template: `<button [type]="type" [disabled]="disabled" [busy]="busy" [appearance]="appearance" utrecht-button >Button</button>`,
  }),
  args: {
    appearance: 'primary-action-button',
  },
  parameters: {
    pseudo: { focus: true },
  },
};

export const PrimaryActive: Story = {
  render: (args) => ({
    props: args,
    template: `<button [type]="type" [disabled]="disabled" [busy]="busy" [appearance]="appearance" utrecht-button >Button</button>`,
  }),
  args: {
    appearance: 'primary-action-button',
  },
  parameters: {
    pseudo: { active: true },
  },
};
export const PrimaryFocusVisible: Story = {
  render: (args) => ({
    props: args,
    template: `<button [type]="type" [disabled]="disabled" [busy]="busy" [appearance]="appearance" utrecht-button >Button</button>`,
  }),
  args: {
    appearance: 'primary-action-button',
  },
  parameters: {
    pseudo: { focusVisible: true },
  },
};

export const SecondaryDisabled: Story = {
  render: (args) => ({
    props: args,
    template: `<button [type]="type" [disabled]="disabled" [busy]="busy" [appearance]="appearance" utrecht-button >Button</button>`,
  }),
  args: {
    appearance: 'secondary-action-button',
    disabled: true,
  },
};

export const SecondaryBusy: Story = {
  render: (args) => ({
    props: args,
    template: `<button [type]="type" [disabled]="disabled" [busy]="busy" [appearance]="appearance" utrecht-button >Button</button>`,
  }),
  args: {
    appearance: 'secondary-action-button',
    busy: true,
  },
};
export const SecondaryHover: Story = {
  render: (args) => ({
    props: args,
    template: `<button [type]="type" [disabled]="disabled" [busy]="busy" [appearance]="appearance" utrecht-button >Button</button>`,
  }),
  args: {
    appearance: 'secondary-action-button',
  },
  parameters: {
    pseudo: { hover: true },
  },
};
export const SecondaryFocus: Story = {
  render: (args) => ({
    props: args,
    template: `<button [type]="type" [disabled]="disabled" [busy]="busy" [appearance]="appearance" utrecht-button >Button</button>`,
  }),
  args: {
    appearance: 'secondary-action-button',
  },
  parameters: {
    pseudo: { focus: true },
  },
};

export const SecondaryActive: Story = {
  render: (args) => ({
    props: args,
    template: `<button [type]="type" [disabled]="disabled" [busy]="busy" [appearance]="appearance" utrecht-button >Button</button>`,
  }),
  args: {
    appearance: 'secondary-action-button',
  },
  parameters: {
    pseudo: { active: true },
  },
};

export const SecondaryFocusVisible: Story = {
  render: (args) => ({
    props: args,
    template: `<button [type]="type" [disabled]="disabled" [busy]="busy" [appearance]="appearance" utrecht-button >Button</button>`,
  }),
  args: {
    appearance: 'secondary-action-button',
  },
  parameters: {
    pseudo: { focusVisible: true },
  },
};

export const SubtleDisabled: Story = {
  render: (args) => ({
    props: args,
    template: `<button [type]="type" [disabled]="disabled" [busy]="busy" [appearance]="appearance" utrecht-button >Button</button>`,
  }),
  args: {
    appearance: 'subtle-button',
    disabled: true,
  },
};

export const SubtleBusy: Story = {
  render: (args) => ({
    props: args,
    template: `<button [type]="type" [disabled]="disabled" [busy]="busy" [appearance]="appearance" utrecht-button >Button</button>`,
  }),
  args: {
    appearance: 'subtle-button',
    busy: true,
  },
};
export const SubtleHover: Story = {
  render: (args) => ({
    props: args,
    template: `<button [type]="type" [disabled]="disabled" [busy]="busy" [appearance]="appearance" utrecht-button >Button</button>`,
  }),
  args: {
    appearance: 'subtle-button',
  },
  parameters: {
    pseudo: { hover: true },
  },
};

export const SubtleFocus: Story = {
  render: (args) => ({
    props: args,
    template: `<button [type]="type" [disabled]="disabled" [busy]="busy" [appearance]="appearance" utrecht-button >Button</button>`,
  }),
  args: {
    appearance: 'subtle-button',
  },
  parameters: {
    pseudo: { focus: true },
  },
};
export const SubtleActive: Story = {
  render: (args) => ({
    props: args,
    template: `<button [type]="type" [disabled]="disabled" [busy]="busy" [appearance]="appearance" utrecht-button >Button</button>`,
  }),
  args: {
    appearance: 'subtle-button',
  },
  parameters: {
    pseudo: { active: true },
  },
};

export const SubtleFocusVisible: Story = {
  render: (args) => ({
    props: args,
    template: `<button [type]="type" [disabled]="disabled" [busy]="busy" [appearance]="appearance" utrecht-button >Button</button>`,
  }),
  args: {
    appearance: 'subtle-button',
  },
  parameters: {
    pseudo: { focusVisible: true },
  },
};
