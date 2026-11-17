import { Meta, StoryObj } from '@storybook/react-vite';
import tokens from '@utrecht/design-tokens/dist/list.mjs';
import {
  utrechtIconAfspraakMaken,
  utrechtIconArrow,
  utrechtIconChevronRight,
  utrechtIconLoupe,
} from '@utrecht/icon/dist/icons.mjs';
import readme from '@utrecht/icon-css/README.md?raw';
import tokensDefinition from '@utrecht/icon-css/src/tokens.json';
import React from 'react';
import { designTokenStory } from './util.js';
import { Icon, type IconData } from '../../../components-react/icon-react/src/index.js';

// A few icons from @utrecht/icon for the `icon` control
const icons = {
  'afspraak-maken': utrechtIconAfspraakMaken,
  arrow: utrechtIconArrow,
  'chevron-right': utrechtIconChevronRight,
  loupe: utrechtIconLoupe,
};

// Storybook replaces the key of `mapping` with the icon data, so the URL contains the key and not the SVG
const iconKey = (key: keyof typeof icons) => key as unknown as IconData;

const meta = {
  title: 'React Component/Icon',
  id: 'react-icon',
  component: Icon,
  argTypes: {
    icon: {
      description: 'An icon from `@utrecht/icon/dist/icons.mjs`, shown as inline `<svg>` instead of the children',
      control: { type: 'select' },
      options: ['', ...Object.keys(icons)],
      mapping: { '': undefined, ...icons },
      table: {
        type: { summary: 'IconData' },
        defaultValue: { summary: 'undefined' },
      },
    },
  },
  args: {
    children: (
      <svg viewBox="0 0 1000 1000">
        <rect fill="currentColor" x="0" y="0" width="1000" height="1000" />
      </svg>
    ),
    color: 'green',
    size: 32,
  },
  parameters: {
    tokensPrefix: 'utrecht-icon',
    tokens,
    tokensDefinition,
    docs: {
      description: {
        component: readme,
      },
    },
  },
  render: ({ color, size, ...args }) => (
    <div style={{ '--utrecht-icon-color': color, '--utrecht-icon-size': `${size}px` }}>
      <Icon {...args} />
    </div>
  ),
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;
export const WithInlineSVG: Story = {};

export const WithIconProp: Story = {
  args: {
    icon: iconKey('arrow'),
  },
  parameters: {
    docs: {
      description: {
        story:
          'An icon from `@utrecht/icon/dist/icons.mjs` with the `icon` prop, for example `<Icon icon={utrechtIconArrow} />`. It needs no web components.',
      },
    },
  },
};

export const DesignTokens = designTokenStory(meta);
