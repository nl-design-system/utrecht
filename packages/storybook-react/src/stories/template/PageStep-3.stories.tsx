import { Meta, StoryObj } from '@storybook/react';
import {
  BreadcrumbLink,
  BreadcrumbNav,
  Button,
  ButtonGroup,
  ButtonLink,
  Checkbox,
  Fieldset,
  FieldsetLegend,
  FormField,
  FormFieldDescription,
  FormLabel,
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  HeadingGroup,
  Link,
  Page,
  PageContent,
  PageFooter,
  PageHeader,
  Paragraph,
  RadioButton,
  Separator,
  Textbox,
} from '@utrecht/component-library-react';
import {
  UtrechtBreadcrumb,
  UtrechtDigidButton,
  UtrechtIconArrow,
  UtrechtLogo,
} from '@utrecht/web-component-library-react';
import React from 'react';

import './styles.css';
const meta = {
  title: 'Template/Multistep form/Step 3',
  id: 'template-form-pages-step-3',
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
    Textbox,
    UtrechtBreadcrumb,
    UtrechtDigidButton,
    FormFieldDescription,
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

export const Three: StoryObj<typeof Page> = {
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
          <Paragraph>Stap 3 van 5 — Woonsituatie</Paragraph>
        </HeadingGroup>
        <div className="utrecht-demo-intro-section-row ">
          <div className="utrecht-demo-intro-section-row__description">
            <Heading2>Woonsituatie</Heading2>
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

        <section>
          <form className="utrecht-demo-col--8" action="/api/adres" method="POST" noValidate>
            <Fieldset>
              <FieldsetLegend>Medeverhuizers</FieldsetLegend>
              <div role="group" aria-labelledby="Medeverhuizers-label" data-rating-value="">
                <p>
                  <Heading4 id="Medeverhuizers-label">Medeverhuizers</Heading4>
                </p>
                <FormField type="checkbox">
                  <Checkbox id="medeverhuizers" />
                  <FormLabel htmlFor="medeverhuizers">Bruce Verburg </FormLabel>
                </FormField>
              </div>
              <Separator />
              <FormField>
                <p>
                  <FormLabel htmlFor="hoeveel-personen">
                    Hoeveel personen - inclusief uzelf - wonen er na uw verhuizing op het nieuwe adres? *
                  </FormLabel>
                </p>

                <Textbox id="hoeveel-personen" value={1} required type="number" />
              </FormField>
              <div role="radiogroup" aria-labelledby="wat-is-uw-nieuwe-woonsituatie-label ">
                <Heading4 id="wat-is-uw-nieuwe-woonsituatie-label">Wat is uw nieuwe woonsituatie? *</Heading4>
                <FormField type="radio">
                  <RadioButton id="1" name="wat-is-uw-nieuwe-woonsituatie" />
                  <FormLabel type="radio" htmlFor="1">
                    Ik ben (mede-)eigenaar van de woning/appartement/studio
                  </FormLabel>
                </FormField>
                <FormField type="radio">
                  <RadioButton id="2" name="wat-is-uw-nieuwe-woonsituatie" />
                  <FormLabel type="radio" htmlFor="2">
                    Ik ben (mede-)huurder van de woning/appartement/studio en heb een huurcontract
                  </FormLabel>
                </FormField>
                <FormField type="radio">
                  <RadioButton id="3" name="wat-is-uw-nieuwe-woonsituatie" />
                  <FormLabel type="radio" htmlFor="3">
                    Ik huur een deel van de woning (kamer/verdieping) en heb een huurcontact
                  </FormLabel>
                </FormField>
                <FormField type="radio">
                  <RadioButton id="4" name="wat-is-uw-nieuwe-woonsituatie" />
                  <FormLabel type="radio" htmlFor="4">
                    Ik ga bij iemand in huis wonen en heb geen huurcontract
                  </FormLabel>
                </FormField>
              </div>
            </Fieldset>
            <ButtonGroup>
              <ButtonLink appearance="subtle-button" href="/">
                Vorige
              </ButtonLink>
              <Button type="submit" appearance="primary-action-button">
                Volgende
              </Button>
            </ButtonGroup>
          </form>
        </section>
      </PageContent>
      <PageFooter />
    </Page>
  ),
};
