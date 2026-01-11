import {
  Heading4,
  Link,
  Paragraph,
  Separator,
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHeader,
  TableHeaderCell,
  TableRow,
  UnorderedList,
  UnorderedListItem,
} from '@utrecht/component-library-react/dist/css-module';
import React from 'react';

const MogelijkhedenCeremonieContent = () => (
  <>
    <Heading4>Locatie van de gemeente: stadhuis of wijkservicecentrum Vleuten-De Meern</Heading4>
    <Table>
      <TableCaption>Dagen, tijden en kosten</TableCaption>
      <TableHeader className="utrecht-table__header--sticky">
        <TableRow>
          <TableHeaderCell scope="col">Dagen</TableHeaderCell>
          <TableHeaderCell scope="col">Tijden</TableHeaderCell>
          <TableHeaderCell scope="col">Kosten</TableHeaderCell>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell scope="row">Maandag – vrijdag</TableCell>
          <TableCell>8.00 – 18.00 uur</TableCell>
          <TableCell>€ 1.043,30</TableCell>
        </TableRow>
        <TableRow>
          <TableCell scope="row">Maandag – vrijdag</TableCell>
          <TableCell>na 18.00 uur</TableCell>
          <TableCell>€ 1.554,60</TableCell>
        </TableRow>
        <TableRow>
          <TableCell scope="row">Zaterdag en zondag</TableCell>
          <TableCell></TableCell>
          <TableCell>€ 1.554,60</TableCell>
        </TableRow>
        <TableRow>
          <TableCell scope="row">Feestdagen</TableCell>
          <TableCell></TableCell>
          <TableCell>€ 2.095,15</TableCell>
        </TableRow>
      </TableBody>
    </Table>
    <UnorderedList>
      <UnorderedListItem>U betaalt tijdens de vervolgafspraak</UnorderedListItem>
      <UnorderedListItem>U kunt kiezen uit verschillende zalen</UnorderedListItem>
    </UnorderedList>
    <br />
    <Link href="https://loket.digitaal.utrecht.nl/nl/products/trouwlocaties-in-utrecht">
      Lees meer over deze locatie en bekijk de foto
    </Link>
    <Separator />
    <Heading4>Andere locaties die door de gemeente zijn goedgekeurd</Heading4>
    <Table>
      <TableCaption>Dagen, tijden en kosten</TableCaption>

      <TableHeader className="utrecht-table__header--sticky">
        <TableRow>
          <TableHeaderCell scope="col">Dagen</TableHeaderCell>
          <TableHeaderCell scope="col">Tijden</TableHeaderCell>
          <TableHeaderCell scope="col">Kosten</TableHeaderCell>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell scope="row">Maandag – vrijdag</TableCell>
          <TableCell>8.00 – 18.00 uur</TableCell>
          <TableCell>€ 815,65</TableCell>
        </TableRow>
        <TableRow>
          <TableCell scope="row">Maandag – vrijdag</TableCell>
          <TableCell>na 18.00 uur</TableCell>
          <TableCell>€ 1.107,85</TableCell>
        </TableRow>
        <TableRow>
          <TableCell scope="row">Zaterdag, zondag en feestdagen</TableCell>
          <TableCell></TableCell>
          <TableCell>€ 1.107,85</TableCell>
        </TableRow>
      </TableBody>
    </Table>
    <UnorderedList>
      <UnorderedListItem>U betaalt tijdens de vervolgafspraak</UnorderedListItem>
      <UnorderedListItem>
        Informeer bij de trouwlocatie welke kosten u daar aanvullend moet betalen voor het gebruik ervan.
      </UnorderedListItem>
    </UnorderedList>
    <br />
    <Link href="https://loket.digitaal.utrecht.nl/nl/products/trouwlocaties-in-utrecht">
      Bekijk welke locaties dit zijn
    </Link>
    <Separator />

    <Heading4>Locatie die u zelf kiest</Heading4>
    <Paragraph>
      U kunt ook zelf een trouwlocatie kiezen en door ons laten goedkeuren. Dat zijn bijvoorbeeld het café om de hoek,
      uw eigen huiskamer of een feestzaal. U kunt niet iedere locatie kiezen. Een park, bos, boomgaard of een (varende)
      boot, zijn niet mogelijk als trouwlocatie. Ook moet de locatie in de gemeente Utrecht zijn.
    </Paragraph>
    <Table>
      <TableCaption>Dagen, tijden en kosten</TableCaption>

      <TableHeader className="utrecht-table__header--sticky">
        <TableRow>
          <TableHeaderCell scope="col">Dagen</TableHeaderCell>
          <TableHeaderCell scope="col">Tijden</TableHeaderCell>
          <TableHeaderCell scope="col">Kosten</TableHeaderCell>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell scope="row">Maandag – vrijdag</TableCell>
          <TableCell>8.00 – 18.00 uur</TableCell>
          <TableCell>€ 1.076,15</TableCell>
        </TableRow>
        <TableRow>
          <TableCell scope="row">Maandag – vrijdag</TableCell>
          <TableCell>na 18.00 uur</TableCell>
          <TableCell>€ 1.527,80</TableCell>
        </TableRow>
        <TableRow>
          <TableCell scope="row">Zaterdag, zondag en feestdagen</TableCell>
          <TableCell></TableCell>
          <TableCell>€ 1.527,80</TableCell>
        </TableRow>
      </TableBody>
    </Table>
    <UnorderedList>
      <UnorderedListItem>U betaalt tijdens de vervolgafspraak</UnorderedListItem>
      <UnorderedListItem>
        Informeer bij de trouwlocatie welke kosten u daar aanvullend moet betalen voor het gebruik ervan.
      </UnorderedListItem>
    </UnorderedList>
    <br />
    <Link href="https://loket.digitaal.utrecht.nl/nl/products/trouwlocaties-in-utrecht">
      Lees meer over trouwen op locatie naar keuze en vraag onze goedkeuring aan
    </Link>
    <br />
    <br />
  </>
);

export default MogelijkhedenCeremonieContent;
