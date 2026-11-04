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
import { fn } from 'storybook/test';
import { MultipleFormioComponents } from './StoryUtil.js';
import { COMPONENT_PARAMETERS, FORM_COMPONENTS } from './example-form.js';
import { ButtonGroup, Icon, Link, LinkButton } from '../../../../component-library-react/src/index.js';
// StoryUtil loads the Open Forms SDK CSS, which also styles `.utrecht-form-label--openforms`.
// Import it before formio-renderer.css so the renderer rules win, in dev and in the production build.
import '@open-formulieren/formio-renderer/formio-renderer.css';
// Font Awesome is a peer dependency of @open-formulieren/formio-renderer
import '@fortawesome/fontawesome-free/css/fontawesome.min.css';
import '@fortawesome/fontawesome-free/css/regular.min.css';
import '@fortawesome/fontawesome-free/css/solid.min.css';

// Shows the submitted values in the Actions panel.
const onSubmit = fn(async () => {}).mockName('onSubmit');

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
  id: 'open-forms-examples',
  title: 'Open Formulieren/voorbeelden',
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
        <FormioForm components={FORM_COMPONENTS} componentParameters={COMPONENT_PARAMETERS} onSubmit={onSubmit}>
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
