import {
  Heading3,
  Link,
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

const MogelijkhedenGratisContent = () => (
  <>
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
          <TableHeaderCell scope="row">Maandag</TableHeaderCell>
          <TableCell>10.00 of 10.30 uur</TableCell>
          <TableCell>Gratis</TableCell>
        </TableRow>
      </TableBody>
    </Table>
    <UnorderedList>
      <UnorderedListItem>Gratis trouwen gaat hetzelfde als eenvoudig trouwen, zie hierboven.</UnorderedListItem>
      <UnorderedListItem>De wachtlijst voor gratis trouwen is ongeveer 10 maanden.</UnorderedListItem>
    </UnorderedList>
    <br />
    <Link href="https://loket.digitaal.utrecht.nl/nl/products/trouwlocaties-in-utrecht">
      Lees meer over deze locatie en bekijk de foto
    </Link>
  </>
);

export default MogelijkhedenGratisContent;
