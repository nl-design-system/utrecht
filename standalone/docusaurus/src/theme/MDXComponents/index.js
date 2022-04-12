/**
 * @license EUPL-1.2
 * Copyright (c) 2022 Gemeente Utrecht
 */

import MDXA from '@theme/MDXComponents/A';
import MDXUl from '@theme/MDXComponents/Ul';
import { Heading1 } from '@utrecht/component-library-react/dist/Heading1';
import { Heading2 } from '@utrecht/component-library-react/dist/Heading2';
import { Heading3 } from '@utrecht/component-library-react/dist/Heading3';
import { Heading4 } from '@utrecht/component-library-react/dist/Heading4';
import { Heading5 } from '@utrecht/component-library-react/dist/Heading5';
import { Heading6 } from '@utrecht/component-library-react/dist/Heading6';
import { OrderedList } from '@utrecht/component-library-react/dist/OrderedList';
import { Paragraph } from '@utrecht/component-library-react/dist/Paragraph';
import { Separator } from '@utrecht/component-library-react/dist/Separator';
import { Table } from '@utrecht/component-library-react/dist/Table';
import { TableCell } from '@utrecht/component-library-react/dist/TableCell';
import { TableHeaderCell } from '@utrecht/component-library-react/dist/TableHeaderCell';
import { TableRow } from '@utrecht/component-library-react/dist/TableRow';

const MDXComponents = {
  a: MDXA,
  h1: Heading1,
  h2: Heading2,
  h3: Heading3,
  h4: Heading4,
  h5: Heading5,
  h6: Heading6,
  hr: Separator,
  ol: OrderedList,
  p: Paragraph,
  table: Table,
  td: TableCell,
  th: TableHeaderCell,
  tr: TableRow,
  ul: MDXUl,
  // Future options for customization include:
  // blockquote: ...,
  // code: ...,
  // details: ...,
  // em: ...,
  // head: ...,
  // img: ...,
  // li: ...,
  // pre: ...,
  // strong: ...,
};

export default MDXComponents;
