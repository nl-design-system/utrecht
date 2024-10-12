/* global process */

import React from 'react';
import './PdfPreview.css';

export const PdfPreview = ({
  src,
  component,
  baseUrl = process.env.STORYBOOK_PDF_FILES_BASE_URL ?? '',
  download,
}: {
  src: string;
  component: string;
  baseUrl?: string;
  download?: string;
}) => {
  const img = (
    <img
      className="utrecht-pdf-preview__image"
      src={`${baseUrl}${src}`}
      alt={`${component} example, 1st page of the PDF is shown`}
    />
  );
  if (download) {
    return (
      <a className="utrecht-pdf-preview" href={`${baseUrl}${download}`} target="pdf" aria-label="Open PDF file">
        {img}
      </a>
    );
  }
  return img;
};
