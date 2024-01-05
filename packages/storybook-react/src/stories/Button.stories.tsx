import { Meta, StoryObj } from '@storybook/react';
import { Button } from '@utrecht/component-library-react/dist/css-module';
import readme from '@utrecht/components/button/README.md?raw';
import tokensDefinition from '@utrecht/components/button/tokens.json';
import tokens from '@utrecht/design-tokens/dist/index.json';
import { designTokenStory } from './util';

const meta = {
  title: 'React Component/Button',
  id: 'react-button',
  component: Button,
  args: {
    children: 'Read more...',
  },
  parameters: {
    tokensPrefix: 'utrecht-button',
    tokens,
    tokensDefinition,
    docs: {
      description: {
        component: readme,
      },
    },
  },
  argTypes: {
    appearance: {
      control: { type: 'select' },
      options: [undefined, 'primary-action-button', 'secondary-action-button', 'subtle-button'],
    },
    type: {
      control: { type: 'select' },
      options: [undefined, 'button', 'submit', 'reset'],
    },
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;
export const Default: Story = {};

export const DefaultDisabled: Story = {
  args: {
    disabled: true,
    children: 'Read more...',
  },
};

export const DefaultToggle: Story = {
  args: {
    pressed: false,
    children: 'Toggle something',
  },
};

export const DefaultTogglePressed: Story = {
  args: {
    pressed: true,
    children: 'Toggle something',
  },
};

export const DefaultBusy: Story = {
  args: {
    children: 'Read more...',
    busy: true,
  },
};

export const DefaultHover: Story = {
  parameters: {
    pseudo: { hover: true },
  },
  args: {
    ...Default.args,
  },
};

export const DefaultFocus: Story = {
  parameters: {
    pseudo: { focus: true },
  },
  args: {
    ...Default.args,
  },
};

export const DefaultActive: Story = {
  parameters: {
    pseudo: { active: true },
  },
  args: {
    ...Default.args,
  },
};

export const DefaultFocusVisible: Story = {
  parameters: {
    pseudo: { focusVisible: true, focus: true },
  },
  args: {
    ...Default.args,
  },
};

// PrimaryAction
export const PrimaryActionDefault: Story = {
  args: {
    ...Default.args,
    appearance: 'primary-action-button',
  },
};

export const PrimaryActionDisabled: Story = {
  args: {
    ...Default.args,
    appearance: 'primary-action-button',
    disabled: true,
  },
};

export const PrimaryActionPressed: Story = {
  args: {
    ...Default.args,
    appearance: 'primary-action-button',
    pressed: true,
  },
};

export const PrimaryActionBusy: Story = {
  args: {
    ...Default.args,
    appearance: 'primary-action-button',
    busy: true,
  },
};

export const PrimaryActionHover: Story = {
  parameters: {
    pseudo: { hover: true },
  },
  args: {
    ...Default.args,
    appearance: 'primary-action-button',
  },
};

export const PrimaryActionFocus: Story = {
  parameters: {
    pseudo: { focus: true },
  },
  args: {
    ...Default.args,
    appearance: 'primary-action-button',
  },
};

export const PrimaryActionActive: Story = {
  parameters: {
    pseudo: { active: true },
    args: {
      ...Default.args,
      appearance: 'primary-action-button',
    },
  },
};

export const PrimaryActionFocusVisible: Story = {
  parameters: {
    pseudo: { focusVisible: true, focus: true },
  },
  args: {
    ...Default.args,
    appearance: 'primary-action-button',
  },
};

// SecondaryAction
export const SecondaryActionDefault: Story = {
  args: {
    ...Default.args,
    appearance: 'secondary-action-button',
  },
};

export const SecondaryActionDisabled: Story = {
  args: {
    ...Default.args,
    appearance: 'secondary-action-button',
    disabled: true,
  },
};

export const SecondaryActionPressed: Story = {
  args: {
    ...Default.args,
    appearance: 'secondary-action-button',
    pressed: true,
  },
};

export const SecondaryActionBusy: Story = {
  args: {
    ...Default.args,
    appearance: 'secondary-action-button',
    busy: true,
  },
};

export const SecondaryActionHover: Story = {
  parameters: {
    pseudo: { hover: true },
  },
  args: {
    ...Default.args,
    appearance: 'secondary-action-button',
  },
};

export const SecondaryActionFocus: Story = {
  parameters: {
    pseudo: { focus: true },
  },
  args: {
    ...Default.args,
    appearance: 'secondary-action-button',
  },
};

export const SecondaryActionActive: Story = {
  parameters: {
    pseudo: { active: true },
  },
  args: {
    ...Default.args,
    appearance: 'secondary-action-button',
  },
};

export const SecondaryActionFocusVisible: Story = {
  parameters: {
    pseudo: { focusVisible: true, focus: true },
  },
  args: {
    ...Default.args,
    appearance: 'secondary-action-button',
  },
};

// Subtle
export const SubtleDefault: Story = {
  args: {
    ...Default.args,
    appearance: 'subtle-button',
  },
};

export const SubtleDisabled: Story = {
  args: {
    ...Default.args,
    appearance: 'subtle-button',
    disabled: true,
  },
};

export const SubtlePressed: Story = {
  args: {
    ...Default.args,
    appearance: 'subtle-button',
    pressed: true,
  },
};

SubtleDisabled.args = {
  children: 'Read more...',
  appearance: 'subtle-button',
  disabled: true,
};

export const SubtleBusy: Story = {
  args: {
    ...Default.args,
    appearance: 'subtle-button',
    busy: true,
  },
};

export const SubtleHover: Story = {
  parameters: {
    pseudo: { hover: true },
  },
  args: {
    ...Default.args,
    appearance: 'subtle-button',
  },
};

export const SubtleFocus: Story = {
  parameters: {
    pseudo: { focus: true },
  },
  args: {
    ...Default.args,
    appearance: 'subtle-button',
  },
};

export const SubtleActive: Story = {
  parameters: {
    pseudo: { active: true },
  },
  args: {
    ...Default.args,
    appearance: 'subtle-button',
  },
};

export const SubtleFocusVisible: Story = {
  parameters: {
    pseudo: { focusVisible: true, focus: true },
  },
  args: {
    ...Default.args,
    appearance: 'subtle-button',
  },
};

export const DesignTokens = designTokenStory(meta);
