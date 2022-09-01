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
    type: 'text',
  },
  height: {
    description: 'Height (in pixels)',
    type: {
      name: 'number',
      required: true,
    },
  },
  width: {
    description: 'Width (in pixels)',
    type: {
      name: 'number',
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
    type: 'boolean',
  },
};

export const defaultArgs = {
  alt: undefined,
  height: undefined,
  lang: '',
  photo: false,
  src: '',
  width: undefined,
};

export const exampleArgs = {
  src: 'logo.svg',
  width: 188,
  height: 101,
  alt: 'Gemeente Utrecht',
};

export const Img = ({
  alt = defaultArgs.alt,
  height = defaultArgs.height,
  lang = defaultArgs.lang,
  photo = defaultArgs.photo,
  src = defaultArgs.src,
  width = defaultArgs.width,
}) => (
  <img
    className={clsx('utrecht-img', photo && 'utrecht-img--photo')}
    width={String(width)}
    height={String(height)}
    src={src}
    alt={alt}
    lang={lang || null}
  />
);

export default Img;
