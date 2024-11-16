/**
 * @license EUPL-1.2
 * Copyright (c) 2020-2024 Frameless B.V.
 * Copyright (c) 2021-2024 Gemeente Utrecht
 */

import clsx from 'clsx';
import React from 'react';
import { Paragraph } from '../../paragraph/src/story-template';

export const argTypes = {
  aside: {
    description: 'Aside',
    control: { type: 'boolean' },
  },
  textContent: {
    description: 'Content of the quote',
    control: 'text',
  },
  caption: {
    description: 'Caption of the quote',
    control: 'text',
  },
  figure: {
    description: 'Figure',
    control: { type: 'boolean' },
  },
  lang: {
    description: 'Language of the quoted text',
    control: 'text',
  },
};

export const defaultArgs = {
  aside: false,
  figure: false,
  textContent: '',
  caption: '',
  lang: '',
};
export const exampleArgs = {
  textContent: 'The Quick Brown Fox Jumps Over The Lazy Dog',
};

export const Blockquote = ({
  aside = defaultArgs.aside,
  children,
  figure = defaultArgs.figure,
  textContent = defaultArgs.textContent,
  caption = defaultArgs.caption,
  lang = defaultArgs.lang,
}) => {
  const quote = children || (textContent ? <Paragraph>{textContent}</Paragraph> : null);

  const captionElement = caption ? <figcaption className="utrecht-blockquote__caption">{caption}</figcaption> : null;

  const blockquoteAttrs = { lang };

  return aside && (figure || captionElement) ? (
    <aside className={clsx('utrecht-blockquote')}>
      <figure className={clsx('utrecht-blockquote__figure')}>
        <blockquote className="utrecht-blockquote__quote" {...blockquoteAttrs}>
          {quote}
        </blockquote>
        {captionElement}
      </figure>
    </aside>
  ) : aside ? (
    <aside className={clsx('utrecht-blockquote')}>
      <blockquote className="utrecht-blockquote__quote" {...blockquoteAttrs}>
        {quote}
      </blockquote>
    </aside>
  ) : figure || captionElement ? (
    <figure className={clsx('utrecht-blockquote')}>
      <blockquote className="utrecht-blockquote__quote" {...blockquoteAttrs}>
        {quote}
      </blockquote>
      {captionElement}
    </figure>
  ) : (
    <blockquote className={clsx('utrecht-blockquote', 'utrecht-blockquote--html-blockquote')} {...blockquoteAttrs}>
      {quote}
    </blockquote>
  );
};

export default Blockquote;
