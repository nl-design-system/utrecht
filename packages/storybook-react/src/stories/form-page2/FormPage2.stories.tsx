import { Meta, StoryObj } from '@storybook/react';
import {
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
  title: 'Template/Klachtenformulier/Stap 2',
  id: 'klachtenformulier-form-pages-stap-2',
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
          <UnorderedList>
            <UnorderedListItem>
              In dit formulier doorloopt u de volgende stappen: uw klacht, voorstel oplossing, uw gegevens en het
              controleren van de ingevulde informatie.
            </UnorderedListItem>
            <UnorderedListItem>Vul alle velden in. Als een veld niet verplicht is, staat dit erbij.</UnorderedListItem>
            <UnorderedListItem>U kunt het formulier tussentijds opslaan en later verder gaan.</UnorderedListItem>
            <UnorderedListItem>
              Na het versturen ontvangt u een bevestigingsmail. Ook heeft u de mogelijkheid uw klacht te downloaden of
              printen.
            </UnorderedListItem>
          </UnorderedList>
        </section>
        <br />
        <Button appearance="primary-action-button" type="submit">
          Doorgaan
          <UtrechtIconArrow />
        </Button>
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
