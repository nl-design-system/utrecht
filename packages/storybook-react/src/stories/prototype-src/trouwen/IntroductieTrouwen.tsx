import {
  Heading1,
  Paragraph,
  UnorderedList,
  UnorderedListItem,
} from '@utrecht/component-library-react/dist/css-module';
import React from 'react';
const IntroductieTrouwen: React.FC = () => {
  return (
    <>
      <Heading1>Een vraag stellen aan de gemeente</Heading1>
      <Paragraph>
        Dank je wel dat je ons wilt helpen met onze test! In deze test vragen we je informatie op te zoeken op een
        pagina op onze website. Een paar belangrijke dingen voordat je begint:
      </Paragraph>
      <UnorderedList>
        <UnorderedListItem>Je kunt geen fouten maken. Wij testen onze website, niet jou.</UnorderedListItem>
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

export default IntroductieTrouwen;
