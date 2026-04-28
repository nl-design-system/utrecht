import React from 'react';
import {
  Heading1,
  Paragraph,
  UnorderedList,
  UnorderedListItem,
} from '../../../../component-library-react/src/index.js';
const IntroductieKlachten: React.FC = () => {
  return (
    <>
      <Heading1>Test invullen klacht</Heading1>
      <Paragraph>
        Dank je wel dat je ons wilt helpen met het testen van het klachtenformulier! In deze test vragen we je een
        klacht in te voeren. Een paar belangrijke dingen voordat je begint:
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

export default IntroductieKlachten;
