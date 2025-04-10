import { Meta, StoryObj } from '@storybook/react';
import { SingleFormioComponent } from './StoryUtil';

const meta = {
  id: 'open-forms-utrecht-open-forms',
  title: 'Open Formulieren/Utrecht Open Forms specific',
  component: SingleFormioComponent,
  args: {
    key: '',
    type: 'textfield',
    label: '',
  },
  parameters: {
    docs: {
      description: {
        component: `# Utrecht-specifieke formuliervelden in Open Formulieren

Bij gemeente Utrecht gebruiken formulierbouwers een aantal vaste formuliervelden, die hergebruikt worden in heel veel formulieren.

We hebben wat custom CSS voor deze formuliervelden toegepast, die we hier testen.`,
      },
    },
  },
} satisfies Meta<typeof SingleFormioComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

//alfabetische volgorde is overzichtelijker

// Voorbeeld story //
export const Voorletters: Story = {
  args: {
    key: 'textfield',
    label: 'Voorletter(s)',
    extraComponentProperties: {
      defaultValue: 'Y.J.P.K',
      key: 'voorletterSPZD',
    },
  },
};

// Aantal markten //
export const AantalMarkten: Story = {
  args: {
    key: 'textfield',
    label: 'Aantalmarkten',
    extraComponentProperties: {
      defaultValue: '99',
      key: 'aantalMarkten',
    },
  },
};

// Bedrag verlening //
export const BedragVerlenging: Story = {
  args: {
    key: 'textfield',
    label: 'BedragVerlenging',
    extraComponentProperties: {
      defaultValue: '9999',
      key: 'bedragVerlenging',
    },
  },
};

// Voorletters //
export const VoorlettersSPZD: Story = {
  args: {
    key: 'textfield',
    label: 'Voorletter(s)',
    extraComponentProperties: {
      defaultValue: 'Y.J.P.K',
      key: 'voorletterSPZD',
    },
  },
};
export const VoorletterSPMD: Story = {
  args: {
    key: 'textfield',
    label: 'Voorletter(s)',
    extraComponentProperties: {
      defaultValue: 'Y.J.P.K',
      key: 'voorletterSPMD',
    },
  },
};
export const VoorletterSMEH: Story = {
  args: {
    key: 'textfield',
    label: 'Voorletter(s)',
    extraComponentProperties: {
      defaultValue: 'Y.J.P.K',
      key: 'voorletterSMEH',
    },
  },
};
export const VoorletterSZEH: Story = {
  args: {
    key: 'textfield',
    label: 'Voorletter(s)',
    extraComponentProperties: {
      defaultValue: 'Y.J.P.K',
      key: 'voorletterSZEH',
    },
  },
};

// Voornaam //
export const VoornamenPZD: Story = {
  args: {
    key: 'textfield',
    label: 'Voornamen',
    extraComponentProperties: {
      defaultValue: 'John',
      key: 'voornamenPZD',
    },
  },
};
export const VoornamenPMD: Story = {
  args: {
    key: 'textfield',
    label: 'Voornamen',
    extraComponentProperties: {
      defaultValue: 'John',
      key: 'voornamenPMD',
    },
  },
};

// Achternaam //
export const AchternaamPZD: Story = {
  args: {
    key: 'textfield',
    label: 'Achternaam',
    extraComponentProperties: {
      defaultValue: 'Bernadina',
      key: 'achternaamPZD',
    },
  },
};
export const AchternaamPMD: Story = {
  args: {
    key: 'textfield',
    label: 'Achternaam',
    extraComponentProperties: {
      defaultValue: 'Bernadina',
      key: 'achternaamPMD',
    },
  },
};
export const AchternaamZEH: Story = {
  args: {
    key: 'textfield',
    label: 'Achternaam',
    extraComponentProperties: {
      defaultValue: 'Bernadina',
      key: 'achternaamZEH',
    },
  },
};
export const AchternaamMEH: Story = {
  args: {
    key: 'textfield',
    label: 'Achternaam',
    extraComponentProperties: {
      defaultValue: 'Bernadina',
      key: 'achternaamMEH',
    },
  },
};

