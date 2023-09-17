/* @license CC0-1.0 */

import type { Meta, StoryObj } from '@storybook/react';
import readme from '@utrecht/components/map-marker/README.md?raw';
import tokensDefinition from '@utrecht/components/map-marker/tokens.json';
import tokens from '@utrecht/design-tokens/dist/index.json';
import iconSet from '@utrecht/icon/dist/index.json';
import { UtrechtMapMarker } from '@utrecht/web-component-library-react';
import React from 'react';
import { designTokenStory } from '../components/util';

interface MapMarkerStoryProps {
  icon?: string;
}

const MapMarkerStory = ({ icon }: MapMarkerStoryProps) => {
  const IconElement = icon;
  return (
    <div
      className="example-wrapper"
      style={{
        backgroundColor: 'rgb(208 208 208)',
        display: 'flex',
        justifyContent: 'center',
        padding: '3rem',
      }}
    >
      <UtrechtMapMarker>
        <IconElement></IconElement>
      </UtrechtMapMarker>
    </div>
  );
};

const meta = {
  title: 'Web Component/Map marker',
  id: 'web-component-map-marker',
  component: MapMarkerStory,
  argTypes: {
    icon: {
      description: 'Icon',
      control: { type: 'select' },
      options: ['', ...iconSet.map(({ id }) => id)],
    },
  },
  args: {},
  tags: ['autodocs'],
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
    tokensPrefix: 'utrecht-map-marker',
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
    icon: 'utrecht-icon-bestemmingsplan',
  },
};

export const DesignTokens = designTokenStory(meta);
