import { clsx } from 'clsx';
import React from 'react';
import './CardList.css';

export const CardList = ({ children, className, ...props }) => {
  return (
    <div {...props} className={clsx('utrecht-card-list', className)}>
      {children}
    </div>
  );
};
