/* @license CC0-1.0 */

import type { Decorator, Meta, StoryObj } from '@storybook/react-vite';
import tokens from '@utrecht/design-tokens/dist/index.json';
import { mergeMarkdown } from '@utrecht/storybook-helpers/src/markdown';
import readme from '@utrecht/unordered-list-css/README.md?raw';
import anatomyDocs from '@utrecht/unordered-list-css/docs/anatomy.nl.md?raw';
import htmlDocs from '@utrecht/unordered-list-css/docs/technology-html.nl.md?raw';
import tokensDefinition from '@utrecht/unordered-list-css/src/tokens.json';
import React from 'react';
import { OrderedListStory } from './OrderedList';
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
    bugs: 'https://github.com/nl-design-system/utrecht/issues?q=is%3Aissue+is%3Aopen+label%3Acomponent%2Funordered-list',
    communityFigma:
      'https://www.figma.com/design/shhwGcqPLi2CapK0P1zz8O/NLDS---Voorbeeld---Bibliotheek?node-id=828-920&t=CiZrkiC5t6Bn59Hg-0',
    figma:
      'https://www.figma.com/design/UXIHcIurAD8hyoBWx4hDBV/NLDS---Gemeente-Utrecht---Bibliotheek?node-id=828-920&t=kJatlKfN59e8T0eA-0',
    nldesignsystem: 'https://nldesignsystem.nl/unordered-list',
    tokensPrefix: 'utrecht-unordered-list',
    status: {
      type: 'WORK IN PROGRESS',
    },
    tokens,
    tokensDefinition,
    docs: {
      description: {
        component: mergeMarkdown([readme, anatomyDocs, htmlDocs]),
      },
    },
  },
} satisfies Meta<typeof UnorderedListStory>;

export default meta;

type Item = {
  children: string;
  items?: Item[];
};

function createNestedItems(depth: number, maxDepth: number, multiline: boolean = false): Item[] {
  if (depth > maxDepth) return [];

  const baseText = 'Dit is diepteniveau ' + depth + ' van de list. ';
  const multilineText =
    'Dit is diepteniveau ' +
    depth +
    ' van de list. Deze tekst is langer gemaakt om te testen hoe de component omgaat met meerdere regels tekst op elk niveau. Op deze manier kunnen we zien of de spacing en marker nog steeds correct worden weergegeven, zelfs als de tekst meerdere regels beslaat. ';
  const text = multiline ? multilineText : baseText;

  return [
    {
      children: text,
      items: createNestedItems(depth + 1, maxDepth, multiline),
    },
  ];
}

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'De standaard ongeordende lijst toont een eenvoudige lijst met opsommingstekens. Elk lijstitem wordt weergegeven met de juiste marker en spacing. Deze component volgt de Utrecht design system richtlijnen voor typografie, spacing en toegankelijkheid.',
      },
    },
  },
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
};

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
    items: createNestedItems(1, 8, false),
  },
};

// Custom component for UL > OL > UL nesting
const UlOlNestingComponent = () => (
  <UnorderedListStory
    items={[
      {
        children: 'Dit is een ongeordend lijstitem op het hoofdniveau.',
      },
      {
        children: (
          <>
            Dit ongeordende lijstitem bevat een geordende lijst:
            <OrderedListStory
              items={[
                {
                  children: 'Dit is een geordend lijstitem.',
                },
                {
                  children: (
                    <>
                      Dit geordende lijstitem bevat weer een ongeordende lijst:
                      <UnorderedListStory
                        items={[
                          {
                            children: 'Dit is weer een ongeordend lijstitem binnen het geordende lijstitem.',
                          },
                          {
                            children: (
                              <>
                                Dit ongeordende lijstitem bevat een geordende lijst:
                                <OrderedListStory
                                  items={[
                                    {
                                      children: 'Dit is een geordend lijstitem.',
                                    },
                                    {
                                      children: (
                                        <>
                                          Dit geordende lijstitem bevat weer een ongeordende lijst:
                                          <UnorderedListStory
                                            items={[
                                              {
                                                children:
                                                  'Dit is weer een ongeordend lijstitem binnen het geordende lijstitem.',
                                              },
                                            ]}
                                          />
                                        </>
                                      ),
                                    },
                                  ]}
                                />
                              </>
                            ),
                          },
                        ]}
                      />
                    </>
                  ),
                },
              ]}
            />
          </>
        ),
      },
    ]}
  />
);

export const NestingOrderedAndUnorderedLists: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Geneste lijsten kunnen ook van verschillende types zijn, zoals een ongeordende lijst binnen een geordende lijst binnen een ongeordende lijst. Zolang de juiste HTML-structuur wordt gevolgd, zal het component de juiste styling toepassen op elk niveau.',
      },
    },
  },
  render: () => <UlOlNestingComponent />,
};

