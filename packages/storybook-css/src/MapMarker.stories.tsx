/* @license CC0-1.0 */

import { Meta, StoryObj } from '@storybook/react';
import tokens from '@utrecht/design-tokens/dist/index.json';
import iconSet from '@utrecht/icon/dist/index.json';
import readme from '@utrecht/map-marker-css/README.md?raw';
import tokensDefinition from '@utrecht/map-marker-css/src/tokens.json';
import React, { PropsWithChildren } from 'react';
import { MapMarker } from './MapMarker';
import { designTokenStory } from './design-token-story';

interface MapMarkerStoryProps {
  icon: string;
}

const MapMarkerStory = ({ children, icon }: PropsWithChildren<MapMarkerStoryProps>) => {
  const Icon = icon;
  return (
    <MapMarker>
      {icon ? <Icon /> : null}
      {children}
    </MapMarker>
  );
};

const meta = {
  title: 'CSS Component/Map marker',
  id: 'css-map-marker',
  component: MapMarkerStory,
  argTypes: {
    icon: {
      description: 'Icon',
      control: { type: 'select' },
      options: ['', ...iconSet.map(({ id }) => id)],
    },
  },
  args: {
    icon: '',
  },
  parameters: {
    bugs: 'https://github.com/nl-design-system/utrecht/issues?q=is%3Aissue+is%3Aopen+label%3Acomponent%2Fmap-marker',
    tokensPrefix: 'utrecht-map-marker',
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
} satisfies Meta<typeof MapMarkerStory>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    icon: 'utrecht-icon-loupe',
  },
  parameters: {
    docs: {
      description: {
        story: 'Styling via `utrecht-map-marker` class name.',
      },
    },
  },
};

export const DesignTokens = designTokenStory(meta);
