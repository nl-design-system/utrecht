import { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
import { NavToggleButton } from './Navigation/NavigationToggleButton';

// Navigation Toggle Button Stories
const NavToggleButtonMeta: Meta<typeof NavToggleButton> = {
  title: 'CSS Component/Navigation/NavToggleButton',
  component: NavToggleButton,
  argTypes: {
    icon: {
      description: 'Button icon',
      control: { type: 'select' },
      options: ['hamburger', 'close'],
    },
    text: {
      description: 'Button text',
      control: 'text',
    },
  },
  args: {
    icon: 'hamburger',
    text: 'Menu',
  },
};
export default NavToggleButtonMeta;

export const NavToggleButtonHamburger: StoryObj<typeof NavToggleButtonMeta> = {
  render: (args) => <NavToggleButton {...args} />,
  args: {
    icon: 'hamburger',
    text: 'Menu',
  },
  parameters: {
    docs: {
      description: {
        story: 'Hamburger menu toggle button',
      },
    },
  },
};

export const NavToggleButtonClose: StoryObj<typeof NavToggleButtonMeta> = {
  render: (args) => <NavToggleButton {...args} />,
  args: {
    icon: 'close',
    text: 'Close',
  },
  parameters: {
    docs: {
      description: {
        story: 'Close menu toggle button',
      },
    },
  },
};
