import { Meta, StoryObj } from '@storybook/react';
import {
  BreadcrumbLink,
  BreadcrumbNav,
  Button,
  ButtonGroup,
  ButtonLink,
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
import { UtrechtDigidButton, UtrechtIconArrow, UtrechtLogo } from '@utrecht/web-component-library-react';
import React, { useRef, useState } from 'react';

const meta = {
  title: 'Template/Multistep form/Step 2',
  id: 'template-form-pages-step-2',
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

export const Two: StoryObj<typeof Page> = {
  render: (args) => {
    const [invalid, setInvalid] = useState(false);
    const dateRef = useRef<HTMLInputElement | null>(null);
    const postcodeRef = useRef<HTMLInputElement | null>(null);
    const homeNumberRef = useRef<HTMLInputElement | null>(null);

    const onNewAddressSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      if (dateRef.current && dateRef.current.value === '') {
        setInvalid(true);
        dateRef.current.setAttribute('aria-invalid', 'true');
      }
      if (postcodeRef.current && postcodeRef.current.value === '') {
        setInvalid(true);
        postcodeRef.current.setAttribute('aria-invalid', 'true');
      }
      if (homeNumberRef.current && homeNumberRef.current.value === '') {
        setInvalid(true);
        homeNumberRef.current.setAttribute('aria-invalid', 'true');
      }
    };

    const validateField = (current: HTMLInputElement | null) => {
      if (current && current.value) {
        if (current.getAttribute('aria-invalid') && current.validity.valid) {
          current.removeAttribute('aria-invalid');
          setInvalid(false);
        } else if (current && current.value === '' && !current.validity.valid) {
          current.setAttribute('aria-invalid', 'true');
          setInvalid(true);
        }
      }
    };

    const onNewAddressChange = () => {
      validateField(dateRef.current);
      validateField(postcodeRef.current);
      validateField(homeNumberRef.current);
    };

    return (
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
            <Paragraph>Stap 2 van 5 — De verhuizing</Paragraph>
          </HeadingGroup>
          <div className="utrecht-demo-intro-section-row">
            <div className="utrecht-demo-intro-section-row__description">
              <Heading2>De verhuizing</Heading2>
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
            <form
              className="utrecht-demo-col--8"
              action="/api/adres"
              method="POST"
              onSubmit={onNewAddressSubmit}
              noValidate
            >
              <FormField invalid={invalid}>
                <p>
                  <FormLabel htmlFor="verhuisdatum">Verhuisdatum*</FormLabel>
                </p>
                <Textbox
                  onChange={onNewAddressChange}
                  required
                  name="date"
                  ref={dateRef}
                  id="verhuisdatum"
                  type="date"
                  invalid={invalid}
                />
              </FormField>
              <Separator />
              <Fieldset>
                <FieldsetLegend>NIEUWE ADRES</FieldsetLegend>
                <div role="radiogroup" aria-labelledby="nieuwe-adres-label">
                  <Heading4 id="nieuwe-adres-label" className="utrecht-heading-4--distanced">
                    Hoe wilt u zoeken *
                  </Heading4>
                  <FormField type="radio">
                    <RadioButton checked id="C485109B-6BEE-4527-BEA6-430CE2A85CEA" name="woonplaats-en-straat" />
                    <FormLabel type="radio" htmlFor="C485109B-6BEE-4527-BEA6-430CE2A85CEA">
                      Postcode
                    </FormLabel>
                  </FormField>
                  <FormField type="radio">
                    <RadioButton id="woonplaats-en-straat" name="woonplaats-en-straat" />
                    <FormLabel type="radio" htmlFor="woonplaats-en-straat">
                      Woonplaats en Straat
                    </FormLabel>
                  </FormField>
                </div>
                <FormField invalid={invalid}>
                  <p>
                    <FormLabel htmlFor="postcode">Postcode *</FormLabel>
                  </p>
                  <Textbox
                    ref={postcodeRef}
                    onChange={onNewAddressChange}
                    id="postcode"
                    required
                    invalid={invalid}
                    aria-describedby={invalid ? 'err-postcode' : undefined}
                  />

                  {invalid && (
                    <FormFieldDescription id="err-postcode" invalid={invalid}>
                      U moet de postcode van het nieuwe adres invullen.
                    </FormFieldDescription>
                  )}
                </FormField>
                <FormField invalid={invalid}>
                  <p>
                    <FormLabel htmlFor="huisnummer">Huisnummer *</FormLabel>
                  </p>
                  <Textbox
                    ref={homeNumberRef}
                    onChange={onNewAddressChange}
                    id="huisnummer"
                    required
                    invalid={invalid}
                    aria-describedby={`huisnummer-description ${invalid ? 'huisnummer-error' : ''}`}
                  />
                </FormField>
                <FormFieldDescription id="huisnummer-description">
                  Vragen met een * zijn verplicht.
                </FormFieldDescription>
                {invalid && (
                  <FormFieldDescription id="huisnummer-error" invalid={invalid}>
                    U moet de huisnummer van het nieuwe adres invullen.
                  </FormFieldDescription>
                )}
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
    );
  },
};

UtrechtLogo.displayName = 'UtrechtLogo';
UtrechtDigidButton.displayName = 'UtrechtDigidButton';
UtrechtIconArrow.displayName = 'UtrechtIconArrow';
