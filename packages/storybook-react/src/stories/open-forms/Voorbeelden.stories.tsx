/* @license CC0-1.0 */

/**
 * Voorbeelden — example full-form demos for the two Open Formulieren rendering
 * stacks used in this project: the classic `react-formio` renderer and the newer
 * `@open-formulieren/formio-renderer`.
 */

import { FormioForm, PrimaryActionButton } from '@open-formulieren/formio-renderer';
import nlMessages from '@open-formulieren/formio-renderer/i18n/compiled/nl.json';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { OpenFormsContainer } from '@utrecht/open-forms-container-react/css';
import React from 'react';
import { IntlProvider } from 'react-intl';
import { MultipleFormioComponents } from './StoryUtil.js';
import { ButtonGroup, Icon, Link, LinkButton } from '../../../../component-library-react/src/index.js';
// StoryUtil loads the Open Forms SDK CSS, which also styles `.utrecht-form-label--openforms`.
// Import it before formio-renderer.css so the renderer rules win, in dev and in the production build.
import '@open-formulieren/formio-renderer/formio-renderer.css';
// Font Awesome is a peer dependency of @open-formulieren/formio-renderer
import '@fortawesome/fontawesome-free/css/fontawesome.min.css';
import '@fortawesome/fontawesome-free/css/regular.min.css';
import '@fortawesome/fontawesome-free/css/solid.min.css';

// All common field types, grouped by category. Fields that need a backend (file upload,
// addressNL lookup) get mock handlers through COMPONENT_PARAMETERS. Cosign and the
// fields that need prefilled personal data (partners, children, customerProfile) are excluded.
type FormioFormProps = React.ComponentProps<typeof FormioForm>;

// Update these when you upgrade a package. The Utrecht packages come from this repository.
const VERSIONS = [
  ['Open Forms SDK (CSS)', '@open-formulieren/sdk', '3.5.6'],
  ['formio-renderer', '@open-formulieren/formio-renderer', '3.0.0-alpha.6'],
  ['Utrecht design tokens', '@utrecht/design-tokens', '7.0.0'],
  ['Utrecht open forms container', '@utrecht/open-forms-container-css', '3.0.2'],
];

const VERSIONS_HTML = `<table class="utrecht-table">
<caption class="utrecht-table__caption">Gebruikte versies</caption>
<thead class="utrecht-table__header"><tr class="utrecht-table__row">
<th class="utrecht-table__header-cell" scope="col">Onderdeel</th>
<th class="utrecht-table__header-cell" scope="col">Package</th>
<th class="utrecht-table__header-cell" scope="col">Versie</th>
</tr></thead>
<tbody class="utrecht-table__body">${VERSIONS.map(
  ([name, pkg, version]) =>
    `<tr class="utrecht-table__row"><th class="utrecht-table__header-cell" scope="row">${name}</th><td class="utrecht-table__cell"><code>${pkg}</code></td><td class="utrecht-table__cell">${version}</td></tr>`,
).join('')}</tbody>
</table>`;

