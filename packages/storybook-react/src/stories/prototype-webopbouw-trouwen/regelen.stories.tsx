import { Meta, StoryObj } from '@storybook/react';
import {
  AccordionProvider,
  BreadcrumbNav,
  BreadcrumbNavLink,
  BreadcrumbNavSeparator,
  ButtonLink,
  Heading1,
  Heading2,
  Heading3,
  Image,
  Link,
  Logo,
  LogoImage,
  OrderedList,
  OrderedListItem,
  Page,
  PageContent,
  PageHeader,
  Paragraph,
  Surface,
  UnorderedList,
  UnorderedListItem,
} from '@utrecht/component-library-react/dist/css-module';
import {
  UtrechtIconArrow,
  UtrechtIconChevronLeft,
  UtrechtIconChevronRight,
} from '@utrecht/web-component-library-react';
import React, { useState } from 'react';
import '../prototype-src/index.css';
import Chatbot from '../prototype-src/contactformulier/Chatbot.js';
import FooterContact from '../prototype-src/contactformulier/FooterContactFormulier.js';
import urls from '../prototype-src/variables.js';
import HoofdNavigatie from '../prototype-src/webpaginablokken/HoofdNavigatie.js';
import HulpEnContact from '../prototype-src/webpaginablokken/HulpEnContact.js';
import HulpEnContact2 from '../prototype-src/webpaginablokken/HulpEnContact2.js';
import KTO from '../prototype-src/webpaginablokken/KTO.js';
import '../styles.css';
import PageHeaderWithSearch from '../prototype-src/webpaginablokken/PageHeaderWithSearch.js';

