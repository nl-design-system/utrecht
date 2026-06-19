/* @license CC0-1.0 */

import type { Meta, StoryObj } from '@storybook/react-vite';
import readme from '@utrecht/contact-card-css/README.md?raw';
import tokensDefinition from '@utrecht/contact-card-css/src/tokens.json';
import { ContactCard } from '@utrecht/contact-card-react/dist/css';
import tokens from '@utrecht/design-tokens/dist/index.json';
import { UtrechtIconChevronRight } from '@utrecht/web-component-library-react';
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
    headingLevel: {
      control: { type: 'number', min: 1, max: 6 },
      description: 'Heading level',
      table: { type: { summary: '1 | 2 | 3 | 4 | 5 | 6' }, defaultValue: { summary: '2' } },
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
  },
  args: {
    heading: 'Hulp en contact',
    headingLevel: 2,
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
        <h3 className="utrecht-heading-3">Telefoon</h3>
        <p className="utrecht-paragraph">
          <a
            href="tel:14030"
            aria-label="Bel 14030, telefoonnummer van gemeente Utrecht"
            className="utrecht-link utrecht-link--html-a"
          >
            14&nbsp;030
          </a>
        </p>
        <p className="utrecht-paragraph">
          Maandag, dinsdag en donderdag 9.00&nbsp;-&nbsp;17.00&nbsp;uur
          <br />
          Woensdag en vrijdag 9.00&nbsp;-&nbsp;13.00&nbsp;uur
        </p>
      </>,
      <>
        <h3 className="utrecht-heading-3">Vraag of idee?</h3>
        <p className="utrecht-paragraph">
          <a href="https://www.utrecht.nl/reactieformulier" target="_top" className="utrecht-link utrecht-link--html-a">
            Algemeen reactieformulier
          </a>
        </p>
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
        <h3 className="utrecht-heading-3">Telefoon</h3>
        <p className="utrecht-paragraph">
          <a
            href="tel:14030"
            aria-label="Bel 14030, telefoonnummer van gemeente Utrecht"
            className="utrecht-link utrecht-link--html-a"
          >
            14&nbsp;030
          </a>
        </p>
        <p className="utrecht-paragraph">
          Maandag, dinsdag en donderdag 9.00&nbsp;-&nbsp;17.00&nbsp;uur
          <br />
          Woensdag en vrijdag 9.00&nbsp;-&nbsp;13.00&nbsp;uur
        </p>
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
        <h3 className="utrecht-heading-3">Telefoon</h3>
        <p className="utrecht-paragraph">
          <a
            href="tel:14030"
            aria-label="Bel 14030, telefoonnummer van gemeente Utrecht"
            className="utrecht-link utrecht-link--html-a"
          >
            14&nbsp;030
          </a>
        </p>
        <p className="utrecht-paragraph">
          Maandag, dinsdag en donderdag 9.00&nbsp;-&nbsp;17.00&nbsp;uur
          <br />
          Woensdag en vrijdag 9.00&nbsp;-&nbsp;13.00&nbsp;uur
        </p>
      </>,
      <>
        <h3 className="utrecht-heading-3">Bezoekadres</h3>
        <p className="utrecht-paragraph">Stadsplateau 1, Utrecht</p>
        <h3 className="utrecht-heading-3">Postadres</h3>
        <p className="utrecht-paragraph">
          Postbus 16200
          <br />
          3500 CE Utrecht
        </p>
      </>,
      <>
        <h3 className="utrecht-heading-3">E-mail</h3>
        <p className="utrecht-paragraph">
          <a href="https://www.utrecht.nl/reactieformulier" target="_top" className="utrecht-link utrecht-link--html-a">
            Reactieformulier
          </a>
        </p>
      </>,
    ],
  },
  render: ({ sections, ...args }: ContactCardStoryArgs) => <ContactCard {...args} sections={sections} />,
};

