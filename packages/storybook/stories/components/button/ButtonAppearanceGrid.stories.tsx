import { Meta, StoryObj } from '@storybook/react';
import { ButtonAppearanceGrid } from '../util/ButtonAppearanceGrid';

const meta = {
  title: 'CSS Component/Button/Appearance',
  id: 'css-button-apearance',
  component: ButtonAppearanceGrid,
  args: {
    defaultButton: true,
    primaryActionButton: true,
    secondaryActionButton: true,
    subtleButton: true,
    dangerHint: false,
    warningHint: false,
    readyHint: false,
    textContent: 'Label',
    icon: false,
  },
  argTypes: {
    textContent: {
      description: 'choose the text content for all buttons',
      control: 'text',
    },
    defaultButton: {
      description: 'show the default button without appearance set',
      control: 'boolean',
    },
    primaryActionButton: {
      description: 'show the default button with `appearance="primary-action-button"` set',
      control: 'boolean',
    },
    secondaryActionButton: {
      description: 'show the default button with `appearance="secondary-action-button"` set',
      control: 'boolean',
    },
    subtleButton: {
      description: 'show the default button with `appearance="subtle-button"` set',
      control: 'boolean',
    },
    dangerHint: {
      description: 'show `hint="danger"`',
      control: 'boolean',
    },
    warningHint: {
      description: 'show `hint="warning"`',
      control: 'boolean',
    },
    readyHint: {
      description: 'show `hint="ready"`',
      control: 'boolean',
    },
    icon: {
      description: 'show buttons with icon',
      control: 'boolean',
    },
  },
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
} satisfies Meta<typeof ButtonAppearanceGrid>;

export default meta;

type Story = StoryObj<typeof meta>;

export const AppearanceGrid: Story = {};
