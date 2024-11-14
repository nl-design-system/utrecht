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
//aanhef is met bulletpoint? is het uberhaupt een textfield?

// Voorbeeld story //
export const Voorletters: Story = {
  args: {
    key: 'textfield',
    label: 'Voorletter(s)',
    extraComponentProperties: {
      defaultValue: 'Y',
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
      defaultValue: '99',
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
      defaultValue: 'Y',
      key: 'voorletterSPZD',
    },
  },
};
export const VoorletterSPMD: Story = {
  args: {
    key: 'textfield',
    label: 'Voorletter(s)',
    extraComponentProperties: {
      defaultValue: 'Y',
      key: 'voorletterSPMD',
    },
  },
};
export const VoorletterSMEH: Story = {
  args: {
    key: 'textfield',
    label: 'Voorletter(s)',
    extraComponentProperties: {
      defaultValue: 'Y',
      key: 'voorletterSMEH',
    },
  },
};
export const VoorletterSZEH: Story = {
  args: {
    key: 'textfield',
    label: 'Voorletter(s)',
    extraComponentProperties: {
      defaultValue: 'Y',
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
      defaultValue: 'Yolijn',
      key: 'voornamenPZD',
    },
  },
};
export const VoornamenPMD: Story = {
  args: {
    key: 'textfield',
    label: 'Voornamen',
    extraComponentProperties: {
      defaultValue: 'Yolijn',
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
      defaultValue: '1c',
      key: 'huisnummertoevoegingPZD',
    },
  },
};
export const HuisnummertoevoegingPMD: Story = {
  args: {
    key: 'textfield',
    label: 'Huisnummertoevoeging',
    extraComponentProperties: {
      defaultValue: '1c',
      key: 'huisnummertoevoegingPMD',
    },
  },
};
export const HuisnummertoevoegingZEH: Story = {
  args: {
    key: 'textfield',
    label: 'Huisnummertoevoeging',
    extraComponentProperties: {
      defaultValue: '1c',
      key: 'huisnummertoevoegingZEH',
    },
  },
};
export const HuisnummertoevoegingMEH: Story = {
  args: {
    key: 'textfield',
    label: 'Huisnummertoevoeging',
    extraComponentProperties: {
      defaultValue: '1c',
      key: 'huisnummertoevoegingMEH',
    },
  },
};
export const HuisnummertoevoegingPA: Story = {
  args: {
    key: 'textfield',
    label: 'Huisnummertoevoeging',
    extraComponentProperties: {
      defaultValue: '1c',
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
      defaultValue: '6584 2478 325',
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
      defaultValue: '',
      key: 'plaatsZEH',
    },
  },
};
export const Postbus_plaatsZEH: Story = {
  args: {
    key: 'textfield',
    label: 'Plaats',
    extraComponentProperties: {
      defaultValue: '',
      key: 'postbus_plaatsZE',
    },
  },
};
export const PlaatsMEH: Story = {
  args: {
    key: 'textfield',
    label: 'Plaats',
    extraComponentProperties: {
      defaultValue: '',
      key: 'plaatsMEH',
    },
  },
};
export const PlaatsPB: Story = {
  args: {
    key: 'textfield',
    label: 'Plaats',
    extraComponentProperties: {
      defaultValue: '',
      key: 'plaatsPB',
    },
  },
};
export const PlaatsPA: Story = {
  args: {
    key: 'textfield',
    label: 'Plaats',
    extraComponentProperties: {
      defaultValue: '',
      key: 'plaatsPA',
    },
  },
};

// Postbusnummer leeg //
export const PostbusnummerZEH: Story = {
  args: {
    key: 'textfield',
    label: 'Postbusnummer',
    extraComponentProperties: {
      defaultValue: '',
      key: 'postbusnummerZEH',
    },
  },
};
export const PostbusnummerPB: Story = {
  args: {
    key: 'textfield',
    label: 'Postbusnummer',
    extraComponentProperties: {
      defaultValue: '',
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
      defaultValue: '',
      key: 'postcodePZD',
    },
  },
};
export const PostcodePMD: Story = {
  args: {
    key: 'textfield',
    label: 'Postcode',
    extraComponentProperties: {
      defaultValue: '',
      key: 'postcodePMD',
    },
  },
};
export const PostcodeZEH: Story = {
  args: {
    key: 'textfield',
    label: 'Postcode',
    extraComponentProperties: {
      defaultValue: '',
      key: 'postcodeZEH',
    },
  },
};
export const Postbus_postcodeZEH: Story = {
  args: {
    key: 'textfield',
    label: 'Postcode',
    extraComponentProperties: {
      defaultValue: '',
      key: 'postbus_postcodeZEH',
    },
  },
};
export const PostcodeMEH: Story = {
  args: {
    key: 'textfield',
    label: 'Postcode',
    extraComponentProperties: {
      defaultValue: '',
      key: 'postcodeMEH',
    },
  },
};
export const PostcodePB: Story = {
  args: {
    key: 'textfield',
    label: 'Postcode',
    extraComponentProperties: {
      defaultValue: '',
      key: 'postcodePB',
    },
  },
};
export const PostcodePA: Story = {
  args: {
    key: 'textfield',
    label: 'Postcode',
    extraComponentProperties: {
      defaultValue: '',
      key: 'postcodePA',
    },
  },
};

