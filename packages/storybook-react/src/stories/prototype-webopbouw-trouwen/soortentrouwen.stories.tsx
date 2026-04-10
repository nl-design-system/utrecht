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
  title: 'Prototypes/Trouwen/Pagina indeling/Soorten',
  id: 'trouwen-soorten-trouwen',
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
                <Heading1>Soorten trouwen</Heading1>
                <Paragraph appearance="lead">
                  Wat voor soorten trouwen zijn er? En wat zijn de verschillen? Hieronder vindt u een overzicht van de
                  verschillende soorten trouwen en wat u daarvoor moet regelen.
                </Paragraph>
                <Link
                  className="utrecht-link utrecht-link--html-a utrecht-advanced-link utrecht-advanced-link--with-icon"
                  href="#verschillen"
                >
                  <UtrechtIconChevronRight />
                  Verschillen tussen Eenvoudig en Ceremonieel trouwen
                </Link>
                <Link
                  className="utrecht-link utrecht-link--html-a utrecht-advanced-link utrecht-advanced-link--with-icon"
                  href="#eenvoudig"
                >
                  <UtrechtIconChevronRight />
                  Alles over Eenvoudig trouwen
                </Link>
                <Link
                  className="utrecht-link utrecht-link--html-a utrecht-advanced-link utrecht-advanced-link--with-icon"
                  href="#ceremonieel"
                >
                  <UtrechtIconChevronRight />
                  Alles over Ceremonieel trouwen
                </Link>
                <Heading2 id="verschillen">Verschillen tussen Eenvoudig en Ceremonieel trouwen</Heading2>
                <Paragraph>
                  Bj de gemeente Utrecht zijn er twee soorten van trouwen mogelijk: Eenvoudig trouwen en Ceremonieel
                  trouwen. De verschillen in tijdsduur en prijzen staan in de tabel hieronder. Daarnaast zijn de
                  belangrijkste verschillen:
                </Paragraph>
                <UnorderedList>
                  <UnorderedListItem>
                    Bij eenvoudig trouwen is er geen toespraak, de locatie is altijd op het Stadskantoor en de gemeente
                    kiest de trouwambtenaar.
                  </UnorderedListItem>
                  <UnorderedListItem>
                    Bij ceremonieel trouwen is er een toespraak, heeft u de keuze voor een trouwlocatie en kunt u zelf
                    een trouwambtenaar kiezen.
                  </UnorderedListItem>
                </UnorderedList>
                <Table>
                  <React.Fragment key=".0">
                    <TableHeader>
                      <TableRow>
                        <TableHeaderCell scope="col"></TableHeaderCell>
                        <TableHeaderCell scope="col">Tijdsduur </TableHeaderCell>
                        <TableHeaderCell scope="col">Ringen en/of Foto&apos;s?</TableHeaderCell>
                        <TableHeaderCell scope="col">Gemiddelde wachttijd</TableHeaderCell>
                        <TableHeaderCell scope="col">Kosten afnemen huwelijk</TableHeaderCell>
                      </TableRow>
                    </TableHeader>
                    <TableBody></TableBody>
                    <TableFooter>
                      <TableRow>
                        <TableCell>Eenvoudig trouwen - Standaard</TableCell>
                        <TableCell>10 minuten</TableCell>
                        <TableCell>Ja</TableCell>
                        <TableCell>3 maanden</TableCell>
                        <TableCell>€310,30</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Eenvoudig trouwen - Flits</TableCell>
                        <TableCell>5 minuten</TableCell>
                        <TableCell>Nee</TableCell>
                        <TableCell>3 maanden</TableCell>
                        <TableCell>€270,20</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Eenvoudig trouwen - Gratis</TableCell>
                        <TableCell>10 minuten</TableCell>
                        <TableCell>Ja</TableCell>
                        <TableCell>10 maanden</TableCell>
                        <TableCell>€0 </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Ceremonieel trouwen</TableCell>
                        <TableCell>60 minuten</TableCell>
                        <TableCell>Ja</TableCell>
                        <TableCell>Afhankelijk van locatie</TableCell>
                        <TableCell>€1.043,30 - €2.095,15</TableCell>
                      </TableRow>
                    </TableFooter>
                  </React.Fragment>
                </Table>
                <Heading2 id="eenvoudig">Alles over Eenvoudig trouwen</Heading2>
                Eenvoudig trouwen is trouwen op het stadskantoor, zonder toespraak en met een ambtenaar die de gemeente
                gekozen heeft. Er zijn drie soorten van Eenvoudig trouwen beschikbaar: Standaard, Flits en Gratis.
                <Heading3>Eenvoudig trouwen - Standaard</Heading3>
                <Paragraph>
                  Geen toespraak, wel ringen uitwisselen en foto&apos;s maken. Duurt maximaal 10 minuten.
                </Paragraph>
                <UnorderedList>
                  <UnorderedListItem>Geen toespraak </UnorderedListItem>
                  <UnorderedListItem>Locatie: Op het Stadskantoor </UnorderedListItem>
                  <UnorderedListItem>Trouwambtenaar: Aangewezen door de gemeente </UnorderedListItem>
                  <UnorderedListItem>Duurt maximaal 10 minuten </UnorderedListItem>
                  <UnorderedListItem>Wel uitwisseling ringen of foto&apos;s maken </UnorderedListItem>
                  <UnorderedListItem>Wachttijd: 3 maanden </UnorderedListItem>
                  <UnorderedListItem>Kosten: €310,30 </UnorderedListItem>
                </UnorderedList>
                <Heading3>Eenvoudig trouwen - Flits</Heading3>
                <Paragraph>
                  Een versie van standaard eenvoudig trouwen, korter en goedkoper dan het standaard eenvoudig trouwen.
                  Ook wel bekend als het flitshuwelijk. Geen toespraak, geen ringen uitwisselen en geen foto&apos;s
                  maken. Duurt maximaal 5 minuten.
                </Paragraph>
                <UnorderedList>
                  <UnorderedListItem>Geen toespraak </UnorderedListItem>
                  <UnorderedListItem>Locatie: Op het Stadskantoor </UnorderedListItem>
                  <UnorderedListItem>Trouwambtenaar: Aangewezen door de gemeente </UnorderedListItem>
                  <UnorderedListItem>Duurt maximaal 5 minuten </UnorderedListItem>
                  <UnorderedListItem>Geen uitwisseling ringen of foto&apos;s maken </UnorderedListItem>
                  <UnorderedListItem>Wachttijd: 3 maanden </UnorderedListItem>
                  <UnorderedListItem>Kosten: €270,20 </UnorderedListItem>
                </UnorderedList>
                <Heading3>Eenvoudig trouwen - Gratis</Heading3>
                <Paragraph>
                  Gratis versie van standaard trouwen, met een langere wachttijd. Geen toespraak, wel ringen uitwisselen
                  en foto&apos;s maken. Duurt maximaal 10 minuten.
                </Paragraph>
                <UnorderedList>
                  <UnorderedListItem>Geen toespraak </UnorderedListItem>
                  <UnorderedListItem>Locatie: Op het Stadskantoor </UnorderedListItem>
                  <UnorderedListItem>Trouwambtenaar: Aangewezen door de gemeente </UnorderedListItem>
                  <UnorderedListItem>Duurt maximaal 10 minuten </UnorderedListItem>
                  <UnorderedListItem>Wel uitwisseling ringen of foto&apos;s maken </UnorderedListItem>
                  <UnorderedListItem>Wachttijd: 10 maanden </UnorderedListItem>
                  <UnorderedListItem>Kosten: €0 </UnorderedListItem>
                </UnorderedList>
                <Heading2 id="ceremonieel">Alles over Ceremonieel trouwen</Heading2>
                <Paragraph>
                  Ceremonieel trouwen is trouwen op een locatie die u zelf uitkoest, met een toespraak en met een
                  ambtenaar die u zelf kiest.
                </Paragraph>
                <UnorderedList>
                  <UnorderedListItem>Wel een toespraak </UnorderedListItem>
                  <UnorderedListItem>Locatie: Vrije keuze </UnorderedListItem>
                  <UnorderedListItem>Trouwambtenaar: Vrije keuze </UnorderedListItem>
                  <UnorderedListItem>Duurt maximaal 60 minuten </UnorderedListItem>
                  <UnorderedListItem>Wel uitwisseling ringen of foto&apos;s maken </UnorderedListItem>
                  <UnorderedListItem>Wachttijd: Afhankelijk van de gekozen trouwlocatie </UnorderedListItem>
                  <UnorderedListItem>
                    Kosten: €1.043,30 - €2.095,15 afhankelijk van tijdstip. Hier komen waarschijnlijk nog extra kosten
                    bij, zie onder{' '}
                  </UnorderedListItem>
                </UnorderedList>
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
