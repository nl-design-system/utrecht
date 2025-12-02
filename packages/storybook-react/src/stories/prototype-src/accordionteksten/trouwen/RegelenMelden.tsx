import { Link, Paragraph, UnorderedList, UnorderedListItem } from '@utrecht/component-library-react/dist/css-module';
import React from 'react';

const RegelenMeldenContent = () => (
  <>
    <Paragraph>
      Meld uw voorgenomen huwelijk bij de gemeente waar u wilt trouwen. Volgens de wet zit er tussen de melding en de
      huwelijksdatum minimaal 14 dagen. Maar het is belangrijk dat u de melding veel eerder voor die 14 dagen doet.
      Alleen dan kunnen we alles op tijd voor uw huwelijk regelen. Wacht dus niet tot 2 weken voor uw trouwdag, maar
      neem eerder contact op met de gemeente.
    </Paragraph>
    <Paragraph>De melding is gratis en is maximaal 1 jaar geldig.</Paragraph>
    <br />
    <Link href="https://www.utrecht.nl/trouwenmeldenvoorgenomenhuwelijk">Meld uw voorgenomen huwelijk</Link>
    <br />
    <Paragraph>Vooraf over nadenken</Paragraph>
    <UnorderedList>
      <UnorderedListItem>
        Welke <Link href="https://www.utrecht.nl/naamgebruik">achternaam</Link> wilt u na het huwelijk gaan gebruiken?
      </UnorderedListItem>
      <UnorderedListItem>Wilt u een trouwboekje als aandenken aan uw huwelijk? Dit kost € 39,35</UnorderedListItem>
      <UnorderedListItem>
        Zorg ervoor dat u bij uw melding een kopie van het identiteitsbewijs van uw getuigen hebt
      </UnorderedListItem>
      <UnorderedListItem>
        Controleer of u de
        <Link href="https://loket.digitaal.utrecht.nl/nl/products/voorgenomen-huwelijk-of-geregistreerd-partnerschap-melden#verklaring-schijnhuwelijk-afleggen">
          verklaring schijnhuwelijk
        </Link>
        moet afleggen
      </UnorderedListItem>
      <UnorderedListItem>Woont een van u in het buitenland: bel ons via 14 030</UnorderedListItem>
      <UnorderedListItem>
        Woont u beiden in het buitenland: doe uw melding dan via gemeente Den Haag.
        <Link href="https://www.denhaag.nl/nl/trouwen-en-geregistreerd-partnerschap/huwelijk-en-partnerschap-voor-nederlanders-die-in-het-buitenland-wonen-melden/">
          Bekijk de voorwaarden en welke documenten u nodig hebt
        </Link>
      </UnorderedListItem>
    </UnorderedList>
    <br />
  </>
);

export default RegelenMeldenContent;