const FORM_COMPONENTS = [
  {
    id: 'intro',
    type: 'content',
    key: 'intro',
    html:
      '<p>Dit formulier toont alle beschikbare veldtypen. Gebruik het om te controleren hoe design tokens van invloed zijn op de Open Forms stijl.</p>' +
      VERSIONS_HTML,
  },

  // Persoonsgegevens
  {
    id: 'persoonsgegevens',
    type: 'fieldset',
    key: 'persoonsgegevens',
    label: 'Persoonsgegevens',
    components: [
      {
        id: 'voornaam',
        type: 'textfield',
        key: 'voornaam',
        label: 'Voornaam',
        description: 'Je officiële voornaam zoals vermeld in je paspoort.',
        validate: { required: true },
      },
      {
        id: 'achternaam',
        type: 'textfield',
        key: 'achternaam',
        label: 'Achternaam',
        validate: { required: true },
      },
      {
        id: 'email',
        type: 'email',
        key: 'email',
        label: 'E-mailadres',
        validate: { required: true },
      },
      {
        id: 'telefoon',
        type: 'phoneNumber',
        key: 'telefoon',
        label: 'Telefoonnummer',
      },
      {
        id: 'bsn',
        type: 'bsn',
        key: 'bsn',
        label: 'Burgerservicenummer (BSN)',
        tooltip: 'Je BSN staat op je identiteitsbewijs, paspoort of rijbewijs.',
      },
    ],
  },

  // Adres
  {
    id: 'adres',
    type: 'fieldset',
    key: 'adres',
    label: 'Adresgegevens',
    components: [
      {
        id: 'postcode',
        type: 'postcode',
        key: 'postcode',
        label: 'Postcode',
        tooltip: 'Vul je postcode in zoals op je brief staat, bijvoorbeeld 3511 AB.',
        validate: { required: true },
      },
      {
        id: 'huisnummer',
        type: 'textfield',
        key: 'huisnummer',
        label: 'Huisnummer',
        validate: { required: true },
      },
    ],
  },

  // Adres met automatisch aanvullen van straat en plaats
  {
    id: 'woonadres',
    type: 'addressNL',
    key: 'woonadres',
    label: 'Woonadres',
    deriveAddress: true,
    layout: 'singleColumn',
    validate: { required: true },
  },

  // Datum en tijd
  {
    id: 'datum_tijd',
    type: 'fieldset',
    key: 'datum_tijd',
    label: 'Datum en tijd',
    components: [
      {
        id: 'geboortedatum',
        type: 'date',
        key: 'geboortedatum',
        label: 'Geboortedatum',
      },
      {
        id: 'voorkeurstijd',
        type: 'time',
        key: 'voorkeurstijd',
        label: 'Voorkeurstijd',
      },
      {
        id: 'afspraak',
        type: 'datetime',
        key: 'afspraak',
        label: 'Datum en tijd van de afspraak',
      },
    ],
  },

  // Keuzes
  {
    id: 'keuzes',
    type: 'fieldset',
    key: 'keuzes',
    label: 'Keuzes',
    components: [
      {
        id: 'gemeente',
        type: 'select',
        key: 'gemeente',
        label: 'Gemeente',
        data: {
          values: [
            { value: 'utrecht', label: 'Utrecht' },
            { value: 'amsterdam', label: 'Amsterdam' },
            { value: 'rotterdam', label: 'Rotterdam' },
            { value: 'denhaag', label: 'Den Haag' },
          ],
        },
        openForms: { dataSrc: 'manual' },
      },
      {
        id: 'aanhef',
        type: 'radio',
        key: 'aanhef',
        label: 'Aanhef',
        tooltip: 'Kies de aanhef die je in correspondentie wilt gebruiken.',
        values: [
          { value: 'dhr', label: 'De heer' },
          { value: 'mevr', label: 'Mevrouw' },
          { value: 'nvt', label: 'Niet van toepassing' },
        ],
        openForms: { dataSrc: 'manual' },
        validate: { required: true },
      },
      {
        id: 'interesses',
        type: 'selectboxes',
        key: 'interesses',
        label: 'Interesses',
        values: [
          { value: 'sport', label: 'Sport' },
          { value: 'cultuur', label: 'Cultuur' },
          { value: 'natuur', label: 'Natuur' },
          { value: 'technologie', label: 'Technologie' },
        ],
        openForms: { dataSrc: 'manual' },
      },
      {
        id: 'akkoord',
        type: 'checkbox',
        key: 'akkoord',
        label: 'Ik ga akkoord met de voorwaarden',
        validate: { required: true },
      },
    ],
  },

  // Financieel
  {
    id: 'financieel',
    type: 'fieldset',
    key: 'financieel',
    label: 'Financiële gegevens',
    components: [
      {
        id: 'bedrag',
        type: 'number',
        key: 'bedrag',
        label: 'Bedrag',
      },
      {
        id: 'bijdrage',
        type: 'currency',
        key: 'bijdrage',
        label: 'Bijdrage (€)',
        currency: 'EUR',
      },
      {
        id: 'iban',
        type: 'iban',
        key: 'iban',
        label: 'IBAN rekeningnummer',
        tooltip: 'Het IBAN-nummer vind je op je bankpas of in je omgeving voor internetbankieren.',
      },
    ],
  },

  // Overige velden
  {
    id: 'overig',
    type: 'fieldset',
    key: 'overig',
    label: 'Overige velden',
    components: [
      {
        id: 'kenteken',
        type: 'licenseplate',
        key: 'kenteken',
        label: 'Kenteken',
        tooltip: 'Vul het kenteken in met koppeltekens, bijvoorbeeld AB-123-C.',
        validate: { pattern: String.raw`^[a-zA-Z0-9]{1,3}\-[a-zA-Z0-9]{1,3}\-[a-zA-Z0-9]{1,3}$` },
      },
      {
        id: 'toelichting',
        type: 'textarea',
        key: 'toelichting',
        label: 'Toelichting',
        description: 'Aanvullende informatie of opmerkingen.',
      },
      {
        id: 'eerdere_woonplaatsen',
        type: 'textfield',
        key: 'eerdereWoonplaatsen',
        label: 'Eerdere woonplaatsen',
        multiple: true,
        defaultValue: ['Utrecht'],
      },
      {
        id: 'zaaknummer',
        type: 'textfield',
        key: 'zaaknummer',
        label: 'Zaaknummer',
        description: 'Dit veld kun je niet aanpassen.',
        disabled: true,
        defaultValue: 'Z-2026-001234',
      },
    ],
  },

  // Bijlagen en handtekening
  {
    id: 'bijlagen',
    type: 'fieldset',
    key: 'bijlagen',
    label: 'Bijlagen en handtekening',
    components: [
      {
        id: 'bewijsstukken',
        type: 'file',
        key: 'bewijsstukken',
        label: 'Bewijsstukken',
        description: 'Je kunt maximaal 3 bestanden toevoegen.',
        multiple: true,
        maxNumberOfFiles: 3,
        fileMaxSize: '10MB',
        filePattern: 'application/pdf,image/jpeg,image/png',
        file: {
          name: '',
          type: ['application/pdf', 'image/jpeg', 'image/png'],
          allowedTypesLabels: ['.pdf', '.jpg', '.png'],
        },
        openForms: { softRequired: true },
      },
      {
        id: 'handtekening',
        type: 'signature',
        key: 'handtekening',
        label: 'Handtekening',
        footer: 'Zet hier je handtekening.',
      },
    ],
  },

  // Waarschuwing voor lege velden die aanbevolen zijn (openForms.softRequired)
  {
    id: 'aanbevolen_velden',
    type: 'softRequiredErrors',
    key: 'aanbevolenVelden',
    html: '<p>Je hebt deze aanbevolen velden niet ingevuld:</p>{{ missingFields }}',
  },

  // Herhalende groep
  {
    id: 'medeaanvragers',
    type: 'editgrid',
    key: 'medeaanvragers',
    label: 'Medeaanvragers',
    groupLabel: 'Medeaanvrager',
    disableAddingRemovingRows: false,
    addAnother: 'Medeaanvrager toevoegen',
    saveRow: 'Opslaan',
    removeRow: 'Verwijderen',
    components: [
      {
        id: 'medeaanvrager_naam',
        type: 'textfield',
        key: 'naam',
        label: 'Naam',
      },
      {
        id: 'medeaanvrager_email',
        type: 'email',
        key: 'email',
        label: 'E-mailadres',
      },
    ],
  },
] as const;

