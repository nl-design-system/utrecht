/**
 * @license EUPL-1.2
 * Copyright (c) 2020-2022 Gemeente Utrecht
 * Copyright (c) 2020-2022 Frameless B.V.
 */

import React from 'react';

export const argTypes = {
  json: {
    description: 'JSON',
    control: 'array',
  },
};

export const defaultArgs = {
  json: [],
};

export const exampleArgs = {
  json: [
    { href: '#', title: 'Home' },
    { href: '#', title: 'Wonen en leven' },
    { href: '#', title: 'Parken en groen' },
    {
      href: '#',
      title: 'Bomen',
      haschildren: true,
      children: [
        { href: '#', title: 'Bomennieuws' },
        { href: '#', title: 'Bomen planten en kappen', current: true },
        { href: '#', title: 'Bomenzorg en bomenbeleid' },
        { href: '#', title: 'Ziekten en plagen' },
        { href: '#', title: 'Overlast bomen' },
        { href: '#', title: 'Zorgvuldig met bomen omgaan' },
      ],
    },
    { href: '#', title: 'Parken en plantsoenen', sibling: true },
    { href: '#', title: 'Landgoederen Amelisweerd en Rhijnauwen', sibling: true },
    { href: '#', title: 'Begraafplaatsen', sibling: true },
    { href: '#', title: 'Volkstuinen en stadslandbouw', sibling: true },
    { href: '#', title: 'Dieren', sibling: true },
    { href: '#', title: 'Groenonderhoud', sibling: true },
    { href: '#', title: 'Zelfbeheer', sibling: true },
  ],
};

export const Sidenav = ({ json = defaultArgs.json }) => <utrecht-sidenav json={JSON.stringify(json)}></utrecht-sidenav>;

export default Sidenav;
