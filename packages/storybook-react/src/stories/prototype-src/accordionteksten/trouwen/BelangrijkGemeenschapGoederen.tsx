import { Link, Paragraph } from '@utrecht/component-library-react/dist/css-module';
import React from 'react';

const BelangrijkGemeenschapGoederenContent = () => (
  <>
    <Paragraph>
      U trouwt standaard in beperkte gemeenschap van goederen. Wilt u dit aanpassen? Dan regelt u dit bij een notaris. U
      hoeft ons niet door te geven of u gaat trouwen in (beperkte) gemeenschap van goederen of onder huwelijkse
      voorwaarden.
    </Paragraph>
    <Paragraph>
      Meer informatie hierover staat op <Link href="https://www.rijksoverheid.nl/">rijksoverheid.nl</Link> en op{' '}
      <Link href="https://www.notaris.nl/">notaris.nl</Link>
    </Paragraph>
    <br />
  </>
);

export default BelangrijkGemeenschapGoederenContent;
