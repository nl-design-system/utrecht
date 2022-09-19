import { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}

export const IconArrowLeftDouble = ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg" aria-labelledby={titleId} {...props}>
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M17.59 18 19 16.59 14.42 12 19 7.41 17.59 6l-6 6 6 6Z" fill="currentColor" />
    <path d="m11 18 1.41-1.41L7.83 12l4.58-4.59L11 6l-6 6 6 6Z" fill="currentColor" />
  </svg>
);
