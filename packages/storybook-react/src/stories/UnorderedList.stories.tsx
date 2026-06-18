// performance optimizations are not relevant for story rendering, ignore ESLint

import { Decorator, Meta, StoryObj } from '@storybook/react-vite';
import tokens from '@utrecht/design-tokens/dist/list.mjs';
import readme from '@utrecht/unordered-list-css/README.md?raw';
import tokensDefinition from '@utrecht/unordered-list-css/dist/tokens.mjs';
import React from 'react';
import { designTokenStory } from './util.js';
import {
  OrderedList,
  OrderedListItem,
  UnorderedList,
  UnorderedListItem,
} from '../../../component-library-react/src/index.js';

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

const createNestedListItem = (depth: number, maxDepth: number): React.ReactNode => (
  <UnorderedListItem>
    Dit is diepteniveau {depth} van de list.{' '}
    {depth < maxDepth && <UnorderedList>{createNestedListItem(depth + 1, maxDepth)}</UnorderedList>}
  </UnorderedListItem>
);

export const Nested: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Een genestelde lijst met maximaal 8 niveaus. In de praktijk zullen er waarschijnlijk niet zoveel niveaus zijn, maar het is goed om te weten dat het component hierop voorbereid is.',
      },
    },
  },
  args: {
    children: createNestedListItem(1, 8),
  },
};

const multilineText = (depth: number) =>
  `Dit is diepteniveau ${depth} van de list. Deze tekst is langer gemaakt om te testen hoe de component omgaat met meerdere regels tekst op elk niveau. Op deze manier kunnen we zien of de spacing en marker nog steeds correct worden weergegeven, zelfs als de tekst meerdere regels beslaat.`;

const createMultilineNestedListItem = (depth: number, maxDepth: number): React.ReactNode => (
  <UnorderedListItem>
    {multilineText(depth)}{' '}
    {depth < maxDepth && <UnorderedList>{createMultilineNestedListItem(depth + 1, maxDepth)}</UnorderedList>}
  </UnorderedListItem>
);

export const NestedMultiline: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Een genestelde lijst met langere tekst (multiline) om te testen hoe de component omgaat met meerdere regels tekst op elk niveau.',
      },
    },
  },
  args: {
    children: createMultilineNestedListItem(1, 4),
  },
};

export const NestingOrderedAndUnorderedLists: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Geneste lijsten kunnen ook van verschillende types zijn, zoals een ongeordende lijst binnen een geordende lijst binnen een ongeordende lijst. Zolang de juiste HTML-structuur wordt gevolgd, zal het component de juiste styling toepassen op elk niveau.',
      },
    },
  },
  render: () => (
    <UnorderedList>
      <UnorderedListItem>Dit is een ongeordend lijstitem op het hoofdniveau.</UnorderedListItem>
      <UnorderedListItem>
        Dit ongeordende lijstitem bevat een geordende lijst:
        <OrderedList>
          <OrderedListItem>Dit is een geordend lijstitem.</OrderedListItem>
          <OrderedListItem>
            Dit geordende lijstitem bevat weer een ongeordende lijst:
            <UnorderedList>
              <UnorderedListItem>
                Dit is weer een ongeordend lijstitem binnen het geordende lijstitem.
              </UnorderedListItem>
            </UnorderedList>
          </OrderedListItem>
        </OrderedList>
      </UnorderedListItem>
    </UnorderedList>
  ),
};

const createNestedHtmlListItem = (depth: number, maxDepth: number): React.ReactNode => (
  <li>
    Dit is diepteniveau {depth} van de list.
    {depth < maxDepth && <ul>{createNestedHtmlListItem(depth + 1, maxDepth)}</ul>}
  </li>
);

