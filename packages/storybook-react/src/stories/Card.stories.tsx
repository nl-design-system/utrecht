import { Meta, StoryObj } from '@storybook/react-vite';
import readme from '@utrecht/card-css/README.md?raw';
import tokensDefinition from '@utrecht/card-css/dist/tokens.mjs';
import '@utrecht/card-css/src/index.scss';
import tokens from '@utrecht/design-tokens/dist/list.mjs';
import '@utrecht/web-component-library-react';
import React, { type ComponentProps, type CSSProperties } from 'react';
import { designTokenStory } from './util.js';
import { BadgeList, DataBadge, Image } from '../../../component-library-react/src/index.js';
import { Card } from '../../../components-react/card-react/src/index.js';

const meta = {
  title: 'React Component/Card',
  id: 'react-card',
  component: Card,
  args: {
    heading: 'Waterput op de Neude',
    headingLevel: 2,
    image: (
      <Image
        src="images/erfgoed-image-waterput-op-de-neude.png"
        alt="Zestiende-eeuwse stenen waterput ontdekt op de Neude in Utrecht."
      />
    ),
    body: 'Bij het opnieuw inrichten van de Neude zijn er bijzondere vondsten gedaan. De opvallendste was een waterput uit uit de 16e eeuw.',
    href: '#',
  },
  argTypes: {
    image: {
      control: 'object',
      description: 'Image component',
      table: {
        type: { summary: 'ReactNode' },
        defaultValue: { summary: 'undefined' },
      },
    },
    heading: {
      control: 'text',
      description: 'Heading content - can be a string or a ReactNode',
      table: {
        type: { summary: 'string | ReactNode' },
        defaultValue: { summary: 'undefined' },
      },
    },
    headingLevel: {
      control: 'number',
      description: 'Heading level (1-6)',
      table: {
        type: { summary: '1 | 2 | 3 | 4 | 5 | 6' },
        defaultValue: { summary: undefined },
      },
      required: true,
    },
    preHeading: {
      control: 'text',
      description: 'Short text above the heading, for example a category',
      table: {
        type: { summary: 'ReactNode' },
        defaultValue: { summary: 'undefined' },
      },
    },
    footer: {
      control: 'text',
      description: 'Additional data below the body, without links or buttons',
      table: {
        type: { summary: 'ReactNode' },
        defaultValue: { summary: 'undefined' },
      },
    },
    arrowIcon: {
      control: 'boolean',
      description: 'Show an arrow icon when the card has a link',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
      },
    },
    href: {
      control: 'text',
      description: 'URL for the card link',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
      },
    },
    Link: {
      control: 'object',
      description: 'Link component',
      table: {
        type: { summary: 'ReactNode' },
        defaultValue: { summary: 'undefined' },
      },
    },
    appearance: {
      description: 'Color variant of the card',
      control: { type: 'select' },
      options: ['', 'neutral', 'warm', 'cool', 'soft', 'bright'],
    },
    aspect: {
      description: 'Aspect ratio of the image',
      control: { type: 'select' },
      options: ['', '16:9', '4:3', '1:1'],
    },
  },
  parameters: {
    // The CSS Storybook has the same stories: visual regression testing happens there
    chromatic: { disableSnapshot: true },
    tokensPrefix: 'utrecht-card',
    tokens,
    tokensDefinition,
    docs: {
      description: {
        component: readme,
      },
    },
  },
} satisfies Meta<typeof Card>;

export default meta;

type Story = StoryObj<typeof meta>;

// Responsive grid style: 1 column on small screens, 2 on medium, 3 on large
const demoGridStyle: CSSProperties = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
  gap: '16px',
  maxInlineSize: '1200px',
  marginInline: 'auto',
  blockSize: '100%',
  padding: '16px',
};

const componentContainerStyle: CSSProperties = {
  inlineSize: '420px',
  padding: '24px',
};

const footerBadges = (
  <BadgeList>
    <DataBadge>Erfgoed</DataBadge>
    <DataBadge>Binnenstad</DataBadge>
  </BadgeList>
);

const renderCard = (args: ComponentProps<typeof Card>) => (
  <div style={componentContainerStyle}>
    <Card {...args} />
  </div>
);

const description = (story: string) => ({ docs: { description: { story } } });

export const Default: Story = {
  render: renderCard,
  parameters: description(
    'Een card met afbeelding, heading, tekst en link. De hele card is klikbaar: de link in de heading bedekt de card.',
  ),
};

export const Hover: Story = {
  render: renderCard,
  args: {
    className: 'utrecht-card--hover',
  },
  parameters: description(
    'De card als je er met de muis over beweegt: de onderstreping van de link wordt dikker. In deze story doet de class name `utrecht-card--hover` dat.',
  ),
};

export const FocusVisible: Story = {
  render: renderCard,
  parameters: {
    pseudo: { focusVisible: ['.utrecht-card__link'] },
    ...description('De card als de link focus heeft via het toetsenbord: de focusring staat om de hele card.'),
  },
};

export const Active: Story = {
  render: renderCard,
  args: {
    className: 'utrecht-card--active',
  },
  parameters: description(
    'De card op het moment dat je erop klikt. In deze story doet de class name `utrecht-card--active` dat.',
  ),
};

