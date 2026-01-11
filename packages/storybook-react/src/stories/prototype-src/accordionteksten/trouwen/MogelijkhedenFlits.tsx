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

const MogelijkhedenFlitshuwelijkContent = () => (
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
          <TableCell scope="row">Woensdag en vrijdag</TableCell>
          <TableCell>9.00 – 10.00 uur</TableCell>
          <TableCell>€ 270,20</TableCell>
        </TableRow>
      </TableBody>
    </Table>
    <UnorderedList>
      <UnorderedListItem>U trouwt aan de balie van het stadskantoor</UnorderedListItem>
      <UnorderedListItem>U betaalt bij de afspraak voor het huwelijk</UnorderedListItem>
      <UnorderedListItem>De trouwambtenaar houdt geen toespraak en heeft vooraf geen contact met u</UnorderedListItem>
      <UnorderedListItem>Een flitshuwelijk aan de balie duurt maximaal 5 minuten</UnorderedListItem>
      <UnorderedListItem>U bent welkom met alleen het bruidspaar en de getuigen</UnorderedListItem>
      <UnorderedListItem>
        U kunt aan de balie geen ringen uitwisselen of foto&apos;s maken (dit kunt u na de registratie samen wel ergens
        anders in de openbare ruimte van het stadskantoor doen)
      </UnorderedListItem>
      <UnorderedListItem>De wachtlijst voor een flitshuwelijk is ongeveer 3 maanden</UnorderedListItem>
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

export default MogelijkhedenFlitshuwelijkContent;
