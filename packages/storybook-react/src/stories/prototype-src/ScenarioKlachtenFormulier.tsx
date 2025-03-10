import { Heading1, Paragraph } from '@utrecht/component-library-react/dist/css-module';
import React from 'react';
const ScenarioKlachten: React.FC = () => {
  return (
    <>
      <Heading1>Het verhaal</Heading1>
      <Paragraph>
        Vorige week woensdag ging je naar het stadskantoor. Je had om 10:15 een afspraak om je paspoort op te halen. Bij
        de balie ging er iets mis. De medewerker wist niet precies wat hij moest doen. Je vond dat lastig, want je had
        nog een andere afspraak na deze. Je moest op tijd weg.
      </Paragraph>
      <Paragraph>
        Je vertelde dat je haast had. Toen werd de man achter de balie ineens erg boos! Het leek zelfs of hij expres
        heel traag ging werken. Dat was niet fijn. Je kwam te laat bij je volgende afspraak. Ook was de boze reactie van
        de man veel te hevig.
      </Paragraph>
      <Paragraph>Je besluit een klacht in te dienen bij de gemeente.</Paragraph>
    </>
  );
};

export default ScenarioKlachten;
