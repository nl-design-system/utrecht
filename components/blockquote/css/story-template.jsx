/**
 * @license EUPL-1.2
 * Copyright (c) 2020-2022 Gemeente Utrecht
 * Copyright (c) 2020-2022 Frameless B.V.
 */

import clsx from 'clsx';
import React from 'react';
import { Paragraph } from '../../paragraph/css/story-template';

export const argTypes = {
  textContent: {
    description: 'Content of the quote',
    control: 'text',
  },
  attribution: {
    description: 'Attribution of the quote',
    control: 'text',
  },
  distanced: {
    description: 'Distance the element from adjacent content',
    control: 'boolean',
  },
  lang: {
    description: 'Language of the quoted text',
    control: 'text',
  },
};

export const defaultArgs = {
  textContent: '',
  attribution: '',
  distanced: false,
  lang: '',
};
export const exampleArgs = {
  textContent: 'The Quick Brown Fox Jumps Over The Lazy Dog',
};

export const Blockquote = ({
  textContent = defaultArgs.textContent,
  attribution = defaultArgs.attribution,
  distanced = defaultArgs.distanced,
  lang = defaultArgs.lang,
}) => (
  <blockquote
    className={clsx('utrecht-blockquote', { 'utrecht-blockquote--distanced': distanced })}
    lang={lang || undefined}
  >
    <div className="utrecht-blockquote__content">
      <Paragraph>{textContent}</Paragraph>
      {attribution && <div className="utrecht-blockquote__attribution">{attribution}</div>}
    </div>
  </blockquote>
);

export default Blockquote;
