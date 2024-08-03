/**
 * @license EUPL-1.2
 * Copyright (c) 2022 Gemeente Utrecht
 * Copyright (c) 2022 Frameless B.V.
 */
import { clsx } from 'clsx';
import parse from 'html-react-parser';
import React, { PropsWithChildren } from 'react';

export const Paragraph = ({
  children = null,
  distanced = false,
  innerHTML = '',
  lead = false,
  small = false,
  ...restProps
}: PropsWithChildren<{
  distanced?: boolean;
  lead?: boolean;
  small?: boolean;
  innerHTML?: string;
}>) => {
  const content = (
    <>
      {children}
      {parse(innerHTML)}
    </>
  );
  return (
    <p
      className={clsx('utrecht-paragraph', {
        'utrecht-paragraph--distanced': distanced,
        'utrecht-paragraph--lead': lead,
        'utrecht-paragraph--small': small,
      })}
      {...restProps}
    >
      {small ? <small className="utrecht-paragraph__small">{content}</small> : <>{content}</>}
    </p>
  );
};

export default Paragraph;
