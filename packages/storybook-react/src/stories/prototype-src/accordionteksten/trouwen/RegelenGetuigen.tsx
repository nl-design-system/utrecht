import { Link, Paragraph, UnorderedList, UnorderedListItem } from '@utrecht/component-library-react/dist/css-module';
import React from 'react';

const RegelenGetuigenContent = () => (
  <>
    <Paragraph>Om te kunnen trouwen hebt u getuigen nodig.</Paragraph>
    <UnorderedList>
      <UnorderedListItem>Vraag minimaal 2 en maximaal 4 getuigen</UnorderedListItem>
      <UnorderedListItem>Getuigen zijn op de dag van het huwelijk 18 jaar of ouder</UnorderedListItem>
      <UnorderedListItem>
        Getuigen hebben een{' '}
        <Link href="https://www.rijksoverheid.nl/onderwerpen/identificatieplicht/vraag-en-antwoord/met-welke-identiteitsbewijzen-kan-ik-mij-identificeren">
          geldig identiteitsbewijs
        </Link>
      </UnorderedListItem>
      <UnorderedListItem>Wij bieden geen ambtenaren als getuigen aan</UnorderedListItem>
    </UnorderedList>
    <Paragraph>U geeft in de melding voorgenomen huwelijk aan wie uw getuigen zijn.</Paragraph>
    <br />
  </>
);

export default RegelenGetuigenContent;
