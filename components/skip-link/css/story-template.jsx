/**
 * @license EUPL-1.2
 * Copyright (c) 2022 Gemeente Utrecht
 * Copyright (c) 2022 Frameless B.V.
 */
import clsx from 'clsx';
import React from 'react';

export const argTypes = {
  href: {
    description: 'Target URL',
    type: {
      name: 'string',
      required: true,
    },
  },
  textContent: {
    description: 'Link text',
    type: {
      name: 'string',
      required: true,
    },
  },
  visibility: {
    description: 'Visibilty',
    type: 'select',
    options: ['', 'hidden', 'visible'],
  },
  visibleOnFocus: {
    description: 'Visible on focus',
    control: 'boolean',
  },
};

export const defaultArgs = {
  href: '',
  focus: false,
  visibility: '',
  visibleOnFocus: false,
  textContent: '',
};

export const exampleArgs = {
  ...defaultArgs,
  href: '#main',
  focus: true,
  textContent: 'Skip to main content',
};

export const SkipLink = ({
  focus = defaultArgs.focus,
  href = defaultArgs.href,
  textContent = defaultArgs.textContent,
  visibility = defaultArgs.visibility,
  visibleOnFocus = defaultArgs.visibleOnFocus,
}) => (
  <a
    href={href}
    class={clsx('utrecht-skip-link', {
      'utrecht-skip-link--focus': focus,
      'utrecht-skip-link--visible-on-focus': visibleOnFocus,
      'utrecht-skip-link--hidden': visibility === 'hidden',
      'utrecht-skip-link--visible': visibility === 'visible',
    })}
  >
    {textContent}
  </a>
);

export default SkipLink;

// `will-change: transform` will create a "containing block" that will contain `position: fixed` elements.
// https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block
export const ExampleViewport = (Story) => (
  <div
    style={{
      minHeight: '240px',
      minWidth: '320px',
      position: 'relative',
      willChange: 'transform',
    }}
  >
    {Story()}
  </div>
);

ExampleViewport.displayName = 'ExampleViewport';
