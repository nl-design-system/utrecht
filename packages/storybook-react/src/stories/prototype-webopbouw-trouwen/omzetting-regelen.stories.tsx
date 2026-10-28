import { Meta, StoryObj } from '@storybook/react';
import { UtrechtIconChevronRight } from '@utrecht/web-component-library-react';
import React, { useState } from 'react';
import {
  Heading1,
  Heading2,
  Heading3,
  Link,
  OrderedList,
  OrderedListItem,
  Page,
  PageContent,
  Paragraph,
  Surface,
  UnorderedList,
  UnorderedListItem,
} from '../../../../component-library-react/src/index.js';
import '../prototype-src/index.css';
import Chatbot from '../prototype-src/contactformulier/Chatbot.js';
import FooterContact from '../prototype-src/contactformulier/FooterContactFormulier.js';
import urls from '../prototype-src/variables.js';
import Breadcrumb, { wonenEnLeven } from '../prototype-src/webpaginablokken/Breadcrumb.js';
import HoofdNavigatie from '../prototype-src/webpaginablokken/HoofdNavigatie.js';
import HulpEnContact from '../prototype-src/webpaginablokken/HulpEnContact.js';
import HulpEnContact2 from '../prototype-src/webpaginablokken/HulpEnContact2.js';
import KTO from '../prototype-src/webpaginablokken/KTO.js';
import '../styles.css';
import PageHeaderWithSearch from '../prototype-src/webpaginablokken/PageHeaderWithSearch.js';

const meta = {
  title: 'Prototypes/Trouwen/Pagina indeling/Omzetting - Regelen',
  id: 'omzetting-regelen',
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
            <Breadcrumb
              items={[
                wonenEnLeven,
                { label: 'Trouwen, partnerschap en samenlevingscontract', href: urls.trouwenNavigatie },
              ]}
            />
            <main>
              <section>
                <Heading1>Omzetten geregistreerd partnerschap in huwelijk</Heading1>
                <Paragraph appearance="lead">
                  U wilt een geregistreerd partnerschap omzetten in een huwelijk. Bekijk wat u moet regelen en welke
                  mogelijkheden er zijn bij de gemeente Utrecht.
                </Paragraph>
                <Link
                  className="utrecht-link utrecht-link--html-a utrecht-advanced-link utrecht-advanced-link--with-icon"
                  href="#regelwerk"
                >
                  <UtrechtIconChevronRight />
                  Wat moet ik regelen?
                </Link>
                <Link
                  className="utrecht-link utrecht-link--html-a utrecht-advanced-link utrecht-advanced-link--with-icon"
                  href={urls.trouwenSoortenTrouwen}
                >
                  <UtrechtIconChevronRight />
                  Mogelijkheden voor omzetten van geregistreerd partnerschap
                </Link>

                <Heading2 id="regelwerk">Wat moet ik regelen?</Heading2>
                <Paragraph>
                  U gaat een geregistreerd partnerschap omzetten in een huwelijk. Hoe regelt u dit bij de gemeente?
                </Paragraph>
                <OrderedList>
                  <OrderedListItem>
                    <Link href="#stap-1">Omzetting met of zonder ceremonie</Link>
                  </OrderedListItem>
                  <OrderedListItem>
                    <Link href="#stap-2">Datum en locatie omzetting vastleggen</Link>
                  </OrderedListItem>
                  <OrderedListItem>
                    <Link href="#stap-3">Trouwambtenaar krijgen of zelf kiezen</Link>
                  </OrderedListItem>
                  <OrderedListItem>
                    <Link href="#stap-4">Juiste documenten regelen</Link>
                  </OrderedListItem>
                </OrderedList>
                <Paragraph>Hieronder beschrijven we stap voor stap wat u moet doen.</Paragraph>
                <Heading3 id="stap-1">Stap 1: Omzetting met of zonder ceremonie</Heading3>
                <Paragraph>
                  Wilt u een eenvoudige omzetting zonder ceremonie op het stadskantoor? Of liever een uitgebreide
                  omzetting met een ceremonie op een andere locatie? Dit kan allemaal, net als bij trouwen.
                </Paragraph>
                <Link
                  className="utrecht-link utrecht-link--html-a utrecht-advanced-link utrecht-advanced-link--with-icon"
                  href={urls.trouwenSoortenTrouwen}
                >
                  <UtrechtIconChevronRight />
                  Vergelijk verschillende mogelijkheden van trouwen en kies wat het beste bij u past
                </Link>
                <Heading3 id="stap-2">Stap 2: Datum en locatie omzetting vastleggen</Heading3>
                <Paragraph>Wacht niet te lang met het vastleggen van een datum voor de omzetting.</Paragraph>
                <Heading3 id="stap-3">Stap 3: Trouwambtenaar krijgen of zelf kiezen</Heading3>
                <UnorderedList>
                  <UnorderedListItem>
                    Omzetting zonder ceremonie (in het stadskantoor): wij kiezen uw trouwambtenaar
                  </UnorderedListItem>
                  <UnorderedListItem>
                    Omzetting met ceremonie (andere locatie): wij kiezen uw trouwambtenaar of u vraagt uw eigen{' '}
                    <Link href="https://loket.digitaal.utrecht.nl/nl/producten/trouwambtenaar-voor-1-dag-aanvragen">
                      trouwambtenaar
                    </Link>{' '}
                    aan
                  </UnorderedListItem>
                </UnorderedList>
                <Heading3 id="stap-4">Stap 4: Juiste documenten regelen</Heading3>
                <Paragraph>
                  Woonde u of uw partner in het buitenland of woont een van u daar nog? Bent u in het buitenland
                  geboren? Of bent u eerder getrouwd geweest in het buitenland? Misschien hebben we dan extra documenten
                  van u nodig. Bel 14 030 en overleg of en wat er in uw geval nodig is.
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
