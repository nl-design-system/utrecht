import { Meta, StoryObj } from '@storybook/react';
import {
  BreadcrumbLink,
  BreadcrumbNav,
  Button,
  ButtonLink,
  DataList,
  DataListItem,
  DataListKey,
  DataListValue,
  FormField,
  FormFieldDescription,
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
  Textbox,
} from '@utrecht/component-library-react/dist/css-module';
import {
  UtrechtBreadcrumb,
  UtrechtDigidButton,
  UtrechtIconArrow,
  UtrechtLogo,
} from '@utrecht/web-component-library-react';
import React from 'react';
import './styles.css';

const meta = {
  title: 'Template/Multistep form/Step 1',
  id: 'template-form-pages-step-1',
  component: Page,
  subcomponents: {
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
    PageContent,
    PageFooter,
    PageHeader,
    Paragraph,
    Separator,
    Textbox,
    UtrechtBreadcrumb,
    UtrechtDigidButton,
    FormFieldDescription,
    UtrechtIconArrow,
    UtrechtLogo,
    HeadingGroup,
    BreadcrumbLink,
    BreadcrumbNav,
  },
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

export default meta;

export const One: StoryObj<typeof Page> = {
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
          <Paragraph>Stap 1 van 5 — Persoonsgegevens</Paragraph>
        </HeadingGroup>
        <div className="utrecht-demo-intro-section-row">
          <div className="utrecht-demo-intro-section-row__description">
            <Heading2>Uw gegevens</Heading2>
            <Paragraph>
              Hieronder ziet u de gegevens die wij van u weten. Kloppen uw gegevens niet? Dan kunt u deze laten
              aanpassen via
              <Link href="https://www.utrecht.nl/persoonsgegevenswijzigen">
                www.utrecht.nl/persoonsgegevenswijzigen.{' '}
              </Link>
              Uw e-mailadres en telefoonnummer vult u zelf in.
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
            <Heading2>Persoonsgegevens</Heading2>
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
          </section>
          <Separator />
          <section>
            <Heading2>adresgegevens</Heading2>
            <DataList appearance="rows">
              <DataListItem>
                <DataListKey>Straatnaam</DataListKey>
                <DataListValue notranslate>Stadsplateau</DataListValue>
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
          </section>
          <Separator />
          <section>
            <Heading2>Contactgegevens</Heading2>
            <form noValidate>
              <FormField>
                <p>
                  <FormLabel htmlFor="telefoonnummer">Telefoonnummer</FormLabel>
                </p>
                <Textbox id="telefoonnummer" />
              </FormField>
              <FormField invalid={true}>
                <p>
                  <FormLabel id="email-label" htmlFor="email">
                    E-mailadres *
                  </FormLabel>
                </p>
                <Textbox
                  pattern="^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$"
                  id="email"
                  aria-labelledby="email-label"
                  aria-describedby="email-desc"
                  type="email"
                />
                <FormFieldDescription invalid={true} id="email-desc">
                  dit veld is verplicht
                </FormFieldDescription>
              </FormField>
              <Button appearance="primary-action-button" type="submit">
                Volgende
              </Button>
            </form>
          </section>
        </div>
      </PageContent>
      <PageFooter />
    </Page>
  ),
};

UtrechtLogo.displayName = 'UtrechtLogo';
UtrechtBreadcrumb.displayName = 'UtrechtBreadcrumb';
UtrechtDigidButton.displayName = 'UtrechtDigidButton';
UtrechtIconArrow.displayName = 'UtrechtIconArrow';
