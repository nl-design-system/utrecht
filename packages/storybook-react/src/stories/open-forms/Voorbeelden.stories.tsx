/* @license CC0-1.0 */

/**
 * Voorbeelden — example full-form demos for the two Open Formulieren rendering
 * stacks used in this project: the classic `react-formio` renderer and the newer
 * `@open-formulieren/formio-renderer`.
 */

import { FormioForm } from '@open-formulieren/formio-renderer';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { OpenFormsContainer } from '@utrecht/open-forms-container-react';
import React from 'react';
import { IntlProvider } from 'react-intl';
import '@open-formulieren/formio-renderer/formio-renderer.css';
// Font Awesome is a peer dependency of @open-formulieren/formio-renderer
import '@fortawesome/fontawesome-free/css/fontawesome.min.css';
import '@fortawesome/fontawesome-free/css/regular.min.css';
import '@fortawesome/fontawesome-free/css/solid.min.css';
import { MultipleFormioComponents } from './StoryUtil.js';

// All common field types, grouped by category. Complex fields (map, file, signature,
// cosign, NP-specific) are intentionally excluded — they require backend integration.
const FORM_COMPONENTS = [
  {
    id: 'intro',
    type: 'content',
    key: 'intro',
    html: '<p>Dit formulier toont alle beschikbare veldtypen. Gebruik het om te controleren hoe design tokens van invloed zijn op de Open Forms stijl.</p>',
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
        description: 'Uw officiële voornaam zoals vermeld in uw paspoort.',
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
        tooltip: 'Uw BSN staat op uw identiteitsbewijs, paspoort of rijbewijs.',
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
        tooltip: 'Vul uw postcode in zoals op uw brief staat, bijvoorbeeld 1234 AB.',
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
        tooltip: 'Kies de aanhef die u in correspondentie wilt gebruiken.',
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
        tooltip: 'Het IBAN-nummer vindt u op uw bankpas of in uw internetbankieren omgeving.',
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
        type: 'licensePlate',
        key: 'kenteken',
        label: 'Kenteken',
        tooltip: 'Vul het kenteken in zonder koppeltekens, bijvoorbeeld AB123C.',
      },
      {
        id: 'toelichting',
        type: 'textarea',
        key: 'toelichting',
        label: 'Toelichting',
        description: 'Aanvullende informatie of opmerkingen.',
      },
    ],
  },

  // Herhalende groep
  {
    id: 'medeaanvragers',
    type: 'editgrid',
    key: 'medeaanvragers',
    label: 'Medeaanvragers',
    groupLabel: 'Medeaanvrager {index}',
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

Complexe velden (kaart, bestand, handtekening, cosign) zijn niet opgenomen. Deze vereisen
backend-integratie.
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
    <IntlProvider locale="nl" messages={{}}>
      <OpenFormsContainer>
        <FormioForm
          components={FORM_COMPONENTS as any}
          onSubmit={async (values) => {
            console.log('Form submitted:', values);
          }}
        >
          <button type="submit" className="utrecht-button utrecht-button--primary-action">
            Verzenden
          </button>
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
        label: 'Required text field',
        description: 'Text field description',
        validate: {
          required: true,
          pattern: '^\\d+',
        },
      },
      {
        type: 'radio',
        key: 'radio',
        label: 'Required radio',
        validate: {
          required: true,
        },
        values: [
          { value: 'a', label: 'Option A' },
          { value: 'b', label: 'Option B' },
        ],
      },
      {
        type: 'content',
        key: 'content',
        label: 'Content',
        html: '<p>Some WYSIWYG content</p>',
        customClass: 'info',
      },
      {
        type: 'fieldset',
        key: 'fieldset',
        label: 'Fieldset label',
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
            label: 'Nested text field',
          },
        ],
      },
      {
        type: 'textfield',
        key: 'hiddenTextfield',
        label: 'Hidden text field',
        hidden: true,
      },
      {
        label: 'Submit',
        showValidations: false,
        key: 'submit1',
        type: 'button',
        input: true,
      },
    ],
  },
};
