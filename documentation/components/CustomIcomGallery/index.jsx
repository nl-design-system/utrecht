import React from 'react';

import './index.scss';

export const CustomIconGallery = ({ children }) => <div className="utrecht-custom-icon-gallery">{children}</div>;

export const CustomIconGalleryItem = ({ icon, name }) => (
  <div className="utrecht-custom-icon-gallery-item">
    {icon && <div className="utrecht-custom-icon-gallery-item__icon">{icon}</div>}
    {name && <div className="utrecht-custom-icon-gallery-item__name">{name}</div>}
  </div>
);
