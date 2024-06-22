import { Meta, StoryObj } from '@storybook/react';
import { ButtonAppearanceGrid } from './ButtonAppearanceGrid';

const meta = {
  title: 'CSS Component/Button/Grid of appearances',
  id: 'css-button-appearance',
  component: ButtonAppearanceGrid,
  argTypes: {
    textContent: {
      description: 'Button text',
      control: 'text',
    },
    defaultButton: {
      description: 'Default button',
      control: 'boolean',
    },
    primaryActionButton: {
      description: 'Primary action button',
      control: 'boolean',
    },
    secondaryActionButton: {
      description: 'Secondary action button',
      control: 'boolean',
    },
    subtleButton: {
      description: 'Subtle button',
      control: 'boolean',
    },
    dangerHint: {
      description: 'Danger hint',
      control: 'boolean',
    },
    warningHint: {
      description: 'Warning hint',
      control: 'boolean',
    },
    readyHint: {
      description: 'Ready hint',
      control: 'boolean',
    },
  },
  args: {
    defaultButton: true,
    primaryActionButton: true,
    secondaryActionButton: true,
    subtleButton: true,
    dangerHint: false,
    warningHint: false,
    readyHint: false,
    textContent: 'Label',
  },
  tags: ['!autodocs'],
} satisfies Meta<typeof ButtonAppearanceGrid>;

export default meta;

type Story = StoryObj<typeof meta>;

export const ButtonTable: Story = {
  args: {},
  name: 'Grid of button appearances',
};
