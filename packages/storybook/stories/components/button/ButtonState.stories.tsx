import { Meta, StoryObj } from '@storybook/react';
import { Button } from '@utrecht/component-library-react/dist/css-module';
import { ButtonProps } from '@utrecht/component-library-react/src/Button';
import tokensDefinition from '@utrecht/components/button/tokens.json';
import tokens from '@utrecht/design-tokens/dist/index.json';
import clsx from 'clsx';
import React from 'react';

interface ButtonStateStoryProps extends ButtonProps {
  active: boolean;
  focus: boolean;
  focusVisible: boolean;
  hover: boolean;
  textContent?: string;
}

const ButtonStateStory = ({ active, focus, focusVisible, hover, textContent, ...props }: ButtonStateStoryProps) => {
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
      {textContent}
    </Button>
  );
};

const meta = {
  title: 'CSS Component/Button/State',
  id: 'css-button-state',
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
  },
  render: ButtonStateStory,
  parameters: {
    tokensPrefix: 'utrecht-button',
    status: {
      type: 'WORK IN PROGRESS',
    },
    tokens,
    tokensDefinition,
    docs: {},
  },
} satisfies Meta<typeof ButtonStateStory>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Active: Story = {
  args: {
    active: true,
  },
  parameters: {
    docs: {
      story: `
Simulated with \`.utrecht-button--active\` class name`,
    },
  },
};

export const Pressed: Story = {
  args: {
    pressed: true,
  },
  parameters: {
    docs: {
      story: `
Simulated with \`.utrecht-button--pressed\` class name`,
    },
  },
};

export const Hover: Story = {
  args: {
    hover: true,
  },
  parameters: {
    docs: {
      story: `
Simulated with \`.utrecht-button--hover\` class name`,
    },
  },
};

export const Focus: Story = {
  args: {
    focus: true,
  },
  parameters: {
    docs: {
      story: `
Simulated with \`.utrecht-button--focus\` class name`,
    },
  },
};

export const focusVisible: Story = {
  args: {
    focus: true,
    focusVisible: true,
  },
  parameters: {
    docs: {
      story: `
Simulated with \`.utrecht-button--focus\` and  \`.utrecht-button--focus-visible\` class names`,
    },
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
  parameters: {
    docs: {
      story: `
Simulated with \`.utrecht-button--disabled\` class name`,
    },
  },
};

export const Busy: Story = {
  args: {
    busy: true,
  },
  parameters: {
    docs: {
      story: `
Simulated with \`.utrecht-button--busy\` class name`,
    },
  },
};
