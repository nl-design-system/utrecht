import { SVGProps } from 'react';
import { SVGIconProps } from './SVGIcon';

export const IconArrowRight = ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGIconProps) => (
  <svg width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg" aria-labelledby={titleId} {...props}>
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M8.59 16.59 13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41Z" fill="currentColor" />
  </svg>
);