export const NestingOrderedAndUnorderedListsWithHtmlContent: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Geneste lijsten met verschillende types kunnen ook worden weergegeven met de htmlContent modifier. Dit is handig wanneer u alleen controle heeft over de buitenste `<ul>` template en geen BEM class names kunt toevoegen aan de geneste elementen.',
      },
    },
  },
  args: {
    className: 'utrecht-unordered-list--html-content',
    children: (
      <li>
        Dit ongeordende lijstitem bevat een geordende lijst:
        <ol>
          <li>
            Dit is een geordend lijstitem.
            <ul>
              <li>Dit is weer een ongeordend lijstitem binnen het geordende lijstitem.</li>
            </ul>
          </li>
          <li>
            Dit geordende lijstitem bevat weer een ongeordende lijst:
            <ul>{createNestedHtmlListItem(1, 4)}</ul>
          </li>
        </ol>
      </li>
    ),
  },
};

export const HTMLContent: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Use the `utrecht-unordered-list--html-content` modifier when you only have control over the template for the outer `<ul>` and cannot add BEM class names to the `<li>` elements.',
      },
    },
  },
  args: {
    className: 'utrecht-unordered-list--html-content',
    children: [
      <li>Alle reisdocumenten (paspoort en ID-kaart) die u nu hebt, ook als ze zijn verlopen.</li>,
      <li>
        Een kleurenpasfoto die voldoet aan de eisen voor pasfoto’s. De goedgelijkende pasfoto mag maximaal 6 maanden oud
        zijn op het moment van de aanvraag.
      </li>,
      <li>Een bankpas of contant geld. U betaalt direct bij de aanvraag aan de balie.</li>,
      <li>
        Dit is diepteniveau 1 van de list.
        <ul>{createNestedHtmlListItem(2, 8)}</ul>
      </li>,
    ],
  },
};

const ContainerWithCenteredText: Decorator = (Story) => <div style={{ textAlign: 'center' }}>{Story()}</div>;