// Mock handlers instead of the Open Forms backend: uploads stay in the browser, and the
// address lookup always returns the same street and city.
const COMPONENT_PARAMETERS: FormioFormProps['componentParameters'] = {
  file: {
    upload: async (file: File) => ({ result: 'success', url: URL.createObjectURL(file) }),
    destroy: async (url: string) => URL.revokeObjectURL(url),
  },
  addressNL: {
    addressAutoComplete: async () => ({ streetName: 'Stadsplateau', city: 'Utrecht', secretStreetCity: 'mock' }),
  },
};

// Same markup as the FormNavigation of the Open Forms SDK, for a step in a form with multiple steps.
// The SDK CSS sets the icons through `--fa` and the colour of the abort button.
const FAIcon = () => <i className="fa fas fa-icon fa-fw" aria-hidden="true" />;

const FormNavigation = () => (
  <ButtonGroup className="openforms-form-navigation" direction="column">
    <PrimaryActionButton type="submit" name="next" className="openforms-form-navigation__next-button">
      Volgende
      <Icon>
        <FAIcon />
      </Icon>
    </PrimaryActionButton>
    <Link
      href="#"
      className="openforms-previous-link openforms-previous-link--end"
      onClick={(event: React.MouseEvent) => event.preventDefault()}
    >
      <Icon>
        <FAIcon />
      </Icon>
      Vorige
    </Link>
    <LinkButton name="save" className="openforms-form-navigation__save-button">
      <Icon>
        <FAIcon />
      </Icon>
      Opslaan en later doorgaan
    </LinkButton>
    <LinkButton name="abort" className="openforms-abort-button">
      <Icon>
        <FAIcon />
      </Icon>
      Annuleren
    </LinkButton>
  </ButtonGroup>
);