// BSN //
export const BurgerservicenummerPZD: Story = {
  args: {
    key: 'textfield',
    label: 'BSN',
    extraComponentProperties: {
      defaultValue: '123456782',
      key: 'burgerservicenummerPZD',
    },
  },
};
export const BurgerservicenummerPMD: Story = {
  args: {
    key: 'textfield',
    label: 'BSN',
    extraComponentProperties: {
      defaultValue: '123456782',
      key: 'burgerservicenummerPMD',
    },
  },
};

// Email //
export const EmailadresPZD: Story = {
  args: {
    key: 'textfield',
    label: 'E-mail',
    extraComponentProperties: {
      defaultValue: 'hello@gmail.com',
      key: 'eMailadresPZD',
    },
  },
};
export const EmailadresPMD: Story = {
  args: {
    key: 'textfield',
    label: 'E-mail',
    extraComponentProperties: {
      defaultValue: 'hello@gmail.com',
      key: 'eMailadresPMD',
    },
  },
};
export const EmailadresZEH: Story = {
  args: {
    key: 'textfield',
    label: 'E-mail',
    extraComponentProperties: {
      defaultValue: 'hello@gmail.com',
      key: 'eMailadresZEH',
    },
  },
};
export const EmailadresMEH: Story = {
  args: {
    key: 'textfield',
    label: 'E-mail',
    extraComponentProperties: {
      defaultValue: 'hello@gmail.com',
      key: 'eMailadresMEH',
    },
  },
};

// Geboortedatum //
export const GeboortedatumPZD: Story = {
  args: {
    key: 'textfield',
    label: 'Geboortedatum',
    extraComponentProperties: {
      defaultValue: '10-10-2001',
      key: 'geboortedatumPZD',
    },
  },
};
export const GeboortedatumPMD: Story = {
  args: {
    key: 'textfield',
    label: 'Geboortedatum',
    extraComponentProperties: {
      defaultValue: '10-10-2001',
      key: 'geboortedatumPMD',
    },
  },
};

// Geboorteplaats //
export const GeboorteplaatsPMD: Story = {
  args: {
    key: 'textfield',
    label: 'Geboorteplaats',
    extraComponentProperties: {
      defaultValue: 'Almere',
      key: 'geboorteplaatsPMD',
    },
  },
};

// Huisletter //
export const HuisletterPZD: Story = {
  args: {
    key: 'textfield',
    label: 'Huisletter',
    extraComponentProperties: {
      defaultValue: 'D',
      key: 'huisletterPZD',
    },
  },
};
export const HuisletterPMD: Story = {
  args: {
    key: 'textfield',
    label: 'Huisletter',
    extraComponentProperties: {
      defaultValue: 'D',
      key: 'huisletterPMD',
    },
  },
};
export const HuisletterZEH: Story = {
  args: {
    key: 'textfield',
    label: 'Huisletter',
    extraComponentProperties: {
      defaultValue: 'D',
      key: 'huisletterZEH',
    },
  },
};
export const HuisletterMEH: Story = {
  args: {
    key: 'textfield',
    label: 'Huisletter',
    extraComponentProperties: {
      defaultValue: 'D',
      key: 'huisletterMEH',
    },
  },
};
export const HuisletterPA: Story = {
  args: {
    key: 'textfield',
    label: 'Huisletter',
    extraComponentProperties: {
      defaultValue: 'D',
      key: 'huisletterPA',
    },
  },
};

// Huisnummer //
export const HuisnummerPZD: Story = {
  args: {
    key: 'textfield',
    label: 'Huisnummer',
    extraComponentProperties: {
      defaultValue: '76',
      key: 'huisnummerPZD',
    },
  },
};
export const HuisnummerPMD: Story = {
  args: {
    key: 'textfield',
    label: 'Huisnummer',
    extraComponentProperties: {
      defaultValue: '76',
      key: 'huisnummerPMD',
    },
  },
};
export const HuisnummerZEH: Story = {
  args: {
    key: 'textfield',
    label: 'Huisnummer',
    extraComponentProperties: {
      defaultValue: '76',
      key: 'huisnummerZEH',
    },
  },
};
export const HuisnummerMEH: Story = {
  args: {
    key: 'textfield',
    label: 'Huisnummer',
    extraComponentProperties: {
      defaultValue: '76',
      key: 'huisnummerMEH',
    },
  },
};
export const HuisnummerPA: Story = {
  args: {
    key: 'textfield',
    label: 'Huisnummer',
    extraComponentProperties: {
      defaultValue: '76',
      key: 'huisnummerPA',
    },
  },
};

