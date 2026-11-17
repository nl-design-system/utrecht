import OpenFormsModule from '@open-formulieren/sdk/formio-module';
import OFLibrary from '@open-formulieren/sdk/formio-templates';
import { OpenFormsContainer } from '@utrecht/open-forms-container-react/css';
import { merge } from 'es-toolkit/compat';
import React, { lazy, PropsWithChildren, Suspense, useEffect, useState } from 'react';
import { Form, Formio, Templates } from 'react-formio';
import { Button, ButtonGroup, Icon, Link } from '../../../../component-library-react/src/index.js';
import '@open-formulieren/sdk/styles.css';
// formio.js renders forms in Open Forms by default. Forms with the new renderer enabled use the formio-renderer.
// TODO: after the migration to Open Forms SDK 4, which drops formio.js, make the formio-renderer the only renderer:
// remove `Renderer`, `RENDERER_ARG_TYPES`, `RenderFormioForm`, `useOpenFormsConfiguration` and the formio.js imports.
export type Renderer = 'formio.js' | 'formio-renderer';

const FormioRendererForm = lazy(() => import('./FormioRendererForm.js'));

// Adds a "renderer" control to the stories, to compare the markup of both renderers.
export const RENDERER_ARG_TYPES = {
  renderer: {
    name: 'Renderer',
    description:
      'formio.js, or formio-renderer 1.8 for forms with the new renderer enabled (Open Forms SDK 3.5). The formio-renderer names a field `postcodePZD` instead of `data[postcodePZD]`.',
    control: 'inline-radio',
    options: ['formio.js', 'formio-renderer'],
    table: { defaultValue: { summary: 'formio.js' } },
  },
} as const;

export type FormConfiguration = { type: string; components: { type: string; key: string; label: string }[] };
const FormButton = () => (
  <ButtonGroup
    direction="column"
    style={{ '--utrecht-icon-inset-block-start': '-4px', '--utrecht-button-icon-gap': '8px' }}
  >
    <Button
      className="openforms-button-with-icon"
      appearance="primary-action-button"
      type="submit"
      aria-disabled="false"
      name="next"
      icon={
        <Icon>
          <i className="fa fas fa-icon fa-arrow-right-long" aria-hidden="true"></i>
        </Icon>
      }
      label="Volgende"
    />
    <Link href="/" className="openforms-previous-link openforms-previous-link--end">
      Vorige stap
      <Icon>
        <i className="fa fas fa-icon fa-arrow-left-long openforms-previous-link__icon" aria-hidden="true"></i>
      </Icon>
    </Link>
    <Button
      className="utrecht-link-button utrecht-link-button--html-button utrecht-link-button--openforms"
      appearance="secondary-action-button"
      type="button"
      name="save"
      icon={
        <Icon>
          <i className="fa fas fa-icon fa-circle-pause" aria-hidden="true"></i>
        </Icon>
      }
      label="Tussentijds opslaan"
    />

    <Button
      icon={
        <Icon>
          <i className="fa fas fa-icon fa-xmark" aria-hidden="true"></i>
        </Icon>
      }
      className="utrecht-link-button utrecht-link-button--html-button utrecht-link-button--openforms"
      type="button"
      name="abort"
      label="Annuleren"
    />
  </ButtonGroup>
);
const useOpenFormsConfiguration = () => {
  const [isConfigured, setIsConfigured] = useState(Templates.current === OFLibrary);

  useEffect(() => {
    if (!isConfigured && Templates.current !== OFLibrary) {
      Formio.use(OpenFormsModule);
      Templates.current = OFLibrary;
      setIsConfigured(true);
    }
  }, [isConfigured]);

  return isConfigured;
};

const RenderFormioForm = ({
  form,
  formButtons,
}: PropsWithChildren<{ form: FormConfiguration; formButtons?: boolean }>) => {
  const isConfigured = useOpenFormsConfiguration();

  if (!isConfigured) {
    return null;
  }
  return (
    <div>
      <Form
        form={form}
        submission={{}}
        options={{
          noAlerts: true,
          language: 'nl',
          // In Open Forms these translations come from the backend. Same wording as the formio-renderer.
          i18n: {
            nl: {
              '(not required)': '(niet verplicht)',
              required: 'Het verplichte veld {{field}} is niet ingevuld.',
              pattern: 'De opgegeven waarde voldoet niet aan het formaat: {{pattern}}.',
              submitError: 'Controleer het formulier en verbeter alle fouten voordat je het verzendt.',
            },
          },
          baseUrl: '',
          evalContext: {
            ofPrefix: 'openforms-',
            requiredFieldsWithAsterisk: false,
          },
          ofContext: {
            submissionUuid: '426c8d33-6dcb-4578-8208-f17071a4aebe',
          },
        }}
      />
      {formButtons && <FormButton />}
    </div>
  );
};

type SingleFormioComponentProps = {
  type: string;
  key: string;
  label: string;
  extraComponentProperties?: { [index: string]: any };
  formButtons?: boolean;
  renderer?: Renderer;
};

type MultipleFormioComponentsProps = {
  components: {
    type: string;
    key: string;
    label: string;
    [index: string]: any;
  }[];
  formButtons?: boolean;
  renderer?: Renderer;
};

const RenderForm = ({
  components,
  formButtons,
  renderer = 'formio.js',
}: {
  components: FormConfiguration['components'];
  formButtons?: boolean;
  renderer?: Renderer;
}) =>
  renderer === 'formio-renderer' ? (
    <Suspense fallback={null}>
      <FormioRendererForm components={components} />
      {formButtons && <FormButton />}
    </Suspense>
  ) : (
    <RenderFormioForm formButtons={formButtons} form={{ type: 'form', components }} />
  );

export const SingleFormioComponent = ({
  type,
  key,
  label,
  extraComponentProperties = {},
  formButtons = false,
  renderer,
}: SingleFormioComponentProps) => {
  const component = merge({ type, key, label }, extraComponentProperties);
  return (
    <OpenFormsContainer>
      <RenderForm components={[component]} formButtons={formButtons} renderer={renderer} />
    </OpenFormsContainer>
  );
};

export const MultipleFormioComponents = ({ components, formButtons, renderer }: MultipleFormioComponentsProps) => {
  return (
    <OpenFormsContainer>
      <RenderForm components={components} formButtons={formButtons} renderer={renderer} />
    </OpenFormsContainer>
  );
};
