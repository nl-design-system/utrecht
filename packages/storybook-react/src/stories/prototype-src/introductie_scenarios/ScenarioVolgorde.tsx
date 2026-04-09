import {
  Heading1,
  Heading2,
  Paragraph,
  UnorderedList,
  UnorderedListItem,
} from '@utrecht/component-library-react/dist/css-module';
import React from 'react';
const ScenarioVolgorde: React.FC = () => {
  return (
    <>
      <Heading1>Het verhaal</Heading1>
      <Paragraph>
        Stel: jij en je partner gaan binnenkort verhuizen met jullie twee kinderen van 4 en 8 jaar oud. Er komt veel op
        je af: werk, school regelen, opvang, dozen inpakken. Het voelt alsof alles tegelijk moet gebeuren. Jij bent
        degene die vooral de administratieve zaken regelt, zoals het doorgeven van de verhuizing.
      </Paragraph>
      <Paragraph>
        Jullie verhuizen van Den Haag naar de gemeente Utrecht en je wilt zeker weten dat alles goed geregistreerd
        wordt. Maar je twijfelt nog over hoe het precies werkt. Je bezoekt de pagina van de gemeente Utrecht om uit te
        zoeken wat je moet doen.
      </Paragraph>
      <Heading2>Instructie</Heading2>
      <Paragraph>
        Klik op de knop Start om naar de verhuizen pagina te gaan. Daarna vertellen we je de volgende stap.
      </Paragraph>
    </>
  );
};

export default ScenarioVolgorde;