export const Center: Story = {
  args: {
    className: 'utrecht-unordered-list--center',
    children: [
      <UnorderedListItem>The Quick Brown Fox</UnorderedListItem>,
      <UnorderedListItem>Jumps</UnorderedListItem>,
      <UnorderedListItem>Over The Lazy Dog</UnorderedListItem>,
    ],
  },
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

export const CenterMultiline: Story = {
  args: {
    className: 'utrecht-unordered-list--center',
    children: [
      <UnorderedListItem>
        Centered unordered list with multiline text to test how markers are displayed when text wraps to multiple lines.
        This is needed to ensure that the spacing and marker alignment remains correct even when the text spans multiple
        lines.
      </UnorderedListItem>,
      <UnorderedListItem>
        Centered unordered list with multiline text to test how markers are displayed when text wraps to multiple lines.
        This is needed to ensure that the spacing and marker alignment remains correct even when the text spans multiple
        lines.
      </UnorderedListItem>,
      <UnorderedListItem>
        Centered unordered list with multiline text to test how markers are displayed when text wraps to multiple lines.
        This is needed to ensure that the spacing and marker alignment remains correct even when the text spans multiple
        lines.
      </UnorderedListItem>,
    ],
  },
  decorators: [ContainerWithCenteredText],
  parameters: {
    docs: {
      description: {
        story:
          'Centered unordered list with multiline text to test how markers are displayed when text wraps to multiple lines.',
      },
    },
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
};

export const CenterMultilineNested: Story = {
  args: {
    className: 'utrecht-unordered-list--center',
    children: createMultilineNestedListItem(1, 4),
  },
  decorators: [ContainerWithCenteredText],
  parameters: {
    docs: {
      description: {
        story:
          'Centered unordered list with multiline text and nested items (4 levels deep) to test how markers and spacing are displayed when text wraps to multiple lines in a nested structure.',
      },
    },
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
};

const NarrowContainerWithCenteredText: Decorator = (Story) => (
  <div
    style={
      {
        textAlign: 'center',
        inlineSize: '50%',
        borderInlineStart: '1px solid currentColor',
        borderInlineEnd: '1px solid currentColor',
        paddingInline: '1em',
      } as React.CSSProperties
    }
  >
    {Story()}
  </div>
);

export const NarrowContainerCenter: Story = {
  args: {
    className: 'utrecht-unordered-list--center',
    children: [
      <UnorderedListItem>The Quick Brown Fox</UnorderedListItem>,
      <UnorderedListItem>Jumps</UnorderedListItem>,
      <UnorderedListItem>Over The Lazy Dog</UnorderedListItem>,
    ],
  },
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
    className: 'utrecht-unordered-list--center',
    children: [
      <UnorderedListItem>
        Alle reisdocumenten (paspoort en ID-kaart) die u nu hebt, ook als ze zijn verlopen. Alle reisdocumenten
        (paspoort en ID-kaart) die u nu hebt, ook als ze zijn verlopen. Alle reisdocumenten (paspoort en ID-kaart) die u
        nu hebt, ook als ze zijn verlopen.
      </UnorderedListItem>,
      <UnorderedListItem>
        Een kleurenpasfoto die voldoet aan de eisen voor pasfoto’s. De goedgelijkende pasfoto mag maximaal 6 maanden oud
        zijn op het moment van de aanvraag. Een kleurenpasfoto die voldoet aan de eisen voor pasfoto’s. De
        goedgelijkende pasfoto mag maximaal 6 maanden oud zijn op het moment van de aanvraag. Een kleurenpasfoto die
        voldoet aan de eisen voor pasfoto’s.
      </UnorderedListItem>,
      <UnorderedListItem>
        Een bankpas of contant geld. U betaalt direct bij de aanvraag aan de balie. Een bankpas of contant geld. U
        betaalt direct bij de aanvraag aan de balie. Een bankpas of contant geld. U betaalt direct bij de aanvraag aan
        de balie.
      </UnorderedListItem>,
      <UnorderedListItem>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
        laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
        dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </UnorderedListItem>,
    ],
  },
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

export const CustomMarkers: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Het marker-teken van elk niveau kan worden aangepast met de design tokens `--utrecht-unordered-list-level-{n}-list-style-type`. In dit voorbeeld is de standaardreeks (●○◆◇■□▲△) vervangen door een eigen reeks van gevulde en open symbolen.',
      },
    },
  },
  args: {
    children: createNestedListItem(1, 8),
    style: {
      '--utrecht-unordered-list-level-1-list-style-type': '"★"',
      '--utrecht-unordered-list-level-2-list-style-type': '"☆"',
      '--utrecht-unordered-list-level-3-list-style-type': '"♥"',
      '--utrecht-unordered-list-level-4-list-style-type': '"♡"',
      '--utrecht-unordered-list-level-5-list-style-type': '"▼"',
      '--utrecht-unordered-list-level-6-list-style-type': '"▽"',
      '--utrecht-unordered-list-level-7-list-style-type': '"✦"',
      '--utrecht-unordered-list-level-8-list-style-type': '"✧"',
    } as React.CSSProperties,
  },
};

export const LevelOverride: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Use the `level` prop to correct the nesting level when a list is nested inside markup that this component did not render (e.g. raw HTML or another framework), since the automatic detection can only count `UnorderedList` ancestors in the React tree. Without the override, the inner `UnorderedList` below would incorrectly render as level 2 instead of level 3, colliding with the raw HTML list in between.',
      },
    },
  },
  render: () => (
    <UnorderedList>
      <UnorderedListItem>
        Level 1 (React)
        <ul className="utrecht-unordered-list utrecht-unordered-list--level-2">
          <li className="utrecht-unordered-list__item">
            Level 2 (raw HTML, not rendered by this component)
            <UnorderedList level={3}>
              <UnorderedListItem>Level 3 (React, with an explicit level override)</UnorderedListItem>
            </UnorderedList>
          </li>
        </ul>
      </UnorderedListItem>
    </UnorderedList>
  ),
};

export const DesignTokens = designTokenStory(meta);
