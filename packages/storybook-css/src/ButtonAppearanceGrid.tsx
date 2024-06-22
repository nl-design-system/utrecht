import { Table, TableBody, TableCell, TableHeader, TableHeaderCell, TableRow } from '@utrecht/component-library-react';
import React from 'react';
import { ButtonStory as Button } from './Button';

interface ButtonVariant {
  appearance: string;
  hint?: string;
  enabled?: boolean;
  title: string;
}

const ButtonTableBody = ({
  variants,
  textContent,
  icon,
}: {
  variants: ButtonVariant[];
  textContent: string;
  icon?: any;
}) => (
  <TableBody>
    <TableRow>
      <TableHeaderCell scope="row">Default</TableHeaderCell>
      {variants.map(({ appearance, hint }) => (
        <TableCell>
          <Button appearance={appearance} hint={hint}>
            {textContent}
          </Button>
        </TableCell>
      ))}
    </TableRow>
    <TableRow>
      <TableHeaderCell scope="row">Active</TableHeaderCell>
      {variants.map(({ appearance, hint }) => (
        <TableCell>
          <Button appearance={appearance} hint={hint} active>
            {textContent}
          </Button>
        </TableCell>
      ))}
    </TableRow>
    <TableRow>
      <TableHeaderCell scope="row">Pressed</TableHeaderCell>
      {variants.map(({ appearance, hint }) => (
        <TableCell>
          <Button appearance={appearance} hint={hint} pressed>
            {textContent}
          </Button>
        </TableCell>
      ))}
    </TableRow>
    <TableRow>
      <TableHeaderCell scope="row">Hover</TableHeaderCell>
      {variants.map(({ appearance, hint }) => (
        <TableCell>
          <Button appearance={appearance} hint={hint} hover>
            {textContent}
          </Button>
        </TableCell>
      ))}
    </TableRow>
    <TableRow>
      <TableHeaderCell scope="row">Focus</TableHeaderCell>
      {variants.map(({ appearance, hint }) => (
        <TableCell>
          <Button appearance={appearance} hint={hint} focus>
            {textContent}
          </Button>
        </TableCell>
      ))}
    </TableRow>
    <TableRow>
      <TableHeaderCell scope="row">Focus visible</TableHeaderCell>
      {variants.map(({ appearance, hint }) => (
        <TableCell>
          <Button appearance={appearance} hint={hint} focus focusVisible>
            {textContent}
          </Button>
        </TableCell>
      ))}
    </TableRow>
    <TableRow>
      <TableHeaderCell scope="row">Hover + Focus visible</TableHeaderCell>
      {variants.map(({ appearance, hint }) => (
        <TableCell>
          <Button appearance={appearance} hint={hint} hover focus focusVisible>
            {textContent}
          </Button>
        </TableCell>
      ))}
    </TableRow>
    <TableRow>
      <TableHeaderCell scope="row">Disabled</TableHeaderCell>
      {variants.map(({ appearance, hint }) => (
        <TableCell>
          <Button appearance={appearance} hint={hint} disabled>
            {textContent}
          </Button>
        </TableCell>
      ))}
    </TableRow>
    <TableRow>
      <TableHeaderCell scope="row">Disabled + Hover</TableHeaderCell>
      {variants.map(({ appearance, hint }) => (
        <TableCell>
          <Button appearance={appearance} hint={hint} disabled hover>
            {textContent}
          </Button>
        </TableCell>
      ))}
    </TableRow>
    <TableRow>
      <TableHeaderCell scope="row">Disabled + Focus</TableHeaderCell>
      {variants.map(({ appearance, hint }) => (
        <TableCell>
          <Button appearance={appearance} hint={hint} disabled focus>
            {textContent}
          </Button>
        </TableCell>
      ))}
    </TableRow>
    <TableRow>
      <TableHeaderCell scope="row">Disabled + Focus visible</TableHeaderCell>
      {variants.map(({ appearance, hint }) => (
        <TableCell>
          <Button appearance={appearance} hint={hint} disabled focus focusVisible>
            {textContent}
          </Button>
        </TableCell>
      ))}
    </TableRow>
    {icon && (
      <TableRow>
        <TableHeaderCell scope="row">Icon</TableHeaderCell>
        {variants.map(({ appearance, hint }) => (
          <TableCell>
            <Button appearance={appearance} hint={hint}>
              {textContent}
              <utrecht-icon-arrow></utrecht-icon-arrow>
            </Button>
          </TableCell>
        ))}
      </TableRow>
    )}
  </TableBody>
);

interface ButtonAppearanceGridProps {
  textContent: string;
  defaultButton?: boolean;
  primaryActionButton?: boolean;
  secondaryActionButton?: boolean;
  subtleButton?: boolean;
  dangerHint?: boolean;
  warningHint?: boolean;
  readyHint?: boolean;
  icon?: boolean;
}

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
}: ButtonAppearanceGridProps) => {
  const variants: ButtonVariant[] = [
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
    <Table style={{ inlineSize: 'auto' }}>
      <TableHeader>
        <TableRow>
          <TableHeaderCell></TableHeaderCell>
          {variants.map(({ title }) => (
            <TableHeaderCell scope="col">{title}</TableHeaderCell>
          ))}
        </TableRow>
      </TableHeader>
      <ButtonTableBody variants={variants} textContent={textContent} icon={icon} />
    </Table>
  );
};
