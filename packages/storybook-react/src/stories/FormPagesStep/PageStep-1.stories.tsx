import { ComponentMeta, ComponentStory } from '@storybook/react';
import {
  Button,
  ButtonLink,
  DataList,
  DataListItem,
  DataListKey,
  DataListValue,
  FormField,
  FormLabel,
  Heading1,
  Heading2,
  Heading3,
  Link,
  Page,
  PageContent,
  PageFooter,
  PageHeader,
  Paragraph,
  Separator,
  Textbox,
} from '@utrecht/component-library-react';
import {
  UtrechtBreadcrumb,
  UtrechtDigidButton,
  UtrechtFormFieldDescription,
  UtrechtIconArrow,
  UtrechtLogo,
} from '@utrecht/web-component-library-react';
import React from 'react';

export default {
  title: 'React.js Component/Form Pages Step/ One',
  id: 'react-form-pages-step-one',
  component: Page,
} as ComponentMeta<typeof Page>;

const Template: ComponentStory<typeof Page> = (args) => (
  <Page {...args}>
    <PageHeader>
      <Link href="/">
        <UtrechtLogo />
      </Link>
    </PageHeader>
    <PageContent>
      <UtrechtBreadcrumb
        json={JSON.stringify([
          { href: 'https://example/', title: 'Home', current: false },
          { href: 'https://example/', title: 'Online loket', current: true },
        ])}
        variant="arrows"
      />

      <aside>
        <Heading3>MIJN LOKET</Heading3>
        <UtrechtDigidButton>
          <ButtonLink appearance="primary-action-button">
            Uitloggen
            <UtrechtIconArrow />
          </ButtonLink>
        </UtrechtDigidButton>
        <Paragraph>De heer Olling</Paragraph>
        <br />
        <br />
      </aside>
      <Heading1>
        <Paragraph lead>ONLINE LOKET</Paragraph>
        Een verhuizing doorgeven
      </Heading1>
      <section>
        <Heading2>Uw gegevens</Heading2>
        <Paragraph>
          Hieronder ziet u de gegevens die wij van u weten. Kloppen uw gegevens niet? Dan kunt u deze laten aanpassen
          via
          <Link href="https://www.utrecht.nl/persoonsgegevenswijzigen"> www.utrecht.nl/persoonsgegevenswijzigen. </Link>
          Uw e-mailadres en telefoonnummer vult u zelf in.
        </Paragraph>
      </section>
      <section>
        <Heading2>PERSOONSGEGEVENS</Heading2>
        <DataList appearance="rows">
          <DataListItem>
            <DataListKey>Burgerservicenummer</DataListKey>
            <DataListValue>999993653</DataListValue>
          </DataListItem>
          <DataListItem>
            <DataListKey>Aanhef</DataListKey>
            <DataListValue>De heer</DataListValue>
          </DataListItem>
          <DataListItem>
            <DataListKey>Voorletter(s)</DataListKey>
            <DataListValue notranslate>R.</DataListValue>
          </DataListItem>
          <DataListItem>
            <DataListKey>Tussenvoegsel(s)</DataListKey>
            <DataListValue notranslate></DataListValue>
          </DataListItem>
          <DataListItem>
            <DataListKey>Achternaam</DataListKey>
            <DataListValue notranslate>Olling</DataListValue>
          </DataListItem>
        </DataList>
      </section>
      <Separator />
      <section>
        <Heading2>ADRESGEGEVENS</Heading2>
        <DataList appearance="rows">
          <DataListItem>
            <DataListKey>Straatnaam</DataListKey>
            <DataListValue notranslate>Waterweg</DataListValue>
          </DataListItem>
          <DataListItem>
            <DataListKey>Huisnummer</DataListKey>
            <DataListValue>160</DataListValue>
          </DataListItem>
          <DataListItem>
            <DataListKey>Huisletter</DataListKey>
            <DataListValue notranslate></DataListValue>
          </DataListItem>
          <DataListItem>
            <DataListKey>Huisnummertoevoeging</DataListKey>
            <DataListValue notranslate></DataListValue>
          </DataListItem>
          <DataListItem>
            <DataListKey>Postcode</DataListKey>
            <DataListValue notranslate>3731HR</DataListValue>
          </DataListItem>
          <DataListItem>
            <DataListKey>Woonplaats</DataListKey>
            <DataListValue notranslate>De Bilt</DataListValue>
          </DataListItem>
        </DataList>
      </section>
      <Separator />
      <section>
        <Heading2>CONTACTGEGEVENS</Heading2>
        <form>
          <FormField>
            <FormLabel htmlFor="telefoonnummer">Telefoonnummer</FormLabel>
            <br />
            <Textbox id="telefoonnummer" />
          </FormField>
          <FormField>
            <FormLabel id="email-label" htmlFor="email">
              E-mailadres *
            </FormLabel>
            <br />
            <Textbox required id="email" aria-labelledby="email-label" aria-describedby="email-desc" />
            <UtrechtFormFieldDescription id="email-desc">Vragen met een * zijn verplicht.</UtrechtFormFieldDescription>
          </FormField>
          <Button appearance="primary-action-button" type="submit">
            VOLGENDE
          </Button>
        </form>
      </section>
    </PageContent>
    <PageFooter />
  </Page>
);

export const One = Template.bind({});
