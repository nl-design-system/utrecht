/**
 * @license EUPL-1.2
 * Copyright (c) 2020-2022 Gemeente Utrecht
 * Copyright (c) 2020-2022 Frameless B.V.
 */

import clsx from 'clsx';
import React from 'react';

export const argTypes = {
  alt: {
    description: 'Text alternative',
    type: {
      name: 'text',
      required: true,
    },
  },
  lang: {
    description: 'Language of text alternative',
    type: {
      name: 'text',
      required: false,
    },
  },
  height: {
    description: 'Height (in pixels)',
    type: {
      name: 'text',
      required: true,
    },
  },
  width: {
    description: 'Width (in pixels)',
    type: {
      name: 'text',
      required: true,
    },
  },
  src: {
    description: 'URL of image',
    type: {
      name: 'text',
      required: true,
    },
  },
  photo: {
    description: 'Image is a photo',
    type: {
      name: 'boolean',
      required: false,
    },
  },
};

export const defaultArgs = {
  photo: false,
  src: '',
};

export const Img = ({ alt, height, lang, photo, src, width }) => (
  <img
    className={clsx('utrecht-img', photo && 'utrecht-img--photo')}
    width={String(width)}
    height={String(height)}
    src={src}
    alt={alt}
    lang={lang}
  />
);

export default Img;
