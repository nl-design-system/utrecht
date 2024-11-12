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
  title: 'Template/Klachtenformulier/Stap 1',
  id: 'klachtenformulier-form-pages-stap-1',
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
      <BreadcrumbNav>
        <BreadcrumbNavLink href="#">
          <BreadcrumbNavSeparator>
            <UtrechtIconChevronLeft />
          </BreadcrumbNavSeparator>
          Terug
        </BreadcrumbNavLink>
      </BreadcrumbNav>

      <PageContent style={{ '--utrecht-space-around': 1 } as any}>
        <Heading1>Klacht</Heading1>
        <section>
          <Paragraph appearance="lead">
            Bent u ontevreden over hoe de gemeente haar taken uitvoert? Bent u bijvoorbeeld niet goed geholpen? Of bent
            u niet netjes behandeld? De gemeente vindt dat vervelend en zoekt graag samen naar een oplossing.
            <br />U kunt uw klacht op 3 manieren indienen: met het klachtenformulier, bellen of een brief sturen.
          </Paragraph>
        </section>
        <section>
          <Heading2>Heading2</Heading2>
          <Heading3>Heading3</Heading3>
          <Paragraph>Paragraph text</Paragraph>
          <Button>Buttontext</Button>
          <Paragraph>Paragraph 2 text</Paragraph>
        </section>

        <section>
          {' '}
          <Button appearance="primary-action-button" type="submit">
            Ga naar klachtenformulier
            <UtrechtIconArrow />
          </Button>
        </section>
        <section>
          <Heading2>Bellen</Heading2>
          <Paragraph>
            U kunt bellen naar telefoonnummer 14030 (of vanuit het buitenland: +31 30 286 00 00). Dit kan van maandag
            tot en met vrijdag tussen 9.00 en 17.00 uur.
          </Paragraph>
        </section>
        <section>
          <Heading2>Een brief sturen</Heading2>
          <Paragraph>
            U kunt een brief schrijven met uw klacht. Stuur uw brief naar: Gemeente Utrecht Klachtenbehandeling
            Antwoordnummer 51066 3501 VC Utrecht (geen postzegel nodig)
          </Paragraph>
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