// Huisnummertoevoeging //
export const HuisnummertoevoegingPZD: Story = {
  args: {
    key: 'textfield',
    label: 'Huisnummertoevoeging',
    extraComponentProperties: {
      defaultValue: '1D',
      key: 'huisnummertoevoegingPZD',
    },
  },
};
export const HuisnummertoevoegingPMD: Story = {
  args: {
    key: 'textfield',
    label: 'Huisnummertoevoeging',
    extraComponentProperties: {
      defaultValue: '1D',
      key: 'huisnummertoevoegingPMD',
    },
  },
};
export const HuisnummertoevoegingZEH: Story = {
  args: {
    key: 'textfield',
    label: 'Huisnummertoevoeging',
    extraComponentProperties: {
      defaultValue: '1D',
      key: 'huisnummertoevoegingZEH',
    },
  },
};
export const HuisnummertoevoegingMEH: Story = {
  args: {
    key: 'textfield',
    label: 'Huisnummertoevoeging',
    extraComponentProperties: {
      defaultValue: '1D',
      key: 'huisnummertoevoegingMEH',
    },
  },
};
export const HuisnummertoevoegingPA: Story = {
  args: {
    key: 'textfield',
    label: 'Huisnummertoevoeging',
    extraComponentProperties: {
      defaultValue: '1D',
      key: 'huisnummertoevoegingPA',
    },
  },
};

// Inshrijfnummer KvK//
export const KvKNummerMarktplaats: Story = {
  args: {
    key: 'textfield',
    label: 'Inschrijfnummer Kamer van Koophandel',
    extraComponentProperties: {
      defaultValue: '6584 2478',
      key: 'kvKNummerMarktplaats',
    },
  },
};

// KvK nummer //
export const KvKNummerZEH: Story = {
  args: {
    key: 'textfield',
    label: 'KvK-nummer',
    extraComponentProperties: {
      defaultValue: '9305 6589',
      key: 'kvknummerZEH',
    },
  },
};
export const KvKNummerMEH: Story = {
  args: {
    key: 'textfield',
    label: 'KvK-nummer',
    extraComponentProperties: {
      defaultValue: '9305 6589',
      key: 'kvknummerMEH',
    },
  },
};

// Naam bedrijf/organisatie //
export const NaamBedrijfOrganisatieZEH: Story = {
  args: {
    key: 'textfield',
    label: 'Naam bedrijf/organisatie',
    extraComponentProperties: {
      defaultValue: 'Frameless',
      key: 'naamBedrijfOrganisatieZEH',
    },
  },
};
export const NaamBedrijfOrganisatieMEH: Story = {
  args: {
    key: 'textfield',
    label: 'Naam bedrijf/organisatie',
    extraComponentProperties: {
      defaultValue: 'Frameless',
      key: 'naamBedrijfOrganisatieMEH',
    },
  },
};

// Plaats leeg //
export const PlaatsZEH: Story = {
  args: {
    key: 'textfield',
    label: 'Plaats',
    extraComponentProperties: {
      defaultValue: 's-Gravenhage',
      key: 'plaatsZEH',
    },
  },
};
export const Postbus_plaatsZEH: Story = {
  args: {
    key: 'textfield',
    label: 'Plaats',
    extraComponentProperties: {
      defaultValue: 's-Gravenhage',
      key: 'postbus_plaatsZE',
    },
  },
};
export const PlaatsMEH: Story = {
  args: {
    key: 'textfield',
    label: 'Plaats',
    extraComponentProperties: {
      defaultValue: 's-Gravenhage',
      key: 'plaatsMEH',
    },
  },
};
export const PlaatsPB: Story = {
  args: {
    key: 'textfield',
    label: 'Plaats',
    extraComponentProperties: {
      defaultValue: 's-Gravenhage',
      key: 'plaatsPB',
    },
  },
};
export const PlaatsPA: Story = {
  args: {
    key: 'textfield',
    label: 'Plaats',
    extraComponentProperties: {
      defaultValue: 's-Gravenhage',
      key: 'plaatsPA',
    },
  },
};

