import { Meta, StoryObj } from '@storybook/react';
import {
  UtrechtIconArrow,
  UtrechtIconChevronLeft,
  UtrechtIconChevronRight,
} from '@utrecht/web-component-library-react';
import React, { useState } from 'react';
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
} from '../../../../component-library-react/src/index.js';
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
                  U wilt trouwen. Bekijk wat u moet regelen en welke mogelijkheden er zijn bij de gemeente Utrecht.
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
                  Mogelijkheden voor trouwen
                </Link>

                <Heading2 id="regelwerk">Trouwen: wat moet ik regelen?</Heading2>
                <Paragraph>U gaat trouwen. Hoe regelt u uw huwelijk bij de gemeente?</Paragraph>
                <OrderedList>
                  <OrderedListItem>
                    <Link href="#stap-1">Trouwen met of zonder ceremonie kiezen</Link>
                  </OrderedListItem>
                  <OrderedListItem>
                    <Link href="#stap-2">Getuigen regelen</Link>
                  </OrderedListItem>
                  <OrderedListItem>
                    <Link href="#stap-3">Voorgenomen huwelijk melden</Link>
                  </OrderedListItem>
                  <OrderedListItem>
                    <Link href="#stap-4">Trouwdatum en -locatie vastleggen</Link>
                  </OrderedListItem>
                  <OrderedListItem>
                    <Link href="#stap-5">Trouwambtenaar krijgen of zelf kiezen</Link>
                  </OrderedListItem>
                  <OrderedListItem>
                    <Link href="#stap-6">Achternaam van uw kinderen kiezen</Link>
                  </OrderedListItem>
                  <OrderedListItem>
                    <Link href="#stap-7">Juiste documenten regelen</Link>
                  </OrderedListItem>
                </OrderedList>
                <Paragraph>Hieronder beschrijven we stap voor stap wat u moet doen.</Paragraph>
                <Heading3 id="stap-1">Stap 1: Trouwen met of zonder ceremonie kiezen</Heading3>
                <Paragraph>
                  Wilt u een eenvoudig huwelijk zonder ceremonie op het stadskantoor? Of liever een uitgebreid huwelijk
                  met een ceremonie op een andere locatie?
                </Paragraph>
                <Link
                  className="utrecht-link utrecht-link--html-a utrecht-advanced-link utrecht-advanced-link--with-icon"
                  href={urls.trouwenSoortenTrouwen}
                >
                  <UtrechtIconChevronRight />
                  Vergelijk verschillende mogelijkheden en kies wat het beste bij u past
                </Link>
                <Heading3 id="stap-2">Stap 2: Getuigen regelen</Heading3>
                <Paragraph>Om te kunnen trouwen hebt u getuigen nodig.</Paragraph>
                <UnorderedList>
                  <UnorderedListItem>Vraag minimaal 2 en maximaal 4 getuigen</UnorderedListItem>
                  <UnorderedListItem>
                    Getuigen moeten op de dag van het huwelijk 18 jaar of ouder zijn
                  </UnorderedListItem>
                  <UnorderedListItem>Getuigen moeten een geldig identiteitsbewijs hebben</UnorderedListItem>
                  <UnorderedListItem>Wij bieden geen ambtenaren als getuigen aan</UnorderedListItem>
                </UnorderedList>
                <Heading3 id="stap-3">Stap 3: Voorgenomen huwelijk melden</Heading3>
                <Paragraph>
                  U meldt minimaal 8 weken van tevoren uw voorgenomen huwelijk bij de gemeente Utrecht. De melding is
                  gratis. De periode tussen de melding en het huwelijk moet volgens de wet minimaal 14 dagen zijn. De
                  melding is 1 jaar geldig.
                </Paragraph>
                <Link
                  className="utrecht-link utrecht-link--html-a utrecht-advanced-link utrecht-advanced-link--with-icon"
                  href="#"
                >
                  <UtrechtIconChevronRight />
                  Meld uw voorgenomen huwelijk
                </Link>
                <Paragraph>Na goedkeuring ontvangt u een e-mail over hoe het verder gaat.</Paragraph>
                <Heading3 id="stap-4">Stap 4: Trouwdatum en -locatie vastleggen</Heading3>
                <Paragraph>Wacht niet te lang met het vastleggen van een trouwdatum.</Paragraph>
                <UnorderedList>
                  <UnorderedListItem>
                    Trouwen zonder ceremonie (in het stadskantoor): u meldt eerst uw voorgenomen huwelijk. Is uw melding
                    goedgekeurd? U ontvangt een e-mail met een link voor het maken van een belafspraak. Tijdens deze
                    afspraak kunnen we een datum voor een eenvoudig, flits of gratis huwelijk vastleggen.
                  </UnorderedListItem>
                  <UnorderedListItem>
                    <Paragraph>
                      Trouwen met ceremonie (andere locatie): u kunt uiterlijk 18 maanden van tevoren uw trouwdatum
                      vastleggen. Neem hiervoor contact met ons op.
                    </Paragraph>
                    <Paragraph>
                      Is uw melding goedgekeurd? U ontvangt een e-mail met een link voor het maken van een
                      vervolgafspraak. Tijdens deze vervolgafspraak controleren wij uw identiteit, betaalt u de kosten
                      en legt u (als dit nog niet is gedaan) de datum van het huwelijk vast.
                    </Paragraph>
                  </UnorderedListItem>
                </UnorderedList>
                <Heading3 id="stap-5">Stap 5: Trouwambtenaar krijgen of zelf kiezen</Heading3>
                <UnorderedList>
                  <UnorderedListItem>
                    Trouwen zonder ceremonie (in het stadskantoor): wij kiezen uw trouwambtenaar
                  </UnorderedListItem>
                  <UnorderedListItem>
                    Trouwen met ceremonie (andere locatie): wij kiezen uw trouwambtenaar of u vraagt uw eigen{' '}
                    <Link href="https://loket.digitaal.utrecht.nl/nl/producten/trouwambtenaar-voor-1-dag-aanvragen">
                      trouwambtenaar
                    </Link>{' '}
                    aan
                  </UnorderedListItem>
                </UnorderedList>
                <Heading3 id="stap-6">Stap 6: Achternaam van uw kinderen kiezen</Heading3>
                <Paragraph>
                  Hebt u bij de erkenning van uw kind gekozen voor een bepaalde achternaam voor uw kind(eren)? En gaat u
                  als ouders trouwen of een partnerschap registreren? Dan kunt u eenmalig en alleen op dat moment de
                  achternaam veranderen van de kind(eren) die u samen hebt. U kunt daarbij kiezen voor de achternaam van
                  een van u of voor een combinatie van beide achternamen.
                </Paragraph>
                <Paragraph>
                  Voor de verandering van de achternaam moet uw kind wel de Nederlandse nationaliteit hebben. Wilt u
                  dit? Geef het aan bij het vastleggen van een trouwdatum.
                </Paragraph>
                <Heading3 id="stap-7">Stap 7: Juiste documenten regelen</Heading3>
                <Paragraph>
                  Woonde u of uw partner in het buitenland of woont een van u daar nog? Bent u in het buitenland
                  geboren? Of bent u eerder getrouwd geweest in het buitenland? Misschien hebben we dan extra documenten
                  van u nodig. Bel 14 030 en overleg of en wat er in uw geval nodig is.
                </Paragraph>
                <Link
                  className="utrecht-link utrecht-link--html-a utrecht-advanced-link utrecht-advanced-link--with-icon"
                  href="https://www.rijksoverheid.nl/vraag-en-antwoord/trouwen-samenlevingscontract-en-geregistreerd-partnerschap/huwelijk-in-nederland-met-een-buitenlander"
                >
                  <UtrechtIconChevronRight />
                  Lees wat u hier allemaal voor moet regelen
                </Link>

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
