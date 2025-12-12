import { Meta, StoryObj } from '@storybook/react';
import {
  AccordionProvider,
  BreadcrumbNav,
  BreadcrumbNavLink,
  BreadcrumbNavSeparator,
  Heading1,
  Heading2,
  Heading3,
  Link,
  Page,
  PageContent,
  Paragraph,
  Surface,
  UnorderedList,
  UnorderedListItem,
} from '@utrecht/component-library-react/dist/css-module';
import { UtrechtIconChevronLeft } from '@utrecht/web-component-library-react';
import React, { useState } from 'react';
import '../prototype-src/index.css';
import BelangrijkAchternaamContent from '../prototype-src/accordionteksten/trouwen/BelangrijkAchternaam.js';
import BelangrijkAnnulerenContent from '../prototype-src/accordionteksten/trouwen/BelangrijkAnnuleren.js';
import BelangrijkGemeenschapGoederenContent from '../prototype-src/accordionteksten/trouwen/BelangrijkGemeenschapGoederen.js';
import BelangrijkNietNederlandsContent from '../prototype-src/accordionteksten/trouwen/BelangrijkNietNederlands.js';
import MogelijkhedenCeremonieContent from '../prototype-src/accordionteksten/trouwen/MogelijkhedenCeremonie.js';
import MogelijkhedenEenvoudigContent from '../prototype-src/accordionteksten/trouwen/MogelijkhedenEenvoudig.js';
import MogelijkhedenFlitshuwelijkContent from '../prototype-src/accordionteksten/trouwen/MogelijkhedenFlits.js';
import MogelijkhedenGratisContent from '../prototype-src/accordionteksten/trouwen/MogelijkhedenGratis.js';
import RegelenGetuigenContent from '../prototype-src/accordionteksten/trouwen/RegelenGetuigen.js';
import RegelenMeldenContent from '../prototype-src/accordionteksten/trouwen/RegelenMelden.js';
import RegelenTrouwambtenaarContent from '../prototype-src/accordionteksten/trouwen/RegelenTrouwambtenaar.js';
import RegelenTrouwdatumContent from '../prototype-src/accordionteksten/trouwen/RegelenTrouwdatum.js';
import Chatbot from '../prototype-src/contactformulier/Chatbot.js';
import FooterContact from '../prototype-src/contactformulier/FooterContactFormulier.js';
import urls from '../prototype-src/variables.js';
import HoofdNavigatie from '../prototype-src/webpaginablokken/HoofdNavigatie.js';
import HulpEnContactTrouwen from '../prototype-src/webpaginablokken/HulpEnContactTrouwen.js';
import KTOvervolg from '../prototype-src/webpaginablokken/KTO-vervolg.js';
import '../styles.css';
import PageHeaderWithSearch from '../prototype-src/webpaginablokken/PageHeaderWithSearch.js';

