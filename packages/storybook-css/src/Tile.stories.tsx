/* @license CC0-1.0 */

import type { Meta, StoryObj } from '@storybook/react-vite';
import tokens from '@utrecht/design-tokens/dist/index.json';
import iconSet from '@utrecht/icon/dist/index.json';
import readme from '@utrecht/tile-css/README.md?raw';
import tokensDefinition from '@utrecht/tile-css/src/tokens.json';
import React from 'react';
import { Tile, TileProps } from './Tile';
import { designTokenStory } from './design-token-story';

interface TileStoryProps extends TileProps {
  icon?: string;
}

const TileStory = ({ children, icon, ...props }: TileStoryProps) => {
  const IconElement = icon;
  return (
    <div style={{ inlineSize: '400px', paddingBlock: '16px', paddingInline: '16px' }}>
      <Tile icon={IconElement ? <IconElement /> : null} {...props}>
        {children}
      </Tile>
    </div>
  );
};

const meta = {
  title: 'CSS Component/Tile',
  id: 'css-tile',
  component: TileStory,
  argTypes: {
    active: {
      description: 'Active',
      control: 'boolean',
    },
    appearance: {
      description: 'Color variant of the tile',
      control: { type: 'select' },
      options: ['', 'primary', 'secondary', 'tertiary'],
    },
    children: {
      description: 'Text of the tile',
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
    icon: {
      description: 'Icon',
      control: { type: 'select' },
      options: ['', ...iconSet.map(({ id }) => id)],
    },
  },
  parameters: {
    bugs: 'https://github.com/nl-design-system/utrecht/issues?q=is%3Aissue+is%3Aopen+label%3Acomponent%2Ftile',
    layout: 'fullscreen',
    tokensPrefix: 'utrecht-tile',
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
} satisfies Meta<typeof Tile>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    active: false,
    appearance: '',
    hover: false,
    focus: false,
    focusVisible: false,
    children: 'Over de stad',
    icon: 'utrecht-icon-over-de-stad',
  },
  parameters: {
    docs: {
      description: {
        story: 'Test',
      },
    },
  },
};

export const Primary: Story = {
  args: {
    ...Default.args,
    appearance: 'primary',
  },
  parameters: {
    docs: {
      description: {
        story: 'Styling met de `.utrecht-tile--primary` class name',
      },
    },
  },
};

export const Secondary: Story = {
  args: {
    ...Default.args,
    appearance: 'secondary',
  },
  parameters: {
    docs: {
      description: {
        story: 'Styling met de `.utrecht-tile--secondary` class name',
      },
    },
  },
};

export const Tertiary: Story = {
  args: {
    ...Default.args,
    appearance: 'tertiary',
  },
  parameters: {
    docs: {
      description: {
        story: 'Styling met de `.utrecht-tile--tertiary` class name',
      },
    },
  },
};

export const Hover: Story = {
  args: {
    ...Default.args,
    hover: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Styling met de `.utrecht-tile--hover` class name',
      },
    },
  },
};

export const Focus: Story = {
  args: {
    ...Default.args,
    focus: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Styling met de `.utrecht-tile--focus` class name',
      },
    },
  },
};

export const Active: Story = {
  args: {
    ...Default.args,
    active: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Styling met de `.utrecht-tile--active` class name',
      },
    },
  },
};

export const FocusVisible: Story = {
  args: {
    ...Default.args,
    focus: true,
    focusVisible: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Styling met de `.utrecht-tile--focus` en `.utrecht-tile--focus-visible` class name',
      },
    },
  },
};

export const DesignTokens = designTokenStory(meta);
