/* @license CC0-1.0 */

import type { Meta, StoryObj } from '@storybook/react-vite';
import tokens from '@utrecht/design-tokens/dist/index.json';
import { SideNav } from './SideNav';
import { designTokenStory } from './design-token-story';
import readme from '../../../components/navigatie-sidenav/README.md?raw';
import tokensDefinition from '../../../components/navigatie-sidenav/src/tokens.json';

const meta = {
  title: 'CSS Component/Side navigation',
  id: 'css-sidenav',
  component: SideNav,
  argTypes: {
    items: {
      description: 'Menu items',
      control: 'object',
    },
    pseudoElements: {
      description: 'Render using CSS pseudo elements',
      control: 'boolean',
    },
  },
  args: {
    pseudoElements: false,
    items: [],
  },
  parameters: {
    bugs: 'https://github.com/nl-design-system/utrecht/issues?q=is%3Aissue+is%3Aopen+label%3Acomponent%2Fside-nav',
    nldesignsystem: 'https://nldesignsystem.nl/side-navigation',
    tokensPrefix: 'utrecht-sidenav',
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
} satisfies Meta<typeof SideNav>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    items: [
      { href: '#', title: 'Crumb #1' },
      { href: '#', title: 'Crumb #2' },
      { href: '#', title: 'Crumb #3' },
    ],
  },
  parameters: {
    docs: {
      description: {
        story: 'Styling via `utrecht-sidenav` class name.',
      },
    },
  },
};

export const Children: Story = {
  args: {
    items: [
      { href: '#', title: 'Home' },
      { href: '#', title: 'Wonen en leven' },
      { href: '#', title: 'Parken en groen' },
      {
        href: '#',
        title: 'Bomen',
        haschildren: true,
        children: [
          { href: '#', title: 'Bomennieuws' },
          { href: '#', title: 'Bomen planten en kappen', current: true },
          { href: '#', title: 'Bomenzorg en bomenbeleid' },
          { href: '#', title: 'Ziekten en plagen' },
          { href: '#', title: 'Overlast bomen' },
          { href: '#', title: 'Zorgvuldig met bomen omgaan' },
        ],
      },
    ],
  },
  name: 'Children',
  parameters: {
    docs: {
      source: {
        state: 'closed',
      },
    },
  },
};

export const Siblings: Story = {
  args: {
    items: [
      { href: '#', title: 'Home' },
      { href: '#', title: 'Wonen en leven' },
      { href: '#', title: 'Parken en groen' },
      { href: '#', title: 'Parken en plantsoenen', sibling: true },
      { href: '#', title: 'Landgoederen Amelisweerd en Rhijnauwen', sibling: true },
      { href: '#', title: 'Begraafplaatsen', sibling: true },
      { href: '#', title: 'Volkstuinen en stadslandbouw', sibling: true },
      { href: '#', title: 'Dieren', sibling: true },
      { href: '#', title: 'Groenonderhoud', sibling: true },
      { href: '#', title: 'Zelfbeheer', sibling: true },
    ],
    pseudoElements: false,
  },
  name: 'Siblings',
  parameters: {
    docs: {
      source: {
        state: 'closed',
      },
    },
  },
};

export const SiblingsChildren: Story = {
  args: {
    items: [
      { href: '#', title: 'Home' },
      { href: '#', title: 'Wonen en leven' },
      { href: '#', title: 'Parken en groen' },
      {
        href: '#',
        title: 'Bomen',
        haschildren: true,
        children: [
          { href: '#', title: 'Bomennieuws' },
          { href: '#', title: 'Bomen planten en kappen', current: true },
          { href: '#', title: 'Bomenzorg en bomenbeleid' },
          { href: '#', title: 'Ziekten en plagen' },
          { href: '#', title: 'Overlast bomen' },
          { href: '#', title: 'Zorgvuldig met bomen omgaan' },
        ],
      },
      { href: '#', title: 'Parken en plantsoenen', sibling: true },
      { href: '#', title: 'Landgoederen Amelisweerd en Rhijnauwen', sibling: true },
      { href: '#', title: 'Begraafplaatsen', sibling: true },
      { href: '#', title: 'Volkstuinen en stadslandbouw', sibling: true },
      { href: '#', title: 'Dieren', sibling: true },
      { href: '#', title: 'Groenonderhoud', sibling: true },
      { href: '#', title: 'Zelfbeheer', sibling: true },
    ],
  },
  name: 'Children and siblings',
  parameters: {
    docs: {
      source: {
        state: 'closed',
      },
    },
  },
};

export const DesignTokens = designTokenStory(meta);
