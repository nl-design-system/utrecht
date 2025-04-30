import {
  AccordionProvider,
  ButtonGroup,
  ButtonLink,
  Heading1,
  Heading2,
  Heading3,
  Link,
  Paragraph,
  UnorderedList,
  UnorderedListItem,
} from '@utrecht/component-library-react/dist/css-module';
import { UtrechtIconArrow, UtrechtIconChevronRight } from '@utrecht/web-component-library-react';
import React from 'react';
import urls from './variables.js';
const ContentWebpage: React.FC = () => {
  return (
    <>
      <Heading1>Paspoort en identiteitskaart aanvragen</Heading1>
      <Paragraph appearance="lead">
        Maak een afspraak om een paspoort of identiteitskaart (ID-kaart) aan te vragen.
      </Paragraph>

      <Paragraph>
        U kunt tegelijk een paspoort en een ID-kaart hebben. Met een paspoort kunt u naar alle landen reizen. Een
        ID-kaart is goedkoper, maar u kunt hiermee niet naar alle landen reizen.
      </Paragraph>
      <Link
        className="utrecht-link utrecht-link--html-a utrecht-advanced-link utrecht-advanced-link--with-icon"
        href="#"
      >
        <UtrechtIconChevronRight />
        Bekijk de verschillen tussen een paspoort en een identiteitskaart
      </Link>
      <Heading2>Voorwaarden</Heading2>
      <UnorderedList>
        <UnorderedListItem>U hebt de Nederlandse nationaliteit. </UnorderedListItem>
        <UnorderedListItem>U staat ingeschreven in de gemeente Utrecht.</UnorderedListItem>
      </UnorderedList>

      <Heading2>Wat hebt u nodig?</Heading2>
      <Paragraph>Dit neemt u mee naar de afspraak:</Paragraph>
      <UnorderedList>
        <UnorderedListItem>
          Alle <Link href="#">reisdocumenten</Link> (paspoort en ID-kaart) die u nu hebt, ook als ze zijn verlopen.
        </UnorderedListItem>
        <UnorderedListItem>
          Een kleurenpasfoto die voldoet aan de <Link href="#">eisen voor pasfoto’s</Link>. De goedgelijkende pasfoto
          mag maximaal 6 maanden oud zijn op het moment van de aanvraag.
        </UnorderedListItem>
        <UnorderedListItem>
          Een bankpas of contant geld. U betaalt direct bij de aanvraag aan de balie.
        </UnorderedListItem>
      </UnorderedList>

      <Heading3>Kinderen</Heading3>
      <UnorderedList>
        <UnorderedListItem>
          Kinderen jonger dan 12 jaar hebben toestemming nodig bij de aanvraag van een ID-kaart.
        </UnorderedListItem>
        <UnorderedListItem>
          Kinderen jonger dan 18 jaar hebben toestemming nodig bij de aanvraag van een paspoort.
        </UnorderedListItem>
        <UnorderedListItem>Uw kind komt zelf mee naar de afspraak voor het aanvragen en ophalen.</UnorderedListItem>
      </UnorderedList>

      <Paragraph>
        Meer informatie vindt u onder het kopje <Link href="#">Toestemming van ouder(s) of gezaghebber(s)</Link>.
      </Paragraph>

      <Heading2>Afspraak maken</Heading2>
      <Paragraph>
        Maak een afspraak voor het aanvragen van een paspoort of ID-kaart. U kunt uw paspoort of ID-kaart 6 werkdagen na
        na de aanvraag ophalen. Ook hiervoor maakt u een afspraak. U kunt het document ook laten bezorgen.
      </Paragraph>

      <Link
        className="utrecht-link utrecht-link--html-a utrecht-advanced-link utrecht-advanced-link--with-icon"
        href="#"
      >
        <UtrechtIconChevronRight />
        Bekijk video met eenvoudige uitleg over het aanvragen van een paspoort
      </Link>
      <Heading3>Aanvragen</Heading3>

      <ButtonGroup direction="row">
        <ButtonLink appearance="primary-action-button" href="#">
          Vraag paspoort aan
          <UtrechtIconArrow />
        </ButtonLink>

        <ButtonLink appearance="primary-action-button" href="#">
          Vraag ID-kaart aan
          <UtrechtIconArrow />
        </ButtonLink>
      </ButtonGroup>

      <Paragraph>
        Bent u 12 jaar of ouder? Dan neemt de medewerker bij de aanvraag 2 vingerafdrukken van u af voor in uw paspoort
        of ID-kaart.
      </Paragraph>

      <Heading3>Ophalen</Heading3>

      <Paragraph>
        Maak een afspraak voor het ophalen van uw paspoort of ID-kaart. U kunt uw document 6 werkdagen na de aanvraag
        ophalen.
        <br />
        <br />
        Bijvoorbeeld: u vraagt het document op maandag aan. U kunt het dan de week erna vanaf dinsdag ophalen.
      </Paragraph>

      <UnorderedList>
        <UnorderedListItem>Haal het document op dezelfde plek op waar u de aanvraag deed.</UnorderedListItem>
        <UnorderedListItem>Haal het document altijd persoonlijk op.</UnorderedListItem>
        <UnorderedListItem>
          Haal het document binnen 3 maanden na de aanvraag op. Daarna vernietigen we het document.
        </UnorderedListItem>
        <UnorderedListItem>
          Is uw kind jonger dan 12 jaar? Lees dan deze informatie over het ophalen van een reisdocument.
        </UnorderedListItem>
      </UnorderedList>

      <ButtonGroup direction="row">
        <ButtonLink appearance="primary-action-button" href="#">
          Haal paspoort op
          <UtrechtIconArrow />
        </ButtonLink>

        <ButtonLink appearance="primary-action-button" href="#">
          Haal ID-kaart op
          <UtrechtIconArrow />
        </ButtonLink>
      </ButtonGroup>

      <Heading3>Laten bezorgen</Heading3>
      <Paragraph>
        U kunt uw paspoort of ID-kaart ook laten bezorgen. Dit kost € 18,65. Geef dit aan tijdens uw aanvraag aan de
        balie.
      </Paragraph>

      <AccordionProvider
        appearance="default"
        sections={[
          {
            body: (
              <div className="utrecht-html">
                <ul>
                  <li>
                    We kunnen uw paspoort of ID-kaart bezorgen op een adres in Nederland (thuis, werkplek of een ander
                    adres).
                  </li>
                  <li>We bezorgen niet op de Waddeneilanden.</li>
                  <li>U betaalt € 18,65 per huishouden.</li>
                  <li>Bezorgen kan niet bij een spoedaanvraag.</li>
                </ul>
                <p>Zo werkt het:</p>
                <ol>
                  <li>
                    Tijdens de aanvraag aan de balie geeft u aan dat u kiest voor het bezorgen van uw paspoort of
                    ID-kaart.
                  </li>
                  <li>
                    Binnen 5 werkdagen na de aanvraag krijgt u een e-mail of sms van onze bezorgpartij AMP Groep om een
                    bezorgafspraak te maken.
                  </li>
                  <li>U kiest de datum, tijd en plaats van de bezorging. Bezorgen kan ook ’s avonds of op zaterdag.</li>
                  <li>
                    U bent zelf aanwezig bij de bezorging. Hebt u voor meerdere personen een paspoort of ID-kaart
                    aangevraagd? Dan moeten zij ook zelf aanwezig zijn. Voor kinderen jonger dan 12 jaar geldt dat er
                    altijd een volwassene bij moet zijn.
                  </li>
                </ol>
              </div>
            ),
            expanded: undefined,
            label: 'Zo werkt het bozorgen van uw paspoort of ID-kaart',
          },
        ]}
      />

      <Heading2>Kosten</Heading2>
      <div className="utrecht-html">
        <table summary="Kosten paspoort en ID-kaart">
          <caption>Kosten paspoort en ID-kaart</caption>
          <thead>
            <tr>
              <th scope="col">Soort product</th>
              <th scope="col" className="numeric">
                Kosten
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Paspoort tot 18 jaar</td>
              <td className="numeric">€ 65,70</td>
            </tr>
            <tr>
              <td>Paspoort vanaf 18 jaar</td>
              <td className="numeric">€ 86,85</td>
            </tr>
            <tr>
              <td>ID-kaart tot 18 jaar</td>
              <td className="numeric">€ 42,35</td>
            </tr>
            <tr>
              <td>ID-kaart vanaf 18 jaar</td>
              <td className="numeric">€ 78,50</td>
            </tr>
          </tbody>
        </table>
      </div>

      <Heading2>Toestemming van ouder(s) of gezaghebber(s)</Heading2>
      <UnorderedList>
        <UnorderedListItem>
          Kinderen jonger dan 12 jaar hebben toestemming nodig bij de aanvraag van een ID-kaart.
        </UnorderedListItem>
        <UnorderedListItem>
          Kinderen jonger dan 18 jaar hebben toestemming nodig bij de aanvraag van een paspoort.
        </UnorderedListItem>
      </UnorderedList>

      <Paragraph>Voor een minderjarige is een paspoort of ID-kaart 5 jaar geldig.</Paragraph>

      <Heading3>Aanvragen (kind jonger dan 12 jaar)</Heading3>
      <Paragraph>
        Maak een afspraak. Uw kind komt zelf mee naar de afspraak voor het aanvragen en ophalen. Lees hieronder hoe u
        toestemming geeft en wat u nodig hebt.
      </Paragraph>

      <AccordionProvider
        appearance="default"
        sections={[
          {
            body: (
              <div className="utrecht-html">
                <ul>
                  <li>Neem uw identiteitsbewijs mee.</li>
                  <li>U geeft uw schriftelijke toestemming aan de balie.</li>
                </ul>
              </div>
            ),
            expandedAccordion: false,
            label: 'Hebt u (beiden) het gezag? Komt u (samen) mee naar de afspraak?',
          },
          {
            body: (
              <div className="utrecht-html">
                <p>De ouder die niet meekomt naar de afspraak geeft online toestemming. Hiervoor is DigiD nodig.</p>

                <Link href="#">Vul het toestemmingsformulier in</Link>

                <p>
                  Hebt u geen DigiD? Dan kunt u toestemming geven via het{' '}
                  <Link href="#">toestemmingsformulier (pdf, 66 kB)</Link>. Ingevuld, uitgeprint en ondertekend? Geef
                  het formulier mee aan de ouder die meekomt naar de afspraak.
                  <br />
                  <br />
                  Voor de ouder die meekomt naar de afspraak:
                </p>

                <ul>
                  <li>Neem uw identiteitsbewijs mee.</li>
                  <li>U geeft uw schriftelijke toestemming aan de balie.</li>
                </ul>
                <p>De toestemmingsverklaring is 3 maanden geldig.</p>
              </div>
            ),
            expandedAccordion: false,
            label: 'Hebt u beiden het gezag? Komt er 1 ouder mee naar de afspraak?',
          },
          {
            body: (
              <div className="utrecht-html">
                <p>
                  Vul dan beiden de digitale toestemmingsverklaring in. Wij ontvangen dan 2 verklaringen. U hebt
                  hiervoor DigiD nodig.
                </p>

                <Link href="#">Vul het toestemmingsformulier in</Link>

                <p>
                  Hebt u geen DigiD? Dan kunt u toestemming geven via het{' '}
                  <Link href="#">toestemmingsformulier (pdf, 66 kB)</Link>. Vul het samen in. Ingevuld, uitgeprint en
                  ondertekend? Uw kind neemt het formulier mee naar de afspraak samen met uw identiteitsbewijzen of een
                  kopie daarvan.
                  <br />
                  <br />
                  De toestemmingsverklaring is 3 maanden geldig.
                </p>
              </div>
            ),
            expandedAccordion: false,
            label: 'Komt uw kind alleen naar de afspraak? En hebt u beiden het gezag?',
          },
          {
            body: (
              <div className="utrecht-html">
                Geef online toestemming. U hebt hiervoor DigiD nodig.
                <Link href="#">Vul het toestemmingsformulier in</Link>
                <p>
                  Hebt u geen DigiD? Dan kunt u toestemming geven via het toestemmingsformulier (pdf, 66 kB). Ingevuld,
                  uitgeprint en ondertekend? Uw kind neemt het formulier mee naar de afspraak samen met uw
                  identiteitsbewijs of een kopie daarvan.
                  <br />
                  <br />
                  De toestemmingsverklaring is 3 maanden geldig.
                </p>
              </div>
            ),
            expandedAccordion: false,
            label: 'Komt uw kind alleen naar de afspraak? En hebt u als enige het gezag?',
          },
        ]}
      />
      <Heading3>Ophalen (kind jonger dan 12 jaar)</Heading3>
      <Paragraph>
        Maak een afspraak. Uw kind komt naar de balie voor het ophalen. Is uw kind jonger dan 12 jaar? Dan komt er ook
        een volwassene mee die zichzelf kan identificeren. Kinderen vanaf 12 jaar kunnen zelf hun paspoort of ID-kaart
        ophalen.
      </Paragraph>
      <Heading2>Paspoort of ID-kaart kwijt of gestolen</Heading2>
      <Paragraph>
        Bent u uw paspoort of ID-kaart kwijt? Of is uw paspoort of ID-kaart gestolen? Geef dit dan zo snel mogelijk
        door. Dit is belangrijk om misbruik ervan te voorkomen.
      </Paragraph>

      <Link
        className="utrecht-link utrecht-link--html-a utrecht-advanced-link utrecht-advanced-link--with-icon"
        href="#"
      >
        <UtrechtIconChevronRight />
        Geef door dat uw paspoort of ID-kaart kwijt of gestolen is
      </Link>

      <Heading2>Spoedaanvraag</Heading2>
      <Paragraph>Hebt u met spoed een paspoort of ID-kaart nodig?</Paragraph>

      <Link
        className="utrecht-link utrecht-link--html-a utrecht-advanced-link utrecht-advanced-link--with-icon"
        href="#"
      >
        <UtrechtIconChevronRight />
        Maak een afspraak
      </Link>
      <Paragraph>Lukt het niet om op tijd online een afspraak te maken? Bel dan naar 14 030.</Paragraph>

      <Heading3>Ophalen</Heading3>
      <Paragraph>Maak een afspraak voor het ophalen van uw paspoort of ID-kaart.</Paragraph>

      <UnorderedList>
        <UnorderedListItem>
          Doet u uw aanvraag op een werkdag voor 14.00 uur? U kunt uw paspoort of ID-kaart de werkdag na uw aanvraag
          ophalen vanaf 12.00 uur.
        </UnorderedListItem>
        <UnorderedListItem>
          Doet u uw aanvraag op een werkdag na 14.00 uur? U kunt uw paspoort of ID-kaart 2 werkdagen na uw aanvraag
          ophalen vanaf 12.00 uur.
        </UnorderedListItem>
      </UnorderedList>
      <Heading3>Kosten</Heading3>
      <Paragraph>Per paspoort of ID-kaart betaalt u € 59,10 extra voor een spoedaanvraag.</Paragraph>
      <Heading2>Andere paspoorten</Heading2>
      <AccordionProvider
        appearance="default"
        sections={[
          {
            body: (
              <div className="utrecht-html">
                <p>
                  Is het voor de start van uw reis niet mogelijk om op tijd een nieuw reisdocument aan te vragen? Dan
                  kunt u een noodpaspoort aanvragen. Dat doet u bij de Koninklijke Marechaussee.
                  <br />
                  <br />
                  <Link href="">Lees meer over noodpaspoort aanvragen bij de Koninklijke Marechaussee</Link>
                </p>
              </div>
            ),
            expandedAccordion: false,
            label: 'Noodpaspoort',
          },
          {
            body: (
              <div className="utrecht-html">
                <p>
                  Reist u veel? Dan kunt u een zakenpaspoort aanvragen. Een zakenpaspoort is eigenlijk een gewoon
                  paspoort, maar heeft extra bladzijden (66 in plaats van 34 pagina’s). Zo is er meer ruimte voor visa
                  en douanestempels. Als u een zakenpaspoort aanvraagt, kunt u niet ook nog een normaal paspoort
                  aanvragen. Een zakenpaspoort kost net zoveel als een normaal paspoort.
                </p>
              </div>
            ),
            expandedAccordion: false,
            label: 'Zakenpaspoort',
          },
          {
            body: (
              <div className="utrecht-html">
                <p>
                  U kunt een tweede paspoort hebben naast uw normale paspoort. Bijvoorbeeld als uw paspoort bij een
                  buitenlands consulaat ligt voor een visumaanvraag terwijl u op hetzelfde moment moet reizen. U kunt
                  dan reizen met uw andere paspoort. De voorwaarden voor aanvraag van een tweede paspoort zijn wel
                  strenger. Voor een tweede paspoort gelden dezelfde prijzen als voor een eerste paspoort.
                  <br />
                  <br />
                  <Link>Bekijk de voorwaarden voor een tweede paspoort op Rijksoverheid.nl</Link>
                </p>
              </div>
            ),
            expandedAccordion: false,
            label: 'Tweede paspoort',
          },
          {
            body: (
              <div className="utrecht-html">
                <p>Voor informatie kunt u contact opnemen via telefoonnummer 14 030.</p>
              </div>
            ),
            expandedAccordion: false,
            label: 'Vluchtelingenpaspoort of vreemdelingenpaspoort',
          },
        ]}
      />
      <Heading2>Meer informatie</Heading2>
      <UnorderedList>
        <UnorderedListItem>
          <Link href="#">Reizen met kinderen</Link>
        </UnorderedListItem>
        <UnorderedListItem>
          <Link href="#">Achternaam van uw partner op uw reisdocument</Link>
        </UnorderedListItem>
        <UnorderedListItem>
          <Link href="#">Geldigheid paspoort en ID-kaart</Link>
        </UnorderedListItem>
        <UnorderedListItem>
          <Link href="#">Identiteitsfraude voorkomen en melden</Link>
        </UnorderedListItem>
        <UnorderedListItem>
          <Link href="#">Vingerafdrukken afnemen voor uw paspoort of ID-kaart</Link>
        </UnorderedListItem>
      </UnorderedList>
    </>
  );
};

export default ContentWebpage;
