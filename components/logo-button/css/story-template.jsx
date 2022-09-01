/**
 * @license EUPL-1.2
 * Copyright (c) 2020-2022 Gemeente Utrecht
 * Copyright (c) 2020-2022 Frameless B.V.
 */

import parse from 'html-react-parser';
import React from 'react';

export const argTypes = {
  label: {
    description: 'Button label',
    control: 'text',
  },
  textContent: {
    description: 'Button text',
    control: 'text',
  },
  logo: {
    description: 'Type logo',
    control: { type: 'select' },
    options: { DigiD: 'digid', eIDAS: 'eidas', eHerkenning: 'eherkenning' },
  },
};

export const defaultArgs = {
  label: '',
  textContent: '',
  logo: '',
};

export const exampleArgs = {
  label: 'Log in using DigiD',
  textContent: 'Log in',
  logo: 'digid',
};

export const LogoButton = ({
  label = defaultArgs.label,
  textContent = defaultArgs.textContent,
  logo = defaultArgs.logo,
}) => (
  <div className="utrecht-logo-button">
    {parse(`<utrecht-${logo}-logo class="utrecht-logo-button__logo"></utrecht-${logo}-logo>`)}
    <button
      className="utrecht-logo-button__button utrecht-button utrecht-button--primary-action"
      type="button"
      aria-label={label || null}
    >
      {textContent}
    </button>
  </div>
);

export default LogoButton;
