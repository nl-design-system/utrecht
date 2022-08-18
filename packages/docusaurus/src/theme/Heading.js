/**
 * @license EUPL-1.2
 * Copyright (c) 2022 Robbert Broersma
 */

import { Heading1, Heading2, Heading3, Heading4, Heading5, Heading6 } from '@utrecht/component-library-react';
import React from 'react';

export default function MDXHeading({ as, children }) {
  if (as === 'h1') {
    return <Heading1>{children}</Heading1>;
  } else if (as === 'h2') {
    return <Heading2>{children}</Heading2>;
  } else if (as === 'h3') {
    return <Heading3>{children}</Heading3>;
  } else if (as === 'h4') {
    return <Heading4>{children}</Heading4>;
  } else if (as === 'h5') {
    return <Heading5>{children}</Heading5>;
  } else {
    return <Heading6>{children}</Heading6>;
  }
}
