import { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
import { NavigationLink } from './Navigation/NavigationLink';
import { NavigationMarker } from './Navigation/NavigationMarker';

const NavigationLinkMeta: Meta<typeof NavigationLink> = {
  title: 'CSS Component/Navigation/NavigationLink',
  component: NavigationLink,
  argTypes: {
    mobile: {
      description: 'Mobile styling',
      control: 'boolean',
    },
    isCurrent: {
      description: 'Current page indicator',
      control: 'boolean',
    },
    href: {
      description: 'Link URL',
      control: 'text',
    },
    children: {
      description: 'Link text',
      control: 'text',
    },
  },
  args: {
    mobile: false,
    isCurrent: false,
    href: '#',
    children: 'Navigation Link',
  },
};

export default NavigationLinkMeta;
export const NavigationLinkDefault: StoryObj<typeof NavigationLinkMeta> = {
  render: (args) => <NavigationLink {...args} />,
  args: {
    href: '/example',
    children: 'Example Link',
  },
  parameters: {
    docs: {
      description: {
        story: 'Default navigation link',
      },
    },
  },
};

export const NavigationLinkCurrent: StoryObj<typeof NavigationLinkMeta> = {
  render: (args) => <NavigationLink {...args} />,
  args: {
    href: '/current',
    children: 'Current Page',
    isCurrent: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Navigation link for current page',
      },
    },
  },
};

export const NavigationLinkMobile: StoryObj<typeof NavigationLinkMeta> = {
  render: (args) => <NavigationLink {...args} />,
  args: {
    href: '/mobile',
    children: 'Mobile Link',
    mobile: true,
    marker: <NavigationMarker isCurrent={false} />,
  },
  parameters: {
    docs: {
      description: {
        story: 'Mobile navigation link with marker',
      },
    },
  },
};
