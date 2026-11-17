/**
 * @license EUPL-1.2
 * Copyright (c) 2020-2024 Frameless B.V.
 * Copyright (c) 2021-2024 Gemeente Utrecht
 */

import type { IconData } from '@utrecht/icon/dist/icons.mjs';
import clsx from 'clsx';
import { ForwardedRef, forwardRef, HTMLAttributes, PropsWithChildren } from 'react';

export type { IconData };

export interface IconProps extends HTMLAttributes<HTMLElement> {
  /**
   * An icon from `@utrecht/icon/dist/icons.mjs`, for example `utrechtIconArrow`. It is shown as an inline `<svg>`
   * instead of the children, without web components.
   */
  icon?: IconData;
}

export const Icon = forwardRef(
  (
    { children, className, icon, role = 'presentation', ...restProps }: PropsWithChildren<IconProps>,
    ref: ForwardedRef<HTMLElement>,
  ) => (
    <span
      ref={ref}
      className={clsx('utrecht-icon', className)}
      role={role}
      aria-hidden={role === 'presentation' ? 'true' : undefined}
      {...restProps}
    >
      {icon ? (
        <svg
          viewBox={icon.viewBox}
          fill="currentColor"
          focusable="false"
          // The body is fixed data from the build of @utrecht/icon, not user input
          dangerouslySetInnerHTML={{ __html: icon.body }}
        />
      ) : (
        children
      )}
    </span>
  ),
);

Icon.displayName = 'Icon';
