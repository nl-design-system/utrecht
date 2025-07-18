import {
  Heading1,
  Paragraph,
  UnorderedList,
  UnorderedListItem,
} from '@utrecht/component-library-react/dist/css-module';
import React from 'react';
const IntroductieContact: React.FC = () => {
  return (
    <>
      <Heading1>Test invullen Contactformulier</Heading1>
      <Paragraph>
        Dank je wel dat je ons wilt helpen met het testen van het contactformulier! In deze test vragen we je een vraag
        te stellen aan de gemeente via de website. Een paar belangrijke dingen voordat je begint:
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

export default IntroductieContact;
