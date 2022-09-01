/**
 * @license EUPL-1.2
 * Copyright (c) 2022 Gemeente Utrecht
 * Copyright (c) 2022 Frameless B.V.
 */

import clsx from 'clsx';
import React from 'react';
import { ToptaskLink } from '../../toptask-link/css/story-template';

export const argTypes = {
  links: {
    description: 'Links',
    type: {
      name: 'array',
      required: true,
    },
  },
  grid: {
    type: 'boolean',
    description: 'Grid',
  },
};

export const defaultArgs = {
  links: [],
  grid: false,
};

export const exampleArgs = {
  links: [
    {
      href: '#',
      icon: 'utrecht-icon-rijbewijs',
      textContent: 'Paspoort of ID-kaart aanvragen',
    },
    {
      href: '#',
      icon: 'utrecht-icon-melding-klacht',
      textContent: 'Melding/klacht openbare ruimte doorgeven',
    },
    {
      href: '#',
      icon: 'utrecht-icon-verhuizen',
      textContent: 'Verhuizing doorgeven',
    },
    {
      href: '#',
      icon: 'utrecht-icon-werken',
      textContent: 'Werken bij de gemeente',
    },
    {
      href: '#',
      icon: 'utrecht-icon-nummerbord',
      textContent: 'Parkeren: kentekenwijziging doorgeven',
    },
    {
      href: '#',
      icon: 'utrecht-icon-afval-scheiden',
      textContent: 'Afval',
    },
  ],
};

export const ToptaskNav = ({ links = defaultArgs.links, grid = defaultArgs.grid }) => (
  <div className={clsx('utrecht-toptask-nav', grid && 'utrecht-toptask-nav--grid')}>{links.map(ToptaskLink)}</div>
);

export default ToptaskNav;
