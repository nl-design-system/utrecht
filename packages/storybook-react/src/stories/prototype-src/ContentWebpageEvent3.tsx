import {
  ButtonGroup,
  ButtonLink,
  Fieldset,
  FieldsetLegend,
  FormField,
  FormFieldTextbox,
  FormLabel,
  Heading1,
  Heading2,
  Heading3,
  Link,
  Paragraph,
  RadioButton,
} from '@utrecht/component-library-react/dist/css-module';
import {
  UtrechtIconArrow,
  UtrechtIconChevronLeft,
  UtrechtIconCross,
  UtrechtSeparator,
} from '@utrecht/web-component-library-react';
import React, { useState } from 'react';
import urls from './variables.js';

const Events3: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<string>('');

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.value);
  };

  return (
    <>
      <Heading1>Evenement, vergunning aanvragen</Heading1>
      <Heading2>Uw gegevens</Heading2>

      <Fieldset id="df861ef1-844a-42df-8365-b54f59474fb8" role="radiogroup">
        <FieldsetLegend>Bent u een persoon of een bedrijf?</FieldsetLegend>
        <FormField type="radio">
          <Paragraph className="utrecht-form-field__label utrecht-form-field__label--radio">
            <FormLabel htmlFor="800b7f3f-5048-4dcc-8f23-d04fa6ca4199" type="radio">
              <RadioButton
                className="utrecht-form-field__input"
                id="800b7f3f-5048-4dcc-8f23-d04fa6ca4199"
                name="828aa90e-0e99-4db9-a5e5-d39f689cf7b3"
                value="1"
                onChange={handleRadioChange}
                checked={selectedOption === '1'}
              />
              Persoon
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
                onChange={handleRadioChange}
                checked={selectedOption === '2'}
              />
              Bedrijf
            </FormLabel>
          </Paragraph>
        </FormField>
      </Fieldset>

      {selectedOption === '1' && (
        <>
          <Heading3>Persoonsgegevens</Heading3>
          <FormFieldTextbox label="Burgerservicenummer (BSN)" name="burgerservicenummer" />
          <FormFieldTextbox label="Voorletter(s)" name="voorletters" />
          <FormFieldTextbox label="Tussenvoegsel(s)" name="tussenvoegsels" />
          <FormFieldTextbox label="Achternaam" name="achternaam" />
          <Heading3>Adresgegevens</Heading3>
          <FormFieldTextbox label="Postcode" name="Postcode" />
          <FormFieldTextbox label="Huisnummer" name="Huisnummer" />
          <FormFieldTextbox label="Huisletter" name="Huisletter" />
          <FormFieldTextbox label="Huisnummertoevoeging" name="Huisnummertoevoeging" />
          <FormFieldTextbox label="Straatnaam" name="Straatnaam" />
          <FormFieldTextbox label="Woonplaats" name="Woonplaats" />
          <Heading3>Contactgegevens</Heading3>
          <FormFieldTextbox label="Telefoonnummer" name="Telefoonnummer" />
          <FormFieldTextbox label="E-mail" name="E-mail" />
        </>
      )}

      {selectedOption === '2' && (
        <>
          <Paragraph>
            Vul het vestigingsnummer of het KvK-nummer in. Hebt u geen KvK-nummer? Vul dan het vestigingsnummer in.
          </Paragraph>
          <FormFieldTextbox
            label="KvK-nummer"
            name="kvknummer"
            description="Het KvK-nummer vindt u op het uittreksel van de Kamer van Koophandel"
          />
          <FormFieldTextbox
            label="Vestigingsnummer"
            name="Vestigingsnummer"
            description="Het vestigingsnummer vindt u op het uittreksel van de Kamer van Koophandel"
          />
          <FormFieldTextbox label="Naam bedrijf/organisatie" name="naam" />
          <Heading3>Contactpersoon</Heading3>
          <FormFieldTextbox label="Burgerservicenummer (BSN)" name="burgerservicenummer" />
          <FormFieldTextbox label="Voorletter(s)" name="voorletters" />
          <FormFieldTextbox label="Tussenvoegsel(s)" name="tussenvoegsels" />
          <FormFieldTextbox label="Achternaam" name="achternaam" /> <Heading3>Contactgegevens</Heading3>
          <FormFieldTextbox label="Telefoonnummer" name="Telefoonnummer" />
          <FormFieldTextbox label="E-mail" name="E-mail" />
        </>
      )}
      <ButtonGroup direction="column">
        <Link
          href="#"
          className="utrecht-link utrecht-link--html-a utrecht-advanced-link utrecht-advanced-link--with-icon"
          rel="external noopener noreferrer"
        >
          <UtrechtIconArrow />
          Opslaan en later verder gaan
        </Link>
        <Link
          href="#"
          className="utrecht-link utrecht-link--html-a utrecht-advanced-link utrecht-advanced-link--with-icon"
          rel="external noopener noreferrer"
        >
          <UtrechtIconCross />
          Stoppen met formulier
        </Link>
      </ButtonGroup>

      <UtrechtSeparator></UtrechtSeparator>
      <ButtonGroup direction="column">
        <ButtonLink appearance="primary-action-button" href={urls.fonttestWebpagina}>
          Terug naar start
          <UtrechtIconArrow />
        </ButtonLink>
        <Link
          className="utrecht-link utrecht-link--html-a utrecht-advanced-link utrecht-advanced-link--with-icon"
          href={urls.fonttestStap2}
        >
          <UtrechtIconChevronLeft />
          Pagina terug
        </Link>
      </ButtonGroup>
    </>
  );
};

export default Events3;
