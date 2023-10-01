import { Meta, StoryObj } from '@storybook/react';
import {
  Button,
  ButtonLink,
  Checkbox,
  Fieldset,
  FieldsetLegend,
  FormField,
  FormLabel,
  Heading1,
  Heading2,
  Heading3,
  Heading4,
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
  UtrechtBreadcrumbNav,
  UtrechtDigidButton,
  UtrechtIconArrow,
  UtrechtLogo,
} from '@utrecht/web-component-library-react';
import React from 'react';

const meta = {
  title: 'Template/Multistep form/Step 3',
  id: 'template-form-pages-step-3',
  component: Page,
} satisfies Meta<typeof Page>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Three: Story = {
  render: (args) => (
    <Page {...args}>
      <PageHeader>
        <Link href="/">
          <UtrechtLogo />
        </Link>
      </PageHeader>
      <PageContent style={{ '--utrecht-space-around': 1 } as any}>
        <UtrechtBreadcrumbNav
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
          <Paragraph>Mevrouw Cindy</Paragraph>
          <br />
          <br />
        </aside>
        <Heading1>
          <Paragraph lead>ONLINE LOKET</Paragraph>
          Een verhuizing doorgeven
        </Heading1>
        <Heading2>Woonsituatie</Heading2>
        <Separator />
        <section>
          <form>
            <Fieldset>
              <FieldsetLegend>MEDEVERHUIZERS</FieldsetLegend>

              <div role="group" aria-labelledby="Medeverhuizers-label" data-rating-value="">
                <Heading4 id="Medeverhuizers-label">Medeverhuizers</Heading4>
                <FormField>
                  <Checkbox id="medeverhuizers" />
                  <FormLabel htmlFor="medeverhuizers">Bruce Verburg</FormLabel>
                </FormField>
              </div>
              <Separator />
              <FormField>
                <FormLabel htmlFor="hoeveel-personen">
                  Hoeveel personen - inclusief uzelf - wonen er na uw verhuizing op het nieuwe adres? *
                </FormLabel>
                <br />
                <Textbox id="hoeveel-personen" required type="number" />
              </FormField>
              <div role="radiogroup" aria-labelledby="wat-is-uw-nieuwe-woonsituatie-label" data-rating-value="">
                <Heading4 id="wat-is-uw-nieuwe-woonsituatie-label">Wat is uw nieuwe woonsituatie? *</Heading4>
                <FormField>
                  <RadioButton id="1" name="wat-is-uw-nieuwe-woonsituatie" />
                  <FormLabel htmlFor="1">Ik ben (mede-)eigenaar van de woning/appartement/studio</FormLabel>
                </FormField>
                <FormField>
                  <RadioButton id="2" name="wat-is-uw-nieuwe-woonsituatie" />
                  <FormLabel htmlFor="2">
                    Ik ben (mede-)huurder van de woning/appartement/studio en heb een huurcontract
                  </FormLabel>
                </FormField>
                <FormField>
                  <RadioButton id="3" name="wat-is-uw-nieuwe-woonsituatie" />
                  <FormLabel htmlFor="3">
                    Ik huur een deel van de woning (kamer/verdieping) en heb een huurcontact
                  </FormLabel>
                </FormField>
                <FormField>
                  <RadioButton id="4" name="wat-is-uw-nieuwe-woonsituatie" />
                  <FormLabel htmlFor="4">Ik ga bij iemand in huis wonen en heb geen huurcontract</FormLabel>
                </FormField>
              </div>
            </Fieldset>
            <Link href="/">VORIGE</Link>
            <Button type="submit" appearance="primary-action-button">
              VOLGENDE
            </Button>
          </form>
        </section>
      </PageContent>
      <PageFooter />
    </Page>
  ),
};
