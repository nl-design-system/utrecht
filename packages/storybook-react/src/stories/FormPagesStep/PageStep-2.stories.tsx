import { ComponentMeta, ComponentStory } from '@storybook/react';
import {
  Button,
  ButtonLink,
  CustomRadioButton,
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
  title: 'Template/Form Pages Step/ Two',
  id: 'template-form-pages-step-two',
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
      <Heading2>De Verhuizing</Heading2>
      <Separator />
      <section>
        <form>
          <FormField>
            <FormLabel htmlFor="verhuisdatum">Verhuisdatum*</FormLabel>
            <br />
            <Textbox id="verhuisdatum" type="date" required />
          </FormField>
          <Fieldset>
            <FieldsetLegend>NIEUWE ADRES</FieldsetLegend>
            <div role="radiogroup" aria-labelledby="nieuwe-adres-label" data-rating-value="">
              <Heading4 id="nieuwe-adres-label">Hoe wilt u zoeken *</Heading4>
              <FormField>
                <CustomRadioButton id="postcode" name="woonplaats-en-straat" />
                <FormLabel htmlFor="postcode">Postcode</FormLabel>
              </FormField>
              <FormField>
                <CustomRadioButton id="woonplaats-en-straat" name="woonplaats-en-straat" />
                <FormLabel htmlFor="woonplaats-en-straat">Woonplaats en Straat</FormLabel>
              </FormField>
            </div>
            <FormField>
              <FormLabel htmlFor="postcode">Postcode *</FormLabel>
              <br />
              <Textbox id="postcode" required aria-invalid="true" aria-errormessage="err-postcode" />
              <UtrechtFormFieldDescription id="err-postcode" status="invalid">
                U moet de postcode van het nieuwe adres invullen.
              </UtrechtFormFieldDescription>
            </FormField>
            <FormField>
              <FormLabel htmlFor="huisnummer">Huisnummer *</FormLabel>
              <br />
              <Textbox id="huisnummer" required />
            </FormField>
            <UtrechtFormFieldDescription>Vragen met een * zijn verplicht.</UtrechtFormFieldDescription>
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
);

export const Two = Template.bind({});
