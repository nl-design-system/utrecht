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
    // State om te bepalen welke HulpEnContact component getoond wordt
    const [showHulpEnContact2, setShowHulpEnContact2] = useState(false);

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
                <Link href="#">Bekijk de verschillen tussen huwelijk, partnerschap en samenlevingscontract</Link>
                <Paragraph>Lees meer over:</Paragraph>
                <UnorderedList>
                  <UnorderedListItem>
                    <Link href="#">geregistreerd partnerschap</Link>
                  </UnorderedListItem>
                  <UnorderedListItem>
                    <Link href="#">omzetten geregistreerd partnerschap in huwelijk</Link>
                  </UnorderedListItem>
                  <UnorderedListItem>
                    <Link href="#">Samenlevingscontract</Link>
                  </UnorderedListItem>
                </UnorderedList>

                <Heading2>Welke mogelijkheden zijn er?</Heading2>
                <AccordionProvider
                  sections={[
                    {
                      body: 'Lijn 3 rijdt vanaf donderdag 13 februari 2025 niet meer over de Amsterdamsestraatweg. Richting het centrum en Zuilen rijdt die via Royaards van den Hamkade. Hiervoor zijn tijdelijke bushaltes ter hoogte van Ondiep-Zuidzijde. U kunt ook via de haltes aan Oudenoord of Nijenoord met lijn 3 reizen.',
                      expanded: undefined,
                      label: 'Openbaar Vervoer',
                    },
                  ]}
                />
                <Heading2>Wat moet ik regelen?</Heading2>
                <Paragraph>
                  Hieronder leest u wat u moet regelen voor uw huwelijk of geregistreerd partnerschap.
                </Paragraph>
                <Heading3>Regelen</Heading3>
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
                <Heading3>Belangrijk</Heading3>
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
