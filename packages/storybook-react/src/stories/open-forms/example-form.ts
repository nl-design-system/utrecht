/* @license CC0-1.0 */

/**
 * The example form of the Voorbeelden story for the formio-renderer: the form components
 * and the mock handlers that replace the Open Forms backend.
 */

import type { FormioForm } from '@open-formulieren/formio-renderer';
import rendererPackage from '@open-formulieren/formio-renderer/package.json';
import sdkPackage from '@open-formulieren/sdk/package.json';
import designTokensPackage from '@utrecht/design-tokens/package.json';
import type { ComponentProps } from 'react';
import openFormsContainerPackage from '../../../../../components/open-forms-container/package.json';

// All common field types, grouped by category. Fields that need a backend (file upload,
// addressNL lookup) get mock handlers through COMPONENT_PARAMETERS. Cosign and the
// fields that need prefilled personal data (partners, children, customerProfile) are excluded.
type FormioFormProps = ComponentProps<typeof FormioForm>;

// Read from the installed packages, so the table stays correct after an upgrade.
const VERSIONS: [label: string, pkg: { name: string; version: string }][] = [
  ['Open Forms SDK (CSS)', sdkPackage],
  ['formio-renderer', rendererPackage],
  ['Utrecht design tokens', designTokensPackage],
  ['Utrecht open forms container', openFormsContainerPackage],
];

const VERSIONS_HTML = `<table class="utrecht-table">
<caption class="utrecht-table__caption">Gebruikte versies</caption>
<thead class="utrecht-table__header"><tr class="utrecht-table__row">
<th class="utrecht-table__header-cell" scope="col">Onderdeel</th>
<th class="utrecht-table__header-cell" scope="col">Package</th>
<th class="utrecht-table__header-cell" scope="col">Versie</th>
</tr></thead>
<tbody class="utrecht-table__body">${VERSIONS.map(
  ([label, { name, version }]) =>
    `<tr class="utrecht-table__row"><th class="utrecht-table__header-cell" scope="row">${label}</th><td class="utrecht-table__cell"><code>${name}</code></td><td class="utrecht-table__cell">${version}</td></tr>`,
).join('')}</tbody>
</table>`;

export const FORM_COMPONENTS = [
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
];

// Mock handlers instead of the Open Forms backend: uploads stay in the browser, and the
// address lookup always returns the same street and city.
export const COMPONENT_PARAMETERS: FormioFormProps['componentParameters'] = {
  file: {
    upload: async (file: File) => ({ result: 'success', url: URL.createObjectURL(file) }),
    destroy: async (url: string) => URL.revokeObjectURL(url),
  },
  addressNL: {
    addressAutoComplete: async () => ({ streetName: 'Stadsplateau', city: 'Utrecht', secretStreetCity: 'mock' }),
  },
};
