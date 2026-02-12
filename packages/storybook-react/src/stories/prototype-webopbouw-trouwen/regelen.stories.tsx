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
  title: 'Prototypes/Trouwen/Regelen',
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
              <BreadcrumbNavLink href={urls.contactformScenario}>
                <BreadcrumbNavSeparator>
                  <UtrechtIconChevronLeft />
                </BreadcrumbNavSeparator>
                Terug
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
                  href="#"
                >
                  <UtrechtIconChevronRight />
                  Trouwen: wat moet ik regelen?
                </Link>
                <Link
                  className="utrecht-link utrecht-link--html-a utrecht-advanced-link utrecht-advanced-link--with-icon"
                  href="#"
                >
                  <UtrechtIconChevronRight />
                  Soorten trouwen
                </Link>
                <Link
                  className="utrecht-link utrecht-link--html-a utrecht-advanced-link utrecht-advanced-link--with-icon"
                  href="#"
                >
                  <UtrechtIconChevronRight />
                  Nuttig om te weten
                </Link>

                <Heading2>Trouwen: wat moet ik regelen?</Heading2>
                <Paragraph>U gaat trouwen. Hoe regelt u uw huwelijk bij de gemeente?</Paragraph>
                <OrderedList>
                  <OrderedListItem>Regel getuigen</OrderedListItem>
                  <OrderedListItem>Meld uw voorgenomen huwelijk (minimaal 2 weken van te voren)</OrderedListItem>
                  <OrderedListItem>Wij bellen u om trouwdatum en -locatie in te plannen </OrderedListItem>
                  <OrderedListItem>Kies een trouwambtenaar</OrderedListItem>
                  <OrderedListItem>Kies de achternaam van uw kinderen</OrderedListItem>
                  <OrderedListItem>Optioneel: kies uw eigen achternaam</OrderedListItem>
                </OrderedList>
                <Paragraph>Hieronder beschrijven we stap voor stap wat u moet doen:</Paragraph>
                <Heading3>Stap 1: Regel getuigen</Heading3>
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
                <Heading3>Stap 2: Meld uw voorgenomen huwelijk</Heading3>
                <Paragraph>
                  U moet uw voorgenomen huwelijk melden bij de gemeente. Dat doet u met een online formulier op de
                  website van de gemeente.
                </Paragraph>
                <Link
                  className="utrecht-link utrecht-link--html-a utrecht-advanced-link utrecht-advanced-link--with-icon"
                  href="#"
                >
                  <UtrechtIconChevronRight />
                  Meld uw voorgenomen huwelijk
                </Link>
                <Heading3>Stap 3: Kies een trouwambtenaar</Heading3>
                <Paragraph>Kies een trouwambtenaar.</Paragraph>
                <Heading3>Stap 4: Kies een trouwambtenaar</Heading3>
                <Paragraph>Kies een trouwambtenaar.</Paragraph>
                <Heading3>Stap 5: (Optioneel:)kies uw eigen achternaam</Heading3>
                <Paragraph>Optioneel: kies uw eigen achternaam.</Paragraph>

                <Heading2>Soorten trouwen</Heading2>
                <Paragraph>Verschillen tussen soorten huwelijk. PLACEHOLDER TABEL</Paragraph>
                <Paragraph></Paragraph>
                <Heading3>Snel trouwen</Heading3>
                <Paragraph>
                  Een snelle manier om te trouwen. Ook wel bekend als het flitshuwelijk. Geen toespraak, wel het
                  uitwisselen van ringen, en foto&apos;s maken. Duurt maximaal 5 minuten.
                </Paragraph>
                <UnorderedList>
                  <UnorderedListItem>Geen toespraak </UnorderedListItem>
                  <UnorderedListItem>Duurt maximaal 5 minuten </UnorderedListItem>
                  <UnorderedListItem>Geen uitwisseling ringen of foto&apos;s maken </UnorderedListItem>
                  <UnorderedListItem>Wachtlijst: 3 maanden </UnorderedListItem>
                </UnorderedList>
                <br />
                <AccordionProvider
                  sections={[
                    {
                      body: 'Het kost 270,20 euro.',
                      expanded: undefined,
                      label: 'Kosten van snel trouwen',
                    },
                    {
                      body: 'U moet minimaal 2 weken van tevoren een afspraak maken. U heeft een geldig identiteitsbewijs nodig en u mag niet al getrouwd zijn. U kunt alleen op het stadhuis trouwen.',
                      expanded: undefined,
                      label: 'Regels rondom snel trouwen',
                    },
                  ]}
                />

                <Heading2>Eenvoudig trouwen</Heading2>
                <Paragraph>
                  Een simpele manier om te trouwen. Geen toespraak, geen ringen, geen foto&apos;s maken. Duurt maximaal
                  10 minuten.
                </Paragraph>
                <UnorderedList>
                  <UnorderedListItem>Geen toespraak </UnorderedListItem>
                  <UnorderedListItem>Duurt maximaal 10 minuten </UnorderedListItem>
                  <UnorderedListItem>Wel uitwisseling ringen of foto&apos;s maken </UnorderedListItem>
                  <UnorderedListItem>Wachtlijst: 3 maanden </UnorderedListItem>
                </UnorderedList>
                <AccordionProvider
                  sections={[
                    {
                      body: 'Het kost 310,30 euro.',
                      expanded: undefined,
                      label: 'Kosten van snel trouwen',
                    },
                    {
                      body: 'U moet minimaal 2 weken van tevoren een afspraak maken. U heeft een geldig identiteitsbewijs nodig en u mag niet al getrouwd zijn. U kunt alleen op het stadhuis trouwen.',
                      expanded: undefined,
                      label: 'Regels rondom snel trouwen',
                    },
                  ]}
                />
                <Heading2>Nuttig om te weten</Heading2>
                <Paragraph>
                  {' '}
                  Op de pagina van de Rijksoverheid staat{' '}
                  <Link href="https://www.rijksoverheid.nl/onderwerpen/trouwen-samenlevingscontract-en-geregistreerd-partnerschap/vraag-en-antwoord">
                    veel informatie over trouwen
                  </Link>
                  . Hier vindt u ook informatie over trouwen bij de Gemeente.
                </Paragraph>
                <Heading3>Buitenland</Heading3>
                <AccordionProvider
                  sections={[
                    {
                      body: 'Regels regels regels.',
                      expanded: undefined,
                      label: 'Trouwen met iemand die in het buitenland woont',
                    },
                    {
                      body: 'Regels regels regels.',
                      expanded: undefined,
                      label: 'Trouwen in het buitenland',
                    },
                  ]}
                />
                <Heading3>Verschillen</Heading3>
                <AccordionProvider
                  sections={[
                    {
                      body: 'Regels regels regels.',
                      expanded: undefined,
                      label: 'Wat is het verschil tussen trouwen en een geregistreerd partnerschap?',
                    },
                    {
                      body: 'Regels regels regels',
                      expanded: undefined,
                      label: 'Wat is het verschil tussen trouwen en een samenlevingscontract?',
                    },
                  ]}
                />
                <Heading3>Regels rondom Trouwen</Heading3>
                <AccordionProvider
                  sections={[
                    {
                      body: 'Regels regels regels.',
                      expanded: undefined,
                      label: 'Onder welke voorwaarden kan ik trouwen of een geregistreerd partnerschap sluiten?',
                    },
                    {
                      body: 'Regels regels regels',
                      expanded: undefined,
                      label: 'Waar heb ik recht op als ik trouw in gemeenschap van goederen?',
                    },
                    {
                      body: 'Regels regels regels',
                      expanded: undefined,
                      label: 'Wanneer is een Verklaring geen schijnhuwelijk nodig?',
                    },
                    {
                      body: 'Regels regels regels',
                      expanded: undefined,
                      label: 'Waar heb ik recht op als ik trouw in gemeenschap van goederen?',
                    },
                  ]}
                />
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
