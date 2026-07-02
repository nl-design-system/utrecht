/* @license CC0-1.0 */

import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { Heading, Link, Paragraph } from '@utrecht/component-library-react';
import tokens from '@utrecht/design-tokens/dist/index.json';
import { UtrechtContactCardTemplate } from '@utrecht/web-component-library-react';
import React, { PropsWithChildren } from 'react';

type HTMLHeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;

type ContactCardStoryArgs = {
  heading: string;
  headingLevel?: HTMLHeadingLevel;
  subtitle?: string;
  socialLinks?: string;
  socialLinksHeading?: string;
  socialLinksHeadingLevel?: HTMLHeadingLevel;
  sectionCount?: number;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const WC = UtrechtContactCardTemplate as any;

const ContactCardStory = ({
  heading,
  headingLevel,
  subtitle,
  socialLinks,
  socialLinksHeading,
  socialLinksHeadingLevel,
  sectionCount,
  children,
}: PropsWithChildren<ContactCardStoryArgs>) => (
  <WC
    heading={heading}
    headingLevel={headingLevel}
    subtitle={subtitle}
    socialLinks={socialLinks}
    socialLinksHeading={socialLinksHeading}
    socialLinksHeadingLevel={socialLinksHeadingLevel}
    sectionCount={sectionCount}
  >
    {children}
  </WC>
);

const phoneSection = (
  <div className="utrecht-contact-card__grid-cell">
    <Heading level={3}>Telefoon</Heading>
    <Paragraph>
      <Link href="tel:14030" aria-label="Bel 14030, telefoonnummer van gemeente Utrecht">
        14&nbsp;030
      </Link>
    </Paragraph>
    <Paragraph>
      Maandag, dinsdag en donderdag 9.00&nbsp;-&nbsp;17.00&nbsp;uur
      <br />
      Woensdag en vrijdag 9.00&nbsp;-&nbsp;13.00&nbsp;uur
    </Paragraph>
  </div>
);

const emailSection = (
  <div className="utrecht-contact-card__grid-cell">
    <Heading level={3}>Vraag of idee?</Heading>
    <Paragraph>
      <Link href="https://www.utrecht.nl/reactieformulier" target="_top">
        Algemeen reactieformulier
      </Link>
    </Paragraph>
  </div>
);

const addressSection = (
  <div className="utrecht-contact-card__grid-cell">
    <Heading level={3}>Bezoekadres</Heading>
    <Paragraph>Stadsplateau 1, Utrecht</Paragraph>
    <Heading level={3}>Postadres</Heading>
    <Paragraph>
      Postbus 16200
      <br />
      3500 CE Utrecht
    </Paragraph>
  </div>
);

const socialLinksJson = JSON.stringify([
  { icon: 'facebook', href: 'https://www.facebook.com/GemeenteUtrecht', label: 'Facebook van gemeente Utrecht' },
  {
    icon: 'linkedin',
    href: 'https://www.linkedin.com/company/gemeente-utrecht',
    label: 'LinkedIn van gemeente Utrecht',
  },
  { icon: 'x', href: 'https://x.com/gemeenteutrecht', label: 'X van gemeente Utrecht' },
]);

const meta = {
  title: 'Templates/Contact card',
  id: 'templates-web-component-contact-card',
  component: ContactCardStory,
  argTypes: {
    heading: {
      control: 'text',
      description: 'Heading text',
      table: { type: { summary: 'string' } },
    },
    headingLevel: {
      control: { type: 'number', min: 1, max: 6 },
      description: 'Heading level',
      table: { type: { summary: '1 | 2 | 3 | 4 | 5 | 6' }, defaultValue: { summary: '2' } },
    },
    subtitle: {
      control: 'text',
      description: 'Optional subtitle shown after the heading',
      table: { type: { summary: 'string' } },
    },
    socialLinks: {
      control: false,
      description: 'JSON string array of social links with icon, href and optional label',
      table: { type: { summary: 'string' } },
    },
    socialLinksHeading: {
      control: 'text',
      description: 'Optional heading above the social links',
      table: { type: { summary: 'string' } },
    },
    socialLinksHeadingLevel: {
      control: { type: 'number', min: 1, max: 6 },
      description: 'Heading level for the social links heading, always styled as heading-3',
      table: { type: { summary: '1 | 2 | 3 | 4 | 5 | 6' }, defaultValue: { summary: '3' } },
    },
  },
  args: {
    heading: 'Hulp en contact',
    headingLevel: 2,
  },
  tags: ['autodocs'],
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
    tokensPrefix: 'utrecht-contact-card-template',
    tokens,
    tokensDefinition: {},
  },
} satisfies Meta<typeof ContactCardStory>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'De standaard contact card toont contactgegevens van een gemeentelijke afdeling, zoals telefoonnummer en een reactieformulier.',
      },
    },
  },
  render: (args: ContactCardStoryArgs) => (
    <ContactCardStory {...args} sectionCount={2}>
      {phoneSection}
      {emailSection}
    </ContactCardStory>
  ),
};

