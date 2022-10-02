/**
 * @license EUPL-1.2
 * Copyright (c) 2020-2022 Gemeente Utrecht
 * Copyright (c) 2020-2022 Frameless B.V.
 */

import React from 'react';
import { Img } from '../../img/css/story-template';

export const argTypes = {
  caption: {
    description: 'Caption',
    control: 'text',
  },
};

export const defaultArgs = {
  alt: '',
  caption: '',
  src: '',
};

export const Figure = ({ caption, children }) => (
  <figure class="utrecht-figure">
    {children}
    <figcaption class="utrecht-figure__caption">{caption}</figcaption>
  </figure>
);

export const FigureWithImage = ({ alt, src, width, height, photo, caption }) => (
  <Figure caption={caption}>
    <Img alt={alt} src={src} width={width} height={height} photo={photo} />
  </Figure>
);

export default Figure;
