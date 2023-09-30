import { ButtonProps } from '@utrecht/component-library-react/src/Button';
import { Button } from '@utrecht/component-library-react/src/css-module';
import clsx from 'clsx';
import React, { createElement } from 'react';

interface ButtonTableBodyProps extends ButtonProps {
  variants: { appearance: string; enabled: boolean; title: string; hint?: string }[];
  textContent?: string;
  icon?: boolean;
}

const AppearanceGridBody = ({ variants, textContent, icon }: ButtonTableBodyProps) => (
  <tbody className="utrecht--table__body">
    <tr>
      <th className="utrecht-table__header-cell" scope="row">
        Default
      </th>
      {variants.map((variant) => (
        <td className="utrecht-table__cell">
          <Button {...variant}>{textContent}</Button>
        </td>
      ))}
    </tr>
    <tr>
      <th className="utrecht-table__header-cell" scope="row">
        Active
      </th>
      {variants.map((variant) => (
        <td className="utrecht-table__cell">
          <Button {...variant} className="utrecht-button--active">
            {textContent}
          </Button>
        </td>
      ))}
    </tr>
    <tr>
      <th className="utrecht-table__header-cell" scope="row">
        Pressed
      </th>
      {variants.map((variant) => (
        <td className="utrecht-table__cell">
          <Button {...variant} pressed>
            {textContent}
          </Button>
        </td>
      ))}
    </tr>
    <tr>
      <th className="utrecht-table__header-cell" scope="row">
        Hover
      </th>
      {variants.map((variant) => (
        <td className="utrecht-table__cell">
          <Button {...variant} className="utrecht-button--hover">
            {textContent}
          </Button>
        </td>
      ))}
    </tr>
    <tr>
      <th className="utrecht-table__header-cell" scope="row">
        Focus
      </th>
      {variants.map((variant) => (
        <td className="utrecht-table__cell">
          <Button {...variant} className="utrecht-button--focus">
            {textContent}
          </Button>
        </td>
      ))}
    </tr>
    <tr>
      <th className="utrecht-table__header-cell" scope="row">
        Focus visible
      </th>
      {variants.map((variant) => (
        <td className="utrecht-table__cell">
          <Button {...variant} className={clsx('utrecht-button--focus', 'utrecht-button--focus-visible')}>
            {textContent}
          </Button>
        </td>
      ))}
    </tr>
    <tr>
      <th className="utrecht-table__header-cell" scope="row">
        Hover + Focus visible
      </th>
      {variants.map((variant) => (
        <td className="utrecht-table__cell">
          <Button
            {...variant}
            className={clsx('utrecht-button--hover', 'utrecht-button--focus', 'utrecht-button--focus-visible')}
          >
            {textContent}
          </Button>
        </td>
      ))}
    </tr>
    <tr>
      <th className="utrecht-table__header-cell" scope="row">
        Disabled
      </th>
      {variants.map((variant) => (
        <td className="utrecht-table__cell">
          <Button {...variant} disabled>
            {textContent}
          </Button>
        </td>
      ))}
    </tr>
    <tr>
      <th className="utrecht-table__header-cell" scope="row">
        Disabled + Hover
      </th>
      {variants.map((variant) => (
        <td className="utrecht-table__cell">
          <Button {...variant} disabled className="utrecht-button--hover">
            {textContent}
          </Button>
        </td>
      ))}
    </tr>
    <tr>
      <th className="utrecht-table__header-cell" scope="row">
        Disabled + Focus
      </th>
      {variants.map((variant) => (
        <td className="utrecht-table__cell">
          <Button {...variant} disabled className="utrecht-button--focus">
            {textContent}
          </Button>
        </td>
      ))}
    </tr>
    <tr>
      <th className="utrecht-table__header-cell">Disabled + Focus visible</th>
      {variants.map((variant) => (
        <td className="utrecht-table__cell">
          <Button {...variant} disabled className={clsx('utrecht-button--focus', 'utrecht-button--focus-visible')}>
            {textContent}
          </Button>
        </td>
      ))}
    </tr>
    {icon && (
      <tr>
        <th className="utrecht-table__header-cell">Icon</th>
        {variants.map((variant) => (
          <td className="utrecht-table__cell">
            <Button {...variant}>
              {textContent}
              {createElement('utrecht-icon-arrow')}
            </Button>
          </td>
        ))}
      </tr>
    )}
  </tbody>
);

export const ButtonAppearanceGrid = ({
  textContent = '',
  defaultButton = true,
  primaryActionButton = false,
  secondaryActionButton = false,
  subtleButton = false,
  dangerHint = false,
  warningHint = false,
  readyHint = false,
  icon = false,
}) => {
  const variants = [
    {
      appearance: '',
      enabled: defaultButton,
      title: 'Default',
    },
    {
      appearance: 'primary-action-button',
      enabled: primaryActionButton,
      title: 'Primary action',
    },
    {
      appearance: 'primary-action-button',
      hint: 'danger',
      enabled: primaryActionButton && dangerHint,
      title: 'Primary action + danger',
    },
    {
      appearance: 'primary-action-button',
      hint: 'warning',
      enabled: primaryActionButton && warningHint,
      title: 'Primary action + warning',
    },
    {
      appearance: 'primary-action-button',
      hint: 'ready',
      enabled: primaryActionButton && readyHint,
      title: 'Primary action + ready',
    },
    {
      appearance: 'secondary-action-button',
      enabled: secondaryActionButton,
      title: 'Secondary action',
    },
    {
      appearance: 'secondary-action-button',
      hint: 'danger',
      enabled: secondaryActionButton && dangerHint,
      title: 'Secondary action + danger',
    },
    {
      appearance: 'secondary-action-button',
      hint: 'warning',
      enabled: secondaryActionButton && warningHint,
      title: 'Secondary action + warning',
    },
    {
      appearance: 'secondary-action-button',
      hint: 'ready',
      enabled: secondaryActionButton && readyHint,
      title: 'Secondary action + ready',
    },
    {
      appearance: 'subtle-button',
      enabled: subtleButton,
      title: 'Subtle',
    },
    {
      appearance: 'subtle-button',
      hint: 'danger',
      enabled: subtleButton && dangerHint,
      title: 'Subtle + danger',
    },
    {
      appearance: 'subtle-button',
      hint: 'warning',
      enabled: subtleButton && warningHint,
      title: 'Subtle + warning',
    },
    {
      appearance: 'subtle-button',
      hint: 'ready',
      enabled: subtleButton && readyHint,
      title: 'Subtle + ready',
    },
  ].filter(({ enabled }) => enabled);

  return (
    <table className="utrecht-table" style={{ inlineSize: 'auto' }}>
      <thead className="utrecht--table__header">
        <tr className="utrecht-table__row">
          <th></th>
          {variants.map(({ title }) => (
            <th className="utrecht-table__header-cell" scope="column">
              {title}
            </th>
          ))}
        </tr>
      </thead>
      <AppearanceGridBody variants={variants} textContent={textContent} icon={icon} />
    </table>
  );
};
