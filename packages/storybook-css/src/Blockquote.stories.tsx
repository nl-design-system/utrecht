/* eslint-disable react/no-unescaped-entities */
import { Meta, StoryObj } from '@storybook/react';
import readme from '@utrecht/blockquote-css/README.md?raw';
import tokensDefinition from '@utrecht/blockquote-css/src/tokens.json';
import { Blockquote, Paragraph } from '@utrecht/component-library-react';
import tokens from '@utrecht/design-tokens/dist/index.json';
import React from 'react';
import { designTokenStory } from './design-token-story';

const meta = {
  title: 'CSS Component/Blockquote',
  id: 'css-blockquote',
  component: Blockquote,
  args: {
    children: '',
  },
  argTypes: {
    aside: {
      description: 'Aside',
      control: { type: 'boolean' },
    },
    textContent: {
      description: 'Content of the quote',
      control: 'text',
    },
    caption: {
      description: 'Caption of the quote',
      control: 'text',
    },
    cite: {
      description: 'URL source of the quotation',
      control: 'text',
    },
    figure: {
      description: 'Figure',
      control: { type: 'boolean' },
    },
    lang: {
      description: 'Language of the quoted text',
      control: 'text',
    },
  },
  parameters: {
    bugs: 'https://github.com/nl-design-system/utrecht/issues?q=is%3Aissue+is%3Aopen+label%3Acomponent%2Fblockquote',
    tokensPrefix: 'utrecht-blockquote',
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
} satisfies Meta<typeof Blockquote>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'The Quick Brown Fox Jumps Over The Lazy Dog',
  },
};

export const Caption: Story = {
  args: {
    caption: 'L. Ipsum',
    children: <Paragraph>The Quick Brown Fox Jumps Over The Lazy Dog</Paragraph>,
  },
  name: 'Caption',
};

export const Aside: Story = {
  args: {
    aside: true,
    children: '“Het was liefde op het eerste gezicht!”',
  },
  name: 'Aside',
  parameters: {
    docs: {
      description: `Gebruik _aside_ wanneer de quote niet een essentiëel onderdeel is van de tekst. Een "pull quote" is een goed voorbeeld: wanneer een uitspraak uit een artikel als illustratie wordt uitvergroot om de aandacht te trekken. De quote is dan niet essentiëel, omdat de tekst ook al in het artikel staat.

Als je dit type quote markeert als _aside_, dan kan het voorkomen dat het in "Reader mode" getoond wordt, of kan het helpen papier te besparen door de quote te verbergen bij het printen van de pagina.

Als de pull quote een caption heeft zoals de naam van de persoon, dan moet je _aside_ combineren met _figure_ en _figcaption_.`,
    },
  },
};

export const Figure: Story = {
  args: {
    figure: true,
    children: <Paragraph>The Quick Brown Fox Jumps Over The Lazy Dog</Paragraph>,
  },
  name: 'Figure',
};

export const FigureAside: Story = {
  args: {
    aside: true,
    figure: true,
    caption: '– Narcissus',
    children: <Paragraph>“Het was liefde op het eerste gezicht!”</Paragraph>,
  },
  name: 'Figure and aside',
  parameters: {
    docs: {
      description: `Gebruik _aside_ en _figure_ tegelijk voor bijvoorbeeld een _pull quote_ met een caption: dat is een illustratie die niet essentiëel is voor het artikel.`,
    },
  },
};

export const AsideCaption: Story = {
  args: {
    aside: true,
    caption: 'L. Ipsum',
    children: 'The Quick Brown Fox Jumps Over The Lazy Dog',
  },
  name: 'Aside and caption',
};

export const CaptionMultipleLines: Story = {
  args: {
    figure: true,
    lang: 'en-US',
    caption: (
      <Paragraph>
        <cite lang="en-US">Fast as You Can</cite>, op het album{' '}
        <cite lang="en-US">
          When the pawn hits the conflicts he thinks like a king
          <br />
          What he knows throws the blows when he goes to the fight
          <br />
          And he'll win the whole thing 'fore he enters the ring
          <br />
          There's no body to batter when your mind is your might
          <br />
          So when you go solo, you hold your own hand
          <br />
          And remember that depth is the greatest of heights
          <br />
          And if you know where you stand, then you know where to land
          <br />
          And if you fall it won't matter, cuz you'll know that you're right
        </cite>{' '}
        van Fiona Apple (1999)
      </Paragraph>
    ),
    children: (
      <Paragraph>
        Sometimes my mind don't shake and shift
        <br />
        But most of the time, it does
      </Paragraph>
    ),
  },
  name: 'Caption of multiple lines of text',
};

export const CiteURL: Story = {
  args: {
    cite: 'https://example.com/',
    children: (
      <Paragraph>
        This domain is for use in illustrative examples in documents. You may use this domain in literature without
        prior coordination or asking for permission.
      </Paragraph>
    ),
  },
  name: 'URL source of the quotation',
};

export const CiteURLCaption: Story = {
  args: {
    caption: 'example.com',
    cite: 'https://example.com/',
    children: (
      <Paragraph>
        This domain is for use in illustrative examples in documents. You may use this domain in literature without
        prior coordination or asking for permission.
      </Paragraph>
    ),
  },
  name: 'URL source of the quotation (when blockquote is not top element)',
};

export const DesignTokens = designTokenStory(meta);
