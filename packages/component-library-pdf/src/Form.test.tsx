/* eslint-env jest */

import { describe, expect, it } from '@jest/globals';
import {
  ColumnLayout,
  Fieldset,
  FieldsetLegend,
  FormField,
  FormFieldTextbox,
  FormLabel,
  Heading1,
  Heading2,
  Link,
  Paragraph,
  RadioButton,
  RadioButtonProps,
} from '@utrecht/component-library-react/src/index';
import React, { ReactNode, useId } from 'react';
import { renderPdf } from './lib';

interface RadioOptionProps extends Pick<RadioButtonProps, 'name' | 'value'> {
  label: ReactNode;
}

const RadioOption = ({ name, value, label }: RadioOptionProps) => {
  const id = useId();
  return (
    <FormField type="radio">
      <div>
        <RadioButton id={id} name={name} value={value} />
        <FormLabel type="radio" htmlFor={id}>
          {label}
        </FormLabel>
      </div>
    </FormField>
  );
};

const FormFieldTextarea = FormFieldTextbox;

describe('Form for Rotterdam', () => {
  it('looks damn good', async () => {
    const { sha256 } = await renderPdf({
      id: 'pdf-form-rotterdam',
      render: () => (
        <div>
          <ColumnLayout>
            <Heading1>Verklaring Naamgebruik</Heading1>
            <section>
              <Heading2>Meer over Verklaring Naamgebruik?</Heading2>
              <Paragraph>
                <Link href="https://www.rotterdam.nl/verklaring-naamgebruik-aanvragen">
                  www.rotterdam.nl/verklaring-naamgebruik-aanvragen
                </Link>
              </Paragraph>
            </section>
            <section>
              <Heading2>Hulp bij invullen</Heading2>
              <Paragraph>Bel 14 010 (telefoonnummer van de gemeente) </Paragraph>
            </section>
            <section>
              <Heading2>Persoonlijke gegevens </Heading2>
              <Paragraph>
                De gemeente gaat zorgvuldig om met uw gegevens. <br />
                Meer informatie op <Link href="https://www.rotterdam.nl/privacy">www.rotterdam.nl/privacy</Link>
              </Paragraph>
            </section>
          </ColumnLayout>
          <Fieldset>
            <FieldsetLegend>Uw gegevens</FieldsetLegend>
            <ColumnLayout>
              <FormFieldTextbox label="Achternaam"></FormFieldTextbox>
              <FormFieldTextbox label="Voornamen"></FormFieldTextbox>
              <FormFieldTextbox label="Burgerservicenummer"></FormFieldTextbox>
              <FormFieldTextbox label="Geboortedatum"></FormFieldTextbox>
              <FormFieldTextbox label="Geboorteplaats"></FormFieldTextbox>
              <FormFieldTextbox label="Telefoonnummer"></FormFieldTextbox>
              <FormFieldTextbox label="E-mail"></FormFieldTextbox>
            </ColumnLayout>
          </Fieldset>
          <Fieldset>
            <Paragraph>
              Uw keuze ten aanzien van het naamgebruik heeft uitsluitend betrekking op de wijze waarop u door de
              overheid wordt aangeschreven. Uw wettige naam wijzigt hierdoor niet.
            </Paragraph>
            <ColumnLayout>
              <RadioOption
                name="naamgebruik"
                value="3254bd33-cbcf-4b7c-9e66-21f80a21420a"
                label="Alleen eigen achternaam"
              ></RadioOption>
              <RadioOption
                name="naamgebruik"
                value="31220974-7ac9-4e7a-989a-845574c9a34a"
                label="Alleen achternaam partner"
              ></RadioOption>
              <RadioOption
                name="naamgebruik"
                value="9b1b3313-e98a-4b44-af65-05830c094eee"
                label="Eerst achternaam partner, dan eigen achternaam"
              ></RadioOption>
              <RadioOption
                name="naamgebruik"
                value="ef2f7cb2-8372-4b14-a011-46b8d0bcf491"
                label="Eerst eigen achternaam, dan achternaam partner"
              ></RadioOption>
            </ColumnLayout>
          </Fieldset>
          <Fieldset>
            <FieldsetLegend>Ondertekening</FieldsetLegend>
            <ColumnLayout>
              <FormFieldTextbox label="Datum"></FormFieldTextbox>
              <FormFieldTextarea label="Handtekening"></FormFieldTextarea>
            </ColumnLayout>
          </Fieldset>

          <Heading2>Let op</Heading2>
          <Paragraph>
            U wilt een andere achternaam gebruiken. U krijgt dan post met deze achternaam. Maar uw geboortenaam
            verandert niet. De naam in uw paspoort blijft hetzelfde.
          </Paragraph>
          <Heading2>Versturen</Heading2>
          <Paragraph>
            U mailt het formulier naar dit e-mailadres: <Link href="mailto:kcc2@rotterdam.nl">kcc2@rotterdam.nl</Link>.
            Voeg een foto of scan van uw legitimatiebewijs toe. Let op dat uw handtekening op het formulier staat.
          </Paragraph>
          <Paragraph>
            U kunt het formulier met handtekening en een kopie van uw legitimatiebewijs ook per post opsturen.
            <br />
            Het adres is: <br />
            Gemeente Rotterdam <br />
            Postbus 70013 <br />
            3000 KR Rotterdam
          </Paragraph>
        </div>
      ),
    });

    expect(sha256).toBe('');
  });
});
