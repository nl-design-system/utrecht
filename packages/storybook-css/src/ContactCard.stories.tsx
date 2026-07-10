/* @license CC0-1.0 */

import type { Meta, StoryObj } from '@storybook/react-vite';
import { Heading, Link, Paragraph, Separator } from '@utrecht/component-library-react';
import readme from '@utrecht/contact-card-css/README.md?raw';
import tokensDefinition from '@utrecht/contact-card-css/src/tokens.json';
import { ContactCard } from '@utrecht/contact-card-react/dist/css';
import tokens from '@utrecht/design-tokens/dist/index.json';
import {
  UtrechtIconChevronRight,
  UtrechtIconFacebook,
  UtrechtIconLinkedin,
  UtrechtIconX,
} from '@utrecht/web-component-library-react';
import React, { type ComponentProps, type ReactNode } from 'react';
import { designTokenStory } from './design-token-story';

interface ContactCardStoryArgs extends ComponentProps<typeof ContactCard> {
  sections: ReactNode[];
}

const meta = {
  title: 'CSS Component/Contact Card',
  id: 'css-contact-card',
  component: ContactCard,
  argTypes: {
    heading: {
      control: 'text',
      description: 'Heading text',
      table: { type: { summary: 'string' } },
    },
    subtitle: {
      control: 'text',
      description: 'Optional subtitle shown in a <span> after the heading',
      table: { type: { summary: 'string' }, defaultValue: { summary: '' } },
    },
    sections: {
      control: false,
      description:
        'Array of section content, maximum of 3 recommended (each rendered in a utrecht-contact-card__grid-cell div)',
      table: { type: { summary: 'ReactNode[]' } },
    },
    children: {
      control: 'text',
      description: 'Additional content rendered after the sections',
      table: { type: { summary: 'ReactNode' } },
    },
    socialLinks: {
      control: 'text',
      description: 'Array of social links with icon, href and optional label',
      table: { type: { summary: 'ContactCardSocialLink[]' } },
    },
    socialLinksHeading: {
      control: 'text',
      description: 'Optional heading above the social links',
      table: { type: { summary: 'ReactNode' } },
    },
  },
  args: {
    heading: 'Hulp en contact',
    subtitle: '',
  },
  parameters: {
    bugs: 'https://github.com/nl-design-system/utrecht/issues?q=is%3Aissue+is%3Aopen+label%3Acomponent%2Fcontact-card',
    layout: 'padded',
    tokensPrefix: 'utrecht-contact-card',
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
} satisfies Meta<ContactCardStoryArgs>;

export default meta;

type Story = StoryObj<ContactCardStoryArgs>;

export const Default: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'De standaard contact card toont contactgegevens van een gemeentelijke afdeling, zoals telefoonnummer en een reactieformulier.',
      },
    },
  },
  args: {
    heading: 'Hulp en contact',
    subtitle: '',
    sections: [
      <>
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
      </>,
      <>
        <Heading level={3}>Vraag of idee?</Heading>
        <Paragraph>
          <Link href="https://www.utrecht.nl/reactieformulier" target="_top">
            Algemeen reactieformulier
          </Link>
        </Paragraph>
      </>,
    ],
  },
  render: ({ sections, ...args }: ContactCardStoryArgs) => <ContactCard {...args} sections={sections} />,
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
  args: {
    heading: 'Hulp en contact',
    subtitle: '',
    sections: [
      <>
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
      </>,
    ],
  },
  render: ({ sections, ...args }: ContactCardStoryArgs) => <ContactCard {...args} sections={sections} />,
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
  args: {
    heading: 'Hulp en contact',
    subtitle: '',
    sections: [
      <>
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
      </>,
      <>
        <Heading level={3}>Bezoekadres</Heading>
        <Paragraph>Stadsplateau 1, Utrecht</Paragraph>
        <Heading level={3}>Postadres</Heading>
        <Paragraph>
          Postbus 16200
          <br />
          3500 CE Utrecht
        </Paragraph>
      </>,
      <>
        <Heading level={3}>E-mail</Heading>
        <Paragraph>
          <Link href="https://www.utrecht.nl/reactieformulier" target="_top">
            Reactieformulier
          </Link>
        </Paragraph>
      </>,
    ],
  },
  render: ({ sections, ...args }: ContactCardStoryArgs) => <ContactCard {...args} sections={sections} />,
};

