/**
 * @license EUPL-1.2
 * Copyright (c) 2022 Gemeente Utrecht
 */

import Link from '@docusaurus/Link';
import clsx from 'clsx';
import React from 'react';

export default function MDXA(props) {
  // Naive implementation of checking for external links:
  const external = /^https?:/i.test(props.href);

  return <Link className={clsx('utrecht-link', external && 'utrecht-link--external')} {...props} />;
}
