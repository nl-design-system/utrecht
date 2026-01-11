import {
  Link,
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

const MogelijkhedenGratisContent = () => (
  <>
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
          <TableCell scope="row">Maandag</TableCell>
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
    <br />
    <br />
  </>
);

export default MogelijkhedenGratisContent;