export const ThreeColumnsRichText: Story = {
  name: 'Drie kolommen met rich text',
  parameters: {
    docs: {
      description: {
        story:
          'Gebruik de `richText` prop om de spacing van `.utrecht-rich-text` toe te passen op de secties van de contact card.',
      },
    },
  },
  args: {
    heading: 'Hulp en contact',
    subtitle: '',
    sections: [
      <>
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
      </>,
      <>
        <Heading level={3}>Bezoekadres</Heading>
        <Paragraph>Stadsplateau 1, Utrecht</Paragraph>
        <Heading level={3}>Postadres</Heading>
        <Paragraph>
          Postbus 16200
          <br />
          3500 CE Utrecht
        </Paragraph>
      </>,
      <>
        <Heading level={3}>E-mail</Heading>
        <Paragraph>
          <Link href="https://www.utrecht.nl/reactieformulier" target="_top">
            Reactieformulier
          </Link>
        </Paragraph>
      </>,
    ],
  },
  render: ({ sections, ...args }: ContactCardStoryArgs) => <ContactCard {...args} sections={sections} richText />,
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
    heading: 'Hulp en contact',
    subtitle: 'Wijkbureau Overvecht',
    sections: [
      <>
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
      </>,
      <>
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
      </>,
      <>
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
      </>,
    ],
  },
  render: ({ sections, ...args }: ContactCardStoryArgs) => <ContactCard {...args} sections={sections} />,
};

const socialLinks = [
  {
    icon: <UtrechtIconFacebook />,
    href: 'https://www.facebook.com/GemeenteUtrecht',
    label: 'Facebook van gemeente Utrecht',
  },
  {
    icon: <UtrechtIconLinkedin />,
    href: 'https://www.linkedin.com/company/gemeente-utrecht',
    label: 'LinkedIn van gemeente Utrecht',
  },
  { icon: <UtrechtIconX />, href: 'https://x.com/gemeenteutrecht', label: 'X van gemeente Utrecht' },
];

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
  args: {
    heading: 'Hulp en contact',
    subtitle: '',
    sections: [
      <>
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
      </>,
    ],
  },
  render: ({ sections, ...args }: ContactCardStoryArgs) => (
    <ContactCard {...args} sections={sections} socialLinksHeading="Social media" socialLinks={socialLinks} />
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
  args: {
    heading: 'Hulp en contact',
    subtitle: '',
    sections: [
      <>
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
      </>,
      <>
        <Heading level={3}>Vraag of idee?</Heading>
        <Paragraph>
          <Link href="https://www.utrecht.nl/reactieformulier" target="_top">
            Algemeen reactieformulier
          </Link>
        </Paragraph>
      </>,
    ],
  },
  render: ({ sections, ...args }: ContactCardStoryArgs) => (
    <ContactCard {...args} sections={sections} socialLinksHeading="Social media" socialLinks={socialLinks} />
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
  args: {
    heading: 'Hulp en contact',
    subtitle: '',
    sections: [
      <>
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
      </>,
      <>
        <Heading level={3}>Bezoekadres</Heading>
        <Paragraph>Stadsplateau 1, Utrecht</Paragraph>
        <Heading level={3}>Postadres</Heading>
        <Paragraph>
          Postbus 16200
          <br />
          3500 CE Utrecht
        </Paragraph>
      </>,
      <>
        <Heading level={3}>E-mail</Heading>
        <Paragraph>
          <Link href="https://www.utrecht.nl/reactieformulier" target="_top">
            Reactieformulier
          </Link>
        </Paragraph>
      </>,
    ],
  },
  render: ({ sections, ...args }: ContactCardStoryArgs) => (
    <ContactCard {...args} sections={sections} socialLinksHeading="Social media" socialLinks={socialLinks} />
  ),
};

export const WithForm: Story = {
  name: 'Met formulier',
  parameters: {
    docs: {
      description: {
        story: 'De contact card kan een formulier bevatten als aanvullende inhoud via de `children` prop.',
      },
    },
  },
  args: {
    heading: 'Hulp en contact',
    subtitle: '',
    sections: [
      <>
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
      </>,
      <>
        <Heading level={3}>E-mail</Heading>
        <Paragraph>
          <Link href="https://www.utrecht.nl/reactieformulier" target="_top">
            Reactieformulier
          </Link>
        </Paragraph>
      </>,
    ],
  },
  render: ({ sections, ...args }: ContactCardStoryArgs) => (
    <ContactCard {...args} sections={sections}>
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
    </ContactCard>
  ),
};

export const WithBackgroundImage: Story = {
  name: 'Met achtergrondafbeelding',
  parameters: {
    docs: {
      description: {
        story:
          'Gebruik het token `background-image` om een achtergrondafbeelding of verloop toe te voegen. In dit voorbeeld wordt een diagonaal verloop gemaakt met twee achtergrondkleuren.',
      },
    },
  },
  args: {
    heading: 'Hulp en contact',
    subtitle: '',
    sections: [
      <>
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
      </>,
      <>
        <Heading level={3}>E-mail</Heading>
        <Paragraph>
          <Link href="https://www.utrecht.nl/reactieformulier" target="_top">
            Reactieformulier
          </Link>
        </Paragraph>
      </>,
      <>
        <Heading level={3}>Bezoekadres</Heading>
        <Paragraph>Stadsplateau 1, Utrecht</Paragraph>
        <Heading level={3}>Postadres</Heading>
        <Paragraph>
          Postbus 16200
          <br />
          3500 CE Utrecht
        </Paragraph>
      </>,
    ],
  },
  render: ({ sections, ...args }: ContactCardStoryArgs) => (
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
      <ContactCard {...args} sections={sections} />
    </div>
  ),
};

export const DesignTokens = designTokenStory(meta);
