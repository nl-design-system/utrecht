import {
  Heading1,
  Heading2,
  Paragraph,
  UnorderedList,
  UnorderedListItem,
} from '@utrecht/component-library-react/dist/css-module';
import React from 'react';
const ScenarioContactKTO: React.FC = () => {
  return (
    <>
      <Heading1>Het verhaal</Heading1>
      <Paragraph>
        Stel je voor: je woont in de buurt van de Amsterdamsestraatweg. Je hebt via de gemeente website gelezen dat er
        werkzaamheden plaatsvinden aan de Amsterdamsestraatweg tussen de Weerdsingel en de Marnixlaan. Deze
        werkzaamheden lopen van juli 2024 tot mei 2026. Nou, dat heb je gemerkt!
      </Paragraph>
      <Paragraph>
        De laatste weken heb je veel overlast gehad van de werkzaamheden. Het verkeer staat regelmatig vast, de
        aangegeven omleiding klopt niet met je navigatie, en door al het bouwverkeer is er veel geluidshinder - vooral
        &apos;s morgens vroeg en &apos;s avonds laat.
      </Paragraph>
      <Heading2>Instructie</Heading2>
      <Paragraph>
        Klik op de knop Start. Bekijk de informatie-pagina over de werkzaamheden op de Amsterdamsestraatweg. Daarna
        vertellen we je de volgende stap.
      </Paragraph>
    </>
  );
};

export default ScenarioContactKTO;
