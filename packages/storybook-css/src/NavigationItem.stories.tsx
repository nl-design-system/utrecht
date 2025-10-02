import { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
import { NavigationItem } from './Navigation/NavigationItem';

const NavigationItemMeta: Meta<typeof NavigationItem> = {
  title: 'CSS Component/Navigation/NavigationItem',
  component: NavigationItem,
  argTypes: {
    mobile: {
      description: 'Mobile styling',
      control: 'boolean',
    },
    children: {
      description: 'Item content',
      control: 'text',
    },
  },
  args: {
    mobile: false,
    children: 'Navigation Item',
  },
};
export default NavigationItemMeta;
export const NavigationItemDesktop: StoryObj<typeof NavigationItemMeta> = {
  render: (args) => <NavigationItem {...args} />,
  args: {
    mobile: false,
    children: 'Desktop Navigation Item',
  },
  parameters: {
    docs: {
      description: {
        story: 'Desktop navigation item component',
      },
    },
  },
};

export const NavigationItemMobile: StoryObj<typeof NavigationItemMeta> = {
  render: (args) => <NavigationItem {...args} />,
  args: {
    mobile: true,
    children: 'Mobile Navigation Item',
  },
  parameters: {
    docs: {
      description: {
        story: 'Mobile navigation item component',
      },
    },
  },
};
