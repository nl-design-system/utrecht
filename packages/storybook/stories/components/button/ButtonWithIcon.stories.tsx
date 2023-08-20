import { Meta, StoryObj } from '@storybook/react';
import { Button } from '@utrecht/component-library-react/dist/css-module';
import { ButtonProps } from '@utrecht/component-library-react/src/Button';
import tokensDefinition from '@utrecht/components/button/tokens.json';
import tokens from '@utrecht/design-tokens/dist/index.json';
import iconSet from '@utrecht/icon/dist/index.json';
import React, { createElement } from 'react';

interface ButtonStoryProps extends ButtonProps {
  iconBefore?: string;
  iconAfter?: string;
  textContent?: string;
}

const ButtonStory = ({ iconBefore, iconAfter, textContent, ...props }: ButtonStoryProps) => {
  return (
    <Button {...props}>
      {iconBefore && createElement(iconBefore)}
      {textContent}
      {iconAfter && createElement(iconAfter)}
    </Button>
  );
};

const meta = {
  title: 'CSS Component/Button/With Icon',
  id: 'css-button-with-icon',
  component: Button,
  args: {
    appearance: '',
    busy: false,
    disabled: false,
    hint: '',
    pressed: false,
    textContent: 'Read more...',
    type: 'button',
    iconBefore: '',
    iconAfter: '',
  },
  argTypes: {
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
  },
} satisfies Meta<typeof ButtonStory>;

export default meta;

type Story = StoryObj<typeof meta>;

export const IconAfter: Story = {
  args: {
    iconAfter: 'utrecht-icon-arrow',
    textContent: 'Next',
  },
};

export const IconBefore: Story = {
  args: {
    iconBefore: 'utrecht-icon-checkmark',
    textContent: 'Versturen',
  },
};