export const PostbusnummerZEH: Story = {
  args: {
    key: 'textfield',
    label: 'Postbusnummer',
    extraComponentProperties: {
      defaultValue: '1234',
      key: 'postbusnummerZEH',
    },
  },
};
export const PostbusnummerPB: Story = {
  args: {
    key: 'textfield',
    label: 'Postbusnummer',
    extraComponentProperties: {
      defaultValue: '1234',
      key: 'postbusnummerPB',
    },
  },
};

// Postcode  leeg //
export const PostcodePZD: Story = {
  args: {
    key: 'textfield',
    label: 'Postcode',
    extraComponentProperties: {
      defaultValue: '1366 AV',
      key: 'postcodePZD',
    },
  },
};
export const PostcodePMD: Story = {
  args: {
    key: 'textfield',
    label: 'Postcode',
    extraComponentProperties: {
      defaultValue: '1366 AV',
      key: 'postcodePMD',
    },
  },
};
export const PostcodeZEH: Story = {
  args: {
    key: 'textfield',
    label: 'Postcode',
    extraComponentProperties: {
      defaultValue: '1366 AV',
      key: 'postcodeZEH',
    },
  },
};
export const Postbus_postcodeZEH: Story = {
  args: {
    key: 'textfield',
    label: 'Postcode',
    extraComponentProperties: {
      defaultValue: '1366 AV',
      key: 'postbus_postcodeZEH',
    },
  },
};
export const PostcodeMEH: Story = {
  args: {
    key: 'textfield',
    label: 'Postcode',
    extraComponentProperties: {
      defaultValue: '1366 AV',
      key: 'postcodeMEH',
    },
  },
};
export const PostcodePB: Story = {
  args: {
    key: 'textfield',
    label: 'Postcode',
    extraComponentProperties: {
      defaultValue: '1366 AV',
      key: 'postcodePB',
    },
  },
};
export const PostcodePA: Story = {
  args: {
    key: 'textfield',
    label: 'Postcode',
    extraComponentProperties: {
      defaultValue: '1366 AV',
      key: 'postcodePA',
    },
  },
};

// SAP //
export const SapArtikelnummer: Story = {
  args: {
    key: 'textfield',
    label: 'SAP artikelnummer',
    extraComponentProperties: {
      defaultValue: '',
      key: 'sapArtikelnummer',
    },
  },
};

export const SapOmschrijving: Story = {
  args: {
    key: 'textfield',
    label: 'SAP Omschrijving',
    extraComponentProperties: {
      defaultValue: '',
      key: 'sapOmschrijving',
    },
  },
};
// TODO: disable this story to check with the form creators if this field requires a specific size.
// export const SapOrdernummer: Story = {
//   args: {
//     key: 'textfield',
//     label: 'SAP ordernummer',
//     extraComponentProperties: {
//       defaultValue: '',
//       key: 'sapOrdernummer',
//     },
//   },
// };
export const SapProductgroep: Story = {
  args: {
    key: 'textfield',
    label: 'SAP productgroep',
    extraComponentProperties: {
      defaultValue: '',
      key: 'sapProductgroep',
    },
  },
};
export const SapVerkooporganisatie: Story = {
  args: {
    key: 'textfield',
    label: 'SAP verkooporganisatie',
    extraComponentProperties: {
      defaultValue: '',
      key: 'sapVerkooporganisatie',
    },
  },
};

// Straatnaam leeg //
export const StraatnaamPZD: Story = {
  args: {
    key: 'textfield',
    label: 'Straatnaam',
    extraComponentProperties: {
      defaultValue: 'Van der Doesstraat',
      key: 'straatnaamPZD',
    },
  },
};
export const StraatnaamPMD: Story = {
  args: {
    key: 'textfield',
    label: 'Straatnaam',
    extraComponentProperties: {
      defaultValue: 'Van der Doesstraat',
      key: 'straatnaamPMD',
    },
  },
};
export const StraatnaamZEH: Story = {
  args: {
    key: 'textfield',
    label: 'Straatnaam',
    extraComponentProperties: {
      defaultValue: 'Van der Doesstraat',
      key: 'straatnaamZEH',
    },
  },
};
export const StraatnaamMEH: Story = {
  args: {
    key: 'textfield',
    label: 'Straatnaam',
    extraComponentProperties: {
      defaultValue: 'Van der Doesstraat',
      key: 'straatnaamMEH',
    },
  },
};
export const StraatnaamPA: Story = {
  args: {
    key: 'textfield',
    label: 'Straatnaam',
    extraComponentProperties: {
      defaultValue: 'Van der Doesstraat',
      key: 'straatnaamPA',
    },
  },
};

