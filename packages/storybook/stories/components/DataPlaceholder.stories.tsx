/* @license CC0-1.0 */

import type { Meta, StoryObj } from '@storybook/react';
import {
  DataList,
  DataListItem,
  DataListKey,
  DataListValue,
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Paragraph,
} from '@utrecht/component-library-react/src/css-module';
import { DataPlaceholder, DataPlaceholderProps } from '@utrecht/component-library-react/src/css-module/DataPlaceholder';
import readme from '@utrecht/components/data-placeholder/README.md?raw';
import tokensDefinition from '@utrecht/components/data-placeholder/tokens.json';
import tokens from '@utrecht/design-tokens/dist/index.json';
import clsx from 'clsx';
import React from 'react';
import { designTokenStory } from './util';
import '@utrecht/components/alert/css/index.scss';

const meta = {
  title: 'CSS Component/Data placeholder',
  id: 'css-data-placeholder',
  argTypes: {
    loading: {
      description: 'Loading',
      control: 'boolean',
    },
    forcedColors: {
      description: 'Forced colors',
      control: 'boolean',
    },
    highContrast: {
      description: 'High contrast',
      control: 'boolean',
    },
  },
  args: {},
  render: ({
    loading,
    forcedColors,
    highContrast,
    ...props
  }: DataPlaceholderProps & { loading?: boolean; forcedColors?: boolean; highContrast?: boolean }) => {
    return (
      <Paragraph>
        <DataPlaceholder
          className={clsx({
            'utrecht-data-placeholder--loading': loading,
            'utrecht-data-placeholder--forced-colors': forcedColors,
            'utrecht-data-placeholder--high-contrast': highContrast,
          })}
          {...props}
        />
      </Paragraph>
    );
  },

  tags: ['autodocs'],
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
    tokensPrefix: 'utrecht-data-placeholder',
    tokens,
    tokensDefinition,
    docs: {
      description: {
        component: readme,
      },
    },
  },
} satisfies Meta<typeof DataPlaceholder>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  parameters: {
    status: {
      type: 'ALPHA',
    },
  },
};

export const Loading: Story = {
  args: {
    loading: true,
  },
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
    docs: {
      description: {
        story: `Help wanted: animatie voor de _loading_ state (alleen voor \`@media (prefers-reduced-motion: no-preference)\`.`,
      },
    },
  },
};

export const ForcedColors: Story = {
  args: {
    forcedColors: true,
  },
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
};

export const HighContrast: Story = {
  args: {
    highContrast: true,
  },
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
};

export const DataListPlaceholder: Story = {
  args: {},
  parameters: {
    docs: {
      description: {
        story: `Help wanted: overzicht maken van de \`min-inline-size\` en \`max-inline-size\` van veelgebruikte datatypes.`,
      },
    },
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
  render: () => {
    return (
      <DataList>
        <DataListItem
          style={{
            '--utrecht-data-placeholder-max-inline-size': '20em',
          }}
        >
          <DataListKey>Straatnaam</DataListKey>
          <DataListValue>
            <DataPlaceholder loading />
          </DataListValue>
        </DataListItem>
        <DataListItem
          style={{
            '--utrecht-data-placeholder-min-inline-size': '1ch',
            '--utrecht-data-placeholder-max-inline-size': '5ch',
          }}
        >
          <DataListKey>Huisnummer</DataListKey>
          <DataListValue>
            <DataPlaceholder loading />
          </DataListValue>
        </DataListItem>
        <DataListItem
          style={{
            '--utrecht-data-placeholder-min-inline-size': '1em',
          }}
        >
          <DataListKey>Huisletter</DataListKey>
          <DataListValue>
            <DataPlaceholder loading />
          </DataListValue>
        </DataListItem>
        <DataListItem
          style={{
            '--utrecht-data-placeholder-min-inline-size': 'calc(0.67em + 0.34ch)',
            '--utrecht-data-placeholder-max-inline-size': 'calc((0.67em + 0.34ch) * 4)',
          }}
        >
          <DataListKey>Huistoevoeging</DataListKey>
          <DataListValue>
            <DataPlaceholder loading />
          </DataListValue>
        </DataListItem>
      </DataList>
    );
  },
};

export const HeadingPlaceholder: Story = {
  args: {},
  render: () => {
    return (
      <>
        <Heading1 role="presentation">
          <DataPlaceholder loading />
        </Heading1>
        <Heading2 role="presentation">
          <DataPlaceholder loading />
        </Heading2>
        <Heading3 role="presentation">
          <DataPlaceholder loading />
        </Heading3>
        <Heading4 role="presentation">
          <DataPlaceholder loading />
        </Heading4>
      </>
    );
  },
  parameters: {
    docs: {
      description: {
        story: `Help wanted: documentatie dat je geen lege _heading role_ in het document moet hebben, en dat daarom \`role="presentation"\` nodig is.`,
      },
    },
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
};

export const DesignTokens = designTokenStory(meta);
