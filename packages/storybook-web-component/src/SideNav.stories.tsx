/* @license CC0-1.0 */

import type { Meta, StoryObj } from '@storybook/react-webpack5';
import tokens from '@utrecht/design-tokens/dist/index.json';
import { UtrechtSidenav } from '@utrecht/web-component-library-react';
import React from 'react';
import { designTokenStory } from './design-token-story';
import readme from '../../../components/navigatie-sidenav/README.md?raw';

interface SideNavStoryProps {
  json: string;
}

const SideNavStory = ({ json }: SideNavStoryProps) => <UtrechtSidenav json={JSON.stringify(json)}></UtrechtSidenav>;

const meta = {
  title: 'Web Component/Side navigation',
  id: 'web-component-sidenav',
  component: SideNavStory,
  argTypes: {
    json: {
      description: 'JSON',
      control: 'array',
    },
  },
  args: {
    json: [],
  },
  tags: ['autodocs'],
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
    tokensPrefix: 'utrecht-sidenav',
    tokens,
    tokensDefinition: {},
    docs: {
      description: {
        component: readme,
      },
    },
  },
} satisfies Meta<typeof SideNavStory>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    json: [
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
};

export const DesignTokens = designTokenStory(meta);
