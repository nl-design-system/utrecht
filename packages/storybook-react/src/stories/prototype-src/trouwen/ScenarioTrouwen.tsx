import {
  Heading1,
  Heading2,
  Paragraph,
  UnorderedList,
  UnorderedListItem,
} from '@utrecht/component-library-react/dist/css-module';
import React from 'react';
const ScenarioTrouwen: React.FC = () => {
  return (
    <>
      <Heading2>Achtergrondinformatie</Heading2>
      <Paragraph>De interviewer vertelt je nu de achtergrond van de test.</Paragraph>
      <Heading2>Instructie</Heading2>
      <Paragraph>
        Klik op de knop Start. We laten je dan een pagina zien. Zoek op deze pagina de informatie die je nodig hebt als
        je gaat trouwen. Geef het aan zodra je er vertrouwen in hebt dat je de informatie gevonden hebt die je moet
        weten als je gaat trouwen.
      </Paragraph>
    </>
  );
};

export default ScenarioTrouwen;