const meta = {
  title: 'Prototypes/Trouwen webteksten/Stap 1',
  id: 'trouwen-webteksten-stap-1',
  component: Page,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Page>;

export default meta;

type Story = StoryObj<typeof meta>;

export const One: Story = {
  render: (args: any) => {
    return (
      <Surface className="utrecht-custom-theme">
        <Page {...args}>
          <PageHeaderWithSearch />
          <HoofdNavigatie />
          <PageContent>
            <BreadcrumbNav>
              <BreadcrumbNavLink href={urls.contactformScenarioKTO}>
                <BreadcrumbNavSeparator>
                  <UtrechtIconChevronLeft />
                </BreadcrumbNavSeparator>
                Terug
              </BreadcrumbNavLink>
            </BreadcrumbNav>
            <main>
              <section>
                <Heading1>Trouwen in Utrecht</Heading1>

                <Paragraph appearance="lead">
                  U wilt trouwen of een partnerschap registreren. Gefeliciteerd! Bekijk welke mogelijkheden er zijn en
                  wat u daarvoor moet regelen.
                </Paragraph>
                <Paragraph>
                  Goed om te weten: alle informatie over trouwen en huwelijk op deze pagina geldt ook voor het
                  geregistreerd partnerschap.
                </Paragraph>
                <Heading2>Verschil huwelijk, partnerschap en samenlevingscontract</Heading2>
                <Paragraph>
                  Er zijn belangrijke verschillen tussen deze 3 vormen. Een huwelijk en partnerschap regelt u bij de
                  gemeente, een samenlevingscontract bij de notaris. Ook tussen een huwelijk en een partnerschap zijn er
                  verschillen. Denk bijvoorbeeld aan wel of geen ja-woord geven. Maar ook of het in het buitenland
                  geldig is.
                </Paragraph>
                <br />
                <Link href="https://www.rijksoverheid.nl/onderwerpen/trouwen-samenlevingscontract-en-geregistreerd-partnerschap/vraag-en-antwoord/wat-is-het-verschil-tussen-een-huwelijk-geregistreerd-partnerschap-en-samenlevingscontract">
                  Bekijk de verschillen tussen huwelijk, partnerschap en samenlevingscontract
                </Link>
                <Paragraph>Lees meer over:</Paragraph>
                <UnorderedList>
                  <UnorderedListItem>
                    <Link href="https://loket.digitaal.utrecht.nl/nl/producten/geregistreerd-partnerschap">
                      geregistreerd partnerschap
                    </Link>
                  </UnorderedListItem>
                  <UnorderedListItem>
                    <Link href="https://loket.digitaal.utrecht.nl/nl/producten/geregistreerd-partnerschap#geregistreerd-partnerschap-omzetten-in-huwelijk">
                      omzetten geregistreerd partnerschap in huwelijk
                    </Link>
                  </UnorderedListItem>
                  <UnorderedListItem>
                    <Link href="https://www.rijksoverheid.nl/onderwerpen/trouwen-samenlevingscontract-en-geregistreerd-partnerschap/vraag-en-antwoord/samenlevingscontract-afsluiten">
                      Samenlevingscontract
                    </Link>
                  </UnorderedListItem>
                </UnorderedList>

                <Heading2>Welke mogelijkheden zijn er?</Heading2>
                <AccordionProvider
                  sections={[
                    {
                      body: <MogelijkhedenFlitshuwelijkContent />,
                      expanded: undefined,
                      label: 'Flitshuwelijk in het stadskantoor',
                    },
                    {
                      body: <MogelijkhedenEenvoudigContent />,
                      expanded: undefined,
                      label: 'Eenvoudig trouwen in het stadskantoor',
                    },
                    {
                      body: <MogelijkhedenGratisContent />,
                      expanded: undefined,
                      label: 'Gratis trouwen in het stadskantoor',
                    },
                    {
                      body: <MogelijkhedenCeremonieContent />,
                      expanded: undefined,
                      label: 'Trouwen met een ceremonie',
                    },
                  ]}
                />
                <Heading2>Wat moet ik regelen?</Heading2>
                <Paragraph>
                  Hieronder leest u wat u moet regelen voor uw huwelijk of geregistreerd partnerschap.
                </Paragraph>
                <Heading3 id="regelen">Regelen</Heading3>
                <AccordionProvider
                  sections={[
                    {
                      body: <RegelenGetuigenContent />,
                      expanded: undefined,
                      label: 'Getuigen',
                    },
                    {
                      body: <RegelenMeldenContent />,
                      expanded: undefined,
                      label: 'Meld uw voorgenomen huwelijk',
                    },
                    {
                      body: <RegelenTrouwdatumContent />,
                      expanded: undefined,
                      label: 'Plan trouwdatum en locatie',
                    },
                    {
                      body: <RegelenTrouwambtenaarContent />,
                      expanded: undefined,
                      label: 'Trouwambtenaar',
                    },
                  ]}
                />
                <Heading3>Belangrijk</Heading3>
                <AccordionProvider
                  sections={[
                    {
                      body: <BelangrijkAchternaamContent />,
                      expanded: undefined,
                      label: 'Achternaam kinderen kiezen',
                    },
                    {
                      body: <BelangrijkNietNederlandsContent />,
                      expanded: undefined,
                      label: 'Niet Nederlandse nationaliteit',
                    },
                    {
                      body: <BelangrijkGemeenschapGoederenContent />,
                      expanded: undefined,
                      label: 'Trouwen in gemeenschap van goederen of op huwelijkse voorwaarden',
                    },
                    {
                      body: <BelangrijkAnnulerenContent />,
                      expanded: undefined,
                      label: 'Annuleren of wijzigen',
                    },
                  ]}
                />
                <HulpEnContactTrouwen />
                <KTOvervolg />
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