// Straatnaam leeg //
export const StraatnaamPZD: Story = {
  args: {
    key: 'textfield',
    label: 'Straatnaam',
    extraComponentProperties: {
      defaultValue: '',
      key: 'straatnaamPZD',
    },
  },
};
export const StraatnaamPMD: Story = {
  args: {
    key: 'textfield',
    label: 'Straatnaam',
    extraComponentProperties: {
      defaultValue: '',
      key: 'straatnaamPMD',
    },
  },
};
export const StraatnaamZEH: Story = {
  args: {
    key: 'textfield',
    label: 'Straatnaam',
    extraComponentProperties: {
      defaultValue: '',
      key: 'straatnaamZEH',
    },
  },
};
export const StraatnaamMEH: Story = {
  args: {
    key: 'textfield',
    label: 'Straatnaam',
    extraComponentProperties: {
      defaultValue: '',
      key: 'straatnaamMEH',
    },
  },
};
export const StraatnaamPA: Story = {
  args: {
    key: 'textfield',
    label: 'Straatnaam',
    extraComponentProperties: {
      defaultValue: '',
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
      defaultValue: '',
      key: 'telefoonnummerPZD',
    },
  },
};
export const TelefoonnummerPMD: Story = {
  args: {
    key: 'textfield',
    label: 'Telefoonnummer',
    extraComponentProperties: {
      defaultValue: '',
      key: 'telefoonnummerPMD',
    },
  },
};
export const TelefoonnummerZEH: Story = {
  args: {
    key: 'textfield',
    label: 'Telefoonnummer',
    extraComponentProperties: {
      defaultValue: '',
      key: 'telefoonnummerZEH',
    },
  },
};
export const TelefoonnummerMEH: Story = {
  args: {
    key: 'textfield',
    label: 'Telefoonnummer',
    extraComponentProperties: {
      defaultValue: '',
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
      defaultValue: '',
      key: 'telefoonnummerMobielPZD',
    },
  },
};
export const TelefoonnummerMobielPMD: Story = {
  args: {
    key: 'textfield',
    label: 'Telefoonnummer (mobiel)',
    extraComponentProperties: {
      defaultValue: '',
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
      defaultValue: '',
      key: 'telefoonnummerWerkPZD',
    },
  },
};
export const TelefoonnummerWerkPMD: Story = {
  args: {
    key: 'textfield',
    label: 'Telefoonnummer (werk)',
    extraComponentProperties: {
      defaultValue: '',
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
      defaultValue: '',
      key: 'tussenvoegselSZEH',
    },
  },
};
export const TussenvoegselSMEH: Story = {
  args: {
    key: 'textfield',
    label: 'Tussenvoegsel(s)',
    extraComponentProperties: {
      defaultValue: '',
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

// Voor welke markt(en) vraagt u een vergunning? //
export const VoorWelkeMarktEnVraagtUEenVergunning: Story = {
  args: {
    key: 'textfield',
    label: 'Voor welke markt(en) vraagt u een vergunning?',
    extraComponentProperties: {
      defaultValue: '',
      key: 'voorWelkeMarktEnVraagtUEenVergunning',
    },
  },
};

// Wat vraagt u aan? //
export const UwAanvraagBetreft: Story = {
  args: {
    key: 'textfield',
    label: 'Wat vraagt u aan?',
    extraComponentProperties: {
      defaultValue: '',
      key: 'uwAanvraagBetreft',
    },
  },
};

// Welke branche past het beste bij de producten die u wilt verkopen? //
export const BrancheMarktplaats: Story = {
  args: {
    key: 'textfield',
    label: 'Welke branche past het beste bij de producten die u wilt verkopen?',
    extraComponentProperties: {
      defaultValue: '',
      key: 'brancheMarktplaats',
    },
  },
};

// Wilt u een postadres gebruiken anders dan uw woonadres? //
export const WiltUEenPostadresGebruikenAndersDanUwWoonadres: Story = {
  args: {
    key: 'textfield',
    label: 'Wilt u een postadres gebruiken anders dan uw woonadres?',
    extraComponentProperties: {
      defaultValue: '',
      key: 'wiltUEenPostadresGebruikenAndersDanUwWoonadres',
    },
  },
};

// Wilt u een postbus gebruiken? //\
export const PostbusGebruikenZEH: Story = {
  args: {
    key: 'textfield',
    label: 'Wilt u een postbus gebruiken?',
    extraComponentProperties: {
      defaultValue: '',
      key: 'postbusGebruikenZEH',
    },
  },
};

// Woonplaats //
export const WoonplaatsPZD: Story = {
  args: {
    key: 'textfield',
    label: 'Woonplaats',
    extraComponentProperties: {
      defaultValue: '',
      key: 'woonplaatsPZD',
    },
  },
};
export const WoonplaatsPMD: Story = {
  args: {
    key: 'textfield',
    label: 'Woonplaats',
    extraComponentProperties: {
      defaultValue: '',
      key: 'woonplaatsPMD',
    },
  },
};
