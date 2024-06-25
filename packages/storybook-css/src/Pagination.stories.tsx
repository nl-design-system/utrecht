/* @license CC0-1.0 */

import { Meta, StoryObj } from '@storybook/react';
import tokens from '@utrecht/design-tokens/dist/index.json';
import readme from '@utrecht/pagination-css/README.md?raw';
import tokensDefinition from '@utrecht/pagination-css/src/tokens.json';
import { Pagination } from './Pagination';
import { designTokenStory } from './design-token-story';

const meta = {
  title: 'CSS Component/Pagination',
  id: 'css-pagination',
  component: Pagination,
  argTypes: {
    currentIndex: {
      description: 'Current index',
      type: 'number',
    },
    distanced: {
      description: 'Distance the element from adjacent content',
      control: 'boolean',
    },
    links: {
      description: 'Items',
      type: 'array',
    },
    prev: {
      description: 'Previous link',
      type: 'object',
    },
    next: {
      description: 'Next link',
      type: 'object',
    },
  },
  args: {
    currentIndex: -1,
    distanced: false,
    links: [],
    prev: null,
    next: null,
  },
  parameters: {
    bugs: 'https://github.com/nl-design-system/utrecht/issues?q=is%3Aissue+is%3Aopen+label%3Acomponent%2Fpagination',
    communityFigma:
      'https://www.figma.com/design/shhwGcqPLi2CapK0P1zz8O/NLDS---Voorbeeld---Bibliotheek?node-id=1691-11779&t=CiZrkiC5t6Bn59Hg-0',
    figma:
      'https://www.figma.com/design/UXIHcIurAD8hyoBWx4hDBV/NLDS---Gemeente-Utrecht---Bibliotheek?node-id=1691-11779&t=kJatlKfN59e8T0eA-0',
    nldesignsystem: 'https://nldesignsystem.nl/pagination',
    tokensPrefix: 'utrecht-pagination',
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
} satisfies Meta<typeof Pagination>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    currentIndex: 3,
    distanced: true,
    links: [
      {
        href: './1',
        index: 1,
        title: 'Resultaat 1 tot 10',
      },
      {
        href: './2',
        index: 2,
        title: 'Resultaat 11 tot 20',
      },
      {
        href: './3',
        index: 3,
        title: 'Resultaat 21 tot 30',
      },
      {
        href: './4',
        index: 4,
        title: 'Resultaat 31 tot 40',
      },
      {
        href: './5',
        index: 5,
        title: 'Resultaat 41 tot 50',
      },
    ],
    next: {
      href: './2',
    },
    prev: {
      disabled: true,
    },
  },
  name: 'Pagination navigation',
  parameters: {
    docs: {
      description: {
        story: 'Styling via `utrecht-pagination` class name.',
      },
    },
  },
};

export const DesignTokens = designTokenStory(meta);
