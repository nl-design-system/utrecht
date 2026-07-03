/* @license CC0-1.0 */

import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { Heading, Link, Paragraph, Separator } from '@utrecht/component-library-react';
import tokens from '@utrecht/design-tokens/dist/index.json';
import { UtrechtContactCardTemplate, UtrechtIconChevronRight } from '@utrecht/web-component-library-react';
import React, { PropsWithChildren } from 'react';

type ContactCardStoryArgs = {
  heading: string;
  subtitle?: string;
  socialLinks?: string;
  socialLinksHeading?: string;
  sectionCount?: number;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const WC = UtrechtContactCardTemplate as any;

const ContactCardStory = ({
  heading,
  subtitle,
  socialLinks,
  socialLinksHeading,
  sectionCount,
  children,
}: PropsWithChildren<ContactCardStoryArgs>) => (
  <WC
    heading={heading}
    subtitle={subtitle}
    socialLinks={socialLinks}
    socialLinksHeading={socialLinksHeading}
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
  },
  args: {
    heading: 'Hulp en contact',
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

export const WithSubtitle: Story = {
  name: 'Met ondertitel (wijk)',
  parameters: {
    docs: {
      description: {
        story:
          'Gebruik de ondertitel om een wijkbureau of locatie aan te geven. In dit voorbeeld bevat de card ook een foto en naam van de wijkwethouder.',
      },
    },
  },
  args: {
    subtitle: 'Wijkbureau Overvecht',
  },
  render: (args: ContactCardStoryArgs) => (
    <ContactCardStory {...args} sectionCount={3}>
      <div className="utrecht-contact-card__grid-cell">
        <Heading level={3}>Telefoon</Heading>
        <Paragraph>
          <Link href="tel:14030" aria-label="Bel 14030, telefoonnummer van gemeente Utrecht">
            14&nbsp;030
          </Link>
        </Paragraph>
        <Heading level={3}>E-mail</Heading>
        <Paragraph>
          <Link href="mailto:overvecht@utrecht.nl" title="Een e-mail naar dit adres versturen.">
            overvecht@utrecht.nl
          </Link>
        </Paragraph>
        <Heading level={3}>Postadres</Heading>
        <Paragraph>Postbus 8395, 3503 RJ Utrecht</Paragraph>
      </div>
      <div className="utrecht-contact-card__grid-cell">
        <Heading level={3}>Bezoekadres</Heading>
        <Paragraph>
          Wijkbureau Overvecht
          <br />
          Zamenhofdreef 17, Utrecht
        </Paragraph>
        <Heading level={3}>Openingstijden</Heading>
        <Paragraph>
          Maandag:
          <br />
          13.00 - 17.00 uur
          <br />
          Dinsdag en donderdag:
          <br />
          9.00 – 17.00 uur
          <br />
          Woensdag en vrijdag:
          <br />
          9.00 - 13.00 uur
        </Paragraph>
      </div>
      <div className="utrecht-contact-card__grid-cell">
        <div>
          <div>
            <Heading level={3}>Wijkwethouder</Heading>
            <Paragraph>Afbeelding naam</Paragraph>
          </div>
          <div>
            <img alt="Afbeelding naam" src="example/photo-nijntje-vuelta.jpg" width="100" height="100" />
          </div>
        </div>
        <Heading level={3}>Wijkspreekuur</Heading>
        <Paragraph>
          <Link
            href="https://www.utrecht.nl/wonen-en-leven/wijken/wijk-overvecht/uw-initiatief-en-invloed/wijkspreekuur-overvecht"
            target="_top"
          >
            Bekijk wanneer de spreekuren zijn en hoe u een afspraak maakt
          </Link>
        </Paragraph>
      </div>
    </ContactCardStory>
  ),
};

export const WithIconLinksOneColumn: Story = {
  name: 'Met icoonlinks en één kolom',
  parameters: {
    docs: {
      description: {
        story:
          'Gebruik `socialLinks` om icoonlinks toe te voegen aan de contact card, bijvoorbeeld voor sociale media.',
      },
    },
  },
  render: (args: ContactCardStoryArgs) => (
    <ContactCardStory {...args} sectionCount={1} socialLinksHeading="Social media" socialLinks={socialLinksJson}>
      {phoneSection}
    </ContactCardStory>
  ),
};

export const WithIconLinksTwoColumns: Story = {
  name: 'Met icoonlinks en twee kolommen',
  parameters: {
    docs: {
      description: {
        story: 'Bij twee secties worden de icoonlinks onderaan de tweede kolom geplaatst.',
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
        story: 'Bij drie kolommen worden de icoonlinks onderaan de derde kolom geplaatst.',
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

export const WithForm: Story = {
  name: 'Met formulier',
  parameters: {
    docs: {
      description: {
        story: 'De contact card kan een formulier bevatten als aanvullende inhoud via de `content` slot.',
      },
    },
  },
  render: (args: ContactCardStoryArgs) => (
    <ContactCardStory {...args} sectionCount={2}>
      {phoneSection}
      {emailSection}
      <div slot="content">
        <Separator />
        <form action="#" noValidate>
          <div className="utrecht-form-field utrecht-form-field--textarea">
            <div className="utrecht-form-field__label">
              <label htmlFor="contact" className="utrecht-form-label">
                <Heading level={3}>Uw vraag of opmerking</Heading>
              </label>
            </div>
            <Paragraph>
              <textarea
                name="contact"
                id="contact"
                rows={5}
                className="utrecht-textarea utrecht-textarea--html-textarea"
              />
            </Paragraph>
          </div>
          <div className="utrecht-form-field utrecht-form-field--text">
            <div className="utrecht-form-field__label">
              <label htmlFor="email" className="utrecht-form-label">
                Uw e-mail adres
              </label>
            </div>
            <Paragraph>
              <input type="email" name="email" id="email" className="utrecht-textbox utrecht-textbox--html-input" />
            </Paragraph>
            <p className="utrecht-form-field-description">
              Vult u geen e-mailadres in? Dan kunnen wij niet reageren op uw vraag of opmerking.
            </p>
          </div>
          <p className="utrecht-button-group utrecht-button-group--column">
            <button className="utrecht-button utrecht-button--primary-action" type="submit">
              Verzenden
              <UtrechtIconChevronRight />
            </button>
          </p>
        </form>
      </div>
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
      <ContactCardStory {...args} sectionCount={3}>
        {phoneSection}
        {emailSection}
        {addressSection}
      </ContactCardStory>
    </div>
  ),
};
