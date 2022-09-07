/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Robbert Broersma
 */

import clsx from 'clsx';
import { ForwardedRef, forwardRef, ImgHTMLAttributes } from 'react';

export interface ImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  photo?: boolean;
}

export const Image = forwardRef(
  ({ className, photo, ...restProps }: ImageProps, ref: ForwardedRef<HTMLImageElement>) => (
    <img
      {...restProps}
      ref={ref}
      className={clsx(
        'utrecht-img',
        {
          'utrecht-img--photo': photo,
        },
        className,
      )}
    />
  ),
);

Image.displayName = 'Image';