export const OneColumn: Story = {
  name: 'Eén kolom',
  parameters: {
    docs: {
      description: {
        story: 'Een contact card met één kolom, bijvoorbeeld voor telefoon en adresgegevens.',
      },
    },
  },
  render: (args: ContactCardStoryArgs) => (
    <ContactCardStory {...args} sectionCount={1}>
      {phoneSection}
    </ContactCardStory>
  ),
};

export const ThreeColumns: Story = {
  name: 'Drie kolommen',
  parameters: {
    docs: {
      description: {
        story: 'Een contact card met drie kolommen, bijvoorbeeld voor telefoon, adresgegevens en een reactieformulier.',
      },
    },
  },
  render: (args: ContactCardStoryArgs) => (
    <ContactCardStory {...args} sectionCount={3}>
      {phoneSection}
      {addressSection}
      {emailSection}
    </ContactCardStory>
  ),
};

export const WithHeadingLevel: Story = {
  name: 'Aangepast kopniveau',
  parameters: {
    docs: {
      description: {
        story:
          'Gebruik `headingLevel` om het kopniveau van de titel aan te passen aan de plaats van de contact card in de documentstructuur.',
      },
    },
  },
  args: {
    headingLevel: 3,
  },
  render: (args: ContactCardStoryArgs) => (
    <ContactCardStory {...args} sectionCount={2}>
      {phoneSection}
      {emailSection}
    </ContactCardStory>
  ),
};

export const WithSubtitle: Story = {
  name: 'Met ondertitel (wijk)',
  parameters: {
    docs: {
      description: {
        story: 'Gebruik de ondertitel om een wijkbureau of locatie aan te geven.',
      },
    },
  },
  args: {
    subtitle: 'Wijkbureau Overvecht',
  },
  render: (args: ContactCardStoryArgs) => (
    <ContactCardStory {...args} sectionCount={2}>
      {phoneSection}
      {emailSection}
    </ContactCardStory>
  ),
};

export const WithIconLinks: Story = {
  name: 'Met icoonlinks',
  parameters: {
    docs: {
      description: {
        story:
          'Gebruik `socialLinks` om icoonlinks toe te voegen aan de contact card, bijvoorbeeld voor sociale media.',
      },
    },
  },
  render: (args: ContactCardStoryArgs) => (
    <ContactCardStory {...args} sectionCount={2} socialLinksHeading="Social media" socialLinks={socialLinksJson}>
      {phoneSection}
      {emailSection}
    </ContactCardStory>
  ),
};

export const WithIconLinksThreeColumns: Story = {
  name: 'Met icoonlinks en drie kolommen',
  parameters: {
    docs: {
      description: {
        story:
          'Bij drie kolommen worden de icoonlinks onderaan de derde kolom geplaatst, in plaats van als extra kolom.',
      },
    },
  },
  render: (args: ContactCardStoryArgs) => (
    <ContactCardStory {...args} sectionCount={3} socialLinksHeading="Social media" socialLinks={socialLinksJson}>
      {phoneSection}
      {addressSection}
      {emailSection}
    </ContactCardStory>
  ),
};

export const WithBackgroundImage: Story = {
  name: 'Met achtergrondafbeelding',
  parameters: {
    docs: {
      description: {
        story: 'Gebruik het token `background-image` om een achtergrondafbeelding of verloop toe te voegen.',
      },
    },
  },
  render: (args: ContactCardStoryArgs) => (
    <div
      style={
        {
          '--utrecht-contact-card-background-color': 'hsl(207 60% 91%)',
          '--utrecht-contact-card-background-color-2': 'hsl(207 60% 96%)',
          '--utrecht-contact-card-background-image':
            'linear-gradient(45deg,var(--utrecht-contact-card-background-color),var(--utrecht-contact-card-background-color) 50%,var(--utrecht-contact-card-background-color-2) 50%,var(--utrecht-contact-card-background-color-2))',
          '--utrecht-contact-card-background-position': '66% center',
          '--utrecht-contact-card-background-size': '200%',
        } as React.CSSProperties
      }
    >
      <ContactCardStory {...args} sectionCount={2}>
        {phoneSection}
        {emailSection}
      </ContactCardStory>
    </div>
  ),
};
