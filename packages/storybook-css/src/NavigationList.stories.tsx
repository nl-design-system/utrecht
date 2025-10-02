import { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
import { sampleNavigationData } from './Navigation';
import { NavigationList } from './Navigation/NavigationList';

const NavigationListMeta: Meta<typeof NavigationList> = {
  title: 'CSS Component/Navigation/NavigationList',
  component: NavigationList,
  argTypes: {
    list: {
      description: 'Navigation items',
      control: 'object',
    },
    mobile: {
      description: 'Mobile styling',
      control: 'boolean',
    },
    sideNav: {
      description: 'Side navigation styling',
      control: 'boolean',
    },
  },
  args: {
    list: sampleNavigationData,
    mobile: false,
    sideNav: false,
  },
};
export default NavigationListMeta;
export const NavigationListDesktop: StoryObj<typeof NavigationListMeta> = {
  render: (args) => <NavigationList {...args} />,
  args: {
    list: sampleNavigationData,
    mobile: false,
  },
  parameters: {
    docs: {
      description: {
        story: 'Desktop navigation list component',
      },
    },
  },
};

export const NavigationListMobile: StoryObj<typeof NavigationListMeta> = {
  render: (args) => <NavigationList {...args} />,
  args: {
    list: sampleNavigationData,
    mobile: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Mobile navigation list component with vertical layout',
      },
    },
  },
};
