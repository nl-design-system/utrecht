import { OFLibrary, OpenFormsModule } from '@open-formulieren/sdk';
import { OpenFormsContainer } from '@utrecht/component-library-react/dist/css-module';
import merge from 'lodash.merge';
import React, { PropsWithChildren, useEffect, useState } from 'react';
import { Form, Formio, Templates } from 'react-formio';
import '@open-formulieren/sdk/styles.css';
export type FormConfiguration = { type: string; components: { type: string; key: string; label: string }[] };

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

const RenderFormioForm = ({ form }: PropsWithChildren<{ form: FormConfiguration }>) => {
  const isConfigured = useOpenFormsConfiguration();

  if (!isConfigured) {
    return null;
  }
  return (
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
  );
};

type SingleFormioComponentProps = {
  type: string;
  key: string;
  label: string;
  extraComponentProperties?: { [index: string]: any };
};

type MultipleFormioComponentsProps = {
  components: {
    type: string;
    key: string;
    label: string;
    [index: string]: any;
  }[];
};

export const SingleFormioComponent = ({
  type,
  key,
  label,
  extraComponentProperties = {},
}: SingleFormioComponentProps) => {
  const component = merge({ type, key, label }, extraComponentProperties);
  return (
    <OpenFormsContainer>
      <RenderFormioForm form={{ type: 'form', components: [component] }} />
    </OpenFormsContainer>
  );
};

export const MultipleFormioComponents = ({ components }: MultipleFormioComponentsProps) => {
  return (
    <OpenFormsContainer>
      <RenderFormioForm form={{ type: 'form', components: components }} />
    </OpenFormsContainer>
  );
};
