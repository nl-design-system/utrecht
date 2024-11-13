import { Meta, StoryObj } from '@storybook/react';
import {
  BreadcrumbNav,
  BreadcrumbNavLink,
  BreadcrumbNavSeparator,
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
  UtrechtIconChevronLeft,
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
import './index.css';
import FooterKlachten from './FooterKlachtenFormulier'; // Importeer het footer-component

const meta = {
  title: 'Template/Klachtenformulier/Stap 3B',
  id: 'klachtenformulier-form-pages-stap-3b',
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
        <BreadcrumbNav>
          <BreadcrumbNavLink href="#">
            <BreadcrumbNavSeparator>
              <UtrechtIconChevronLeft />
            </BreadcrumbNavSeparator>
            Terug
          </BreadcrumbNavLink>
        </BreadcrumbNav>
        <Heading1>Klacht over de gemeente</Heading1>
        <section>
          <Heading2>Uw Klacht</Heading2>
          <Paragraph>Een duidelijke beschrijving helpt ons bij het behandelen van de klacht.</Paragraph>
          <Paragraph>Vul alle velden in. Als een veld niet verplicht is, staat dit erbij.</Paragraph>
          <FormFieldTextarea
            label="Wat is uw klacht?"
            name="klacht"
            description="Beschrijf bijvoorbeeld; locatie, datum en tijd. Misschien ook afdeling of medewerker, als dit van toepassing is."
            required
          />
          <br />
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
      <FooterKlachten />
    </Page>
  ),
};
