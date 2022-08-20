/**
 * @license EUPL-1.2
 * Copyright (c) 2020-2022 Gemeente Utrecht
 * Copyright (c) 2020-2022 Frameless B.V.
 */

import clsx from 'clsx';
import React from 'react';

export const defaultArgs = {
  active: false,
  external: false,
  focus: false,
  focusVisible: false,
  hover: false,
  inline: false,
  href: '',
  textContent: '',
};

export const LinkButton = ({
  active = false,
  external = false,
  href = '',
  focus = false,
  focusVisible = false,
  hover = false,
  inline = false,
  textContent = '',
}) => {
  const stateClassNames = {
    'utrecht-link-button--active': active,
    'utrecht-link-button--focus': focus,
    'utrecht-link-button--focus-visible': focusVisible,
    'utrecht-link-button--hover': hover,
  };
  return href ? (
    <a
      href={href}
      className={clsx('utrecht-link-button', stateClassNames)}
      rel={external ? 'external noopener noreferrer' : ''}
    >
      {textContent}
    </a>
  ) : (
    <button
      className={clsx(
        'utrecht-link-button',
        'utrecht-link-button--html-button',
        inline && 'utrecht-link-button--inline',
        stateClassNames,
      )}
    >
      {textContent}
    </button>
  );
};
