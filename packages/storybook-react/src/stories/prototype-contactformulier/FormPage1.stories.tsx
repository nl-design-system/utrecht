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
  title: 'Prototypes/Contactformulier/Stap 1',
  id: 'contactformulier-stap-1',
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
                <Heading1>Amsterdamsestraatweg: opnieuw inrichten straat</Heading1>
                <Image
                  alt="Amsterdamsestraatweg tijdens herinrichting"
                  photo
                  src="images/prototype-contactformulier__amsterdamsestraatweg-headerimage.jpg"
                />

                <div className="utrecht-project-info-blocks">
                  <div className="utrecht-project-info-block">
                    <div className="utrecht-project-info-block__label">Fase project:</div>
                    <div className="utrecht-project-info-block__value">In uitvoering</div>
                  </div>
                  <div className="utrecht-project-info-block">
                    <div className="utrecht-project-info-block__label">Werkzaamheden klaar:</div>
                    <div className="utrecht-project-info-block__value">Voorjaar 2026</div>
                  </div>
                </div>

                <Paragraph appearance="lead">
                  We werken aan een andere inrichting van de Amsterdamsestraatweg tussen Weerdsingel en de Marnixlaan.
                  En we vervangen het riool. We willen de verkeersveiligheid verbeteren voor fiets en voetganger, en de
                  straat groener maken. Zo maken we een straat waar het prettig wonen, wandelen en winkelen is.
                </Paragraph>
                <Paragraph>
                  Het opnieuw inrichten van de Amsterdamsestraatweg hoort bij de{' '}
                  <Link href="#">aanpak Amsterdamsestraatweg</Link>.
                </Paragraph>
                <Heading2>Waar werken we op dit moment aan?</Heading2>
                <UnorderedList>
                  <UnorderedListItem>Nieuwe inrichting tussen Acaciastraat en Berkstraat</UnorderedListItem>
                  <UnorderedListItem>Nieuwe inrichting tussen Acaciastraat en Marnixlaan</UnorderedListItem>
                </UnorderedList>
                <Link
                  className="utrecht-link utrecht-link--html-a utrecht-advanced-link utrecht-advanced-link--with-icon"
                  href="#"
                >
                  <UtrechtIconChevronRight />
                  Lees en bekijk hoe we de Amsterdamsestraatweg opnieuw inrichten
                </Link>
                <Heading2>Omleidingen</Heading2>
                <Paragraph>
                  U kunt hieronder zien welke afsluitingen en omleidingen er op welk moment zijn. Woningen, winkels,
                  horeca en bedrijven blijven bereikbaar.
                </Paragraph>
                <br />
                <AccordionProvider
                  sections={[
                    {
                      body: 'Lijn 3 rijdt vanaf donderdag 13 februari 2025 niet meer over de Amsterdamsestraatweg. Richting het centrum en Zuilen rijdt die via Royaards van den Hamkade. Hiervoor zijn tijdelijke bushaltes ter hoogte van Ondiep-Zuidzijde. U kunt ook via de haltes aan Oudenoord of Nijenoord met lijn 3 reizen.',
                      expanded: undefined,
                      label: 'Openbaar Vervoer',
                    },
                  ]}
                />
                <Heading3>Situatie 4 en 7 juli en daarna</Heading3>
                <Paragraph>
                  Op vrijdag 4 juli en maandag 7 juli sluiten we de Amsterdamsestraatweg tussen Acacialaan en Marnixlaan
                  opnieuw af voor autoverkeer. We zetten dan daar de strepen en patronen op het asfalt. Zodra een stuk
                  weg klaar is gaat het weer open. Ook in het weekend van 5 en 6 juli is de Amsterdamsestraatweg open
                  voor autos in beide richtingen.
                </Paragraph>
                <Paragraph>
                  Op maandagavond 7 juli zijn we klaar met de werkzaamheden. Dan is de Amsterdamsestraatweg weer
                  helemaal open voor autoverkeer in 2 richtingen.
                </Paragraph>
                <Paragraph>Tot ongeveer half augustus werkt de aannemer dan nog aan wat kleine punten.</Paragraph>
                <Heading2>Kies bewust hoe u reist</Heading2>
                <Paragraph>
                  Reis des ochtends voor 7.30 uur of na 9.00 uur en des middags voor 16.00 uur en na 18.00 uur. Dan is
                  het minder druk op de weg én in het openbaar vervoer. Doet u werk waarbij u kunt thuiswerken? Soms een
                  dag thuiswerken helpt om de drukte op de weg te verminderen.
                </Paragraph>
                <Heading2>Wat komt er?</Heading2>
                <Paragraph>
                  Samen met bewoners en ondernemers werkten we aan een ontwerp voor de nieuwe inrichting. De straat
                  wordt veiliger, groener en mooier. Er is meer ruimte voor fietsers, voetgangers en terrassen. De
                  straat kan straks beter tegen grote wisselingen in het klimaat, zoals warme zomers en veel regen
                </Paragraph>
                <br />
                <AccordionProvider
                  sections={[
                    {
                      body: 'De straat wordt veiliger voor iedereen. Automobilisten, fietsers en voetgangers kunnen straks makkelijker en veiliger oversteken. Hiervoor nemen we verschillende maatregelen:',
                      expanded: undefined,
                      label: 'Makkelijk en veilig oversteken',
                    },
                    {
                      body: 'Het verkeer op straat gaat door verschillende maatregelen langzamer rijden. Ook wordt de straat meer overzichtelijk. Dit gaan we doen:',
                      expanded: undefined,
                      label: 'Langzamer rijden, beter zicht op zijstraten',
                    },
                    {
                      body: 'We maken de Amsterdamsestraatweg groener en gezonder. Er komt 5 keer zoveel groen als er nu is. Totaal komt er 2.500 m2 meer groen bij. Dit gaan we doen:',
                      expanded: undefined,
                      label: 'Meer groen',
                    },
                    {
                      body: 'We willen dat de Amsterdamsestraatweg een fijne plek is om te winkelen, wonen en wandelen. Zo krijgen fietsers en voetgangers meer ruimte:',
                      expanded: undefined,
                      label: 'Meer ruimte voor fietsers voetgangers en terrassen',
                    },
                    {
                      body: 'We zorgen dat fietsers, automobilisten, pakketbezorgers en leveranciers voor winkels genoeg ruimte hebben om te parkeren. We gaan slim om met de ruimte die we hebben. Zo doen we dat:',
                      expanded: undefined,
                      label: 'Slimmer parkeren',
                    },
                    {
                      body: 'We vernieuwen het riool. Er komt een rioolbuis voor vuil water en een rioolbuis voor regenwater.',
                      expanded: undefined,
                      label: 'Vervangen riool',
                    },
                  ]}
                />
                <Heading2>Hoe komt de straat eruit te zien?</Heading2>
                <Paragraph>
                  Hieronder krijgt u een beeld (impressie) hoe de Amsterdamsestraatweg eruit komt te zien na het opnieuw
                  inrichten.{' '}
                </Paragraph>
                <br />
                <Image
                  alt="Amsterdamsestraatweg na herinrichting"
                  photo
                  src="images/prototype-contactformulier__amsterdamsestraatweg.jpg"
                />
                <Heading2>Op de hoogte blijven</Heading2>
                <Paragraph>
                  Wilt u op de hoogte blijven van de ontwikkelingen op de Amsterdamsestraatweg? Meld u dan aan voor de
                  nieuwsbrief Utrecht en kies voor de wijk Noordwest.
                </Paragraph>
                <br />
                <ButtonLink appearance="primary-action-button" href={'#'}>
                  Meld u aan voor de nieuwsbrief Utrecht
                  <UtrechtIconArrow />
                </ButtonLink>
                <Heading3>Download de BouwApp</Heading3>
                <Paragraph>
                  Tijdens de werkzaamheden houden we u op de hoogte via de BouwApp. Hier vindt u informatie over het
                  werk en de omleidingen. U kunt ook vragen stellen. Download de app via de Apple Appstore of Android
                  Playstore. Voeg project Amsterdamsestraatweg Utrecht toe als favoriet. U kunt het project ook volgen
                  via de <Link href="#">website van de BouwApp</Link>.
                </Paragraph>
                <Heading2>Wat is er al gebeurd?</Heading2>
                <UnorderedList>
                  <UnorderedListItem>Januari - juni 2024: Voorbereiden werk</UnorderedListItem>
                  <UnorderedListItem>24 juni 2024: Start werkzaamheden</UnorderedListItem>
                  <UnorderedListItem>April 2024: bomen weghalen</UnorderedListItem>
                  <UnorderedListItem>Oktober - december 2023: kiezen aannemer voor het werk</UnorderedListItem>
                  <UnorderedListItem>Voorjaar 2023: definitief ontwerp klaar.</UnorderedListItem>
                  <UnorderedListItem>Januari 2023: voorlopig ontwerp vastgesteld</UnorderedListItem>
                  <UnorderedListItem>Najaar 2022: u kon reageren op voorlopig ontwerp</UnorderedListItem>
                  <UnorderedListItem>Voorjaar 2022: tijdelijke maatregelen klaar</UnorderedListItem>
                  <UnorderedListItem>
                    Voorjaar 2022: het plan met wensen en eisen en eerste ontwerp werd vastgesteld
                  </UnorderedListItem>
                  <UnorderedListItem>September 2021: u kon reageren op het eerste ontwerp</UnorderedListItem>
                </UnorderedList>
                <Heading2>Waar is het?</Heading2>
                <iframe
                  title="Een kaart die de ligging van dit project laat zien"
                  src="https://kaarten.utrecht.onatlas.nl/projecten?uid=22"
                  width="100%"
                  height="500"
                  frameBorder="0"
                  allowfullscreen=""
                  aria-hidden="false"
                  tabIndex="0"
                >
                  <a
                    href="https://kaarten.utrecht.onatlas.nl/projecten?uid=22"
                    title="Link naar een kaart die de ligging van dit project laat zien"
                  >
                    Bekijk de kaart
                  </a>
                </iframe>
                <br />
                <br />

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