export const WithHeadingLevel: Story = {
  name: 'Aangepast kopniveau',
  parameters: {
    docs: {
      description: {
        story:
          'Gebruik `headingLevel` om het kopniveau van de titel aan te passen aan de plaats van de contact card in de documentstructuur, bijvoorbeeld wanneer de card binnen een sectie met een eigen kop wordt geplaatst.',
      },
    },
  },
  args: {
    heading: 'Hulp en contact',
    headingLevel: 3,
    subtitle: '',
    sections: [
      <>
        <h3 className="utrecht-heading-3">Telefoon</h3>
        <p className="utrecht-paragraph">
          <a
            href="tel:14030"
            aria-label="Bel 14030, telefoonnummer van gemeente Utrecht"
            className="utrecht-link utrecht-link--html-a"
          >
            14&nbsp;030
          </a>
        </p>
        <p className="utrecht-paragraph">
          Maandag, dinsdag en donderdag 9.00&nbsp;-&nbsp;17.00&nbsp;uur
          <br />
          Woensdag en vrijdag 9.00&nbsp;-&nbsp;13.00&nbsp;uur
        </p>
      </>,
      <>
        <h3 className="utrecht-heading-3">Vraag of idee?</h3>
        <p className="utrecht-paragraph">
          <a href="https://www.utrecht.nl/reactieformulier" target="_top" className="utrecht-link utrecht-link--html-a">
            Algemeen reactieformulier
          </a>
        </p>
      </>,
    ],
  },
  render: ({ sections, ...args }: ContactCardStoryArgs) => <ContactCard {...args} sections={sections} />,
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
        <h3 className="utrecht-heading-3">Telefoon</h3>
        <p className="utrecht-paragraph">
          <a
            href="tel:14030"
            aria-label="Bel 14030, telefoonnummer van gemeente Utrecht"
            className="utrecht-link utrecht-link--html-a"
          >
            14&nbsp;030
          </a>
        </p>
        <h3 className="utrecht-heading-3">E-mail</h3>
        <p className="utrecht-paragraph">
          <a
            href="mailto:overvecht@utrecht.nl"
            title="Een e-mail naar dit adres versturen."
            className="utrecht-link utrecht-link--html-a"
          >
            overvecht@utrecht.nl
          </a>
        </p>
        <h3 className="utrecht-heading-3">Postadres</h3>
        <p className="utrecht-paragraph">Postbus 8395, 3503 RJ Utrecht</p>
      </>,
      <>
        <h3 className="utrecht-heading-3">Bezoekadres</h3>
        <p className="utrecht-paragraph">
          Wijkbureau Overvecht
          <br />
          Zamenhofdreef 17, Utrecht
        </p>
        <h3 className="utrecht-heading-3">Openingstijden</h3>
        <p className="utrecht-paragraph">
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
        </p>
      </>,
      <>
        <div>
          <div>
            <h3 className="utrecht-heading-3">Wijkwethouder</h3>
            <p className="utrecht-paragraph">Afbeelding naam</p>
          </div>
          <div>
            <img alt="Afbeelding naam" src="/example/photo-nijntje-vuelta.jpg" width="100" height="100" />
          </div>
        </div>
        <h3 className="utrecht-heading-3">Wijkspreekuur</h3>
        <p className="utrecht-paragraph">
          <a
            href="https://www.utrecht.nl/wonen-en-leven/wijken/wijk-overvecht/uw-initiatief-en-invloed/wijkspreekuur-overvecht"
            target="_top"
            className="utrecht-link utrecht-link--html-a"
          >
            Bekijk wanneer de spreekuren zijn en hoe u een afspraak maakt
          </a>
        </p>
      </>,
    ],
  },
  render: ({ sections, ...args }: ContactCardStoryArgs) => <ContactCard {...args} sections={sections} />,
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
        <h3 className="utrecht-heading-3">Telefoon</h3>
        <p className="utrecht-paragraph">
          <a
            href="tel:14030"
            aria-label="Bel 14030, telefoonnummer van gemeente Utrecht"
            className="utrecht-link utrecht-link--html-a"
          >
            14&nbsp;030
          </a>
        </p>
        <p className="utrecht-paragraph">
          Maandag, dinsdag en donderdag 9.00&nbsp;-&nbsp;17.00&nbsp;uur
          <br />
          Woensdag en vrijdag 9.00&nbsp;-&nbsp;13.00&nbsp;uur
        </p>
      </>,
      <>
        <h3 className="utrecht-heading-3">E-mail</h3>
        <p className="utrecht-paragraph">
          <a href="https://www.utrecht.nl/reactieformulier" target="_top" className="utrecht-link utrecht-link--html-a">
            Reactieformulier
          </a>
        </p>
      </>,
    ],
  },
  render: ({ sections, ...args }: ContactCardStoryArgs) => (
    <ContactCard {...args} sections={sections}>
      <hr className="utrecht-separator" />
      <form action="#" noValidate>
        <div className="utrecht-form-field utrecht-form-field--textarea">
          <div className="utrecht-form-field__label">
            <label htmlFor="contact" className="utrecht-form-label">
              <h3 className="utrecht-heading-3">Uw vraag of opmerking</h3>
            </label>
          </div>
          <p className="utrecht-paragraph">
            <textarea
              name="contact"
              id="contact"
              rows={5}
              className="utrecht-textarea utrecht-textarea--html-textarea"
            />
          </p>
        </div>
        <div className="utrecht-form-field utrecht-form-field--text">
          <div className="utrecht-form-field__label">
            <label htmlFor="email" className="utrecht-form-label">
              Uw e-mail adres
            </label>
          </div>
          <p className="utrecht-paragraph">
            <input type="email" name="email" id="email" className="utrecht-textbox utrecht-textbox--html-input" />
          </p>
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
        <h3 className="utrecht-heading-3">Telefoon</h3>
        <p className="utrecht-paragraph">
          <a
            href="tel:14030"
            aria-label="Bel 14030, telefoonnummer van gemeente Utrecht"
            className="utrecht-link utrecht-link--html-a"
          >
            14&nbsp;030
          </a>
        </p>
        <p className="utrecht-paragraph">
          Maandag, dinsdag en donderdag 9.00&nbsp;-&nbsp;17.00&nbsp;uur
          <br />
          Woensdag en vrijdag 9.00&nbsp;-&nbsp;13.00&nbsp;uur
        </p>
      </>,
      <>
        <h3 className="utrecht-heading-3">E-mail</h3>
        <p className="utrecht-paragraph">
          <a href="https://www.utrecht.nl/reactieformulier" target="_top" className="utrecht-link utrecht-link--html-a">
            Reactieformulier
          </a>
        </p>
      </>,
      <>
        <h3 className="utrecht-heading-3">Bezoekadres</h3>
        <p className="utrecht-paragraph">Stadsplateau 1, Utrecht</p>
        <h3 className="utrecht-heading-3">Postadres</h3>
        <p className="utrecht-paragraph">
          Postbus 16200
          <br />
          3500 CE Utrecht
        </p>
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