export const Appearances: Story = {
  render: (args: ComponentProps<typeof Card>) => (
    <div style={demoGridStyle}>
      {(['', 'neutral', 'warm', 'cool', 'soft', 'bright'] as const).map((appearance) => (
        <Card
          key={appearance}
          {...args}
          appearance={appearance}
          preHeading={appearance || 'standaard'}
          footer={footerBadges}
        />
      ))}
    </div>
  ),
  parameters: description(
    'Alle kleurvarianten naast elkaar, met pre-heading en footer. Zo controleer je het contrast op elke achtergrond.',
  ),
};

export const AspectRatios: Story = {
  render: (args: ComponentProps<typeof Card>) => (
    <div style={demoGridStyle}>
      {(['16:9', '4:3', '1:1'] as const).map((aspect) => (
        <Card key={aspect} {...args} aspect={aspect} preHeading={aspect} />
      ))}
    </div>
  ),
  parameters: description('De afbeelding in de verhoudingen 16:9, 4:3 en 1:1.'),
};

export const MultipleCard: Story = {
  name: 'Multiple cards',
  render: (args: ComponentProps<typeof Card>) => (
    <div style={demoGridStyle}>
      <Card {...args} aspect="16:9" />
      <Card
        headingLevel={2}
        heading="Veeartsenijroute"
        body="De Veeartsenijroute brengt u langs 9 verschillende plekken die een belangrijke rol spelen in de geschiedenis van het veterinair onderwijs."
        href="#"
        aspect="16:9"
        footer={footerBadges}
        image={
          <Image
            src="images/erfgoed-veeartsenijroute.png"
            alt="Historische paardenstallen van de Rijksveeartsenijschool met pony’s en een vrouwelijke student, circa 1910."
          />
        }
      />
      <Card
        headingLevel={2}
        heading="Merwedekanaalzone: archeologische ontdekkingen Romeins Utrecht"
        body="Bij opgravingen is bewijs gevonden van een overstroming die flinke schade toebracht aan de infrastructuur van Romeins Nederland."
        href="#"
        aspect="16:9"
        image={
          <Image
            src="images/erfgoed-merwedekanaalzone-archeologische-ontdekkingen-romeins-utrecht.png"
            alt="Opgraving van een Romeinse weg met houten fundering in de Merwedekanaalzone in Utrecht."
          />
        }
      />
    </div>
  ),
  parameters: description(
    'Cards in een grid, met teksten van verschillende lengte. De cards in een rij zijn even hoog en de pijl staat steeds onderaan.',
  ),
};

export const LongContent: Story = {
  render: (args: ComponentProps<typeof Card>) => (
    <div style={{ inlineSize: '320px' }}>
      <Card {...args} />
    </div>
  ),
  args: {
    preHeading: 'Archeologie en monumentenzorg in de binnenstad van Utrecht',
    heading: 'Nieuwe vondsten bij de Rijksveeartsenijschoolgebouwen en in de Merwedekanaalzone',
    footer: (
      <BadgeList>
        <DataBadge>Erfgoed</DataBadge>
        <DataBadge>Binnenstad</DataBadge>
        <DataBadge>Archeologie</DataBadge>
        <DataBadge>Rijksmonument</DataBadge>
        <DataBadge>Romeinse tijd</DataBadge>
        <DataBadge>Middeleeuwen</DataBadge>
      </BadgeList>
    ),
  },
  parameters: description(
    'Lange teksten en een lang woord op een smal scherm van 320px. Zo zie je of de inhoud binnen de card blijft.',
  ),
};

export const WithoutImage: Story = {
  render: () => (
    <div style={componentContainerStyle}>
      <Card
        href="#"
        headingLevel={2}
        heading="Informatiekaarten"
        body="Kaarten geven een overzicht van de kennis die we hebben over een bepaald onderdeel van ons erfgoed."
      />
    </div>
  ),
  parameters: description('Een card zonder afbeelding.'),
};

export const WithPreHeading: Story = {
  render: renderCard,
  args: {
    preHeading: 'Archeologie',
  },
  parameters: description(
    'Met een pre-heading: een korte tekst boven de heading, bijvoorbeeld een categorie. In de HTML staat de pre-heading na de heading, zodat je de heading eerst hoort.',
  ),
};

export const WithFooter: Story = {
  render: renderCard,
  args: {
    footer: footerBadges,
  },
  parameters: description(
    'Met een footer voor extra gegevens, zoals data badges. Zet geen links of knoppen in de footer: de link van de card bedekt de hele card.',
  ),
};

export const WithPreHeadingAndFooter: Story = {
  render: renderCard,
  args: {
    preHeading: 'Archeologie',
    footer: footerBadges,
  },
  parameters: description('Met een pre-heading en een footer.'),
};

export const WithCustomLinkComponent: Story = {
  render: renderCard,
  args: {
    Link: 'a',
  },
  parameters: {
    // Only the markup differs from the default card, ignore this story for visual regression testing
    chromatic: { disableSnapshot: true },
    ...description(
      'Met een eigen link component, bijvoorbeeld de link van Next.js of React Router. Je ziet hetzelfde als bij de standaard card.',
    ),
  },
};

export const WithoutLink: Story = {
  render: renderCard,
  args: {
    href: undefined,
  },
  parameters: description('Een card zonder link: zonder pijl, en de card is niet klikbaar.'),
};

export const WithoutArrowIcon: Story = {
  render: renderCard,
  args: {
    arrowIcon: false,
  },
  parameters: description('Een card met link, maar zonder pijl.'),
};

export const DesignTokens = designTokenStory(meta);
