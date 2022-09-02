import { ComponentMeta, ComponentStory } from '@storybook/react';
import {
  Button,
  ButtonLink,
  Checkbox,
  DataList,
  DataListItem,
  DataListKey,
  DataListValue,
  Fieldset,
  FieldsetLegend,
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
  URLValue,
} from '@utrecht/component-library-react';
import {
  UtrechtBreadcrumb,
  UtrechtDigidButton,
  UtrechtIconArrow,
  UtrechtLogo,
} from '@utrecht/web-component-library-react';
import React from 'react';

export default {
  title: 'Template/Form Pages Step/ Four',
  id: 'template-form-pages-step-four',
  component: Page,
} as ComponentMeta<typeof Page>;

const Template: ComponentStory<typeof Page> = (args) => (
  <Page {...args}>
    <PageHeader>
      <Link href="/">
        <UtrechtLogo />
      </Link>
    </PageHeader>
    <PageContent style={{ '--utrecht-space-around': 1 } as any}>
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
      <Heading2>Controleren en versturen</Heading2>
      <Paragraph>
        Bijna klaar! Controleer hieronder of alle gegevens kloppen. Als alles is zoals het moet, zet dan onderaan een
        vinkje en verstuur het formulier.
      </Paragraph>
      <section>
        <Heading2>Uw gegevens</Heading2>
        <Heading3>PERSOONSGEGEVENS</Heading3>
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
        <Separator />
        <Heading3>ADRESGEGEVENS</Heading3>
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
        <Separator />
        <Heading3>Contactgegevens</Heading3>
        <DataList appearance="rows">
          <DataListItem>
            <DataListKey>Telefoonnummmer</DataListKey>
            <DataListValue>0612345678</DataListValue>
          </DataListItem>
          <DataListItem>
            <DataListKey>E-mailadres</DataListKey>
            <DataListValue notranslate>
              <URLValue>teamUX@utrecht.nl</URLValue>
            </DataListValue>
          </DataListItem>
        </DataList>
        <Separator />
        <Heading3>De verhuizing</Heading3>
        <DataList appearance="rows">
          <DataListItem>
            <DataListKey>Verhuisdatum</DataListKey>
            <DataListValue>11-08-2022</DataListValue>
          </DataListItem>
        </DataList>
        <Separator />
        <Heading3>Nieuwe Adres</Heading3>
        <DataList appearance="rows">
          <DataListItem>
            <DataListKey>Postcode</DataListKey>
            <DataListValue notranslate>3514XX</DataListValue>
          </DataListItem>
          <DataListItem>
            <DataListKey>Huisnummer</DataListKey>
            <DataListValue>130</DataListValue>
          </DataListItem>
          <DataListItem>
            <DataListKey>Selecteer uw nieuwe adres</DataListKey>
            <DataListValue notranslate>Van Swindenstraat 130</DataListValue>
          </DataListItem>
        </DataList>
        <Separator />
        <Heading3>Woonsituatie</Heading3>
        <DataList appearance="rows">
          <DataListItem>
            <DataListKey>
              Hoeveel personen - inclusief uzelf - wonen er na uw verhuizing op het nieuwe adres?
            </DataListKey>
            <DataListValue>3</DataListValue>
          </DataListItem>
          <DataListItem>
            <DataListKey>Wat is uw nieuwe woonsituatie?</DataListKey>
            <DataListValue>Ik ben (mede-)eigenaar van de woning/appartement/studio</DataListValue>
          </DataListItem>
        </DataList>
      </section>
      <Separator />
      <Fieldset>
        <FieldsetLegend>AKKOORD EN VERSTUREN</FieldsetLegend>
        <form>
          <FormField>
            <Checkbox id="akkoord" />
            <FormLabel htmlFor="akkoord">Ja, ik heb alles juist ingevuld.</FormLabel>
          </FormField>
          <Button appearance="primary-action-button" disabled type="submit">
            Versturen
            <UtrechtIconArrow />
          </Button>
        </form>
      </Fieldset>
      <Link href="/">VORIGE</Link>
    </PageContent>
    <PageFooter />
  </Page>
);

export const Four = Template.bind({});
