/* @license CC0-1.0 */

import type { Meta, StoryObj } from '@storybook/react-webpack5';
import tokens from '@utrecht/design-tokens/dist/index.json';
import readme from '@utrecht/unordered-list-css/README.md?raw';
import tokensDefinition from '@utrecht/unordered-list-css/src/tokens.json';
import React, { HTMLAttributes, PropsWithChildren } from 'react';
import hiddenDocs from './_hidden.md?raw';
import { htmlContentDecorator } from './decorator';
import { designTokenStory } from './design-token-story';
import { hidden } from './util/htmlArgTypes';

interface UnorderedListItemStoryProps extends HTMLAttributes<HTMLLIElement> {}

interface UnorderedListProps extends HTMLAttributes<HTMLUListElement> {}

interface UnorderedListStoryProps extends UnorderedListProps {
  items: PropsWithChildren<UnorderedListItemStoryProps>[];
}

const UnorderedList = ({ children, ...attributes }: UnorderedListProps) => <ul {...attributes}>{children}</ul>;

const UnorderedListItem = ({ children, ...attributes }: UnorderedListItemStoryProps) => (
  <li {...attributes}>{children}</li>
);

const UnorderedListStory = ({ items, ...restProps }: UnorderedListStoryProps) => (
  <UnorderedList {...restProps}>
    {items.map(({ children }) => (
      <UnorderedListItem>{children}</UnorderedListItem>
    ))}
  </UnorderedList>
);

const meta = {
  title: 'HTML Component/Unordered list',
  id: 'html-unordered-list',
  component: UnorderedListStory,
  decorators: [htmlContentDecorator],
  argTypes: {
    hidden,
    items: {
      description: 'List items',
      control: 'array',
    },
    dir: {
      description: 'Text direction',
      control: 'text',
    },
    lang: {
      description: 'Lang',
      control: 'text',
    },
  },
  args: {
    items: [],
    hidden: false,
  },
  tags: ['autodocs'],
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
    tokensPrefix: 'utrecht-unordered-list',
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
        children: 'Alle reisdocumenten (paspoort en ID-kaart) die u nu hebt, ook als ze zijn verlopen.',
      },
      {
        children:
          'Een kleurenpasfoto die voldoet aan de eisen voor pasfoto’s. De goedgelijkende pasfoto mag maximaal 6 maanden oud zijn op het moment van de aanvraag.',
      },
      {
        children: 'Een bankpas of contant geld. U betaalt direct bij de aanvraag aan de balie.',
      },
    ],
  },
  parameters: {
    docs: {
      description: {
        story: 'Markup using the `<ul>` and `<li>` elements.',
      },
    },
  },
};

export const Nested: Story = {
  render: () => (
    <ul>
      <li>Uw DigiD</li>
      <li>
        Als u verhuist naar een huurwoning of koopwoning:
        <ul>
          <li>kopie van uw huurcontract of eigendomsbewijs</li>
        </ul>
      </li>
      <li>
        Als u verhuist naar een instelling:
        <ul>
          <li>uw overeenkomst met de instelling of een verklaring van de instelling</li>
        </ul>
      </li>
      <li>
        Als u bij iemand anders gaat wonen:
        <ul>
          <li>
            de verklaring van inwoning. Een meerderjarige bewoner van het adres waar u gaat inwonen vult dit formulier
            in. Dit kan op 2 manieren:
            <ul>
              <li>
                De bewoner vult het online formulier Verklaring van inwoning in. En downloadt de verklaring als pdf. U
                kunt deze pdf toevoegen als u online uw verhuizing doorgeeft.
              </li>
              <li>
                De bewoner vult het formulier Verklaring van inwoning (pdf, 697 kB) in en ondertekent het met pen. U
                scant de ondertekende verklaring en slaat die op als pdf. U kunt deze pdf toevoegen als u online uw
                verhuizing doorgeeft. Mét een kopie van een geldig identiteitsbewijs van de bewoner.
              </li>
            </ul>
          </li>
        </ul>
      </li>
    </ul>
  ),
  name: 'Nested',
};

export const Hidden: Story = {
  args: {
    ...Default.args,
    hidden: true,
  },
  parameters: {
    docs: {
      description: {
        story: hiddenDocs,
      },
    },
  },
};

export const DesignTokens = designTokenStory(meta);
