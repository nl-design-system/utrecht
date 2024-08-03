/**
 * @license EUPL-1.2
 * Copyright (c) 2020-2022 Gemeente Utrecht
 * Copyright (c) 2020-2022 Frameless B.V.
 */

import { clsx } from 'clsx';
import React, { PropsWithChildren, ReactNode } from 'react';

export const MapControlButtonIcon = ({ children }: PropsWithChildren<{}>) => (
  <span className="utrecht-mapcontrolbutton__icon">{children}</span>
);

export const MapControlButtonLabel = ({ children }: PropsWithChildren<{}>) => (
  <span className="utrecht-mapcontrolbutton__label">{children}</span>
);

export interface MapControlButtonProps extends PropsWithChildren<HTMLButtonElement> {
  label?: ReactNode;
  icon?: ReactNode;
}

export const MapControlButton = ({
  className,
  disabled,
  label,
  icon,
  ...restProps
}: PropsWithChildren<MapControlButtonProps>) => (
  <button
    type="button"
    className={clsx(
      'utrecht-mapcontrolbutton',
      {
        'utrecht-mapcontrolbutton--disabled': disabled,
      },
      className,
    )}
    aria-disabled={disabled || null}
    {...restProps}
  >
    {icon && <MapControlButtonIcon>{icon}</MapControlButtonIcon>}
    {label && <MapControlButtonLabel>{label}</MapControlButtonLabel>}
  </button>
);
