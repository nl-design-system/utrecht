import { Meta, StoryObj } from '@storybook/react';
import { Button } from '@utrecht/component-library-react/dist/css-module/index';
import readme from '@utrecht/components/button/README.md';
import tokensDefinition from '@utrecht/components/button/tokens.json';
import tokens from '@utrecht/design-tokens/dist/index.json';
import React from 'react';
import { designTokenStory } from './util';

const meta = {
  title: 'React Component/Button',
  id: 'react-button',
  component: Button,
  tags: ['autodocs'],
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
      type: 'select',
      options: [undefined, 'primary-action-button', 'secondary-action-button', 'subtle-button'],
    },
    type: {
      type: 'select',
      options: [undefined, 'button', 'submit', 'reset'],
    },
  },
} as Meta<typeof Button>;

export default meta;

const Template: StoryObj<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: 'Read more...',
};

export const DefaultDisabled = Template.bind({});

DefaultDisabled.args = {
  children: 'Read more...',
  disabled: true,
};

export const DefaultBusy = Template.bind({});

DefaultBusy.args = {
  children: 'Read more...',
  busy: true,
};

export const DefaultHover = Template.bind({});

DefaultHover.args = {
  children: 'Read more...',
};

DefaultHover.parameters = {
  pseudo: { hover: true },
};

export const DefaultFocus = Template.bind({});

DefaultFocus.args = {
  children: 'Read more...',
};

DefaultFocus.parameters = {
  pseudo: { focus: true },
};

export const DefaultActive = Template.bind({});

DefaultActive.args = {
  children: 'Read more...',
};

DefaultActive.parameters = {
  pseudo: { active: true },
};

export const DefaultFocusVisible = Template.bind({});

DefaultFocusVisible.args = {
  children: 'Read more...',
};

DefaultFocusVisible.parameters = {
  pseudo: { focusVisible: true },
};

// PrimaryAction
export const PrimaryActionDefault = Template.bind({});

PrimaryActionDefault.args = {
  children: 'Read more...',
  appearance: 'primary-action-button',
};

export const PrimaryActionDisabled = Template.bind({});

PrimaryActionDisabled.args = {
  children: 'Read more...',
  appearance: 'primary-action-button',
  disabled: true,
};

export const PrimaryActionBusy = Template.bind({});

PrimaryActionBusy.args = {
  children: 'Read more...',
  appearance: 'primary-action-button',
  busy: true,
};

export const PrimaryActionHover = Template.bind({});

PrimaryActionHover.args = {
  children: 'Read more...',
  appearance: 'primary-action-button',
};

PrimaryActionHover.parameters = {
  pseudo: { hover: true },
};

export const PrimaryActionFocus = Template.bind({});

PrimaryActionFocus.args = {
  children: 'Read more...',
  appearance: 'primary-action-button',
};

PrimaryActionFocus.parameters = {
  pseudo: { focus: true },
};

export const PrimaryActionActive = Template.bind({});

PrimaryActionActive.args = {
  children: 'Read more...',
  appearance: 'primary-action-button',
};

PrimaryActionActive.parameters = {
  pseudo: { active: true },
};

export const PrimaryActionFocusVisible = Template.bind({});

PrimaryActionFocusVisible.args = {
  children: 'Read more...',
  appearance: 'primary-action-button',
};

PrimaryActionFocusVisible.parameters = {
  pseudo: { focusVisible: true },
};

// SecondaryAction

export const SecondaryActionDefault = Template.bind({});

SecondaryActionDefault.args = {
  children: 'Read more...',
  appearance: 'secondary-action-button',
};

export const SecondaryActionDisabled = Template.bind({});

SecondaryActionDisabled.args = {
  children: 'Read more...',
  appearance: 'secondary-action-button',
  disabled: true,
};

export const SecondaryActionBusy = Template.bind({});

SecondaryActionBusy.args = {
  children: 'Read more...',
  appearance: 'secondary-action-button',
  busy: true,
};

export const SecondaryActionHover = Template.bind({});

SecondaryActionHover.args = {
  children: 'Read more...',
  appearance: 'secondary-action-button',
};

SecondaryActionHover.parameters = {
  pseudo: { hover: true },
};

export const SecondaryActionFocus = Template.bind({});

SecondaryActionFocus.args = {
  children: 'Read more...',
  appearance: 'secondary-action-button',
};

SecondaryActionFocus.parameters = {
  pseudo: { focus: true },
};

export const SecondaryActionActive = Template.bind({});

SecondaryActionActive.args = {
  children: 'Read more...',
  appearance: 'secondary-action-button',
};

SecondaryActionActive.parameters = {
  pseudo: { active: true },
};

export const SecondaryActionFocusVisible = Template.bind({});

SecondaryActionFocusVisible.args = {
  children: 'Read more...',
  appearance: 'secondary-action-button',
};

SecondaryActionFocusVisible.parameters = {
  pseudo: { focusVisible: true },
};

// Subtle

export const SubtleDefault = Template.bind({});

SubtleDefault.args = {
  children: 'Read more...',
  appearance: 'subtle-button',
};

export const SubtleDisabled = Template.bind({});

SubtleDisabled.args = {
  children: 'Read more...',
  appearance: 'subtle-button',
  disabled: true,
};

export const SubtleBusy = Template.bind({});

SubtleBusy.args = {
  children: 'Read more...',
  appearance: 'subtle-button',
  busy: true,
};

export const SubtleHover = Template.bind({});

SubtleHover.args = {
  children: 'Read more...',
  appearance: 'subtle-button',
};

SubtleHover.parameters = {
  pseudo: { hover: true },
};

export const SubtleFocus = Template.bind({});

SubtleFocus.args = {
  children: 'Read more...',
  appearance: 'subtle-button',
};

SubtleFocus.parameters = {
  pseudo: { focus: true },
};

export const SubtleActive = Template.bind({});

SubtleActive.args = {
  children: 'Read more...',
  appearance: 'subtle-button',
};

SubtleActive.parameters = {
  pseudo: { active: true },
};

export const SubtleFocusVisible = Template.bind({});

SubtleFocusVisible.args = {
  children: 'Read more...',
  appearance: 'subtle-button',
};

SubtleFocusVisible.parameters = {
  pseudo: { focusVisible: true },
};

export const DesignTokens = designTokenStory(meta);