const meta = {
  id: 'open-forms-voorbeelden',
  title: 'Open Formulieren/Voorbeelden',
  component: MultipleFormioComponents,
  args: {
    components: [
      {
        type: '',
        key: '',
        label: '',
      },
    ],
  },
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
    docs: {
      description: {
        component: `
Voorbeeldformulieren voor de twee renderers die dit project ondersteunt: de klassieke
\`react-formio\` en de nieuwere
[formio-renderer](https://www.npmjs.com/package/@open-formulieren/formio-renderer).

Het uploaden van bestanden en het aanvullen van het adres werken met nepgegevens, zonder backend.
Cosign en de velden met vooraf ingevulde persoonsgegevens (partners, kinderen, klantprofiel) zijn
niet opgenomen.
        `,
      },
    },
  },
} satisfies Meta<typeof MultipleFormioComponents>;

export default meta;
type Story = StoryObj<typeof meta>;

export const FormioRenderer: Story = {
  name: 'formio-renderer',
  render: () => (
    <IntlProvider locale="nl" messages={nlMessages}>
      <OpenFormsContainer>
        <FormioForm
          components={FORM_COMPONENTS as any}
          componentParameters={COMPONENT_PARAMETERS}
          onSubmit={async (values) => {
            console.log('Form submitted:', values);
          }}
        >
          <FormNavigation />
        </FormioForm>
      </OpenFormsContainer>
    </IntlProvider>
  ),
};

export const ReactFormio: Story = {
  name: 'react-formio',
  args: {
    components: [
      {
        type: 'textfield',
        key: 'textfield',
        label: 'Verplicht tekstveld',
        description: 'Beschrijving van het tekstveld',
        validate: {
          required: true,
          pattern: '^\\d+',
        },
      },
      {
        type: 'radio',
        key: 'radio',
        label: 'Verplicht radioveld',
        validate: {
          required: true,
        },
        values: [
          { value: 'a', label: 'Optie A' },
          { value: 'b', label: 'Optie B' },
        ],
      },
      {
        type: 'content',
        key: 'content',
        label: 'Inhoud',
        html: '<p>Inhoud uit de WYSIWYG-editor</p>',
        customClass: 'info',
      },
      {
        type: 'fieldset',
        key: 'fieldset',
        label: 'Label van de fieldset',
        hideHeader: true,
        components: [
          {
            type: 'checkbox',
            key: 'checkbox',
            label: 'Checkbox',
          },
          {
            type: 'textfield',
            key: 'nestedTextfield',
            label: 'Genest tekstveld',
          },
        ],
      },
      {
        type: 'textfield',
        key: 'hiddenTextfield',
        label: 'Verborgen tekstveld',
        hidden: true,
      },
      {
        label: 'Verzenden',
        showValidations: false,
        key: 'submit1',
        type: 'button',
        input: true,
      },
    ],
  },
};