// Telefoonnummer leeg //
export const TelefoonnummerPZD: Story = {
  args: {
    key: 'textfield',
    label: 'Telefoonnummer',
    extraComponentProperties: {
      defaultValue: '06 123 45 6789',

      key: 'telefoonnummerPZD',
    },
  },
};
export const TelefoonnummerPMD: Story = {
  args: {
    key: 'textfield',
    label: 'Telefoonnummer',
    extraComponentProperties: {
      defaultValue: '06 123 45 6789',

      key: 'telefoonnummerPMD',
    },
  },
};
export const TelefoonnummerZEH: Story = {
  args: {
    key: 'textfield',
    label: 'Telefoonnummer',
    extraComponentProperties: {
      defaultValue: '06 123 45 6789',

      key: 'telefoonnummerZEH',
    },
  },
};
export const TelefoonnummerMEH: Story = {
  args: {
    key: 'textfield',
    label: 'Telefoonnummer',
    extraComponentProperties: {
      defaultValue: '06 123 45 6789',

      key: 'telefoonnummerMEH',
    },
  },
};

// Telefoonnummer mobiel leeg //
export const TelefoonnummerMobielPZD: Story = {
  args: {
    key: 'textfield',
    label: 'Telefoonnummer (mobiel)',
    extraComponentProperties: {
      defaultValue: '06 123 45 6789',
      key: 'telefoonnummerMobielPZD',
    },
  },
};
export const TelefoonnummerMobielPMD: Story = {
  args: {
    key: 'textfield',
    label: 'Telefoonnummer (mobiel)',
    extraComponentProperties: {
      defaultValue: '06 123 45 6789',
      key: 'telefoonnummerMobielPMD',
    },
  },
};

// Telefoonnummer werk leeg //
export const TelefoonnummerWerkPZD: Story = {
  args: {
    key: 'textfield',
    label: 'Telefoonnummer (werk)',
    extraComponentProperties: {
      defaultValue: '06 123 45 6789',
      key: 'telefoonnummerWerkPZD',
    },
  },
};
export const TelefoonnummerWerkPMD: Story = {
  args: {
    key: 'textfield',
    label: 'Telefoonnummer (werk)',
    extraComponentProperties: {
      defaultValue: '06 123 45 6789',
      key: 'telefoonnummerWerkPMD',
    },
  },
};

// Tussenvoegsel leeg //
export const TussenvoegselSZEH: Story = {
  args: {
    key: 'textfield',
    label: 'Tussenvoegsel(s)',
    extraComponentProperties: {
      defaultValue: 'van der',
      key: 'tussenvoegselSZEH',
    },
  },
};
export const TussenvoegselSMEH: Story = {
  args: {
    key: 'textfield',
    label: 'Tussenvoegsel(s)',
    extraComponentProperties: {
      defaultValue: 'van der',
      key: 'tussenvoegselSMEH',
    },
  },
};

// Vestegingsnummer leeg //
export const VestigingsnummerZEH: Story = {
  args: {
    key: 'textfield',
    label: 'Vestigingsnummer',
    extraComponentProperties: {
      defaultValue: '',
      key: 'vestigingsnummerZEH',
    },
  },
};
export const VestigingsnummerMEH: Story = {
  args: {
    key: 'textfield',
    label: 'Vestigingsnummer',
    extraComponentProperties: {
      defaultValue: '',
      key: 'vestigingsnummerMEH',
    },
  },
};

// Woonplaats //
export const WoonplaatsPZD: Story = {
  args: {
    key: 'textfield',
    label: 'Woonplaats',
    extraComponentProperties: {
      defaultValue: 'Groningen',
      key: 'woonplaatsPZD',
    },
  },
};
export const WoonplaatsPMD: Story = {
  args: {
    key: 'textfield',
    label: 'Woonplaats',
    extraComponentProperties: {
      defaultValue: 'Groningen',
      key: 'woonplaatsPMD',
    },
  },
};