const meta = {
  title: 'Prototypes/Trouwen/Pagina indeling/Regelen',
  id: 'trouwen-regelen',
  component: Page,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Page>;

export default meta;

type Story = StoryObj<typeof meta>;

export const One: Story = {
  render: (args: any) => {
    // State om te bepalen welke HulpEnContact component getoond wordt
    const [showHulpEnContact2, setShowHulpEnContact2] = useState(false);

    return (
      <Surface className="utrecht-custom-theme">
        <Page {...args}>
          <PageHeaderWithSearch />
          <HoofdNavigatie />
          <PageContent>
            <BreadcrumbNav>
              <BreadcrumbNavLink href="https://www.utrecht.nl/">
                <BreadcrumbNavSeparator></BreadcrumbNavSeparator>
                Home
              </BreadcrumbNavLink>
              <BreadcrumbNavLink href="https://www.utrecht.nl/wonen-en-leven">
                <BreadcrumbNavSeparator>
                  <UtrechtIconChevronRight />
                </BreadcrumbNavSeparator>
                Wonen en leven
              </BreadcrumbNavLink>
              <BreadcrumbNavLink href={urls.trouwenNavigatie}>
                <BreadcrumbNavSeparator>
                  <UtrechtIconChevronRight />
                </BreadcrumbNavSeparator>
                Trouwen, partnerschap en samenlevingscontract
              </BreadcrumbNavLink>
            </BreadcrumbNav>
            <main>
              <section>
                <Heading1>Trouwen</Heading1>
                <Paragraph appearance="lead">
                  U wilt trouwen. Gefeliciteerd! Bekijk wat u moet regelen en welke opties er zijn bij de gemeente.
                </Paragraph>
                <Link
                  className="utrecht-link utrecht-link--html-a utrecht-advanced-link utrecht-advanced-link--with-icon"
                  href="#regelwerk"
                >
                  <UtrechtIconChevronRight />
                  Trouwen: wat moet ik regelen?
                </Link>
                <Link
                  className="utrecht-link utrecht-link--html-a utrecht-advanced-link utrecht-advanced-link--with-icon"
                  href={urls.trouwenSoortenTrouwen}
                >
                  <UtrechtIconChevronRight />
                  Soorten trouwen
                </Link>
                <Link
                  className="utrecht-link utrecht-link--html-a utrecht-advanced-link utrecht-advanced-link--with-icon"
                  href={urls.trouwenVeelgesteldeVragen}
                >
                  <UtrechtIconChevronRight />
                  Vragen en antwoorden
                </Link>

                <Heading2 id="regelwerk">Trouwen: wat moet ik regelen?</Heading2>
                <Paragraph>U gaat trouwen. Hoe regelt u uw huwelijk bij de gemeente?</Paragraph>
                <OrderedList>
                  <OrderedListItem>
                    <Link href="#stap-1">Eenvoudig of ceremonieel trouwen?</Link>
                  </OrderedListItem>
                  <OrderedListItem>
                    <Link href="#stap-2">Regel getuigen</Link>
                  </OrderedListItem>
                  <OrderedListItem>
                    <Link href="#stap-3">Meld uw voorgenomen huwelijk</Link>
                  </OrderedListItem>
                  <OrderedListItem>
                    <Link href="#stap-4">Trouwdatum en -locatie</Link>
                  </OrderedListItem>
                  <OrderedListItem>
                    <Link href="#stap-5">Trouwambtenaar</Link>
                  </OrderedListItem>
                  <OrderedListItem>
                    <Link href="#stap-6">Kies de achternaam van uw kinderen</Link>
                  </OrderedListItem>
                  <OrderedListItem>
                    <Link href="#stap-7">Regel juiste documenten (bij buitenlandse partner)</Link>
                  </OrderedListItem>
                </OrderedList>
                <Paragraph>Hieronder beschrijven we stap voor stap wat u moet doen:</Paragraph>
                <Heading3 id="stap-1">Stap 1: Eenvoudig of ceremonieel trouwen?</Heading3>
                <Paragraph>
                  Wilt u een eenvoudig huwelijk op het stadskantoor, of liever een uitgebreid ceremonieel huwelijk? Op
                  de <Link href={urls.trouwenSoortenTrouwen}>soorten trouwen pagina</Link> kunt u de verschillende
                  soorten trouwen vergelijken.
                </Paragraph>
                <Heading3 id="stap-2">Stap 2: Regel getuigen</Heading3>
                <Paragraph>Om te kunnen trouwen hebt u getuigen nodig. </Paragraph>
                <UnorderedList>
                  <UnorderedListItem>Vraag minimaal 2 en maximaal 4 getuigen </UnorderedListItem>
                  <UnorderedListItem>
                    Getuigen moeten op de dag van het huwelijk 18 jaar of ouder zijn{' '}
                  </UnorderedListItem>
                  <UnorderedListItem>Getuigen moeten een geldig identiteitsbewijs hebben </UnorderedListItem>
                </UnorderedList>
                <Paragraph>
                  Wij bieden geen ambtenaren als getuigen aan. In de volgende stap geeft u aan wie uw getuigen zijn.
                </Paragraph>
                <Heading3 id="stap-3">Stap 3: Meld uw voorgenomen huwelijk</Heading3>
                <Paragraph>
                  U moet minimaal 2 weken van te voren uw voorgenomen huwelijk melden bij de gemeente. Dat doet u met
                  een online formulier op de website van de gemeente. De melding doen is gratis.
                </Paragraph>
                <Link
                  className="utrecht-link utrecht-link--html-a utrecht-advanced-link utrecht-advanced-link--with-icon"
                  href="#"
                >
                  <UtrechtIconChevronRight />
                  Meld uw voorgenomen huwelijk
                </Link>
                <Heading3 id="stap-4">Stap 4: Trouwdatum en -locatie</Heading3>
                <Paragraph>
                  Deze stap verschilt tussen ceremonieel en eenvoudig trouwen. Bij eenvoudig trouwen bellen wij u om
                  samen met u een trouwdatum en -locatie in te plannen. Bij ceremonieel trouwen kiest u zelf een
                  trouwdatum en -locatie.{' '}
                </Paragraph>
                <Heading3 id="stap-5">Stap 5: Trouwambtenaar</Heading3>
                <Paragraph>
                  Bij Ceremonieel trouwen kunt u zelf een trouwambtenaar kiezen. Bij Eenvoudig trouwen wijst de gemeente
                  u een trouwambtenaar toe.
                </Paragraph>
                <Heading3 id="stap-6">Stap 6: Kies de achternaam van uw kinderen</Heading3>
                <Paragraph>
                  Kies de{' '}
                  <Link href="https://loket.digitaal.utrecht.nl/nl/producten/trouwen-in-utrecht#achternaam-kinderen-veranderen">
                    achternaam van uw kinderen
                  </Link>
                  .
                </Paragraph>
                <Heading3 id="stap-7">Stap 7: Regel juiste documenten (bij buitenlandse partner)</Heading3>
                <Paragraph>
                  Als u trouwt met een partner die niet in Nederland woont, dan hebben wij een aantal documenten van u
                  nodig.
                </Paragraph>

                {/* Conditioneel renderen van HulpEnContact of HulpEnContact2 */}
                {!showHulpEnContact2 ? (
                  <HulpEnContact onSubmit={() => setShowHulpEnContact2(true)} />
                ) : (
                  <HulpEnContact2 />
                )}
                <KTO />
              </section>
            </main>
          </PageContent>
          <FooterContact />
          <Chatbot />
        </Page>
      </Surface>
    );
  },
};
