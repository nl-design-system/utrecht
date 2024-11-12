import { Meta, StoryObj } from '@storybook/react';
import {
  BreadcrumbNav,
  BreadcrumbNavLink,
  BreadcrumbNavSeparator,
  Button,
  ButtonLink,
  DataList,
  DataListItem,
  DataListKey,
  DataListValue,
  FormField,
  FormFieldTextarea,
  FormFieldTextbox,
  FormLabel,
  Heading1,
  Heading2,
  Heading3,
  Link,
  LinkList,
  LinkListLink,
  Logo,
  LogoImage,
  Page,
  PageContent,
  PageFooter,
  PageHeader,
  Paragraph,
  Separator,
  Textarea,
  Textbox,
} from '@utrecht/component-library-react/dist/css-module';
import {
  UtrechtDigidButton,
  UtrechtFormFieldDescription,
  UtrechtIconArrow,
  UtrechtIconFacebook,
  UtrechtIconInstagram,
  UtrechtIconLinkedin,
  UtrechtIconNieuwsbrief,
  UtrechtIconWhatsapp,
  UtrechtLogo,
} from '@utrecht/web-component-library-react';
import React from 'react';
import { SingleFormioComponent } from '../open-forms/StoryUtil';

const meta = {
  title: 'Template/Klachten form/Start',
  id: 'template-klachten-start-form',
  component: Page,
} satisfies Meta<typeof Page>;

export default meta;

type Story = StoryObj<typeof meta>;

export const One: Story = {
  render: (args) => (
    <Page {...args}>
      <PageHeader>
        <nav>
          <Logo>
            <LogoImage />
          </Logo>
        </nav>
      </PageHeader>
      <PageContent style={{ '--utrecht-space-around': 1 } as any}>
        <BreadcrumbNav label="Kruimelpad">
          <ul role="list" className="utrecht-link-list utrecht-link-list--html-ul">
            <li className="utrecht-link-list__item">
              <a href="#" className="utrecht-link utrecht-link--html-a utrecht-link-list__link">
                <span className="utrecht-link-list__link-text">Terug link list</span>
              </a>
            </li>
          </ul>
          <BreadcrumbNavSeparator>
            <i />
          </BreadcrumbNavSeparator>
        </BreadcrumbNav>
        <Heading1>
          <Paragraph lead></Paragraph>
          Klacht over de gemeente
        </Heading1>
        <section>
          <Heading2>Uw klacht</Heading2>
          <Paragraph>Een duidelijke beschrijving helpt ons bij het behandelen van de klacht.</Paragraph>
          <Paragraph>Vul alle velden in. Als een veld niet verplicht is, staat dit erbij.</Paragraph>
        </section>
        <Heading2>Klachten formulier</Heading2>
        <section>
          <Heading2>Contact gegevens</Heading2>
          <form>
            <FormFieldTextarea label="Wat is uw klacht?" name="subject" status="U heeft nog 1000 tekens over." />
            <SingleFormioComponent
              extraComponentProperties={{
                datePicker: {
                  maxDate: null,
                  minDate: null,
                },
                enableTime: false,
                format: 'dd-MM-yyyy',
                placeholder: 'dd-mm-yyyy',
              }}
              type="date"
              key={''}
              label={''}
            />

            <FormFieldTextbox
              description="Bijvoorbeeld: 23 januari of 2 dagen geleden"
              label="Tijdstip"
              name="tijdstip"
              size={6}
            />

            <FormFieldTextarea label="Locatie" name="locatie" />

            <FormField>
              <br />
              <Textbox required id="email" aria-labelledby="email-label" aria-describedby="email-desc" />
              <UtrechtFormFieldDescription id="email-desc">
                Vragen met een * zijn verplicht.
              </UtrechtFormFieldDescription>
            </FormField>
            <Button appearance="primary-action-button" type="submit">
              Volgende stap
            </Button>
          </form>
        </section>
      </PageContent>

      <PageFooter>
        <Heading2>Gemeente Utrecht</Heading2>
        <br />
        <Heading3>Telefoon</Heading3>
        <Link href="tel:14003">14030</Link>
        <br />
        <br />
        <LinkList>
          <React.Fragment key=".0">
            <LinkListLink href="#">
              <UtrechtIconArrow /> Hoe werkt 14030?{' '}
            </LinkListLink>
            <LinkListLink href="#">
              <UtrechtIconArrow /> Meer contactinformatie
            </LinkListLink>
            <LinkListLink href="#">
              <UtrechtIconArrow /> Over deze website
            </LinkListLink>
          </React.Fragment>
        </LinkList>
        <br />
        <Heading3>Adres</Heading3>
        <Paragraph>
          <strong>Stadskantoor</strong>
          <br />
          Stadsplateau 1<br />
          3521 AZ Utrecht
        </Paragraph>
        <br />
        <LinkList>
          <React.Fragment key=".0">
            <LinkListLink href="#">
              <UtrechtIconInstagram /> Instagram
            </LinkListLink>
            <LinkListLink href="#">
              <UtrechtIconWhatsapp /> WhatsApp
            </LinkListLink>
            <LinkListLink href="#">
              <UtrechtIconFacebook /> Facebook
            </LinkListLink>
            <LinkListLink href="#">
              <UtrechtIconLinkedin /> LinkedIn
            </LinkListLink>
            <LinkListLink href="#">
              <UtrechtIconNieuwsbrief /> Nieuwsbrief
            </LinkListLink>
          </React.Fragment>
        </LinkList>
      </PageFooter>
    </Page>
  ),
};
