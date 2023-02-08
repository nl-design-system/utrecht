import { Meta, StoryObj } from '@storybook/react';
import {
  BreadcrumbLink,
  BreadcrumbNav,
  Button,
  ButtonGroup,
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
  HeadingGroup,
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

const meta = {
  title: 'Template/Multistep form/Step 4',
  id: 'template-form-pages-step-4',
  component: Page,
  subcomponents: {
    Button,
    ButtonLink,
    FormField,
    FormLabel,
    Heading1,
    Heading2,
    Heading3,
    Link,
    PageContent,
    PageFooter,
    PageHeader,
    Paragraph,
    Separator,
    UtrechtBreadcrumb,
    UtrechtDigidButton,
    UtrechtIconArrow,
    UtrechtLogo,
    HeadingGroup,
    BreadcrumbLink,
    BreadcrumbNav,
    ButtonGroup,
  },
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

export default meta;

export const Four: StoryObj<typeof Page> = {
  render: (args) => (
    <Page {...args} className="utrecht-demo-page--wrapper">
      <PageHeader>
        <Link href="/" aria-label="Gemeente Utrecht">
          <UtrechtLogo />
        </Link>
      </PageHeader>
      <PageContent>
        <BreadcrumbNav appearance="arrows">
          <BreadcrumbLink href="https://example/" index={0} current={false} rel="home">
            Home
          </BreadcrumbLink>
          <BreadcrumbLink href="https://example/" index={0} current={true} rel="Online loket">
            Online loket
          </BreadcrumbLink>
        </BreadcrumbNav>
      </PageContent>
      <PageContent role="main">
        <HeadingGroup>
          <Heading1>Een verhuizing doorgeven</Heading1>
          <Paragraph>Stap 4 van 5 — Controleren en versturen</Paragraph>
        </HeadingGroup>
        <div className="utrecht-demo-intro-section-row">
          <div className="utrecht-demo-intro-section-row__description">
            <Heading2>Controleren en versturen</Heading2>
            <Paragraph lead>
              Bijna klaar! Controleer hieronder of alle gegevens kloppen. Als alles is zoals het moet, zet dan onderaan
              een vinkje en verstuur het formulier.
            </Paragraph>
            <Separator role="presentation" />
          </div>
          <aside className="utrecht-demo-intro-section-row__logo-button">
            <Heading3>Mijn loket</Heading3>
            <UtrechtDigidButton>
              <ButtonLink appearance="primary-action-button">
                Uitloggen
                <UtrechtIconArrow />
              </ButtonLink>
            </UtrechtDigidButton>
            <Paragraph>Mevrouw Cindy</Paragraph>
          </aside>
        </div>
        <div className="utrecht-demo-col--8">
          <section>
            <Heading2>Uw gegevens</Heading2>
            <Heading3>persoonsgegevens</Heading3>
            <DataList appearance="rows">
              <DataListItem>
                <DataListKey>Burgerservicenummer</DataListKey>
                <DataListValue>298272921</DataListValue>
              </DataListItem>
              <DataListItem>
                <DataListKey>Aanhef</DataListKey>
                <DataListValue>Vrouw</DataListValue>
              </DataListItem>
              <DataListItem>
                <DataListKey>Voorletter(s)</DataListKey>
                <DataListValue notranslate>C.</DataListValue>
              </DataListItem>
              <DataListItem>
                <DataListKey>Tussenvoegsel(s)</DataListKey>
                <DataListValue notranslate></DataListValue>
              </DataListItem>
              <DataListItem>
                <DataListKey>Achternaam</DataListKey>
                <DataListValue notranslate>Verburg</DataListValue>
              </DataListItem>
            </DataList>
            <Separator />
            <Heading3>Adresgegevens</Heading3>
            <DataList appearance="rows">
              <DataListItem>
                <DataListKey>Straatnaam</DataListKey>
                <DataListValue notranslate>Stadskantoor</DataListValue>
              </DataListItem>
              <DataListItem>
                <DataListKey>Huisnummer</DataListKey>
                <DataListValue>1</DataListValue>
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
                <DataListValue notranslate>3521AZ</DataListValue>
              </DataListItem>
              <DataListItem>
                <DataListKey>Woonplaats</DataListKey>
                <DataListValue notranslate>Utrecht</DataListValue>
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
                  <URLValue>example@example.com</URLValue>
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
                <DataListValue notranslate>3521AZ</DataListValue>
              </DataListItem>
              <DataListItem>
                <DataListKey>Huisnummer</DataListKey>
                <DataListValue>1</DataListValue>
              </DataListItem>
              <DataListItem>
                <DataListKey>Selecteer uw nieuwe adres</DataListKey>
                <DataListValue notranslate>Stadsplateau 1</DataListValue>
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
            <FieldsetLegend>
              <p>Akkoord en versturen</p>
            </FieldsetLegend>
            <form action="/api/verhuizen-controleren" method="POST" noValidate>
              <p>
                <FormField type="checkbox">
                  <Checkbox id="akkoord" />
                  <FormLabel type="checkbox" htmlFor="akkoord">
                    Ja, ik heb alles juist ingevuld.
                  </FormLabel>
                </FormField>
              </p>
              <ButtonGroup>
                <ButtonLink appearance="subtle-button" href="/">
                  Vorige
                </ButtonLink>
                <Button appearance="primary-action-button" disabled type="submit">
                  Versturen
                  <UtrechtIconArrow />
                </Button>
              </ButtonGroup>
            </form>
          </Fieldset>
        </div>
      </PageContent>
      <PageFooter />
    </Page>
  ),
};
