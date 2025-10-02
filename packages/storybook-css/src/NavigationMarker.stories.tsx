import { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
import { NavigationMarker } from './Navigation/NavigationMarker';

const NavigationMarkerMeta: Meta<typeof NavigationMarker> = {
  title: 'CSS Component/Navigation/NavigationMarker',
  component: NavigationMarker,
  argTypes: {
    isCurrent: {
      description: 'Current page indicator',
      control: 'boolean',
    },
    appearance: {
      description: 'Marker appearance',
      control: { type: 'select' },
      options: ['fill', 'outline'],
    },
  },
  args: {
    isCurrent: false,
    appearance: 'fill',
  },
};
export default NavigationMarkerMeta;

export const NavigationMarkerFill: StoryObj<typeof NavigationMarkerMeta> = {
  render: (args) => <NavigationMarker {...args} />,
  args: {
    appearance: 'fill',
    isCurrent: false,
  },
  parameters: {
    docs: {
      description: {
        story: 'Filled navigation marker',
      },
    },
  },
};

export const NavigationMarkerOutline: StoryObj<typeof NavigationMarkerMeta> = {
  render: (args) => <NavigationMarker {...args} />,
  args: {
    appearance: 'outline',
    isCurrent: false,
  },
  parameters: {
    docs: {
      description: {
        story: 'Outline navigation marker',
      },
    },
  },
};

export const NavigationMarkerCurrent: StoryObj<typeof NavigationMarkerMeta> = {
  render: (args) => <NavigationMarker {...args} />,
  args: {
    appearance: 'fill',
    isCurrent: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Navigation marker for current page',
      },
    },
  },
};