// HTML Content version for mixed nesting
const UlOlNestingHtmlContentComponent = () => (
  <UnorderedListStory
    htmlContent={true}
    items={[
      {
        children: (
          <>
            Dit ongeordende lijstitem bevat een geordende lijst:
            <ol>
              <li>
                Dit is een geordend lijstitem.
                <ul>
                  <li>
                    Dit is weer een ongeordend lijstitem binnen het geordende lijstitem.
                    <ul>
                      <li>Dit is weer een ongeordend lijstitem binnen het geordende lijstitem.</li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                Dit geordende lijstitem bevat weer een ongeordende lijst:
                <ul>
                  <li>
                    Dit is weer een ongeordend lijstitem binnen het geordende lijstitem.
                    <ol>
                      <li>
                        Dit geordende lijstitem bevat weer een ongeordende lijst:
                        <ul>
                          <li>Dit is weer een ongeordend lijstitem binnen het geordende lijstitem.</li>
                        </ul>
                      </li>
                      <li>
                        Nog een geordend lijstitem.
                        <ul>
                          <li>Dit is een geordend lijstitem.</li>
                          <li>
                            Dit geordende lijstitem bevat weer een ongeordende lijst:
                            <ul>
                              <li>
                                Dit is weer een ongeordend lijstitem binnen het geordende lijstitem.
                                <ul>
                                  <li>
                                    Dit is weer een ongeordend lijstitem binnen het geordende lijstitem.
                                    <ul>
                                      <li>
                                        Dit is weer een ongeordend lijstitem binnen het geordende lijstitem.
                                        <ul>
                                          <li>Dit is weer een ongeordend lijstitem binnen het geordende lijstitem.</li>
                                        </ul>
                                      </li>
                                    </ul>
                                  </li>
                                </ul>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                    </ol>
                  </li>
                </ul>
              </li>
            </ol>
          </>
        ),
      },
    ]}
  ></UnorderedListStory>
);

export const NestingOrderedAndUnorderedListsWithHtmlContent: Story = {
  args: {
    htmlContent: true,
  },
  parameters: {
    docs: {
      description: {
        story:
          'Geneste lijsten met verschillende types kunnen ook worden weergegeven met de htmlContent modifier. Dit is handig wanneer u alleen controle heeft over de buitenste `<ul>` template en geen BEM class names kunt toevoegen aan de geneste elementen.',
      },
    },
  },
  render: () => <UlOlNestingHtmlContentComponent />,
};

const ContainerWithCenteredText: Decorator = (Story) => <div style={{ textAlign: 'center' }}>{Story()}</div>;

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

export const CenterMultiline: Story = {
  args: {
    center: true,
    items: [
      {
        children:
          'Centered unordered list with multiline text to test how markers are displayed when text wraps to multiple lines. This is needed to ensure that the spacing and marker alignment remains correct even when the text spans multiple lines.',
      },
      {
        children:
          'Centered unordered list with multiline text to test how markers are displayed when text wraps to multiple lines. This is needed to ensure that the spacing and marker alignment remains correct even when the text spans multiple lines.',
      },
      {
        children:
          'Centered unordered list with multiline text to test how markers are displayed when text wraps to multiple lines. This is needed to ensure that the spacing and marker alignment remains correct even when the text spans multiple lines.',
      },
    ],
  },
  name: 'Center (multiline)',
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
    center: true,
    multiline: true,
    items: createNestedItems(1, 4, true),
  },
  name: 'Center (multiline, nested 4 levels)',
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
        'border-inline-start': '1px solid currentColor',
        'border-inline-end': '1px solid currentColor',
        'padding-inline': '1em',
      } as React.CSSProperties
    }
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
    multiline: true,
    items: [
      {
        children:
          'Alle reisdocumenten (paspoort en ID-kaart) die u nu hebt, ook als ze zijn verlopen. Alle reisdocumenten (paspoort en ID-kaart) die u nu hebt, ook als ze zijn verlopen. Alle reisdocumenten (paspoort en ID-kaart) die u nu hebt, ook als ze zijn verlopen.',
      },
      {
        children:
          'Een kleurenpasfoto die voldoet aan de eisen voor pasfoto’s. De goedgelijkende pasfoto mag maximaal 6 maanden oud zijn op het moment van de aanvraag. Een kleurenpasfoto die voldoet aan de eisen voor pasfoto’s. De goedgelijkende pasfoto mag maximaal 6 maanden oud zijn op het moment van de aanvraag. Een kleurenpasfoto die voldoet aan de eisen voor pasfoto’s.',
      },
      {
        children:
          'Een bankpas of contant geld. U betaalt direct bij de aanvraag aan de balie. Een bankpas of contant geld. U betaalt direct bij de aanvraag aan de balie. Een bankpas of contant geld. U betaalt direct bij de aanvraag aan de balie.',
      },
      {
        children: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
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
        children: 'Alle reisdocumenten (paspoort en ID-kaart) die u nu hebt, ook als ze zijn verlopen.',
      },
      {
        children:
          'Een kleurenpasfoto die voldoet aan de eisen voor pasfoto’s. De goedgelijkende pasfoto mag maximaal 6 maanden oud zijn op het moment van de aanvraag.',
      },
      {
        children: 'Een bankpas of contant geld. U betaalt direct bij de aanvraag aan de balie.',
      },
      {
        children: 'Dit is diepteniveau 1 van de list.',
        items: createNestedItems(2, 8, false),
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
    items: createNestedItems(1, 4, true),
  },
};

export const DesignTokens = designTokenStory(meta);
