/* @license CC0-1.0 */

import { Meta, StoryObj } from '@storybook/react';
import { NavBar, NavList, NavListLink } from '@utrecht/component-library-react/dist/css-module';
import tokens from '@utrecht/design-tokens/dist/index.json';
import readme from '@utrecht/nav-bar-css/README.md?raw';
import tokensDefinition from '@utrecht/nav-bar-css/src/tokens.json';
import React from 'react';
import { designTokenStory } from './design-token-story';

const meta = {
  title: 'CSS Component/Navigation bar',
  id: 'css-nav-bar',
  component: NavBar,
  argTypes: {
    appearance: {
      control: { type: 'select' },
      options: {
        '': undefined,
        center: 'center',
      },
    },
    children: {
      description: 'Content',
    },
  },
  args: {
    children: [],
  },
  parameters: {
    tokensPrefix: 'utrecht-nav-bar',
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
} satisfies Meta<typeof NavBar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <NavList>
        <NavListLink href="#">Wonen en leven</NavListLink>
        <NavListLink href="#">Werk en inkomen</NavListLink>
        <NavListLink href="#">Ondernemen</NavListLink>
        <NavListLink href="#">Bestuur en organisatie</NavListLink>
      </NavList>
    ),
  },
  name: 'Navigation bar with navigation list',
};

export const Center: Story = {
  args: {
    children: (
      <NavList appearance="center">
        <NavListLink href="#" center>
          Wonen en leven
        </NavListLink>
        <NavListLink href="#" center>
          Werk en inkomen
        </NavListLink>
        <NavListLink href="#" center>
          Ondernemen
        </NavListLink>
        <NavListLink href="#" center>
          Bestuur en organisatie
        </NavListLink>
      </NavList>
    ),
  },
  name: 'Center appearance',
};

export const WrapItems: Story = {
  args: {
    children: (
      <NavList>
        <NavListLink href="#">Wonen en leven</NavListLink>
        <NavListLink href="#">Werk en inkomen</NavListLink>
        <NavListLink href="#">Ondernemen</NavListLink>
        <NavListLink href="#">Bestuur en organisatie</NavListLink>
        <NavListLink href="#">Wonen en leven</NavListLink>
        <NavListLink href="#">Werk en inkomen</NavListLink>
        <NavListLink href="#">Ondernemen</NavListLink>
        <NavListLink href="#">Bestuur en organisatie</NavListLink>
        <NavListLink href="#">Wonen en leven</NavListLink>
        <NavListLink href="#">Werk en inkomen</NavListLink>
        <NavListLink href="#">Ondernemen</NavListLink>
        <NavListLink href="#">Bestuur en organisatie</NavListLink>
        <NavListLink href="#">Wonen en leven</NavListLink>
        <NavListLink href="#">Werk en inkomen</NavListLink>
        <NavListLink href="#">Ondernemen</NavListLink>
        <NavListLink href="#">Bestuur en organisatie</NavListLink>
      </NavList>
    ),
  },
  name: 'Wrap many items',
};

export const WrapText: Story = {
  args: {
    children: (
      <NavList>
        <NavListLink href="#">Wonen en leven lorem ipsum dolor sit amet</NavListLink>
        <NavListLink href="#">Werk en inkomen lorem ipsum dolor sit amet, consectetur adipiscing elit</NavListLink>
        <NavListLink href="#">Ondernemen lorem ipsum dolor sit amet</NavListLink>
        <NavListLink href="#">
          Bestuur en organisatie lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua
        </NavListLink>
      </NavList>
    ),
  },
  name: 'Wrap long text in items',
};

export const DesignTokens = designTokenStory(meta);
