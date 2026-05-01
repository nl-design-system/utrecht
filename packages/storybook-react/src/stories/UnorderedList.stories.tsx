// performance optimizations are not relevant for story rendering, ignore ESLint

import { Meta, StoryObj } from '@storybook/react-vite';
import tokens from '@utrecht/design-tokens/dist/list.mjs';
import readme from '@utrecht/unordered-list-css/README.md?raw';
import tokensDefinition from '@utrecht/unordered-list-css/dist/tokens.mjs';
import React from 'react';
import { designTokenStory } from './util.js';
import { UnorderedList, UnorderedListItem } from '../../../component-library-react/src/index.js';

const meta = {
  title: 'React Component/Unordered List',
  id: 'react-unordered-list',
  component: UnorderedList,
  argTypes: {},
  args: {
    children: [
      <UnorderedListItem>
        Alle reisdocumenten (paspoort en ID-kaart) die u nu hebt, ook als ze zijn verlopen.
      </UnorderedListItem>,
      <UnorderedListItem>
        Een kleurenpasfoto die voldoet aan de eisen voor pasfoto’s. De goedgelijkende pasfoto mag maximaal 6 maanden oud
        zijn op het moment van de aanvraag.
      </UnorderedListItem>,
      <UnorderedListItem>
        Een bankpas of contant geld. U betaalt direct bij de aanvraag aan de balie.
      </UnorderedListItem>,
    ],
  },
  parameters: {
    tokensPrefix: 'utrecht-unordered-list',
    tokens,
    tokensDefinition,
    docs: {
      description: {
        component: readme,
      },
    },
  },
} satisfies Meta<typeof UnorderedList>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const DesignTokens = designTokenStory(meta);
