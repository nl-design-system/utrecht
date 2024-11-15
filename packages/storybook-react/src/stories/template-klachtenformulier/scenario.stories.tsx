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
  SpotlightSection,
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
import './index.css';
import FooterKlachten from './FooterKlachtenFormulier'; // Importeer het footer-component

const meta = {
  title: 'Template/Klachtenformulier/Scenario',
  id: 'klachtenformulier-scenario',
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
        <section>
          <Heading1>Het verhaal</Heading1>
          <Paragraph>
            Vorige week woensdag ging je naar het stadskantoor. Je had om 10:15 een afspraak om je paspoort op te halen.
            Bij de balie ging er iets mis. De medewerker wist niet precies wat hij moest doen. Je vond dat lastig, want
            je had nog een andere afspraak na deze. Je moest op tijd weg.
          </Paragraph>
          <Paragraph>
            Je vertelde dat je haast had. Toen werd de man achter de balie ineens erg boos! Het leek zelfs of hij expres
            heel traag ging werken. Dat was niet fijn. Je kwam te laat bij je volgende afspraak. Ook was de boze reactie
            van de man veel te hevig.
          </Paragraph>
          <Paragraph>Je besluit een klacht in te dienen bij de gemeente.</Paragraph>
        </section>
        <section>
          <ButtonLink
            appearance="primary-action-button"
            href="./iframe.html?args=&id=klachtenformulier-form-pages-stap-1--one&viewMode=story"
          >
            Naar de klachtenpagina&nbsp;
            <UtrechtIconArrow />
          </ButtonLink>
        </section>
      </PageContent>
      <FooterKlachten />
    </Page>
  ),
};
