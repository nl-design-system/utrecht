import {
  Link,
  Paragraph,
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

const RegelenTrouwambtenaarContent = () => (
  <>
    <Paragraph>
      Ongeveer een maand voor uw trouwdag neemt de trouwambtenaar contact met u op. Dit geldt voor huwelijken in het
      stadhuis en op andere locaties. Tijdens dit contact maakt de trouwambtenaar kennis met u en bespreekt hij of zij
      het huwelijk met u.
    </Paragraph>
    <Paragraph>
      Wilt u liever dat een trouwambtenaar uit een andere gemeente of een familielid of vriend(in) uw huwelijk voltrekt?
      Dat kan.{' '}
      <Link href="https://loket.digitaal.utrecht.nl/nl/producten/trouwambtenaar-voor-1-dag">
        Lees meer over het aanvragen van trouwambtenaar voor 1 dag.
      </Link>
    </Paragraph>

    <Table>
      <TableCaption>Kosten trouwambtenaar voor 1 dag</TableCaption>
      <TableHeader className="utrecht-table__header--sticky">
        <TableRow>
          <TableHeaderCell scope="col">Wat</TableHeaderCell>
          <TableHeaderCell scope="col">Kosten</TableHeaderCell>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell scope="row">Trouwambtenaar voor 1 dag</TableCell>
          <TableCell>€ 306,75</TableCell>
        </TableRow>
      </TableBody>
    </Table>
    <Paragraph></Paragraph>

    <UnorderedList>
      <UnorderedListItem>
        Toeslag eigen trouwambtenaar, dit is zonder kosten voor de documenten die nodig zijn en zonder de
        huwelijkskosten die u aan ons betaalt.
      </UnorderedListItem>
    </UnorderedList>
    <br />
  </>
);

export default RegelenTrouwambtenaarContent;
