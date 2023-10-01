/* @license CC0-1.0 */

import { Meta, StoryObj } from '@storybook/react';
import readme from '@utrecht/components/mapcontrolbutton/README.md?raw';
import tokensDefinition from '@utrecht/components/mapcontrolbutton/tokens.json';
import tokens from '@utrecht/design-tokens/dist/index.json';
import iconSet from '@utrecht/icon/dist/index.json';
import clsx from 'clsx';
import React from 'react';
import { MapControlButton } from './MapControlButton';
import type { MapControlButtonProps } from './MapControlButton';
import { designTokenStory } from './design-token-story';

interface MapControlButtonStoryProps extends Omit<MapControlButtonProps, 'focus'> {
  hover?: boolean;
  focus?: boolean;
  focusVisible?: boolean;
  icon: string;
  label: string;
  labelVisible?: boolean;
}

const MapControlButtonStory = ({
  hover,
  focus,
  focusVisible,
  icon,
  label,
  labelVisible,
  ...restProps
}: MapControlButtonStoryProps) => {
  const IconElement = icon;
  return (
    <MapControlButton
      {...restProps}
      className={clsx({
        'utrecht-mapcontrolbutton--hover': hover,
        'utrecht-mapcontrolbutton--focus': focus,
        'utrecht-mapcontrolbutton--focus-visible': focusVisible,
      })}
      icon={<IconElement></IconElement>}
      label={labelVisible ? label : null}
      aria-label={labelVisible ? null : label}
    ></MapControlButton>
  );
};

const meta = {
  title: 'CSS Component/Map control button',
  id: 'css-map-control-button',
  component: MapControlButtonStory,
  argTypes: {
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
    disabled: {
      description: 'Disabled',
      control: 'boolean',
    },
    icon: {
      description: 'Icon',
      control: { type: 'select' },
      options: ['', ...iconSet.map(({ id }) => id)],
    },
    label: {
      description: 'Label',
      control: 'text',
    },
    labelVisible: {
      description: 'Label is visible',
      control: 'boolean',
    },
  },
  args: {
    disabled: false,
    focus: false,
    focusVisible: false,
    hover: false,
    icon: '',
    label: '',
    labelVisible: false,
  },
  parameters: {
    tokensPrefix: 'utrecht-mapcontrolbutton',
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
} satisfies Meta<typeof MapControlButtonStory>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    icon: 'utrecht-icon-zoomin',
    label: 'Zoom in',
  },
  parameters: {
    docs: {
      description: {
        story: 'Styling via `utrecht-mapcontrolbutton` class name.',
      },
    },
  },
};

export const WithLabel: Story = {
  args: {
    icon: 'utrecht-icon-filter',
    label: 'Filter',
    labelVisible: true,
  },
  name: 'With label',
};

export const Hover: Story = {
  args: {
    ...Default.args,
    hover: true,
  },
  name: 'Hover',
  parameters: {
    docs: {
      description: {
        story: 'Styling is simulated via `utrecht-mapcontrolbutton--hover` class name.',
      },
      source: {
        state: 'closed',
      },
    },
  },
};

export const Focus: Story = {
  args: {
    ...Default.args,
    focus: true,
  },
  name: 'Focus',
  parameters: {
    docs: {
      description: {
        story: 'Styling is simulated via `utrecht-mapcontrolbutton--focus` class name.',
      },
    },
    source: {
      state: 'closed',
    },
  },
};

export const FocusVisible: Story = {
  args: {
    ...Default.args,
    focus: true,
    focusVisible: true,
  },
  name: 'Focus visible',
  parameters: {
    docs: {
      description: {
        story:
          'Styling is simulated via `utrecht-mapcontrolbutton--focus` and `utrecht-mapcontrolbutton--focus-visible` class names.',
      },
      source: {
        state: 'closed',
      },
    },
  },
};

export const Disabled: Story = {
  args: {
    ...Default.args,
    disabled: true,
  },
  name: 'Disabled',
  parameters: {
    docs: {
      description: {
        story: 'Styling is simulated via `utrecht-mapcontrolbutton--disabled` class name.',
      },
      source: {
        state: 'closed',
      },
    },
  },
};

export const DesignTokens = designTokenStory(meta);
