/**
 * @license EUPL-1.2
 * Copyright (c) 2020-2022 Gemeente Utrecht
 * Copyright (c) 2020-2022 Frameless B.V.
 */

import parse from 'html-react-parser';
import React from 'react';

export const defaultArgs = { logo: 'digid', label: 'Inloggen', appearance: 'primary-action-button' };

export const argTypes = {
  logo: {
    name: 'logo',
    control: 'select',
    options: ['digid', 'eherkenning', 'eidas'],
    table: {
      category: 'DEMO',
      defaultValue: { summary: undefined },
    },
  },
  appearance: {
    name: 'appearance',
    control: 'select',
    options: ['primary-action-button', 'secondary-action-button', 'subtle-button'],
    table: {
      category: 'DEMO',
      defaultValue: { summary: undefined },
    },
  },
  label: {
    name: 'label',
    type: { name: 'string', required: false },
    table: {
      category: 'DEMO',
      defaultValue: { summary: '' },
    },
  },
};

export const LogoButton = ({ logo, label, appearance }) => {
  return (
    <utrecht-logo-button>
      {parse(`<utrecht-${logo}-logo></utrecht-${logo}-logo>`)}
      <utrecht-button appearance={appearance}>
        {label} <utrecht-icon-arrow></utrecht-icon-arrow>
      </utrecht-button>
    </utrecht-logo-button>
  );
};

export default LogoButton;
