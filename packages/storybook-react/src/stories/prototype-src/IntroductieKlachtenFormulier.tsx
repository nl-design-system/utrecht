import {
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Link,
  LinkList,
  LinkListLink,
  PageFooter,
  Paragraph,
  Strong,
  UnorderedList,
  UnorderedListItem,
} from '@utrecht/component-library-react/dist/css-module';
import {
  UtrechtIconArrow,
  UtrechtIconFacebook,
  UtrechtIconInstagram,
  UtrechtIconLinkedin,
  UtrechtIconNieuwsbrief,
  UtrechtIconWhatsapp,
} from '@utrecht/web-component-library-react';
import React from 'react';
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
