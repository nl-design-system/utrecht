import { Meta, StoryObj } from '@storybook/react-vite';
import tokens from '@utrecht/design-tokens/dist/index.json';
import readme from '@utrecht/navigation-css/README.md?raw';
import tokensDefinition from '@utrecht/navigation-css/src/tokens.json';
import React from 'react';
import { Navigation, nestedNavigationData, sampleNavigationData } from './Navigation';
import { designTokenStory } from './design-token-story';

const meta: Meta<typeof Navigation> = {
  title: 'CSS Component/Navigation',
  id: 'css-navigation',
  component: Navigation,
  argTypes: {
    list: {
      description: 'Navigation items',
      control: 'object',
    },
    mobileBreakpoint: {
      description: 'Mobile breakpoint in pixels',
      control: 'number',
    },
    toggleButton: {
      description: 'Toggle button configuration',
      control: 'object',
    },
  },
  args: {
    list: sampleNavigationData,
    mobileBreakpoint: 768,
    toggleButton: {
      openText: 'Menu',
      closeText: 'Close',
    },
  },
  parameters: {
    bugs: 'https://github.com/nl-design-system/utrecht/issues?q=is%3Aissue+is%3Aopen+label%3Acomponent%2Fnavigation',
    nldesignsystem: 'https://nldesignsystem.nl/navigation',
    tokensPrefix: 'utrecht-navigation',
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
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Desktop: Story = {
  args: {
    list: sampleNavigationData,
    mobileBreakpoint: 0, // Force desktop view
  },
  parameters: {
    viewport: {
      defaultViewport: 'desktop',
    },
    docs: {
      description: {
        story: 'Desktop navigation with horizontal layout',
      },
    },
  },
};

export const Mobile: Story = {
  args: {
    list: sampleNavigationData,
    mobileBreakpoint: 9999, // Force mobile view
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
    layout: 'fullscreen',
    docs: {
      description: {
        story: 'Mobile navigation with hamburger menu and drawer',
      },
    },
  },
};

export const WithNestedItems: Story = {
  args: {
    list: nestedNavigationData,
    mobileBreakpoint: 9999, // Force mobile to show nested behavior
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
    layout: 'fullscreen',
    docs: {
      description: {
        story: 'Navigation with nested menu items (visible in mobile view)',
      },
    },
  },
};
export const DesignTokens = designTokenStory(meta);
