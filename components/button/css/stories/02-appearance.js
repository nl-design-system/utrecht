/**
 * @license EUPL-1.2
 * Copyright (c) 2022 Robbert Broersma
 */

import { Button } from '../template';

export const defaultArgs = {
  textContent: '',
  defaultButton: true,
  primaryActionButton: false,
  secondaryActionButton: false,
  subtleButton: false,
};

export const ButtonTable = ({
  textContent = '',
  defaultButton = true,
  primaryActionButton = false,
  secondaryActionButton = false,
  subtleButton = false,
}) => {
  const appearances = [
    defaultButton && 'button',
    primaryActionButton && 'primary-action-button',
    secondaryActionButton && 'secondary-action-button',
    subtleButton && 'subtle-button',
  ].filter(Boolean);
  return `<table class="utrecht-table" style="inline-size: auto">
  <thead class="utrecht--table__header">
    <tr class="utrecht-table__row">
      <th class="utrecht-table__header-cell"></th>
      <th class="utrecht-table__header-cell">Default</th>
      <th class="utrecht-table__header-cell">Active</th>
      <th class="utrecht-table__header-cell">Hover</th>
      <th class="utrecht-table__header-cell">Focus</th>
      <th class="utrecht-table__header-cell">Focus visible</th>
      <th class="utrecht-table__header-cell">Disabled</th>
    </tr>
  </thead>
  <tbody class="utrecht--table__body">${appearances
    .map(
      (appearance) => `
    <tr class="utrecht-table__row">
      <th class="utrecht-table__header-cell">${appearance}</th>
      <td class="utrecht-table__cell">${Button({ appearance, textContent })}</td>
      <td class="utrecht-table__cell">${Button({ appearance, textContent, active: true })}</td>
      <td class="utrecht-table__cell">${Button({ appearance, textContent, hover: true })}</td>
      <td class="utrecht-table__cell">${Button({ appearance, textContent, focus: true })}</td>
      <td class="utrecht-table__cell">${Button({ appearance, textContent, focusVisible: true })}</td>
      <td class="utrecht-table__cell">${Button({ appearance, textContent, disabled: true })}</td>
    </tr>`,
    )
    .join('')}
  </tbody>
</table>`;
};
