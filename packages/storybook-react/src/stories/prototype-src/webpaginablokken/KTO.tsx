import {
  Fieldset,
  FieldsetLegend,
  FormField,
  FormLabel,
  Heading1,
  Paragraph,
  RadioButton,
  Separator,
} from '@utrecht/component-library-react/dist/css-module';
import React from 'react';
const KTO: React.FC = () => {
  return (
    <>
      <Separator />
      <Fieldset id="df861ef1-844a-42df-8365-b54f59474fb8" role="radiogroup">
        <FieldsetLegend>Hebt u gevonden wat u zocht op deze pagina?</FieldsetLegend>
        <FormField type="radio">
          <Paragraph className="utrecht-form-field__label utrecht-form-field__label--radio">
            <FormLabel htmlFor="800b7f3f-5048-4dcc-8f23-d04fa6ca4199" type="radio">
              <RadioButton
                className="utrecht-form-field__input"
                id="800b7f3f-5048-4dcc-8f23-d04fa6ca4199"
                name="828aa90e-0e99-4db9-a5e5-d39f689cf7b3"
                value="1"
              />
              Ja
            </FormLabel>
          </Paragraph>
        </FormField>
        <FormField type="radio">
          <Paragraph className="utrecht-form-field__label utrecht-form-field__label--radio">
            <FormLabel htmlFor="fbc03e63-42c2-46e3-9acc-183fa64c6dcd" type="radio">
              <RadioButton
                className="utrecht-form-field__input"
                id="fbc03e63-42c2-46e3-9acc-183fa64c6dcd"
                name="828aa90e-0e99-4db9-a5e5-d39f689cf7b3"
                value="2"
              />
              Nee
            </FormLabel>
          </Paragraph>
        </FormField>
      </Fieldset>
      <Separator />
    </>
  );
};

export default KTO;
