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
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHeader,
  TableHeaderCell,
  TableRow,
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
  title: 'Prototypes/Trouwen/Soorten',
  id: 'trouwen-soorten',
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
                <Heading1>Soorten trouwen</Heading1>
                <Paragraph appearance="lead">
                  Wat voor soorten trouwen zijn er? En wat zijn de verschillen? Hieronder vindt u een overzicht van de
                  verschillende soorten trouwen en wat u daarvoor moet regelen.
                </Paragraph>
                <Link
                  className="utrecht-link utrecht-link--html-a utrecht-advanced-link utrecht-advanced-link--with-icon"
                  href="#"
                >
                  <UtrechtIconChevronRight />
                  Overzicht van soorten
                </Link>
                <Link
                  className="utrecht-link utrecht-link--html-a utrecht-advanced-link utrecht-advanced-link--with-icon"
                  href="#"
                >
                  <UtrechtIconChevronRight />
                  Eenvoudig trouwen
                </Link>
                <Link
                  className="utrecht-link utrecht-link--html-a utrecht-advanced-link utrecht-advanced-link--with-icon"
                  href="#"
                >
                  <UtrechtIconChevronRight />
                  Ceremonieel trouwen
                </Link>
                <Heading2>Soorten trouwen</Heading2>
                <Paragraph>Verschillen tussen soorten huwelijk. PLACEHOLDER TABEL</Paragraph>
                <Heading3>Eenvoudig trouwen</Heading3>
                <Table>
                  <React.Fragment key=".0">
                    <TableHeader>
                      <TableRow>
                        <TableHeaderCell scope="col">Soort</TableHeaderCell>
                        <TableHeaderCell scope="col">Toespraak</TableHeaderCell>
                        <TableHeaderCell scope="col">Tijdsduur </TableHeaderCell>
                        <TableHeaderCell scope="col">Uitwisseling ringen of foto’s maken </TableHeaderCell>
                        <TableHeaderCell scope="col">Gemiddelde wachttijd</TableHeaderCell>
                        <TableHeaderCell scope="col">Keuze locatie</TableHeaderCell>
                        <TableHeaderCell scope="col">Keuze trouwambtenaar</TableHeaderCell>
                        <TableHeaderCell scope="col">Kosten afnemen huwelijk</TableHeaderCell>
                      </TableRow>
                    </TableHeader>
                    <TableBody></TableBody>
                    <TableFooter>
                      <TableRow>
                        <TableCell>Flitshuwelijk</TableCell>
                        <TableCell>More data</TableCell>
                        <TableCell>More data</TableCell>
                      </TableRow>
                    </TableFooter>
                  </React.Fragment>
                </Table>

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
                  Op de pagina van de Rijksoverheid staat
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
