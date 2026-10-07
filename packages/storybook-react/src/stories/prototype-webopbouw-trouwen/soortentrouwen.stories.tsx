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
  Heading4,
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
                <Heading1>Mogelijkheden bij trouwen</Heading1>
                <Paragraph appearance="lead">
                  Wat zijn de mogelijkheden bij het trouwen in Utrecht? En wat zijn de verschillen? Hieronder vindt u
                  een overzicht van de verschillen bij trouwen en wat u daarvoor moet regelen.
                </Paragraph>
                <Link
                  className="utrecht-link utrecht-link--html-a utrecht-advanced-link utrecht-advanced-link--with-icon"
                  href="#verschillen"
                >
                  <UtrechtIconChevronRight />
                  Verschillen tussen trouwen met of zonder ceremonie
                </Link>
                <Link
                  className="utrecht-link utrecht-link--html-a utrecht-advanced-link utrecht-advanced-link--with-icon"
                  href="#zonder-ceremonie"
                >
                  <UtrechtIconChevronRight />
                  Alles over trouwen zonder ceremonie
                </Link>
                <Link
                  className="utrecht-link utrecht-link--html-a utrecht-advanced-link utrecht-advanced-link--with-icon"
                  href="#met-ceremonie"
                >
                  <UtrechtIconChevronRight />
                  Alles over trouwen met ceremonie
                </Link>
                <Heading2 id="verschillen">Verschillen tussen trouwen met of zonder ceremonie</Heading2>
                <Paragraph>
                  Bij ons kunt u trouwen met of zonder een ceremonie. De verschillen in tijdsduur en prijzen staan in de
                  tabel hieronder. Daarnaast zijn de belangrijkste verschillen:
                </Paragraph>
                <UnorderedList>
                  <UnorderedListItem>
                    trouwen zonder ceremonie: er is geen toespraak, de locatie is altijd op het stadskantoor
                  </UnorderedListItem>
                  <UnorderedListItem>
                    trouwen met ceremonie: er is een toespraak en u kiest zelf een trouwlocatie
                  </UnorderedListItem>
                </UnorderedList>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHeaderCell scope="col"></TableHeaderCell>
                      <TableHeaderCell scope="col">Wanneer</TableHeaderCell>
                      <TableHeaderCell scope="col">Hoe lang</TableHeaderCell>
                      <TableHeaderCell scope="col">Aantal aanwezigen</TableHeaderCell>
                      <TableHeaderCell scope="col">Gemiddelde wachttijd</TableHeaderCell>
                      <TableHeaderCell scope="col">Kosten</TableHeaderCell>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableHeaderCell scope="row">Zonder ceremonie - Eenvoudig</TableHeaderCell>
                      <TableCell>Ma 11.00 en 11.30 uur, di/wo/vr 10.00, 10.30, 11.00, 11.30 uur</TableCell>
                      <TableCell>10 minuten</TableCell>
                      <TableCell>10</TableCell>
                      <TableCell>4 maanden</TableCell>
                      <TableCell>€332,60</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableHeaderCell scope="row">Zonder ceremonie - Flits</TableHeaderCell>
                      <TableCell>Wo en vr 9.00 – 10.00 uur</TableCell>
                      <TableCell>5 minuten</TableCell>
                      <TableCell>6</TableCell>
                      <TableCell>4 maanden</TableCell>
                      <TableCell>€276,10</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableHeaderCell scope="row">Zonder ceremonie - Gratis</TableHeaderCell>
                      <TableCell>Ma 10.00, 10.30 uur</TableCell>
                      <TableCell>10 minuten</TableCell>
                      <TableCell>10</TableCell>
                      <TableCell>10 maanden</TableCell>
                      <TableCell>€0</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableHeaderCell scope="row">Met ceremonie</TableHeaderCell>
                      <TableCell></TableCell>
                      <TableCell>30-45 minuten</TableCell>
                      <TableCell>Afhankelijk van locatie</TableCell>
                      <TableCell>Afhankelijk van locatie</TableCell>
                      <TableCell>Vanaf €833,55</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
                <Heading2 id="zonder-ceremonie">Alles over trouwen zonder ceremonie</Heading2>
                <Paragraph>U kunt kiezen tussen eenvoudig, flits en gratis trouwen.</Paragraph>
                <Heading3>Eenvoudig trouwen</Heading3>
                <UnorderedList>
                  <UnorderedListItem>Kosten: €332,60, optioneel trouwboekje: €40,20</UnorderedListItem>
                  <UnorderedListItem>
                    Wanneer: maandag 11.00 uur en 11.30 uur en dinsdag, woensdag en vrijdag om 10.00 uur, 10.30 uur,
                    11.00 uur of 11.30 uur
                  </UnorderedListItem>
                  <UnorderedListItem>Waar: in de trouwzaal op de 6e verdieping van het stadskantoor</UnorderedListItem>
                  <UnorderedListItem>
                    Aantal gasten: maximaal 10 personen, dit is inclusief het bruidspaar, de getuigen en een fotograaf
                  </UnorderedListItem>
                  <UnorderedListItem>
                    Trouwambtenaar: houdt geen toespraak en heeft vooraf geen contact
                  </UnorderedListItem>
                  <UnorderedListItem>Hoe lang: maximaal 10 minuten</UnorderedListItem>
                  <UnorderedListItem>Wachttijd: 4 maanden</UnorderedListItem>
                  <UnorderedListItem>Foto&apos;s maken en ringen uitwisselen is mogelijk</UnorderedListItem>
                  <UnorderedListItem>
                    Hebben we de melding voorgenomen huwelijk goedgekeurd? Tijdens een belafspraak kunt u dan een
                    afspraak maken voor eenvoudig trouwen.
                  </UnorderedListItem>
                </UnorderedList>
                <Heading3>Flits trouwen</Heading3>
                <UnorderedList>
                  <UnorderedListItem>Kosten: €276,10, optioneel trouwboekje: €40,20</UnorderedListItem>
                  <UnorderedListItem>Wanneer: woensdag en vrijdag tussen 9.00 en 10.00 uur</UnorderedListItem>
                  <UnorderedListItem>Waar: aan de balie op het stadskantoor</UnorderedListItem>
                  <UnorderedListItem>Aantal gasten: uitsluitend bruidspaar en getuigen</UnorderedListItem>
                  <UnorderedListItem>
                    Trouwambtenaar: houdt geen toespraak en heeft vooraf geen contact
                  </UnorderedListItem>
                  <UnorderedListItem>Hoe lang: maximaal 5 minuten</UnorderedListItem>
                  <UnorderedListItem>Wachttijd: 4 maanden</UnorderedListItem>
                  <UnorderedListItem>Foto&apos;s maken en ringen uitwisselen niet mogelijk</UnorderedListItem>
                  <UnorderedListItem>
                    Hebben we de melding voorgenomen huwelijk goedgekeurd? Tijdens een belafspraak kunt u dan een
                    afspraak maken voor flits trouwen.
                  </UnorderedListItem>
                </UnorderedList>

                <Heading3>Gratis trouwen</Heading3>
                <UnorderedList>
                  <UnorderedListItem>Kosten: €0, optioneel trouwboekje: €40,20</UnorderedListItem>
                  <UnorderedListItem>Wanneer: maandagochtend om 10.00 uur of om 10.30 uur</UnorderedListItem>
                  <UnorderedListItem>Waar: in de trouwzaal op de 6e verdieping van het stadskantoor</UnorderedListItem>
                  <UnorderedListItem>
                    Aantal gasten: maximaal 10 personen, dit is inclusief het bruidspaar, de getuigen en een fotograaf
                  </UnorderedListItem>
                  <UnorderedListItem>
                    Trouwambtenaar: houdt geen toespraak en heeft vooraf geen contact
                  </UnorderedListItem>
                  <UnorderedListItem>Hoe lang: maximaal 10 minuten</UnorderedListItem>
                  <UnorderedListItem>Wachttijd: ongeveer 10 maanden</UnorderedListItem>
                  <UnorderedListItem>Foto&apos;s maken en ringen uitwisselen is mogelijk</UnorderedListItem>
                  <UnorderedListItem>
                    Hebben we de melding voorgenomen huwelijk goedgekeurd? Tijdens een belafspraak kunt u dan een
                    afspraak maken voor gratis trouwen.
                  </UnorderedListItem>
                </UnorderedList>
                <Heading2 id="met-ceremonie">Alles over trouwen met een ceremonie</Heading2>
                <Paragraph>
                  Trouwen met een ceremonie is trouwen op een locatie die u zelf kiest. De trouwambtenaar houdt een
                  persoonlijke toespraak.
                </Paragraph>
                <UnorderedList>
                  <UnorderedListItem>
                    Kosten: afhankelijk van dag en tijd, zie <Link href="#kosten-per-locatie">kosten per locatie</Link>.
                    Hier kunnen nog extra kosten bijkomen: voor eigen trouwambtenaar: €313,45, voor trouwboekje €40,20
                  </UnorderedListItem>
                  <UnorderedListItem>
                    Wanneer: weet u op welke dag, welke locatie en welke tijd u wilt trouwen? Maak hierover eerst
                    afspraken met de trouwlocatie zelf. Daarna maakt u een afspraak bij de gemeente. Dat kan telefonisch
                    op 14 030.
                  </UnorderedListItem>
                  <UnorderedListItem>
                    Waar: een van onze <Link href="#">vaste trouwlocaties</Link> of een locatie die u zelf kiest
                  </UnorderedListItem>
                  <UnorderedListItem>Aantal gasten: afhankelijk van de trouwlocatie</UnorderedListItem>
                  <UnorderedListItem>
                    Trouwambtenaar: u krijgt een Utrechtse trouwambtenaar of u kiest een{' '}
                    <Link href="#">eigen trouwambtenaar</Link>. De trouwambtenaar houdt wel een toespraak en heeft
                    vooraf contact.
                  </UnorderedListItem>
                  <UnorderedListItem>Hoe lang: maximaal 30-45 minuten</UnorderedListItem>
                  <UnorderedListItem>
                    Wachttijd: vraag de trouwdatum en trouwlocatie die u wilt zo snel mogelijk bij ons aan. Doe dit het
                    liefst minimaal 3 maanden voor de geplande trouwdatum. Zo voorkomt u dat wij u moeten teleurstellen
                    omdat op de door u gewenste datum al te druk is. In de populaire trouwmaanden mei/juni/september of
                    bij bijzondere data kunt u hiervoor beter nog een langere periode aanhouden. U kunt uiterlijk 18
                    maanden van tevoren de gewenste huwelijksdatum bij ons aanvragen.
                  </UnorderedListItem>
                  <UnorderedListItem>Wel uitwisseling ringen of foto&apos;s maken</UnorderedListItem>
                  <UnorderedListItem>Wel een toespraak</UnorderedListItem>
                  <UnorderedListItem>
                    Hebt u nog geen melding voorgenomen huwelijk gedaan? Neem ook dan telefonisch contact met ons op om
                    uw datum vast te leggen.
                  </UnorderedListItem>
                </UnorderedList>
                <Heading3 id="kosten-per-locatie">Kosten per locatie</Heading3>
                <Heading4>Stadhuis</Heading4>
                <Paragraph>Grote of kleine trouwzaal: zelfde kosten</Paragraph>
                <UnorderedList>
                  <UnorderedListItem>
                    Maandag tot en met vrijdag van 8.00 tot 18.00 uur: €1.066,25 (donderdag niet beschikbaar)
                  </UnorderedListItem>
                  <UnorderedListItem>
                    Maandag tot en met vrijdag na 18.00 uur en zaterdag en zondag: €1.588,80 (donderdag niet
                    beschikbaar)
                  </UnorderedListItem>
                  <UnorderedListItem>Feestdagen: €2.141,20</UnorderedListItem>
                </UnorderedList>
                <Heading4>Raadszaal Wijkservicecentrum Vleuten-De Meern</Heading4>
                <Paragraph>Tijdelijk niet beschikbaar</Paragraph>
                <Heading4>Andere vaste locaties die we goedgekeurd hebben</Heading4>
                <UnorderedList>
                  <UnorderedListItem>Maandag tot en met vrijdag van 8.00 tot 18.00 uur: €833,55</UnorderedListItem>
                  <UnorderedListItem>
                    Maandag tot en met vrijdag na 18.00 uur en op zaterdag, zondag en feestdagen: €1.132,20
                  </UnorderedListItem>
                </UnorderedList>
                <Paragraph>
                  Dit zijn de kosten voor de huwelijksvoltrekking bij een vaste locatie. De kosten voor het gebruik van
                  de locatie zelf horen hier niet bij. Dat betaalt u extra aan de beheerder van de locatie.
                </Paragraph>
                <Heading4>Locatie naar keuze</Heading4>
                <UnorderedList>
                  <UnorderedListItem>Maandag tot en met vrijdag van 8.00 tot 18.00 uur: €1.099,80</UnorderedListItem>
                  <UnorderedListItem>
                    Maandag tot en met vrijdag na 18.00 uur en op zaterdag, zondag en feestdagen: €1.561,40
                  </UnorderedListItem>
                </UnorderedList>
                <Paragraph>
                  Dit zijn de kosten voor de huwelijksvoltrekking in een locatie naar keuze. De kosten voor het gebruik
                  van de locatie zelf horen hier niet bij. Dat betaalt u aanvullend aan de beheerder van de locatie.
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
