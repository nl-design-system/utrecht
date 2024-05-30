// performance optimizations are not relevant for story rendering, ignore ESLint

import { Meta, StoryObj } from '@storybook/react';
import { CardList, CardListItem, Paragraph } from '@utrecht/component-library-react/src/css-module/index';
import readme from '@utrecht/components/card-list/README.md?raw';
import tokensDefinition from '@utrecht/components/card-list/tokens.json';
import tokens from '@utrecht/design-tokens/dist/index.json';
import React from 'react';
import { designTokenStory } from './util';

const meta = {
  title: 'React Component/Card List',
  id: 'react-Card-list',
  component: CardList,
  argTypes: {},
  args: {
    children: [
      <CardListItem
        headingLevel={2}
        title="title 1"
        image={
          <img
            className="utrecht-card-list__item-image"
            width={350}
            height={300}
            src="example/photo-nijntje-vuelta.jpg"
            alt="card image"
          />
        }
        cardRole="article"
        preHeading="preheading"
      >
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi rutrum risus quis sem scelerisque rutrum.
        </Paragraph>
      </CardListItem>,
      <CardListItem
        headingLevel={2}
        title="title 2"
        image={
          <img
            className="utrecht-card-list__item-image"
            width={350}
            height={300}
            src="example/photo-nijntje-vuelta.jpg"
            alt="card image"
          />
        }
        href="https://www.example.com"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi rutrum risus quis sem scelerisque rutrum.
      </CardListItem>,
      <CardListItem headingLevel={1}>
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi rutrum risus quis sem scelerisque rutrum.
        </Paragraph>
      </CardListItem>,
    ],
  },
  parameters: {
    tokensPrefix: 'utrecht-card-list',
    tokens,
    tokensDefinition,
    docs: {
      description: {
        component: readme,
      },
    },
  },
} satisfies Meta<typeof CardList>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const DesignTokens = designTokenStory(meta);
