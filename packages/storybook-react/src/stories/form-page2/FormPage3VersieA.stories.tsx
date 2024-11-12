import { Meta, StoryObj } from '@storybook/react';
import {
  Button,
  ButtonGroup,
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
  Strong,
  Textbox,
  UnorderedList,
  UnorderedListItem,
} from '@utrecht/component-library-react/dist/css-module';
import {
  UtrechtBreadcrumbNav,
  UtrechtDigidButton,
  UtrechtFormFieldDescription,
  UtrechtIconArrow,
  UtrechtIconCross,
  UtrechtIconFacebook,
  UtrechtIconInstagram,
  UtrechtIconLinkedin,
  UtrechtIconNieuwHuis,
  UtrechtIconNieuwsbrief,
  UtrechtIconWhatsapp,
  UtrechtLogo,
} from '@utrecht/web-component-library-react';
import React from 'react';

const meta = {
  title: 'Template/Klachtenformulier/Stap 3A',
  id: 'klachtenformulier-form-pages-stap-3a',
  component: Page,
} satisfies Meta<typeof Page>;

export default meta;

type Story = StoryObj<typeof meta>;

export const One: Story = {
  render: (args) => (
    <Page {...args}>
      <PageHeader>
        <Link href="/">
          <Logo>
            <LogoImage />
          </Logo>
        </Link>
      </PageHeader>
      <PageContent style={{ '--utrecht-space-around': 1 } as any}>
        <Heading1>Klacht over de gemeente</Heading1>
        <section>
          <Heading2>Uw Klacht</Heading2>
          <Paragraph>Een duidelijke beschrijving helpt ons bij het behandelen van de klacht.</Paragraph>
          <Paragraph>Vul alle velden in. Als een veld niet verplicht is, staat dit erbij.</Paragraph>
          <FormFieldTextarea label="Wat is uw klacht?" name="klacht" rows={5} required />
          <br />
          <FormFieldTextbox
            label="Datum (niet verplicht)"
            name="datum"
            description="Bijvoorbeeld: 23 januari of 2 dagen geleden"
          />
          <br />
          <FormFieldTextbox label="Tijdstip (niet verplicht)" name="tijdstip" description="Bijvoorbeeld: 13:15" />
          <br />
          <FormFieldTextarea label="Locatie (niet verplicht)" name="locatie" rows={5} />
          <FormLabel>Bestand toevoegen (niet verplicht)</FormLabel>
          <Paragraph>Bijvoorbeeld: een foto van de situatie die de klacht duidelijker maakt</Paragraph>
          <UnorderedList>
            <UnorderedListItem>U kunt meerdere bestanden tegelijk toevoegen.</UnorderedListItem>
            <UnorderedListItem>U mag maximaal 10 MB aan bestanden toevoegen.</UnorderedListItem>
            <UnorderedListItem>
              Toegestane bestandstypen: doc, docx, xslx, pdf, zip, jpg, png, bmp en gif.
            </UnorderedListItem>
          </UnorderedList>
          <br />
          <Button appearance="secondary-action-button" type="submit">
            Bestand toevoegen
          </Button>
          <br />
          <br />
          <ButtonGroup direction="column">
            <Button appearance="primary-action-button">
              Volgende stap <UtrechtIconArrow />
            </Button>
            <Button appearance="subtle-button">
              <UtrechtIconArrow /> Opslaan en later verder
            </Button>
            <Button appearance="subtle-button">
              <UtrechtIconCross /> Stoppen met formulier
            </Button>
          </ButtonGroup>
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
          <Strong>Stadskantoor</Strong>
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
