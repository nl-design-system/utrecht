/* @license CC0-1.0 */

import { Meta, StoryObj } from '@storybook/react';
import tokens from '@utrecht/design-tokens/dist/index.json';
import readme from '@utrecht/unordered-list-css/README.md?raw';
import tokensDefinition from '@utrecht/unordered-list-css/src/tokens.json';
import React from 'react';
import { UnorderedListStory } from './UnorderedList';
import { designTokenStory } from './design-token-story';

const meta = {
  title: 'CSS Component/Unordered list',
  id: 'css-unordered-list',
  component: UnorderedListStory,
  argTypes: {
    children: {
      description: 'Content of the list.',
      control: 'text',
    },
    htmlContent: {
      description: 'Content of the list is HTML without BEM class names on each element.',
      control: 'boolean',
    },
  },
  args: {
    children: [],
  },
  parameters: {
    tokensPrefix: 'utrecht-unordered-list',
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
} satisfies Meta<typeof UnorderedListStory>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    items: [
      {
        children: 'Lorem',
      },
      {
        children: 'Ipsum',
      },
      {
        children: 'Dolor',
      },
    ],
  },
};

export const Nested: Story = {
  args: {
    items: [
      {
        children: 'Lorem',
      },
      {
        children: 'Ipsum',
        items: [
          {
            children: 'Lorem',
          },
          {
            children: 'Ipsum',
          },
        ],
      },
      {
        children: 'Dolor',
      },
    ],
  },
};

const ContainerWithCenteredText = (Story) => <div style={{ textAlign: 'center' }}>{Story()}</div>;

export const Center: Story = {
  args: {
    center: true,
    items: [
      {
        children: 'The Quick Brown Fox',
      },
      {
        children: 'Jumps',
      },
      {
        children: 'Over The Lazy Dog',
      },
    ],
  },
  name: 'Center',
  decorators: [ContainerWithCenteredText],
  parameters: {
    docs: {
      description: {
        story:
          '_Unordered list_ moet niet als gecentreerde tekst gebruikt worden worden. Wanneer het niet te vermijden is, dan moeten marker dicht naast de tekst staan, niet in de marge.',
      },
    },
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
};

const NarrowContainerWithCenteredText = (Story) => (
  <div
    style={{
      textAlign: 'center',
      inlineSize: '50%',
      'border-inline-start': '1px solid currentColor',
      'border-inline-end': '1px solid currentColor',
    }}
  >
    {Story()}
  </div>
);

export const NarrowContainerCenter: Story = {
  args: {
    center: true,
    items: [
      {
        children: 'The Quick Brown Fox',
      },
      {
        children: 'Jumps',
      },
      {
        children: 'Over The Lazy Dog',
      },
    ],
  },
  name: 'Center (container width is 50%)',
  decorators: [NarrowContainerWithCenteredText],
  parameters: {
    docs: {
      description: {
        story: 'De _list item marker_ moet niet te ver van de tekst staan.',
      },
    },
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
};

export const NarrowContainerCenterLongText: Story = {
  args: {
    center: true,
    items: [
      {
        children: 'The Quick Brown Fox',
      },
      {
        children: 'Jumps',
      },
      {
        children: 'Over The Lazy Dog',
      },
      {
        children: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
        laborum.`,
      },
    ],
  },
  name: 'Center (multiple lines of text, container width is 50%)',
  decorators: [NarrowContainerWithCenteredText],
  parameters: {
    docs: {
      description: {
        story: 'Lange tekst moet binnen de container passen.',
      },
    },
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
};

export const HTMLContent: Story = {
  args: {
    htmlContent: true,
    items: [
      {
        children: 'Lorem',
      },
      {
        children: 'Ipsum',
        items: [
          {
            children: 'Lorem',
          },
          {
            children: 'Ipsum',
          },
        ],
      },
      {
        children: 'Dolor',
      },
    ],
  },
  parameters: {
    docs: {
      description: {
        story:
          'Use the `utrecht-unordered-list--html-content` modifier when you only have control over the template for the outer `<ul>` and cannot add BEM class names to the `<li>` elements.',
      },
    },
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
};

export const DesignTokens = designTokenStory(meta);
