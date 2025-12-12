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

const MogelijkhedenEenvoudigContent = () => (
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
          <TableCell>11.00 – 11.30 uur</TableCell>
          <TableCell>€ 310,30</TableCell>
        </TableRow>
        <TableRow>
          <TableCell scope="row">Dinsdag, woensdag en vrijdag</TableCell>
          <TableCell>10.00, 10.30 of 11.30 uur</TableCell>
          <TableCell>€ 310,30</TableCell>
        </TableRow>
      </TableBody>
    </Table>
    <UnorderedList>
      <UnorderedListItem>U trouwt in de trouwzaal van het stadskantoor</UnorderedListItem>
      <UnorderedListItem>U betaalt na het maken van een afspraak voor een eenvoudig huwelijk</UnorderedListItem>
      <UnorderedListItem>De trouwambtenaar houdt geen toespraak en heeft vooraf geen contact met u</UnorderedListItem>
      <UnorderedListItem>Een eenvoudig huwelijk duurt maximaal 5-10 minuten</UnorderedListItem>
      <UnorderedListItem>
        U bent welkom met maximaal 10 personen, dit is inclusief het bruidspaar, de getuigen en een fotograaf.
      </UnorderedListItem>
      <UnorderedListItem>De wachtlijst voor eenvoudig trouwen is ongeveer 3 maanden</UnorderedListItem>
      <UnorderedListItem>
        Hebt u uw <Link href="#regelen">voorgenomen huwelijk al gemeld</Link> en is deze goedgekeurd? Dan kunt u pas een
        afspraak maken voor een flitshuwelijk.
      </UnorderedListItem>
    </UnorderedList>
    <br />
    <Link href="https://loket.digitaal.utrecht.nl/nl/products/trouwlocaties-in-utrecht">
      Lees meer over deze locatie en bekijk de foto
    </Link>
    <br />
    <br />
  </>
);

export default MogelijkhedenEenvoudigContent;
