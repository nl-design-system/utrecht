/**
 * @license EUPL-1.2
 * Copyright (c) 2022 Gemeente Utrecht
 */

import MDXA from '@theme/MDXComponents/A';
import MDXUl from '@theme/MDXComponents/Ul';
import {
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Heading5,
  Heading6,
  OrderedList,
  Paragraph,
  Separator,
  Table,
  TableCell,
  TableHeaderCell,
  TableRow,
} from '@utrecht/component-library-react';
import React from 'react';

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
  img: ({ ...restProps }) => <img className="utrecht-img utrecht-img--fit" {...restProps} />,
  // li: ...,
  // pre: ...,
  // strong: ...,
};

export default MDXComponents;
