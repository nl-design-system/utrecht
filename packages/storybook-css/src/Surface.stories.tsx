/* @license CC0-1.0 */

import type { Meta, StoryObj } from '@storybook/react-vite';
import { Heading2, Paragraph, Surface } from '@utrecht/component-library-react';
import tokens from '@utrecht/design-tokens/dist/index.json';
import { utrechtSurfaceBackgroundColor } from '@utrecht/design-tokens/dist/index.mjs';
import readme from '@utrecht/surface-css/README.md?raw';
import themeColorDocs from '@utrecht/surface-css/_surface-theme-color.md?raw';
import tokensDefinition from '@utrecht/surface-css/src/tokens.json';
import React from 'react';
import { designTokenStory } from './design-token-story';

const MetaThemeColor = ({ color }: { color: string }) => <meta name="theme-color" content={color} />;

const meta = {
  title: 'CSS Component/Surface',
  id: 'css-surface',
  component: Surface,
  argTypes: {
    children: {
      description: 'Content of the surface',
      control: 'text',
    },
  },
  args: {
    children: '',
  },
  parameters: {
    bugs: 'https://github.com/nl-design-system/utrecht/issues?q=is%3Aissue+is%3Aopen+label%3Acomponent%2Fsurface',
    layout: 'fullscreen',
    tokensPrefix: 'utrecht-surface',
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
} satisfies Meta<typeof Surface>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: [
      <Heading2>Lorem ipsum</Heading2>,
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
        laborum.
      </Paragraph>,
    ],
  },
};

export const ThemeColor: Story = {
  args: {
    children: '',
  },
  name: 'Theme color',
  render: () => MetaThemeColor({ color: utrechtSurfaceBackgroundColor }),
  parameters: {
    docs: {
      description: {
        story: themeColorDocs,
      },
    },
  },
};

export const DesignTokens = designTokenStory(meta);
