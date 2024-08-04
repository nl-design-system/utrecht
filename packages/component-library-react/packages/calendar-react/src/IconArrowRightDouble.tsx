import { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}

export const IconArrowRightDouble = ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg fill="none" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-labelledby={titleId} {...props}>
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M6.41 6 5 7.41 9.58 12 5 16.59 6.41 18l6-6-6-6Z" fill="currentColor" />
    <path d="m13 6-1.41 1.41L16.17 12l-4.58 4.59L13 18l6-6-6-6Z" fill="currentColor" />
  </svg>
);
