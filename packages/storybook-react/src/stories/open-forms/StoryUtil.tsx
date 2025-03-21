import { OFLibrary, OpenFormsModule } from '@open-formulieren/sdk';
import { Button, ButtonGroup, Link } from '@utrecht/component-library-react/dist/css-module';
import merge from 'lodash.merge';
import React, { PropsWithChildren, useEffect, useState } from 'react';
import { Form, Formio, Templates } from 'react-formio';
import '@open-formulieren/sdk/styles.css';

export type FormConfiguration = { type: string; components: { type: string; key: string; label: string }[] };
const FormButton = () => (
  <ButtonGroup direction="column">
    <Button
      className="openforms-button-with-icon"
      appearance="primary-action-button"
      type="submit"
      aria-disabled="false"
      name="next"
    >
      Volgende <i className="fa fas fa-icon fa-arrow-right-long" aria-hidden="true"></i>
    </Button>
    <Link href="/" className="openforms-previous-link openforms-previous-link--end">
      <i className="fa fas fa-icon fa-arrow-left-long openforms-previous-link__icon" aria-hidden="true"></i>
      Vorige stap
    </Link>
    <Button
      className="utrecht-link-button utrecht-link-button--html-button utrecht-link-button--openforms"
      appearance="secondary-action-button"
      type="button"
      name="save"
    >
      <i className="fa fas fa-icon fa-circle-pause" aria-hidden="true"></i>
      Tussentijds opslaan
    </Button>
    <Button
      className="utrecht-link-button utrecht-link-button--html-button utrecht-link-button--openforms"
      type="button"
      name="abort"
    >
      <i className="fa fas fa-icon fa-xmark" aria-hidden="true"></i>
      Annuleren
    </Button>
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
};

type MultipleFormioComponentsProps = {
  components: {
    type: string;
    key: string;
    label: string;
    [index: string]: any;
  }[];
  formButtons?: boolean;
};

export const SingleFormioComponent = ({
  type,
  key,
  label,
  extraComponentProperties = {},
  formButtons = false,
}: SingleFormioComponentProps) => {
  const component = merge({ type, key, label, formButtons }, extraComponentProperties);
  return <RenderFormioForm formButtons={formButtons} form={{ type: 'form', components: [component] }} />;
};

export const MultipleFormioComponents = ({ components, formButtons }: MultipleFormioComponentsProps) => (
  <RenderFormioForm formButtons={formButtons} form={{ type: 'form', components: components }} />
);
