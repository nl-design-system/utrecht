/**
 * @license EUPL-1.2
 * Copyright (c) 2020-2022 Gemeente Utrecht
 * Copyright (c) 2020-2022 Frameless B.V.
 */

import clsx from 'clsx';
import parse from 'html-react-parser';
import React from 'react';

export const argTypes = {
  external: {
    description: 'External',
    control: 'boolean',
  },
  active: {
    description: 'Active',
    control: 'boolean',
  },
  disabled: {
    description: 'Disabled',
    control: 'boolean',
  },
  focus: {
    description: 'Focus',
    control: 'boolean',
  },
  focusVisible: {
    description: 'Focus visible',
    control: 'boolean',
  },
  hover: {
    description: 'Hover',
    control: 'boolean',
  },
  href: {
    description: 'URL',
    control: 'text',
  },
  innerHTML: {
    description: 'Button content',
    control: 'text',
  },
  pressed: {
    description: 'Pressed',
    control: { type: 'select' },
    options: ['', false, true],
    type: {
      required: false,
    },
  },
};

export const decorators = [
  (story) => (
    <p className="utrecht-paragraph">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
      magna aliqua. {story()} Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
      pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
      laborum.
    </p>
  ),
];

export const defaultArgs = {
  active: false,
  disabled: false,
  external: false,
  focus: false,
  focusVisible: false,
  hover: false,
  inline: false,
  innerHTML: '',
  href: '',
  pressed: '',
};

export const exampleArgs = { innerHTML: 'Terug' };

export const LinkButton = ({
  active = defaultArgs.active,
  children,
  disabled = defaultArgs.disabled,
  external = defaultArgs.external,
  href = defaultArgs.href,
  focus = defaultArgs.focus,
  focusVisible = defaultArgs.focusVisible,
  hover = defaultArgs.hover,
  inline = defaultArgs.inline,
  innerHTML = defaultArgs.innerHTML,
  pressed = defaultArgs.pressed,
  ...restProps
}) => {
  const stateClassNames = {
    'utrecht-link-button--active': active,
    'utrecht-link-button--disabled': disabled,
    'utrecht-link-button--focus': focus,
    'utrecht-link-button--focus-visible': focusVisible,
    'utrecht-link-button--hover': hover,
    'utrecht-link-button--pressed': pressed,
  };
  const content = (
    <>
      {children}
      {parse(innerHTML)}
    </>
  );

  return href ? (
    <a
      href={href}
      className={clsx('utrecht-link-button', stateClassNames)}
      rel={external ? 'external noopener noreferrer' : ''}
      {...restProps}
    >
      {content}
    </a>
  ) : (
    <button
      className={clsx(
        'utrecht-link-button',
        'utrecht-link-button--html-button',
        inline && 'utrecht-link-button--inline',
        stateClassNames,
      )}
      aria-pressed={typeof pressed === 'boolean' ? pressed : undefined}
      {...restProps}
    >
      {content}
    </button>
  );
};

export default LinkButton;
