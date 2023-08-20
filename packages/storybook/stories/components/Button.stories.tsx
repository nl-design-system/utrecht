import { Meta, StoryObj } from '@storybook/react';
import { Button } from '@utrecht/component-library-react/dist/css-module';
import { ButtonProps } from '@utrecht/component-library-react/src/Button';
import readme from '@utrecht/components/button/README.md?raw';
import tokensDefinition from '@utrecht/components/button/tokens.json';
import tokens from '@utrecht/design-tokens/dist/index.json';
import iconSet from '@utrecht/icon/dist/index.json';
import clsx from 'clsx';
import React, { createElement } from 'react';

interface ButtonStoryProps extends ButtonProps {
  active: boolean;
  focus: boolean;
  focusVisible: boolean;
  hover: boolean;
  iconBefore?: string;
  iconAfter?: string;
  textContent?: string;
}

const ButtonStory = ({
  active,
  focus,
  focusVisible,
  hover,
  iconBefore,
  iconAfter,
  textContent,
  ...props
}: ButtonStoryProps) => {
  return (
    <Button
      className={clsx(
        active && 'utrecht-button--active',
        focus && 'utrecht-button--focus',
        focusVisible && 'utrecht-button--focus-visible',
        hover && 'utrecht-button--hover',
      )}
      {...props}
    >
      {iconBefore && createElement(iconBefore)}
      {textContent}
      {iconAfter && createElement(iconAfter)}
    </Button>
  );
};

const meta = {
  title: 'CSS Component/Button',
  id: 'css-button',
  component: Button,
  args: {
    active: false,
    appearance: '',
    busy: false,
    disabled: false,
    focus: false,
    focusVisible: false,
    hint: '',
    hover: false,
    pressed: false,
    textContent: 'Read more...',
    type: 'button',
    iconBefore: '',
    iconAfter: '',
  },
  argTypes: {
    active: {
      description: 'Active',
      control: 'boolean',
    },
    appearance: {
      description: 'Appearance',
      control: { type: 'select' },
      options: ['', 'button', 'primary-action-button', 'secondary-action-button', 'subtle-button'],
    },
    busy: {
      description: 'Busy',
      control: 'boolean',
    },
    disabled: {
      description: 'Disabled',
      control: 'boolean',
    },
    focus: {
      description: 'Focus',
      control: 'boolean',
    },
    focusVisible: {
      description: 'Focus visible',
      control: 'boolean',
    },
    hover: {
      description: 'Hover',
      control: 'boolean',
    },
    pressed: {
      description: 'Pressed',
      control: { type: 'select' },
      options: [undefined, false, true],
    },
    children: {
      description: 'Button text',
      control: 'text',
    },
    type: {
      control: { type: 'select' },
      options: ['', 'button', 'reset', 'submit'],
    },
    hint: {
      control: { type: 'select' },
      options: ['', 'danger', 'warning', 'ready'],
    },
    iconBefore: {
      description: 'Icon before textContent',
      control: { type: 'select' },
      options: ['', ...iconSet.map(({ id }) => id)],
    },
    iconAfter: {
      description: 'Icon after textContent',
      control: { type: 'select' },
      options: ['', ...iconSet.map(({ id }) => id)],
    },
  },
  render: ButtonStory,
  parameters: {
    tokensPrefix: 'utrecht-button',
    status: {
      type: 'WORK IN PROGRESS',
    },
    tokens,
    tokensDefinition,
    docs: {
      description: {
        component: readme,
      },
    },
  },
} satisfies Meta<typeof ButtonStory>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const PrimaryAction: Story = {
  args: {
    appearance: 'primary-action-button',
    children: 'Primary action button',
    type: 'button',
  },
  parameters: {
    ...Default.parameters,
    docs: {
      description: {
        story: `Styling via the \`.utrecht-button\` and \`.utrecht-button--primary-action-button\` class names.`,
      },
    },
  },
};

export const SecondaryAction: Story = {
  args: {
    appearance: 'secondary-action-button',
    children: 'Secondary action button',
    type: 'button',
  },
  parameters: {
    ...Default.parameters,
    docs: {
      description: {
        story: `Styling via the \`.utrecht-button\` and \`.utrecht-button--secondary-action-button\` class names.`,
      },
    },
  },
};
