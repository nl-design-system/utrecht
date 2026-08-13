/* @license CC0-1.0 */

/**
 * Formio Renderer story — wraps @open-formulieren/formio-renderer in the
 * OpenFormsContainer component. Use this story to test design tokens that affect
 * Open Forms fields via the open-forms-container parent.
 */

import { FormioForm } from '@open-formulieren/formio-renderer';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { OpenFormsContainer } from '@utrecht/open-forms-container-react';
import React from 'react';
import { IntlProvider } from 'react-intl';

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

const FormioRendererStory = () => (
  <IntlProvider locale="nl" messages={{}}>
    <OpenFormsContainer>
      <FormioForm
        components={FORM_COMPONENTS as any}
        onSubmit={async (values) => {
          // eslint-disable-next-line no-console
          console.log('Form submitted:', values);
        }}
      >
        <button type="submit" className="utrecht-button utrecht-button--primary-action">
          Verzenden
        </button>
      </FormioForm>
    </OpenFormsContainer>
  </IntlProvider>
);

const meta = {
  title: 'CSS Component/Open Forms Container',
  id: 'css-open-forms-container',
  component: FormioRendererStory,
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
    docs: {
      description: {
        component: `
Toont alle veldtypen van de [formio-renderer](https://www.npmjs.com/package/@open-formulieren/formio-renderer),
gewrapped in de \`OpenFormsContainer\`. Gebruik dit als testomgeving voor design tokens
die via de open-forms-container-parent van invloed zijn op formuliervelden.

Complexe velden (kaart, bestand, handtekening, cosign) zijn niet opgenomen — deze
vereisen backend-integratie.
        `,
      },
    },
  },
} satisfies Meta<typeof FormioRendererStory>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AllFieldTypes: Story = {
  name: 'All field types',
};
