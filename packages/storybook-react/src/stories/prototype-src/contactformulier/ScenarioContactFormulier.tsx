import {
  Heading1,
  Heading2,
  Paragraph,
  UnorderedList,
  UnorderedListItem,
} from '@utrecht/component-library-react/dist/css-module';
import React from 'react';
const ScenarioContact: React.FC = () => {
  return (
    <>
      <Heading1>Het verhaal</Heading1>
      <Paragraph>
        Stel je voor: je woont in de buurt van de Amsterdamsestraatweg. Je hebt via de gemeente website gelezen dat er
        werkzaamheden plaatsvinden aan de Amsterdamsestraatweg tussen de Weerdsingel en de Marnixlaan. Deze
        werkzaamheden lopen van juli 2024 tot mei 2026. Nou, dat heb je gemerkt!
      </Paragraph>
      <Paragraph>
        De laatste weken heb je veel overlast ervaren van de werkzaamheden. Het verkeer staat regelmatig vast, de
        aangegeven omleiding lijkt niet goed te kloppen met je navigatie, en door al het bouwverkeer is er veel
        geluidshinder - vooral &apos;s morgens vroeg en &apos;s avonds laat.
      </Paragraph>
      <Paragraph>
        Je wilt graag meer duidelijkheid over:
        <UnorderedList>
          <UnorderedListItem>Hoe lang de overlast nog gaat duren</UnorderedListItem>
          <UnorderedListItem>Of er iets gedaan kan worden aan de geluidshinder in de avonduren</UnorderedListItem>
        </UnorderedList>
        Je hebt besloten om de gemeente te contacteren om deze vragen te stellen.
      </Paragraph>
      <Heading2>Instructie</Heading2>
      <Paragraph>
        Ga nu naar de informatie-pagina over de werkzaamheden op de Amsterdamsestraatweg en gebruik het contactformulier
        om je vragen in te dienen. Doe dit zoals je dat in het echte leven zou doen.
      </Paragraph>
    </>
  );
};

export default ScenarioContact;
