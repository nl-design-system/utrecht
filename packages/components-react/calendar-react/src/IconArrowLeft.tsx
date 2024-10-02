import { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}

export const IconArrowLeft = ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg" aria-labelledby={titleId} {...props}>
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M15.41 16.59 10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41Z" fill="currentColor" />
  </svg>
);
