import React from 'react';
import {
  Heading1,
  Paragraph,
  UnorderedList,
  UnorderedListItem,
} from '../../../../../component-library-react/src/index.js';
const IntroductieVolgorde: React.FC = () => {
  return (
    <>
      <Heading1>Je verhuizing doorgeven aan de gemeente</Heading1>
      <Paragraph>
        Dank je wel dat je ons wilt helpen met onze test! In deze test vragen we je om je verhuizing door te geven aan
        de gemeente via de website. Een paar belangrijke dingen voordat je begint:
      </Paragraph>
      <UnorderedList>
        <UnorderedListItem>Je kunt geen fouten maken. Wij testen het product werkt, niet jou.</UnorderedListItem>
        <UnorderedListItem>
          Vertel hardop wat je doet. Zeg wat je ziet, wat je denkt en wat je wilt doen.
        </UnorderedListItem>
        <UnorderedListItem>
          Ik mag je niet helpen tijdens de test. We willen zien hoe jij het zelf doet.
        </UnorderedListItem>
      </UnorderedList>
    </>
  );
};

export default IntroductieVolgorde;
