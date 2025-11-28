import {
  Heading3,
  Link,
  Paragraph,
  Table,
  TableBody,
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
    <Paragraph>Locatie van de gemeente: stadhuis of wijkservicecentrum Vleuten-De Meern</Paragraph>
    <Heading3>Dagen, tijden en kosten</Heading3>
    <Table>
      <TableHeader>
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
  </>
);

export default MogelijkhedenCeremonieContent;
