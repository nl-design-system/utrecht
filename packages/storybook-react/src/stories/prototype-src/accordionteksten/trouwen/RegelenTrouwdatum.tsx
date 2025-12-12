import { Heading4, Link, Paragraph } from '@utrecht/component-library-react/dist/css-module';
import React from 'react';

const RegelenTrouwdatumContent = () => (
  <>
    <Paragraph>In Utrecht hebt u de keuze uit verschillende trouwlocaties.</Paragraph>
    <Heading4>Trouwen in stadskantoor</Heading4>
    <Paragraph>
      Wilt u in het stadskantoor trouwen en is uw melding van voorgenomen huwelijk goedgekeurd? Dan kunt u met ons een
      datum en tijd voor een huwelijk afspreken.
    </Paragraph>
    <Heading4>Trouwen in stadhuis</Heading4>
    <Paragraph>
      Wilt u in het stadhuis of wijkservicecentrum Vleuten-De Meern trouwen? Bel ons dan op via 14 030 om een datum en
      tijd vast te leggen.
    </Paragraph>
    <Heading4>Trouwen op een andere locatie die door de gemeente is goedgekeurd</Heading4>
    <Paragraph>
      Wilt u trouwen op een andere locatie die door ons is{' '}
      <Link href="https://loket.digitaal.utrecht.nl/nl/producten/trouwlocaties-in-utrecht">goedgekeurd?</Link> Bespreek
      met deze locatie uw gewenste trouwdatum en -tijd. Daarna kunt u een afspraak maken met ons. Dit kan telefonisch
      via 14 030.
    </Paragraph>
    <Heading4>Trouwen op een locatie die u zelf kiest</Heading4>
    <Paragraph>
      Wilt u trouwen op een locatie die uzelf kiest? Bespreek dit dan eerst met de trouwlocatie, samen met datum en
      tijd. Daarna vraagt u aan ons of u op die locatie mag trouwen. Deze aanvraag is minimaal 6 weken voor de
      trouwdatum bij ons binnen.
    </Paragraph>
    <Heading4>Plan uw trouwdatum en trouwlocatie op tijd</Heading4>
    <Paragraph>
      Gaat u trouwen? Leg uw trouwdatum en huwelijkslocatie dan op tijd vast. Doe dit het liefst minimaal 3 maanden van
      tevoren. Wilt u trouwen in mei, juni, september of op een bijzondere datum? Regel dit dan nog eerder, zodat u
      zeker weet dat uw gewenste datum en locatie beschikbaar zijn.
    </Paragraph>
    <Paragraph>U kunt uiterlijk 18 maanden van tevoren een afspraak met ons maken voor uw trouwdatum .</Paragraph>
    <br />
  </>
);

export default RegelenTrouwdatumContent;
